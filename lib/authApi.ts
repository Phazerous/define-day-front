import baseApi from './base-api';

interface User {
  email: string;
  password: string;
}

const baseURL = 'http://localhost:3000/auth';

const signUpUser = async ({ email, password }: User) => {
  const url = baseURL + '/signup';

  try {
    await baseApi.post(url, { email, password });
  } catch (e) {
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

const logoutUser = async () => {
  const url = baseURL + '/logout';

  try {
    await baseApi.get(url);
    console.log('Fuck');
  } catch (e) {
    console.log(e);
  }
};

const toExport = {
  signUpUser,
  loginUser,
  logoutUser,
};

export default toExport;
