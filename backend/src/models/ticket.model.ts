import { model, Schema } from "mongoose";

export interface Ticket{
        id:string;
        description:string;
        user:string;
    
}

export const TicketSchema = new Schema<Ticket>(
    {
        description: {type: String, required:true},
        user: {type: String, required:true},
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

export const TicketModel = model<Ticket>('ticket', TicketSchema)