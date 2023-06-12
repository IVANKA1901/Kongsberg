import axios from 'axios';

axios.defaults.baseURL = 'https://6485bc24a795d24810b74051.mockapi.io';

export async function getContacts() {
  const { data } = await axios.get('/contacts');
  return data;
}

export async function addContacts(contact) {
  const { data } = await axios.post('/contacts', contact);
  return data;
}

export async function deleteContacts(id) {
  const { data } = await axios.delete(`/contacts/${id}`);
  return data;
}
