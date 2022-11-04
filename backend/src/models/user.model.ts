import { model, Schema } from "mongoose";

export interface User{
    id:string
    email:string;
    name:string;
    password:string;    
}

export const UserSchema = new Schema<User>(
    {
        id: {type: String, required:true},
        email: {type: String, required:true},
        name: {type: String, required:true},
        password: {type: String, required:true},
    },{
        toJSON:{
            virtuals:true
        },
        toObject:{
            virtuals:true
        },
        timestamps:true
    }
);

export const UserModel = model<User>('user', UserSchema)