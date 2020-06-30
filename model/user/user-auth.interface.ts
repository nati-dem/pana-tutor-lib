import {UserRole} from "../../enum/user.enum";

export interface UserLoginRequest {
    username: string;
    password: string;
}

export interface UserSignupRequest {
    id?:number;
    username?: string;
    name: string; // Display name for the user.
    first_name?: string;
    last_name?: string;
    email: string;
    url?: string;
    description?: string;
    locale?: string;
    nickname?: string;
    // slug: string;
    password: string;
    roles: UserRole[];
    meta?: UserMeta;
    phone?:string;
    address?:string;
    country?:string;
    bio?:string;
    time_zone?:string;
}

export interface UserMeta {
    phone_number: string;
}

export interface ChangePasswordRequest {
    email: string;
    password: string;
    new_password: string;
}

  /*
  {
	"first_name": "student2",
	"password": "student2",
	"roles": ["subscriber"],
	"meta": {
        "phone_number": "11223344"
    }
  }
  */
