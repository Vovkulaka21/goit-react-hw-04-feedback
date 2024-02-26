import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Notification from './Notification/Notification';
import Statistics from 'components/Statistics/Statistics';
import Section from './Section/Section';

import css from './App.module.css';

import { useState, Component } from 'react';

const options = ['good', 'neutral', 'bad'];

const App = () => {

  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

  const { good, neutral, bad } = feedback;

  const countTotalFeedback = () => {
    
    const total = good + neutral + bad;

    return total;
  };

  const countPositiveFeedbackPercentage = () => {

    const total = countTotalFeedback();

    if (!total) {
      return 0;
    }

    const procent = (good * 100) / total;

    return Math.round(Number(procent).toFixed(2));
  };

  const yourFeedback = (keyName) => {
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [keyName]: prevFeedback[keyName] + 1,
    }));
  };

  return (

    <div className={css.box}>
      <Section title={<h1>Please leave feedback</h1>}>
        {' '}
        <FeedbackOptions options={options} onLeaveFeedback={yourFeedback} />
      </Section>
      {countTotalFeedback() === 0 ? (
        <Notification message={'There is no feedback'} />
      ) : (
        <Section title={<h2>Statistic</h2>}>
          <Statistics
            good={feedback.good}
            neutral={feedback.neutral}
            bad={feedback.bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        </Section>
      )}
    </div>
  );
};

export default App;
