import styles from './filter.module.scss';

import React, { useState } from 'react';

const Filter = ({
  isFiltered,
  hendleFilterFollowing,
  hendleFilterFollow,
  hendleFilterAll,
}) => {
  const [isFollowed, setIsFollowed] = useState(false);

  const handleFollowBy = () => {
    setIsFollowed(true);
    console.log(isFollowed);
  };

  return (
    <div className={styles.filterBtns}>
      <button onClick={handleFollowBy} className={styles.filterText}>
        Filter out:
      </button>
      <button
        style={{
          backgroundColor: isFiltered === 'following' ? '#5cd3a8' : '',
        }}
        className={styles.filterBtn}
        type="button"
        onClick={hendleFilterFollowing}
      >
        Following
      </button>
      <button
        style={{
          backgroundColor: isFiltered === 'follow' ? '#5cd3a8' : '',
        }}
        className={styles.filterBtn}
        type="button"
        onClick={hendleFilterFollow}
      >
        Can follow
      </button>
      <button
        style={{
          backgroundColor: isFiltered === 'all' ? '#5cd3a8' : '',
        }}
        className={styles.filterBtn}
        type="button"
        onClick={hendleFilterAll}
      >
        Show all
      </button>
    </div>
  );
};

export default Filter;
