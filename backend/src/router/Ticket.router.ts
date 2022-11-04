import { sample_tickets } from '../data';
import jwt from "jsonwebtoken";
import { Router } from 'express';
import { TicketModel } from '../models/ticket.model';
import asyncHandler from 'express-async-handler';

const router = Router();
router.get("/seed", asyncHandler(
    async (req, res) => {
       const ticketsCount = await TicketModel.countDocuments();
       if(ticketsCount> 0){
         res.send("Seed is already done!");
         return;
       }
   
       await TicketModel.create(sample_tickets);
       res.send("Seed Is Done!");
   }
   ))
router.get("/", asyncHandler( async (req, res) => {
    const tickets = await TicketModel.find();
    res.send(tickets);
}))


export default router;

