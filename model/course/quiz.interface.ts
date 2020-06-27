import { BaseCPTModel } from "../cpt-model.interface";
import { AcfPostModel } from "../acf-post-model.interface";

export interface Quiz extends BaseCPTModel {
  acf: QuizFields;
}

interface QuizFields {
  quiz_questions: AcfPostModel[];
  time_limit: number;
  quiz_num_attempts: number;
  quiz_reward_point: number;
}
