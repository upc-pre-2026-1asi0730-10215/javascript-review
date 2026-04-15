import {validateUuid} from "./uuid";
import {ValidationError} from "./errors";

export class Supplierid{
    #value

    constructor(value){
        if(!validateUuid(value))
            throw new ValidationError("Value must be an instance of Supplierid");
        this.#value = value;
    }

    get value() {
        return this.#value;
    }
    equals(other) {
        if (!(other instanceof Supplierid)) return false;
        return this.#value === other.#value;
    }
    toString() {
        return this.#value;
    }



}