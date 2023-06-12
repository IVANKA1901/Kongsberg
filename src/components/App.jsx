import React from 'react';

import { ListContact } from './ListContact/ListContact';
import { FormContacts } from './FormContact/FormContact';
import { Container } from './Container/Container';

import { Filter } from './Filter/Filter';

export function App() {
  return (
    <Container>
      <h1>Phonebook</h1>
      <FormContacts />
      <h1>Contacts</h1>
      <Filter />
      <ListContact />
    </Container>
  );
}
