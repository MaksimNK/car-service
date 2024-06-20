import { LightningElement, wire } from 'lwc';
import { NavigationMixin } from "lightning/navigation";
import WORK_TYPE from '@salesforce/schema/WorkType';
import NAME_FIELD from '@salesforce/schema/WorkType.Name';
import DESCRIPTION from '@salesforce/schema/WorkType.Description';
import DURATION from '@salesforce/schema/WorkType.EstimatedDuration';
import DURATION_TYPE from '@salesforce/schema/WorkType.DurationType';
import createSkillReq from 'c/createSkillReq';



export default class CreateWorkType extends NavigationMixin(LightningElement) {

    workTypeObject = WORK_TYPE;
    nameField = NAME_FIELD;
    description = DESCRIPTION;
    duration= DURATION;
    durationType = DURATION_TYPE;

    
    handleWorkTypeCreate(event) {
        
        console.log("DEBUG");
        console.log(event.detail.id);

        const workId = event.detail.id;

        const modal =  createSkillReq.open({
            size: 'Large',
            description: 'Modal',
            workId: workId
        });
 
    }



}