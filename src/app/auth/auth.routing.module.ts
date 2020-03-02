import { NgModule } from '@angular/core';
import { Routes, RouterModule, } from '@angular/router';
import { AuthComponent } from './auth.component';
import { NotAuthorizedComponent } from './not-authorized/not-authorized.component';

const routes: Routes = [
    { path: '', component: AuthComponent },
    { path: 'notauthorized', component: NotAuthorizedComponent },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],

    exports: [RouterModule]
})

export class AuthRoutingModule { }