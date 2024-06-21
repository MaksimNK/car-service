import { LightningElement } from 'lwc';

import WORK_ORDER from '@salesforce/schema/WorkOrder'
import STATUS from  '@salesforce/schema/WorkOrder.Status'
import WORK_TYPE_ID from '@salesforce/schema/WorkOrder.WorkTypeId'
import PRIORITY from '@salesforce/schema/WorkOrder.Priority'
import DESCRIPTIOM from '@salesforce/schema/WorkOrder.Description'

//Status
//WorkTypeId
//Priority
//Subject
//Description

export default class WorkOrder extends LightningElement {

    workOrder = WORK_ORDER;
    status = STATUS;
    workTypeID = WORK_TYPE_ID;
    priotyty = PRIORITY;
    subject = DESCRIPTIOM;
    description = DESCRIPTIOM;


    handleWorkOrderCreate() {
        
    }

}