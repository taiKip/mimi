import { User } from "src/models";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import {

    login,
   refresh
 
} from "../repositories/auth.repository";
import { IloginDetails } from "src/models/user";

export default class UserController {
    public async login({ email, password }: IloginDetails) {
      
    return login({email,password})
  }
    public async refresh(refreshToken:string) {
     return refresh(refreshToken)
 }
}