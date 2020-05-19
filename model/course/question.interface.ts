import {BaseCPTModel} from "../cpt-model.interface"
import {Complexity} from "../../enum/common.enum"

export interface Question extends BaseCPTModel {
    acf:QuestionFields;
}

interface QuestionFields {
    choice_1: any;
    choice_2:any;
    choice_3?:any;
    choice_4?:any;
    correct_answer:string[];
    que_complexity:Complexity;
    que_point:number;
}
