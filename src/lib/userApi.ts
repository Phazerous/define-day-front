import { get } from './base-api';

const baseURL = 'http://localhost:3000/auth/user';

export const getUsername = async () => {
  const url = baseURL;

  try {
    const data = await get(url);
    return data.email;
  } catch (e) {
    console.log(e);
  }
};
