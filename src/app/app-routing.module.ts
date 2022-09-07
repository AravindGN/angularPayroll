import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { UpdateDataComponent } from './update-data/update-data.component';
import { ViewdataComponent } from './viewdata/viewdata.component';

const routes: Routes = [{path:"add",component:FormComponent},{path:"view",component:ViewdataComponent},
{path:"view/update",component:UpdateDataComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
