import { Component } from 'react';

import { Statistics } from './statistics/Statistics';
import { Notification } from './notification/Notification';
import { Section } from './section/Section';
import { FeedbackOptions } from './feedback/FeedbackOptions';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  clickOnGoodBtn = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };

  clickOnNeutralBtn = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };

  clickOnBadBtn = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    return this.countTotalFeedback()
      ? Math.round((this.state.good * 100) / this.countTotalFeedback())
      : 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback();
    return (
      <Section title="Please leave feedback">
        <FeedbackOptions
          goodBtn={this.clickOnGoodBtn}
          neutralBtn={this.clickOnNeutralBtn}
          badBtn={this.clickOnBadBtn}
        />
        {totalFeedback > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    );
  }
}
