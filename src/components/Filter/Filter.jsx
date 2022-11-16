import { useDispatch, useSelector } from 'react-redux';
import { filterUsers } from 'redux/users/users-actions';
import { selectFilter } from 'redux/users/users-selectors';

function Filter() {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleInput = e => {
    dispatch(filterUsers(e.target.value))
  };
  return (
    <>
      <label>
        <span>Find contacts by name</span>

        <input
          onChange={handleInput}
          value={filter}
          type="text"
          name="filter"
        />
      </label>
    </>
  );
}

export { Filter };

