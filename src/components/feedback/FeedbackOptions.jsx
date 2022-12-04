import styles from '../feedback/Feedback.module.css';

export const FeedbackOptions = ({ goodBtn, neutralBtn, badBtn }) => {
  return (
    <div>
      <button type="button" onClick={goodBtn} className={styles.good_btn}>
        Good{' '}
      </button>
      <button type="button" onClick={neutralBtn} className={styles.neutral_btn}>
        Neutral
      </button>
      <button type="button" onClick={badBtn} className={styles.bad_btn}>
        Bad
      </button>
    </div>
  );
};
