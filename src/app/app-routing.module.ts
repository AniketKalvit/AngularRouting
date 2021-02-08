import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentlistComponent } from './departmentlist/departmentlist.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DeptDetailsComponent } from './dept-details/dept-details.component';

const routes: Routes = [
  {path:'',redirectTo:'/departments', pathMatch:'full'}, // default routing 
  {path:'departments',component:DepartmentlistComponent},
  {path:'employees',component:EmployeelistComponent},
  {path:'department/:id',component:DeptDetailsComponent},
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents=[
                              DepartmentlistComponent,
                              EmployeelistComponent,
                              PageNotFoundComponent,
                              DeptDetailsComponent
                            ];
