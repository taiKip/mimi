import { IloginDetails, User } from "./../models/user";
import { userRepository } from "../config/datasource";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
interface JwtPayload{
    email:string
}
export const login = async ({ email, password }: IloginDetails) => {
  const foundUser = await userRepository.findOne({
    where: {
      email: email,
    },
  });
  if (!foundUser) {
    return {
      status: 401,
      message: "Unauthorized",
    };
  }
  const match = await bcrypt.compare(password, foundUser.password);
  if (!match) {
    return {
      status: 401,
      message: "unauthorized",
    };
  }

  const accessToken = jwt.sign(
    {
      UserInfo: {
        username: foundUser.email,
      },
    },
    process.env.ACCESS_TOKEN_SECRET!,
    { expiresIn: "10s" }
  );
  const refreshToken = jwt.sign(
    {
      email: foundUser.email,
    },
    process.env.REFRESH_TOKEN_SECRET!,
    { expiresIn: "1d" }
  );
    
    return ({accessToken,refreshToken})
};

export const refresh = async (refreshToken:string) => {
    jwt.verify(
        refreshToken,
        process.env.REFRESH_TOKEN_SECRET!,
        async (err, decoded) => {
            if (err) return ({ status: 403, message: "Forbidden" })
            const foundUser = await userRepository.findOne({
              where: {
            
              },
            });
        }
    )
}