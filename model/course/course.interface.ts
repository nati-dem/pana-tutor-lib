import {BaseCPTModel} from "../cpt-model.interface"
import {Complexity} from "../../enum/common.enum"

export interface Course extends BaseCPTModel {
    category: number;
    name: string;
    acf: CourseFields;
}

interface CourseFields {
  course_categories: Array<Number>;
  course_sections: Array<Number>;
  price: string;
  course_instructor: string;
  course_prerequisites: Array<Number>;
  course_complexity:Complexity;
  bonus_reward_point: number;
}
