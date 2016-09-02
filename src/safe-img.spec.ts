import { Component, Input } from '@angular/core';
import { async, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { SafeImgModule } from '../';

describe('safe-img', () => {
    @Component({
        selector: 'test-comp',
        template: '<img *safeSrc="image" class="img"/>',
    })
    class HostComponentWithoutImageSource {
        @Input() public image: string = null;
    }

    @Component({
        selector: 'test-comp',
        template: '<img *safeSrc="image" class="img"/>',
    })
    class HostComponentWithImageSource {
        @Input() public image: string = 'some-url.png';
    }

    @Component({
        selector: 'test-comp',
        template: `
            <img *safeSrc="image" class="img1"/>
            <img src="some-other-url.png" class="img2"/>
        `,
    })
    class WithRegularImg {
        @Input() public image: string = 'some-url.png';
    }

    let fixture;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [SafeImgModule],
            declarations: [
                HostComponentWithoutImageSource,
                HostComponentWithImageSource,
                WithRegularImg,
            ],
        });
    });

    it('should hide <img/> if src was not defined', async(() => {
        fixture = TestBed.createComponent(HostComponentWithoutImageSource);
        fixture.detectChanges();
        fixture.whenStable().then(() => {
            const img = fixture.debugElement.query(By.css('img'));
            expect(img).toBeNull();
        });
    }));

    it('should show <img/> if src was defined', async(() => {
        fixture = TestBed.createComponent(HostComponentWithImageSource);
        fixture.detectChanges();
        fixture.whenStable().then(() => {
            const img = fixture.debugElement.query(By.css('img'));
            expect(img).not.toBeNull();
        });
    }));

    it('should not collide with regular img src attribute', async(() => {
        TestBed.createComponent(WithRegularImg);
        // fixture.detectChanges();
        // fixture.whenStable().then(() => {
        //     const img = fixture.debugElement.query(By.css('img'));
        //     expect(img).not.toBeNull();
        // });
    }));
});
