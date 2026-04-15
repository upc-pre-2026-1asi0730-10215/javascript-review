import {generateUuid, validateUuid} from "./uuid";
import {ValidationError} from "./errors";

/**
 * Represents a product identifier value object.
 * @remarks
 * this class used to represent a product identifier. it is inmutable and
 */
export class ProductId{
    #value;
    constructor(value){
        if(!validateUuid(value))
            throw new ValidationError(`invalid product id: ${value}. product ids must be`);

        this.#value = value;
    }
    static generate(){
        return new ProductId(generateUuid());
    }
    get value(){
        return this.#value;
    }
    equals(other){
        return other instanceof ProductId;
    }
}