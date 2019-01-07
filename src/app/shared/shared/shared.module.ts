import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SeasonComponent } from 'src/app/season/season.component';
import { WinnerComponent } from 'src/app/winner/winner.component';

@NgModule({
  declarations: [
    SeasonComponent,
    WinnerComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [
    SeasonComponent,
    WinnerComponent
  ]
})
export class SharedModule { }
