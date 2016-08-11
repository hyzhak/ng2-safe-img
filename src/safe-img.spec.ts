import { Component, Input } from '@angular/core';
import { async, TestBed } from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import { SafeImg } from '../';

describe('safe-img', () => {
    @Component({
        selector: 'test-comp',
        directives: [SafeImg],
        template: '<img *src="image" class="img"/>',
    })
    class HostComponentWithoutImageSource {
        @Input() public image: string = null;
    }

    @Component({
        selector: 'test-comp',
        directives: [SafeImg],
        template: '<img *src="image" class="img"/>',
    })
    class HostComponentWithImageSource {
        @Input() public image: string = 'some-url.png';
    }

    let fixture;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                HostComponentWithoutImageSource,
                HostComponentWithImageSource,
                SafeImg,
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
});
