import { useEffect, useState } from 'react'
import reactLogo from '../../assets/react.svg'
import viteLogo from '/vite.svg'
import './App.module.css'
import ContactForm from '../ContactForm/ContactForm'
import SearchBox from '../SearchBox/SearchBox'
import ContactList from '../ContactList/ContactList'
import { useSelector } from 'react-redux'
function App() {
  return (
    <>
      <div>
  <h1>Phonebook</h1>
  <ContactForm />
  <SearchBox />
  <ContactList />
</div>
    </>
  )
}

export default App