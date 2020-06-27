import { QuizAnsEntry } from "./quiz-ans-entry.interface";

export interface QuizSubmission extends QuizAnsEntry {
  // quiz_init_id: number;

  total_score?: number;
  instructor_feedback: string;
  instructor_id: number;
}
