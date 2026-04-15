/**
 * Represent an error related to validation.
 */
export class ValidationError extends Error {
    /**
     * Creates a new validationError instance.
     * @remarks
     * This constructor is used to create an instance of the validationError class.
     *It sets the name of the error to validationError and initializes the base
     * @param message the error message describing the validation error.
     */
    constructor(message){
        super(message);
        this.name = 'ValidationError'
    }
}