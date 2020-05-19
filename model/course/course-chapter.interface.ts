import {BaseCPTModel} from "../cpt-model.interface"
import {AcfPostModel} from "../acf-post-model.interface"
import {YesNoChoice} from "../../enum/common.enum"

export interface CourseChapter extends BaseCPTModel {
    acf: ChapterFields;
}

interface ChapterFields {
  lessons: Array<AcfPostModel>;
  pass_quiz_to_complete_section: YesNoChoice;
  quiz_number_of_attempts_allowed: number;
  chapter_quiz: Array<number>;
}
