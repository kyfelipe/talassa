import {NgModule} from '@angular/core';
import {IntroductionComponent} from './introduction.component';
import {CommonModule} from '@angular/common';
import {IntroductionRoutingModule} from './introduction-routing.module';
import {HomeModule} from '../../pages/home/home.module';

@NgModule({
    declarations: [ IntroductionComponent ],
    imports: [
        CommonModule,
        IntroductionRoutingModule,
        HomeModule
    ]
})
export class IntroductionModule { }
