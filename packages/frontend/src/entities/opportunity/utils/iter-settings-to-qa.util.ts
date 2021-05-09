import {
  IterationSetting,
  IterationSettingsWithAnswers,
} from '../../iteration/iteration.interface';
import { Question } from '../../question/question.interface';

export function iterationSettingsToQA(
  categoryName: string,
  { iterationSettings, answersByQuestion }: IterationSettingsWithAnswers,
): Question[] {
  return iterationSettings[categoryName].reduce(
    (acc: Question[], cur: IterationSetting) => {
      const existingQuestion = acc.find((q) => q.id === cur.question_id);

      const anyAnswer =
        cur.answer ||
        cur.string_answer ||
        cur.numeric_answer ||
        cur.boolean_answer;

      if (!existingQuestion) {
        const { question_id } = cur;
        const allPossibleAnswers = answersByQuestion[question_id];
        const myAnswers = cur.question.myAnswers;

        if (myAnswers) {
          myAnswers.push(anyAnswer);

          const [lastInserted] = [...myAnswers].reverse();

          if (lastInserted === null) myAnswers.pop();
        } else {
          cur.question.myAnswers = [anyAnswer];
        }

        cur.question.answers = allPossibleAnswers;
        acc.push(cur.question);

        return acc;
      }

      if (existingQuestion.myAnswers) {
        existingQuestion.myAnswers.push(anyAnswer);
      } else {
        existingQuestion.myAnswers = [anyAnswer];
      }

      return acc;
    },
    [],
  );
}
