import {BaseCPTModel} from "../cpt-model.interface"

export interface CourseLesson extends BaseCPTModel {
    acf: LessonFields;
}

interface LessonFields {
  lesson_video_embed: any;
  lesson_complexity: string;
  lesson_reward_point: string;
}
