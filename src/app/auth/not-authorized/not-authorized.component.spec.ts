import { TestBed, async } from '@angular/core/testing';
import { NotAuthorizedComponent } from './not-authorized.component';

describe('Auth - NotAuthorizedComponent', () => {

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                NotAuthorizedComponent
            ],
        }).compileComponents();
    }));

    it('should display the error image', async(() => {
        const fixture = TestBed.createComponent(NotAuthorizedComponent);
        const authorized = fixture.debugElement.nativeElement;
        expect(authorized.querySelector('img').getAttribute('src')).toContain('/assets/error.jpg')
    }));

    it('should have return link', async(() => {
        const fixture = TestBed.createComponent(NotAuthorizedComponent);
        const authorized = fixture.debugElement.nativeElement;
        expect(authorized.querySelector('a').textContent).toContain('Return')
    }))


});