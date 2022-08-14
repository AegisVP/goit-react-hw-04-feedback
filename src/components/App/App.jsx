import { Section } from 'components/Section/Section';
import { Notification } from 'components/Notification/Notification';
import { Controls } from 'components/Controlls/Feedback';
import { Stats } from 'components/Display/Display';
import React, { Component } from 'react';
import { lang } from 'components/Common/lang';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = ({ good, neutral, bad } = this.state) => Number(good) + Number(neutral) + Number(bad);

  countPositiveFeedbackPercentage = ({ good } = this.state) => Math.round((good / this.countTotalFeedback()) * 100);

  onFeedbackClick = (key = null) => {
    if (!key) return;

    this.setState(prevState => {
      return { [key]: prevState[key] + 1 };
    });
  };

  render() {
    const { good, neutral, bad } = this.state;
    const totalStats = good + neutral + bad;
    return (
      <>
        <Section title="How did we do?">
          <Controls
            options={[
              { key: lang.good.key, title: lang.good.uc, bgColor: '#ccffcc' },
              { key: lang.neutral.key, title: lang.neutral.uc, bgColor: '#ccffff' },
              { key: lang.bad.key, title: lang.bad.uc, bgColor: '#ffcccc' },
            ]}
            onFeedbackClick={this.onFeedbackClick}
          />
        </Section>
        {totalStats > 0 ? (
          <Section title="Statistics">
            <Stats
              title="Statistics"
              good={good}
              neutral={neutral}
              bad={bad}
              countTotalFeedback={this.countTotalFeedback()}
              countPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage()}
            />
          </Section>
        ) : (
          <Notification>No feedback yet</Notification>
        )}
      </>
    );
  }
}
