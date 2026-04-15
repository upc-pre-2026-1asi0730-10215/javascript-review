import {ValidationError} from "../../../shared/domain/model/errors";
import {ProductId} from "../../../shared/domain/model/product-id";
import {Money} from "../../../shared/domain/model/money";

export class PurchaseOrderItem{
    #orderId;
    #productId;
    #quantity;
    #unitPrice;

    constructor({orderId, productId, quantity, unitPrice}) {
        if(!orderId ||typeof orderId !=='string')
            throw new ValidationError('Order ID is required and must be a non-empty string');
        if(!productId instanceof ProductId)
            throw new ValidationError('Product Id must be a non-empty string');
        if(!(Number.isInteger(quantity)&&quantity>0 && quantity<= 1000))
            throw new ValidationError('Quantity must be a positive integer between 0 and 9999');
      if(!(unitPrice instanceof Money))
          throw new ValidationError('Unit Price must be a valid money object');
        this.#orderId = orderId;
        this.#productId = productId;
        this.#quantity = quantity;
        this.#unitPrice = unitPrice;
    }
    get orderID(){
        return this.#orderId;
    }
    calculateItemTotal(){
        return this.#unitPrice.multiply(this.#quantity);
    }
}