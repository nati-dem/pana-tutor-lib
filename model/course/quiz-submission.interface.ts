export interface QuizSubmission {
  quiz_id: number;
  student_id: number;
  total_score: number;
  instructor_feedback: string;
  instructor_id: number;
}
