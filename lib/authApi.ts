import baseApi from './base-api';

interface User {
  email: string;
  password: string;
}

const baseURL = 'http://localhost:3000/auth';

export const signup = async ({ email, password }: User) => {
  const url = baseURL + '/signup';

  try {
    await baseApi.post(url, { email, password });
  } catch (e) {
    console.log(e);

    if (e instanceof Response) {
      if (e.status === 400) {
        throw new Error('Ошибка регистрации');
      } else {
        throw new Error(`Ошибка ${e.status}`);
      }
    } else {
      throw e;
    }
  }
};

const loginUser = async ({ email, password }: User) => {
  const url = baseURL + '/login';

  try {
    await baseApi.post(url, { email, password });
  } catch (e) {
    if (e instanceof Response) {
      if (e.status === 400) {
        throw new Error('Ошибка авторизации');
      } else {
        throw new Error(`Ошибка ${e.status}`);
      }
    }
  }
};

const signout = async () => {
  const url = baseURL + '/signout';

  try {
    await baseApi.get(url);
  } catch (e) {
    throw e;
  }
};

const toExport = {
  loginUser,
  signout,
};

export default toExport;
