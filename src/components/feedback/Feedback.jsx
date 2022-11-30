import styles from '../feedback/Feedback.module.css';
import { Component } from 'react';

export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    return (
      <div className={styles.class_div}>
        <h1 className={styles.title}> Please leave feedback </h1>
        <button className={styles.good_btn}>Good</button>
        <button className={styles.neutral_btn}>Neutral</button>
        <button className={styles.bad_btn}>Bad</button>
        <h2 className={styles.statistics}>Statistics</h2>
        <ul className={styles.statistics_list}>
          <li className={styles.good}>Good:</li>
          <li className={styles.neutral}>Neutral:</li>
          <li className={styles.bad}>Bad:</li>
          <li className={styles.total}>Total:</li>
          <li className={styles.positive_feedback}>Positive feedback:</li>
        </ul>
      </div>
    );
  }
}
