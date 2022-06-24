export async function request(url, method, body = null) {
  try {
    const token = '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';
    const response = await fetch(`https://api.github.com/${url}`, {
      method,
      body: body === null ? null : JSON.stringify(body),
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    /* eslint-disable no-console */
    return console.warn('ERROR ', error);
  }
}
