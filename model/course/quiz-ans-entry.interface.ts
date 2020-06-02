import { YesNoChoice } from "../../enum/common.enum";
export interface QuizAnsEntry {
  quiz_id: number;
  student_id: number;
  que_id: number;
  marked_for_review: YesNoChoice;
  answer: string;
  instructor_feedback: string;
  is_correct: YesNoChoice;
}
