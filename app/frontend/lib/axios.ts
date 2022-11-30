import Axios from 'axios';

export const axios = Axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
});

axios.interceptors.request.use((config) => {
  const csrfToken = document.querySelector<HTMLMetaElement>('meta[name="csrf-token"]')?.content || '';

  return {
    ...config,
    headers: { ...config.headers, 'x-csrf-token': csrfToken },
  };
});
