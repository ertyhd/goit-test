import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CardsList from './CardsList/CardsList';

import {
  fetchAllCards,
  fetchAddFollow,
} from '../redux/tweetsFollow/tweetsFollow-operations';

import Filter from './Filter/Filter';

import { setFilter } from 'redux/filter/filter-slice';

import { getFilteredCards } from '../redux/tweetsFollow/tweetsFollow-selectors';

import { SvgSelector } from '../utils/SvgSelector';
import { ColorRing } from 'react-loader-spinner';

import style from './contacts.module.scss';

// import items from './twits';

const Cards = () => {
  const [isPagination, setPagination] = useState(true);
  const [isFiltered, setFiltered] = useState(false);
  const loading = useSelector(state => state.cards.loading);

  // const filter = useSelector(getFilter);
  const filteredCards = useSelector(getFilteredCards);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllCards());
  }, [dispatch]);

  const onAddTweets = (followers, id, subscription) => {
    const addFol = {
      userId: id,
      userFollowers: {
        followers: followers + 1,
        subscription: [...subscription, 'I am'],
      },
    };
    dispatch(fetchAddFollow(addFol));
  };

  const onDeleteTweets = (followers, id, subscription) => {
    const addFol = {
      userId: id,
      userFollowers: {
        followers: followers - 1,
        subscription: (subscription = subscription.filter(
          item => item !== 'I am'
        )),
      },
    };
    dispatch(fetchAddFollow(addFol));
  };

  const hendleFilterFollowing = () => {
    const value = { message: 'I am', act: 'following' };
    dispatch(setFilter(value));
    setFiltered('following');
  };

  const hendleFilterFollow = () => {
    const value = { message: 'I am', act: 'follow' };
    dispatch(setFilter(value));
    setFiltered('follow');
  };

  const hendleFilterAll = () => {
    const value = { message: 'I am', act: 'all' };
    dispatch(setFilter(value));
    setFiltered('all');
  };

  const handleScrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const isCards = Boolean(filteredCards.length);

  return (
    <div className={style.block}>
      <div className={style.loader}>{loading && <ColorRing />}</div>
      <h1>Tweets</h1>
      <Filter
        isFiltered={isFiltered}
        hendleFilterFollowing={hendleFilterFollowing}
        hendleFilterFollow={hendleFilterFollow}
        hendleFilterAll={hendleFilterAll}
      />
      <div>
        {isCards && (
          <CardsList
            items={isPagination ? filteredCards.slice(0, 3) : filteredCards}
            addTweets={onAddTweets}
            deleteTweets={onDeleteTweets}
          />
        )}
        {!isCards && <p>No tweets in list</p>}
        {isCards && isPagination && (
          <button
            className={style.btnPag}
            onClick={() => setPagination(false)}
            type="button"
          >
            Load more
          </button>
        )}
        {isCards && !isPagination && (
          <button
            className={style.btnPagArrow}
            onClick={handleScrollUp}
            type="button"
          >
            <SvgSelector id="arrow" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Cards;
