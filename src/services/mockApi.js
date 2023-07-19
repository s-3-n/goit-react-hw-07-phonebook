import axios from 'axios';

axios.defaults.baseURL = 'https://64b7ff8621b9aa6eb0796a04.mockapi.io/api/v1/';

export const addContactApi = async contact => {
  return await axios.post('contacts', contact).then(res => {
    const { data } = res;
    return data;
  });
};

export const getContactApi = async () => {
  return await axios.get('contacts').then(res => {
    const { data } = res;
    return data;
  });
};

export const removeContactApi = async id => {
  return await axios.delete(`contacts/${id}`).then(res => res.data);
};
