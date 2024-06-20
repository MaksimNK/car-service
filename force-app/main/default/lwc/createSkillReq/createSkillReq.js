import { LightningElement, api, wire } from 'lwc';
import { NavigationMixin } from "lightning/navigation";

import LightningModal from 'lightning/modal';

import { getRecord } from "lightning/uiRecordApi";


import SKILL_REQ from '@salesforce/schema/SkillRequirement'
import SKILLID from '@salesforce/schema/SkillRequirement.SkillId'
import RECORD_REQ from '@salesforce/schema/SkillRequirement.RelatedRecordId'
import SKILL_LEVEL from '@salesforce/schema/SkillRequirement.SkillLevel'

import {CurrentPageReference} from 'lightning/navigation';

import createProductReq from 'c/createProductReq';




//SkillLevel
//SkillId
//CreatedById

export default class CreateSkillReq extends LightningModal{
    
    workTypeId;
    @api workId;

    skillReqObject = SKILL_REQ;
    skillId = SKILLID;
    recordReq = RECORD_REQ;
    skillLevel = SKILL_LEVEL;

    handleSkillCreate() {

        const modal =  createProductReq.open({
            size: 'Large',
            description: 'Modal',
            workId: this.workId
        });

    }

}