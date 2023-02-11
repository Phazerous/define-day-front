export const post = async (path: string, body: Record<string, string>) => {
  console.log(JSON.stringify(body));

  const response = await fetch(path, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  if (response.status === 200 || response.status == 201) {
    const contentType = response.headers.get('content-type');

    if (contentType && contentType.indexOf('application/json') !== -1) {
      const data = await response.json();
      return data;
    }
  }

  if (!response.ok) {
    throw response;
  }
};

export const get = async (path: string) => {
  const response = await fetch(path, {
    method: 'GET',
    credentials: 'include',
  });

  if (response.status === 200) {
    const contentType = response.headers.get('content-type');

    if (contentType && contentType.indexOf('application/json') !== -1) {
      const data = await response.json();
      return data;
    }
  }

  if (!response.ok) {
    throw response;
  }
};
