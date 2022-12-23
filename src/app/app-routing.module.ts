import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddproductComponent } from './admin/addproduct/addproduct.component';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { OrderlistComponent } from './admin/orderlist/orderlist.component';
import { HomeComponent } from './home/home.component';
import { ProductEditComponent } from './admin/product-edit/product-edit.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './services/auth.guard';
import { SignupComponent } from './signup/signup.component';
import { ProductDetailComponent } from './home/product-detail/product-detail.component';
import { CartComponent } from './cart/cart.component';
import { UserOrderComponent } from './user-order/user-order.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/login',
    pathMatch: 'full'
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'home',
    component:HomeComponent,
    canActivate: [AuthGuard]
    
  },
  {path:'home/:id',component:ProductDetailComponent},
  {path:'signup',component:SignupComponent},
  {path:'cart',component:CartComponent,canActivate: [AuthGuard]},
  {path:'orders',component:UserOrderComponent,canActivate: [AuthGuard]},
  {path:'cart/delete',component:CartComponent},
  {path:'admin',component:AdminComponent,children:[
    {path:'',component:DashboardComponent},
    {path:'orders',component:OrderlistComponent},
    {path:'productEdit/:id',component:ProductEditComponent},
    {path:'delete/:id',component:DashboardComponent},
    {path:'addProduct',component:AddproductComponent}
  ],canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
