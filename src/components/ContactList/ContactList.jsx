import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from './ContactList.module.css'

export default function ContactList() {
  const initialContacts = useSelector(state => state.contacts.items)
  const filterParam = useSelector(state => state.filters.name)
  const filteredContacts = initialContacts.filter(contact => contact.name.toLowerCase().includes(filterParam.toLowerCase()))
    return (
        <ul className={css.contactList}>
          {filteredContacts.map(item => (
            <li className={css.item} key={item.id}>
                <Contact 
                name={item.name} 
                id={item.id} 
                number={item.number} 
              ></Contact>
            </li>
          ))}
        </ul>
    )
}