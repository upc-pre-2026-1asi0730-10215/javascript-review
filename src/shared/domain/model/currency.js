import {ValidationError} from "./errors";

/**
 * Represents a currency value object.
 * @remarks
 * this class is used to represent a currency value with a specific code.
 */

export class Currency {
    static #VALID_CODE =['USD', 'EUR', 'GBP', 'JPY'];
    #code

    /**
     * creates a new currency instance.
     * @throws{ValidationError} if the provided code is a valid currency code.
     * @param code {string}
     */
    constructor(code) {
        if (!Currency.#VALID_CODE.includes(code)) {
                throw new ValidationError(`Invalid Currency code: ${code}. Valid codes are ${Currency.#VALID_CODE.join(', ')}.`);
            this.#code = code;
        }

        get code() {
            return this.#code;
        }
        equals(other){
            return other instanceof Currency
                && this.#code === other.code;
        }
    }
}