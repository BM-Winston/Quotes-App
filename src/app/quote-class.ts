export class QuoteClass {
    showInfo:boolean=false;
    constructor(public creator: string, public quote: string, public Author: string, public upvote:number, public downvote:number, public newDate:Date ){

    }
}

