import {ValidationError} from "./errors";

export class DateTime{
    #date;
    constructor(date =new Date()){
        const parsedDate= date instanceof Date ? date : new Date(date);
        if(isNaN(parsedDate.getTime())){
            throw new ValidationError(`Invalid date: ${date}`);
        }
        this.#date = date;
    }
    get date(){
        return this.#date;
    }
    toISOString(){
        return this.#date.toISOString();
    }
    toString(){
        let options = {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        }
        return this.#date.toLocaleDateString('en-US', options);
    }
    equals(other){
        return other instanceof DateTime
            && this.#date.equals(other);

    }
}