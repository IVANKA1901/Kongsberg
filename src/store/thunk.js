import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  deleteContacts,
  getContacts,
  addContacts,
} from '../services/contactsApi';

export const getContactsThunk = createAsyncThunk(
  'contacts/fetchAll',
  async () => {
    return await getContacts();
  }
);

export const addContactsThunk = createAsyncThunk(
  'contacts/addContact',
  async data => {
    return await addContacts(data);
  }
);

export const deleteContactsThunk = createAsyncThunk(
  'contacts/deleteContact',
  async id => {
    return await deleteContacts(id);
  }
);

