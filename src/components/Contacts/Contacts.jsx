import { useDispatch, useSelector } from 'react-redux';
import { deleteUser } from 'redux/users/users-actions';
import { selectContacts, selectFilter } from 'redux/users/users-selectors';
import s from './Contacts.module.scss';

function Contacts() {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleClickDelete = e => {
    dispatch(deleteUser(e.target.id));
  };

  const filteredContacts = contacts => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  return (
    <>
      <ul>
        {filteredContacts(contacts).map(contact => (
          <li className={s['contact-item']} key={contact.id}>
            <span className={s.name}>{contact.name}:</span>
            <div>
              <span className={s.number}>{contact.number}</span>
              <button
                className={s['btn-delete']}
                id={contact.id}
                onClick={handleClickDelete}
                type="button"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export { Contacts };
