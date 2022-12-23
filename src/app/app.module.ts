import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { OrderlistComponent } from './admin/orderlist/orderlist.component';
import { AdminNavComponent } from './admin/admin-nav/admin-nav.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './services/auth.guard';
import { ProductEditComponent } from './admin/product-edit/product-edit.component';
import { ClientNavComponent } from './home/client-nav/client-nav.component';
import { ProductListComponent } from './home/product-list/product-list.component';
import { AddproductComponent } from './admin/addproduct/addproduct.component';
import { ProductListItemComponent } from './home/product-list/product-list-item/product-list-item.component';
import { ProductDetailComponent } from './home/product-detail/product-detail.component';
import { CartComponent } from './cart/cart.component';
import { UserOrderComponent } from './user-order/user-order.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    AdminComponent,
    DashboardComponent,
    OrderlistComponent,
    AdminNavComponent,
    HomeComponent,
    ProductEditComponent,
    ClientNavComponent,
    ProductListComponent,
    AddproductComponent,
    ProductListItemComponent,
    ProductDetailComponent,
    CartComponent,
    UserOrderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
