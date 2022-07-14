import { useState } from 'react'
import Person from './components/Person'

const App = (props) => {
  const [persons, setPersons] = useState(props.personArr) 
  const [newName, setNewName] = useState('')
  //const [showAll, setShowAll] = useState(true)

  const addPerson = (event) => {
    event.preventDefault()
    const personObj = {
      id: persons.length + 1,
      name: newName,
    }

    setPersons(persons.concat(personObj))
    console.log(personObj)
    setNewName('')
  }

  const handlePersonChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  //const personsToShow = showAll ? persons : persons

  return (
    <div>
        {/* <div>
          <button onClick={() => setShowAll(!showAll)}>
            show {showAll ? 'all' : 'all' }
          </button>
        </div>   */}
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
         name : <input value={newName} onChange={handlePersonChange} />
         <button type="submit">add</button>
        <div>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person => <Person key={person.id} person={person}/>)}        
      </ul>
    </div>
  )
}

export default App