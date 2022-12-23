import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let router:any;
  let loginService:any;

  beforeEach(() => {
    component = new LoginComponent(router,loginService);
  });
  
  it('test_case3', () => {
    expect(component).toBeTruthy();
  });
});
