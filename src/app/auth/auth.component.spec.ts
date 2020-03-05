import { TestBed, async } from '@angular/core/testing';
import { AuthComponent } from './auth.component';

describe('AuthComponent', () => {

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                AuthComponent
            ],
        }).compileComponents();
    }));

    it('should have the auth component', async(() => {
        const fixture = TestBed.createComponent(AuthComponent);
        const auth = fixture.debugElement.componentInstance;
        expect(auth).toBeTruthy();
    }));
});