import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonbuttonComponent } from './commonbutton/commonbutton.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OperationComponent } from './operation/operation.component';
import { FormComponent } from './form/form.component';
import { ViewdataComponent } from './viewdata/viewdata.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UpdateDataComponent } from './update-data/update-data.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CommonbuttonComponent,
    NavbarComponent,
    OperationComponent,
    FormComponent,
    ViewdataComponent,
    UpdateDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
