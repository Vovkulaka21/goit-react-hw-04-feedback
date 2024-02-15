import { Component } from 'react';

import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Notification from './Notification/Notification';
import Statistics from 'components/Statistics/Statistics';
import Section from './Section/Section';

import css from './App.module.css';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;

    const total = good + neutral + bad;

    return total;
  }

  countPositiveFeedbackPercentage(goodfeedback) {
    const total = this.countTotalFeedback();

    if (!total) {
      return 0;
    }

    const procent = (goodfeedback * 100) / total;

    return Math.round(Number(procent).toFixed(2));
  }

  yourFeedback = reaction => {
    this.setState(prevState => {
      return {
        [reaction]: prevState[reaction] + 1,
      };
    });
  };

  render() {
    const { good, neutral, bad } = this.state;

    const procent = this.countPositiveFeedbackPercentage(good);

    const total = this.countTotalFeedback();

    return (
      <div className={css.box}>
        <Section title={<h1>Please leave feedback</h1>}>
          {' '}
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.yourFeedback}
          />
        </Section>
        {total === 0 ? (
          <Notification message={'There is no feedback'} />
        ) : (
          <Section title={<h2>Statistic</h2>}>
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={procent}
            />
          </Section>
        )}
      </div>
    );
  }
}
