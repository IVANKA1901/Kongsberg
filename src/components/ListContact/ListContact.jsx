import { useMemo } from 'react';
import css from './ListContact.module.css';
import { useSelector } from 'react-redux';
import {
  useDeleteContactMutation,
  useGetContactsQuery,
} from 'services/contactsApi copy';
import Notiflix from 'notiflix';

export function ListContact() {
  const filter = useSelector(state => state.filter.filter);
  const { data: contacts, isError, isLoading } = useGetContactsQuery();
  console.log(contacts);
  const [deleteContact] = useDeleteContactMutation();

  const onDeleteContact = id => {
    deleteContact(id);
    Notiflix.Notify.info(`"${[contacts].name}" removed from your contacts`);
  };

  const filteredContacts = useMemo(() => {
    if (isLoading) {
      return;
    }

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase().trim())
    );
  }, [filter, contacts, isLoading]);

  if (!filteredContacts?.length) {
    return (
      <h2 className="text" style={{ fontSize: '40px' }}>
        No contacts found :(
      </h2>
    );
  }

  if (isError) {
    Notiflix.Notify.failure(`Error`);
    return (
      <h2 className="text" style={{ fontSize: '40px' }}>
        ERROR
      </h2>
    );
  }

  return (
    <>
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
    </>
  );
}
