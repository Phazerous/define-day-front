import { deleteReq, get, patch, post } from './base-api';

const endpoint = 'http://localhost:3000/word';

export const getAllWords = async () => {
  const path = endpoint;

  try {
    const words = await get(path);
    return words;
  } catch (e) {
    console.log(e);
  }
};

interface NewWord {
  title: string;
  definitions: string[];
}

export const createNewWord = async (word: NewWord) => {
  const path = endpoint;

  try {
    const data = await post(path, word);
    return data;
  } catch (e) {
    console.log(e);
  }
};

interface UpdatedWord {
  id: number;
  title: string;
  definitions: { text: string; id?: number }[];
}

export const updateWord = async (word: UpdatedWord) => {
  const path = endpoint;

  try {
    const data = await patch(path, word);
  } catch (e) {
    console.log(e);
  }
};

export const deleteWord = async (id: number) => {
  const path = endpoint + `/${id}`;

  try {
    const data = await get(path);
  } catch (e) {
    console.log(e);
  }
};
