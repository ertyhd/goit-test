import axios from 'axios';

const tweetsInstance = axios.create({
  baseURL: 'https://6400727063e89b0913af1475.mockapi.io/api/tweets',
});

export const getAllCards = async () => {
  const { data } = await tweetsInstance.get('/');
  return data;
};

export const addFollow = async ({ userId, userFollowers }) => {
  console.log('userId', userId);
  console.log('data', userFollowers);

  const { data: result } = await tweetsInstance.put(
    `/${userId}`,
    userFollowers
  );

  return result;
};

export const deleteFollow = async id => {
  const { data } = await tweetsInstance.delete(`/${id}`);
  return data;
};
