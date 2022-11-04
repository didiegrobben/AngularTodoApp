export class Ticket{
    constructor(){
        this.timeAdded = new Date('dd/MM/YYYY - hh:mm')
    };
    id!:string;
    description!:string;
    user!:string;
    timeAdded!:Date;
}