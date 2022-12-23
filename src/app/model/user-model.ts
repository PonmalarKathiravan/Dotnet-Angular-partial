export class UserModel {
    email:String | undefined;
    username:String | undefined;
    mobileNumber:String | undefined;
    password:String | undefined;
    active:boolean = true;
    role:String = "ROLE_USER";
}
