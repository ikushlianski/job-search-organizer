export interface Answer {
  id: number;
  answer_text: string;
  question_id: number;
  user_id: number;
}

export interface AnswersByQuestionId {
  [key: number]: Answer[];
}
