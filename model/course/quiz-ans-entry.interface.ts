import { YesNoChoice } from "../../enum/common.enum";

export interface QuizAnsEntry {
  que_id: number;
  quiz_init_id: number;
  marked_for_review: YesNoChoice;
  answer: string;
  instructor_feedback?: string;
  is_correct?: YesNoChoice;
}
