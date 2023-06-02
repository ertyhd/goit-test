export const getAllCards = ({ cards }) => cards.items;
export const getFilteredCards = ({ cards, filter }) => {
  if (!filter) {
    return cards.items;
  }
  const normalizateFilter = filter.toLowerCase();
  const result = cards.items.filter(({ tweets }) => {
    console.log('asda', cards.items);
    return tweets.toLowerCase().includes(normalizateFilter);
    // number.toLowerCase().includes(normalizateFilter)
  });
  return result;
};
