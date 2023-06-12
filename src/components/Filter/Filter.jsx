import css from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';

import { setFilter } from 'store/createSlice';

export function Filter() {
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  const onInputChange = ({ target: { value } }) => {
    dispatch(setFilter(value));
  };

  return (
    <label className={css.label}>
      Find contacts by name
      <input
        className={css.input}
        type="text"
        value={filter}
        onChange={onInputChange}
      />
    </label>
  );
}
