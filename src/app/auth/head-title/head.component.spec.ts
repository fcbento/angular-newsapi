import { TestBed, async } from '@angular/core/testing';
import { HeadTitleComponent } from './head-title.component';

describe('Auth - HeadTitleComponent', () => {

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                HeadTitleComponent
            ],
        }).compileComponents();
    }));

    it('should have the welcoming message', async(() => {
        const fixture = TestBed.createComponent(HeadTitleComponent);
        const head = fixture.debugElement.nativeElement;
        expect(head.querySelector('h1').textContent).toContain('Welcome to')
    }));

    it('should display logo image', async(() => {
        const fixture = TestBed.createComponent(HeadTitleComponent);
        const head = fixture.debugElement.nativeElement;
        expect(head.querySelector('img').getAttribute('src')).toContain('/assets/logo.png');
    }));

    it('should display text after img', async(() => {
        const fixture = TestBed.createComponent(HeadTitleComponent);
        const head = fixture.debugElement.nativeElement;
        expect(head.querySelector('img').getAttribute('src')).toContain('/assets/logo.png');
        expect(head.querySelector('h3').textContent).toContain('Log in to get in the moment updates on the things that interest you')
    }))

});