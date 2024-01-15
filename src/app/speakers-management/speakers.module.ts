import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SpeakersRoutingModule } from './speakers-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SpeakersRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SpeakersModule { }
