import { useEffect } from 'react';
import css from './ListContact.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContactsThunk, deleteContactsThunk } from 'store/thunk';

export function ListContact() {
  const { items } = useSelector(state => state.contacts.contacts);
  const dispatch = useDispatch();
  const filter = useSelector(state => state.contacts.filter);

  useEffect(() => {
    dispatch(addContactsThunk());
  }, [dispatch]);

  const onDeleteContact = id => {
    dispatch(deleteContactsThunk(id));
  };

  const filteredContacts = items?.filter(contact =>
    contact?.name?.toLowerCase().includes(filter.toLowerCase())
  );

  if (!filteredContacts?.length) {
    return <p>No contacts found:(</p>;
  }

  return (
    <ul className={css.list}>
      {filteredContacts.map(({ id, createdAt, name, number }) => (
        <li key={createdAt} className={css.item}>
          <p>
            {name}: {number}
          </p>
          <button
            className={css.btn}
            type="button"
            onClick={() => onDeleteContact(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
