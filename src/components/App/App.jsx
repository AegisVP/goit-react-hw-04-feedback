import React, { useReducer } from 'react';

import { Section } from 'components/Section/Section';
import { Notification } from 'components/Notification/Notification';
import { Controls } from 'components/Controlls/Feedback';
import { Stats } from 'components/Display/Display';
import { options } from 'components/Common/Options';

export function App() {
  const listOfKeys = {};
  for (const key of options) listOfKeys[key.key] = 0;

  const [feedback, feedbackDispatch] = useReducer((pS, action) => {
    return { ...pS, [action]: pS[action] + 1 };
  }, listOfKeys);

  const countTotalFeedback = Object.values(feedback).reduce((a, b) => a + b);
  const countPositiveFeedbackPercentage = Math.round((feedback.good / countTotalFeedback) * 100);

  return (
    <>
      <Section title="How did we do?">
        <Controls
          options={options}
          onFeedbackClick={feedbackDispatch}
        />
      </Section>
      {countTotalFeedback > 0 ? (
        <Section title="Statistics">
          <Stats
            title="Statistics"
            options={options}
            values={feedback}
            countTotalFeedback={countTotalFeedback}
            countPositiveFeedbackPercentage={countPositiveFeedbackPercentage}
          />
        </Section>
      ) : (
        <Notification>No feedback yet</Notification>
      )}
    </>
  );
}
