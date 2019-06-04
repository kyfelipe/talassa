import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {IntroductionComponent} from './introduction.component';
import {HomeComponent} from '../../pages/home/home.component';

const routes: Routes = [
    {
        path: '',
        component: IntroductionComponent,
        children: [
            {
                path: '',
                component: HomeComponent
            }
        ]
    }
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class IntroductionRoutingModule { }
