async function post(path: string, body: Record<string, string>) {
  const response = await fetch(path, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  console.log(response.status);

  if (response.status === 200 || response.status == 201) {
    const data = await response.json();
    console.log(data);
    return data;
  }

  if (!response.ok) {
    throw response;
  }
}

async function get(path: string) {
  const response = await fetch(path, {
    method: 'GET',
    credentials: 'include',
  });

  console.log(response);

  if (!response.ok) {
    throw response;
  }
}

export default {
  post,
  get,
};
