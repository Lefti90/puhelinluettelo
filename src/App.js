import { useState } from 'react'
import Person from './components/Person'

const App = (props) => {
  const [persons, setPersons] = useState(props.personArr) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  //const [showAll, setShowAll] = useState(true)

  const addPerson = (event) => {
    event.preventDefault()
    const personObj = {
      id: persons.length + 1,
      name: newName,
      number: newNumber,
    }

    console.log('newName', newName)
    const name = persons.find(findName)
    console.log('search: ', name)

    function findName(nimi){
      console.log('item: ', nimi.name)
      if (nimi.name === newName) {
        console.log('true')
        return true
      }else{
        console.log('false')
        return false
      }
    }

    console.log('name', name)

    if (name) {
      alert(newName + ' is already added to phonebook')
      return
    }

    setPersons(persons.concat(personObj))
    console.log(personObj)
    setNewName('')
    setNewNumber('')
  }



  const handlePersonChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
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
        <div> name : <input value={newName} onChange={handlePersonChange} /></div>
        <div> number : <input value={newNumber} onChange={handleNumberChange} /></div>
        <div><button type="submit">add</button></div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person => <Person key={person.id} person={person}/>)}        
      </ul>
    </div>
  )
}

export default App