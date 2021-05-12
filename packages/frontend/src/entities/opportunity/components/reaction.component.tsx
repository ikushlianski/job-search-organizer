import React from 'react';
import { sample } from 'lodash';
import { OpportunityAnswer } from '../current-opps.interface';
import { IterationSetting } from '../../iteration/iteration.interface';
import { Pane, Text } from 'evergreen-ui';

import './reaction.scss';

interface Props {
  answers: OpportunityAnswer[]; // answers just given
  iterationSettingsForQ?: IterationSetting[];
}

export const Reaction: React.FC<Props> = ({
  answers,
  iterationSettingsForQ,
}) => {
  let score = 0;

  if (iterationSettingsForQ) {
    score = answers.reduce((acc, cur): number => {
      const answerScore = iterationSettingsForQ.find(
        (setting) => setting.answer_id === cur.answer_id,
      )?.weight;

      if (answerScore) acc += answerScore;

      return acc;
    }, 0);
  }

  const memoizedGetColor = React.useMemo(() => getColor(score), [score]);

  const memoizedReaction = React.useMemo(
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    () => sample(phrases[scoreReactions[score]]),
    [score],
  );

  return score === 0 ? null : (
    <div className="Reaction">
      <small className="Reaction__Title">Ilya's reaction:</small>
      <Pane
        color={'grey'}
        fontSize={14}
        background={memoizedGetColor}
        padding={'0.5rem'}
        marginBottom={16}
      >
        <Text color={'grey'}>
          <i>{memoizedReaction}</i>
        </Text>
      </Pane>
    </div>
  );
};

enum Reactions {
  Excellent = 'Excellent',
  Good = 'Good',
  NothingSpecial = 'NothingSpecial',
  NotGood = 'NotGood',
  Bad = 'Bad',
  Terrible = 'Terrible',
}

// todo refactor this crap :)
const scoreReactions = {
  10: [Reactions.Excellent],
  9: [Reactions.Excellent],
  8: [Reactions.Excellent],
  7: [Reactions.Excellent],
  6: [Reactions.Excellent],
  5: [Reactions.Excellent],
  4: [Reactions.Good],
  3: [Reactions.Good],
  2: [Reactions.Good],
  1: [Reactions.NothingSpecial],
  0: [Reactions.NothingSpecial],
  '-1': [Reactions.NotGood],
  '-2': [Reactions.NotGood],
  '-3': [Reactions.Bad],
  '-4': [Reactions.Bad],
  '-5': [Reactions.Terrible],
  '-6': [Reactions.Terrible],
  '-7': [Reactions.Terrible],
  '-8': [Reactions.Terrible],
  '-9': [Reactions.Terrible],
  '-10': [Reactions.Terrible],
};

const phrases = {
  [Reactions.Excellent]: [
    'Terrific!',
    'Great!',
    'Excellent!',
    "That's what I am after!",
    'I love it!',
  ],
  [Reactions.Good]: [
    'Like it',
    'Nice!',
    'Good!',
    'Glad to hear that',
    'I am looking exactly for this option',
  ],
  [Reactions.NothingSpecial]: [
    'Ok',
    'Understood, not bad',
    'Got it, sounds ok',
    'Not bad',
    'We will see...',
    "That's fine",
  ],
  [Reactions.NotGood]: [
    'Hmm, not exactly what I am after',
    'Ok, but could be better',
    'Hmm, I need to think about this. Not a good match for my expectations',
    'Not what I am looking for',
    "That didn't exactly match my vision",
  ],
  [Reactions.Bad]: [
    'No, that is definitely not something I want',
    'I was looking for something different',
    'That does not match my expectations',
    'Definitely not what I was looking for',
    'This does not fit into my plans',
  ],
  [Reactions.Terrible]: [
    'This goes against my plans and I doubt whether it is reasonable to continue with this project',
    'No-no-no.. That is not something I am looking for. I think we should consider a different project',
    "This is never going to suit me, I'm sorry. I don't think we should contiue with this form...",
    'This is a no-no. Maybe you have some other project for me?',
    'There are some things that are stoppers for me. This is one of them',
  ],
};

function getColor(score: number) {
  if (score > 2) {
    return '#b9e4a9';
  }

  if (score === 2) {
    return '#e1f7d9';
  }

  if (score < 2 && score > -1) {
    return '#fffae1';
  }

  if (score <= 0 && score > -2) {
    return '#fbecc9';
  }

  if (score <= -2) {
    return '#fbd2c9a6';
  }
}
