async function post(path: string, body: Record<string, string>) {
  const response = await fetch(path, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  if (response.status === 200) {
    const data = await response.json();
    return data;
  }

  if (!response.ok) {
    throw response;
  }
}

export default post;
