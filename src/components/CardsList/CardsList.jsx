import React from 'react';

import styles from './cardsList.module.scss';
import { SvgSelector } from '../../utils/SvgSelector';

const CardsList = ({ addTweets, deleteTweets, items }) => {
  const elements = items.map(
    ({ id, subscription, tweets, followers, avatar }) => (
      <div className={styles.card} key={id}>
        <div className={styles.logo}>
          <SvgSelector id="logoGoIt" />
        </div>
        <div className={styles.whiteLine}></div>
        <div className={styles.circlBorder}>
          <img alt="avatar" className={styles.avatar} src={avatar} />
        </div>
        <div className={styles.underContainer}>
          <span className={styles.spanTweets}> {tweets} tweets</span>
          {followers && (
            <span className={styles.spanFollowers}>
              {followers.toLocaleString('en-US', { useGrouping: true })}{' '}
              Followers
            </span>
          )}
          {!subscription.includes('I am') && (
            <button
              type="button"
              className={styles.btnAdd}
              onClick={() => {
                addTweets(followers, id, subscription);
              }}
            >
              follow
            </button>
          )}
          {subscription.includes('I am') && (
            <button
              type="button"
              className={styles.btnDel}
              onClick={() => {
                deleteTweets(followers, id, subscription);
              }}
            >
              following
            </button>
          )}
        </div>
      </div>
    )
  );
  return <div className={styles.cardsCotainer}>{elements}</div>;
};

export default CardsList;
