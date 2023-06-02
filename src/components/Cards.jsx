import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CardsList from './CardsList/CardsList';

import {
  fetchAllCards,
  fetchAddFollow,
  fetchDeleteFollow,
} from '../redux/tweetsFollow/tweetsFollow-operations';

import { setFilter } from 'redux/filter/filter-slice';

import { getFilteredCards } from '../redux/tweetsFollow/tweetsFollow-selectors';
import { getFilter } from 'redux/filter/filter-selectors';

import Filter from 'components/Filter/Filter';

// import style from './contacts.module.css';

// import items from './twits';

const Cards = () => {
  const filter = useSelector(getFilter);
  const filteredCards = useSelector(getFilteredCards);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllCards());
  }, [dispatch]);

  const onAddTweets = (followers, id) => {
    const addFol = { userId: id, userFollowers: { followers: followers + 1 } };
    dispatch(fetchAddFollow(addFol));
  };

  const onDeleteTweets = id => {
    dispatch(fetchDeleteFollow(id));
  };

  const hendleFilter = ({ target }) => {
    dispatch(setFilter(target.value));
  };

  const isCards = Boolean(getFilteredCards.length);

  return (
    <>
      <h1>Tweets</h1>
      <div>
        <Filter value={filter} handleChange={hendleFilter} />
        {isCards && (
          <CardsList
            items={filteredCards}
            addTweets={onAddTweets}
            deleteTweets={onDeleteTweets}
          />
        )}
        {!isCards && <p>No contacts in list</p>}
      </div>
    </>
  );
};

export default Cards;
