import { LightningElement,api, wire} from 'lwc';
import { NavigationMixin } from "lightning/navigation";

import LightningModal from 'lightning/modal';


import { getRecord } from "lightning/uiRecordApi";

import PRODUCT_REQ from '@salesforce/schema/ProductRequired'
import PRODUCT_REQ_ID from '@salesforce/schema/ProductRequired.Product2Id'
import PRODUCT_REQ_QUANTITY from '@salesforce/schema/ProductRequired.QuantityRequired'
import PRODUCT_REQ_QUANTITY_UNIT from '@salesforce/schema/ProductRequired.QuantityUnitOfMeasure'
import PARENT_RECORD from '@salesforce/schema/ProductRequired.ParentRecordId'

import createProductItem from 'c/createProductItem';

//ProductRequired
//ParentRecordId
//QuantityRequired
//QuantityUnitOfMeasure

export default class CreateProductReq extends LightningModal {


    @api
    workId;

    productReq = PRODUCT_REQ;
    parentRecord = PARENT_RECORD;
    productReqId = PRODUCT_REQ_ID;
    productReqQuantity = PRODUCT_REQ_QUANTITY;
    productReqQuantityUnit = PRODUCT_REQ_QUANTITY_UNIT;

    

    handleProductCreate(event) {

        const { target } = event;
        const { id } = target.dataset;
        this.close(id);



        console.log(this.workType);
        const modal =  createProductItem.open({
            size: 'Large',
            description: 'Modal',
            workId: this.workId,
        });

       
    }

    

}