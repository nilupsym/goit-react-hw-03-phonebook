import React, { Component } from 'react';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: ''
}

  render() {
    const { contacts } = this.state;
    return (
      <>
        <h1>Phonebook</h1>
        <form>
          <label>
            Name
            <input type='text' />
          </label>
          <label>
            Number
            <input type='text' />
          </label>
          <button type='submit'>Add contact</button>
        </form>

        <h2>Contacts</h2>
        <label>
          Find contacts by name
          <input type='text' /></label>
        <ul>
          {contacts.map(({ id, name, number }) => { return (<li key={id}>{name}: { number}</li>) })}
        </ul>
      </>
    );
  }
}

export default App;
