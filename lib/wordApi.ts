import baseApi from './base-api';

const endpoint = 'http://localhost:3000/word/';

export async function createWord(title: string) {
  const path = endpoint;

  try {
    const data = await baseApi.post(path, { title });
    console.log(data);
  } catch (e) {
    console.log(e);
  }
}
