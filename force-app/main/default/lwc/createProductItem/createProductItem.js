import { LightningElement, api } from 'lwc';

import PRODUCT_ITEM from '@salesforce/schema/ProductItem'
import PRODUCT_ITEM_ID from '@salesforce/schema/ProductItem.Product2Id'
import LOCATION_ID from '@salesforce/schema/ProductItem.LocationId'
import QUANTITY_ON_HAND from '@salesforce/schema/ProductItem.QuantityOnHand'
import QUANTITY_UNIT_OF_MEASURE from '@salesforce/schema/ProductItem.QuantityUnitOfMeasure'
import SERIAL_NUMBER from '@salesforce/schema/ProductItem.SerialNumber'


//ProductItem
//Product2Id
//LocationId
//QuantityOnHand
//QuantityUnitOfMeasure
//SerialNumber

export default class CreateProductItem extends LightningModal {

    @api
    workId;

    productItem = PRODUCT_ITEM;
    productItemID = PRODUCT_ITEM_ID;
    locationId = LOCATION_ID;
    quantityOnHand = QUANTITY_ON_HAND;
    quantityUnitOfMeasure = QUANTITY_UNIT_OF_MEASURE;
    serialNumber = SERIAL_NUMBER;


    handleSkillCreate() {

        const modal =  createProductReq.open({
            size: 'Large',
            description: 'Modal',
            workId: workId
        });

    }


}