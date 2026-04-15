import {ValidationError} from "../../../shared/domain/model/errors";

export class PurchaseOrderState {
    /**
     * @private
     * @type {{DRAFT: string, SUBMITTED: string, APPROVED: string, SHIPPED: string, COMPLETED: string, CANCELLED: string}}
     */
    static #VALID_STATES = {
        DRAFT: 'Draft',
        SUBMITTED: 'Submitted',
        APPROVED: 'Approved',
        SHIPPED: 'Shipped',
        COMPLETED: 'Completed',
        CANCELLED: 'Cancelled'
    }
    #value;

    constructor(value =PurchaseOrderState.#VALID_STATES.DRAFT){
        this.#validateState(value);
        this.#value = value;
    }

    #validateState(state){
        if(!Object.values(PurchaseOrderState.#VALID_STATES).includes(state))
            throw new ValidationError(`Invalid order state: ${state}. Value state are: ${Object.value(PurchaseOrderState.#VALID_STATES).join(', ')}`);
    }

    toSubmittedFrom(currentState){
        if(currentState.value!== PurchaseOrderState.#VALID_STATES.DRAFT)
            throw new ValidationError(`Cannot submit an order in state ${currentState.value}`)
        return new PurchaseOrderState(PurchaseOrderState.#VALID_STATES.SUBMITTED);
    }
    toApprovedFrom(currentState){
        if(currentState.value !== PurchaseOrderState.#VALID_STATES.SUBMITTED)
            throw new ValidationError(`Cannot submit an order in state ${currentState.value}`)
        return new PurchaseOrderState(PurchaseOrderState.#VALID_STATES.APPROVED);
    }
    toShippedFrom(currentState){
        if(currentState.value !== PurchaseOrderState.#VALID_STATES.SHIPPED)
            throw new ValidationError(`Cannot submit an order in state ${currentState.value}`)
        return new PurchaseOrderState(PurchaseOrderState.#VALID_STATES.COMPLETED)
    }

    /**
     * gets the value of the
     * @returns {*}
     */

    get value(){
        return this.#value;
    }
    isDraft(){
        return this.#value === PurchaseOrderState.#VALID_STATES.DRAFT;
    }
    isSubmitted(){
        return this.#value === PurchaseOrderState.#VALID_STATES.SUBMITTED;
    }

    /**
     * /checks if the purchase order state is 'APPROVED'
     * @returns {boolean}
     */
    isApproved(){
        return this.#value === PurchaseOrderState.#VALID_STATES.APPROVED;
    }
    isShipped(){
        return this.#value === PurchaseOrderState.#VALID_STATES.SHIPPED;
    }
    isCompleted(){
        return this.#value === PurchaseOrderState.#VALID_STATES.COMPLETED;
    }
    isCancelled(){
        return this.#value === PurchaseOrderState.#VALID_STATES.CANCELLED;
    }

}