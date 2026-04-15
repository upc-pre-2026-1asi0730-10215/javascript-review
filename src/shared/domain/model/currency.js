import { ValidationError } from "./errors";

export class Currency {
    static #VALID_CODE = ['USD', 'EUR', 'GBP', 'JPY'];
    #code;

    constructor(code) {
        if (!Currency.#VALID_CODE.includes(code)) {
            throw new ValidationError(
                `Invalid Currency code: ${code}. Valid codes are ${Currency.#VALID_CODE.join(', ')}.`
            );
        }

        this.#code = code;
    }

    // Getter
    get code() {
        return this.#code;
    }


    equals(other) {
        return other instanceof Currency &&
            this.#code === other.code;
    }
}