import React from 'react';
// import PropTypes from 'prop-types';

import styles from './cardsList.module.scss';
import { SvgSelector } from '../../utils/SvgSelector';
// import boyImage from '../../img/Hansel.png';

const CardsList = ({ addTweets, deleteTweets, items }) => {
  const elements = items.map(({ id, user, tweets, followers, avatar }) => (
    <div className={styles.card} key={id}>
      <div className={styles.logo}>
        <SvgSelector id="logoGoIt" />
      </div>
      <div className={styles.whiteLine}></div>
      <div className={styles.circlBorder}>
        <img alt="avatar" className={styles.avatar} src={avatar} />
        {/* <div className={styles.avatar}></div> */}
      </div>
      <div className={styles.underContainer}>
        <span className={styles.spanTweets}> {tweets} tweets</span>
        <span className={styles.spanFollowers}>
          {followers.toLocaleString('en-US', { useGrouping: true })} Followers
        </span>
        <button
          type="button"
          className={styles.btn}
          onClick={() => addTweets(followers, id)}
        >
          follow
        </button>
      </div>
    </div>
  ));
  return <div className={styles.cardsCotainer}>{elements}</div>;
};

export default CardsList;

// ContactList.defaultProps = {
//   contacts: [],
// };

// ContactList.propTypes = {
//   deleteContact: PropTypes.func.isRequired,
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ),
// };
