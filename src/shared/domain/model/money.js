import {ValidationError} from "./errors";
import {Currency} from "./currency";

export class Money{
    #amount;
    #currency;

    constructor({ amount, currency }) {
        if(!Number.isFinite(amount) || amount < 0)
            throw new ValidationError("Amount must be a positive integer");
        if(!(currency instanceof Currency))
            throw new ValidationError("Currency must be a positive integer");
        this.#amount =Number(amount.toFixed(2));
        this.#currency = currency;
    }
    get amount(){
        return this.#amount;
    }
    get currency(){
        return this.#currency;
    }
    equals(other){
        return other instanceof Money
        && this.#amount ===other.amount
        && this.#currency.equals(other.currency);
    }

    /**
     * Add another Money instance to this....
     * @param other{Money}
     * @returns {Money}
     */
    add(other){
        if(!other instanceof Money)
            throw new ValidationError("Other must be an instance of Money");
        if(!this.currency.equals(other.currency))
            throw new ValidationError("Currency must match");
        return new Money({amount: this.amount + other.currency, currency: this.currency});
    }

}