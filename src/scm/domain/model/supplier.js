import {ValidationError} from "../../../shared/domain/model/errors";
import {Supplierid} from "../../../shared/domain/model/supplierid";
import {Money} from "../../../shared/domain/model/money";

/**
 * Represent a supplier entity aggregate root.
 * @remarks
 * this class is used to represent a supplier entity in the domain model.
 * it includes validation logic to ensure that the supplier's properties are valid,according tothe business rules
 * the supplier
 */
export class Supplier{
    #id;
    #name;
    #contactEmail;
    #lastOrderTotalPrice;

    /**
     *
     * @param {Object} options - the option for t=creating the supplier instance.
     * @param {Supplierid} options.id -the unique identifier of the supplier
     * @param param0.name
     * @param param0.contactEmail
     * @param param0.lastOrderTotalPrice
     */

    constructor({id,name,contactEmail = null,lastOrderTotalPrice=null}){
        if(!(id instanceof Supplierid))
            throw new ValidationError('Supplier ID must be a valid Supplierid object');
        if(typeof name!=='string' || name.length<2 || name.length>100)
            throw new ValidationError('Supplier Name must be a valid Supplierid object');
        if(contactEmail!==null && !this.isValidEmail(contactEmail))
            throw new ValidationError('Contact Email must be a valid Supplierid object');
        if(lastOrderTotalPrice!==null&&!(lastOrderTotalPrice instanceof Money))
            throw new ValidationError('Last Order TotalPrice price must be a Money object or null');
        this.#id = id;
        this.#name = name;
        this.#contactEmail = contactEmail;
        this.#lastOrderTotalPrice = lastOrderTotalPrice;
    }

    /**
     * @private
     * validation if the given email iis in a valid format.
     * @param {string} email - the email address to validate.
     * @returns {boolean} true if the email is valid false otherwise.
     */
    isValidEmail(email){
        const emailRegex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    /**
     *
     * @returns {*}
     */
    get id(){
        return this.#id;
    }
    get name(){
        return this.#name;
    }
    get contactEmail(){
        return this.#contactEmail;
    }
    get lastOrderTotalPrice(){
        return this.#lastOrderTotalPrice;
    }

}