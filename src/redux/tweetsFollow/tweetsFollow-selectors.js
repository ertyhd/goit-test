export const getAllCards = ({ cards }) => cards.items;
export const getFilteredCards = ({ cards, filter }) => {
  if (!filter) {
    return cards.items;
  } else if (filter.act === 'following') {
    const result = cards.items.filter(({ subscription }) => {
      return subscription.includes(filter.message);
    });
    return result;
  } else if (filter.act === 'follow') {
    const result = cards.items.filter(({ subscription }) => {
      return !subscription.includes(filter.message);
    });
    return result;
  } else if (filter.act === 'all') {
    return cards.items;
  }
};
