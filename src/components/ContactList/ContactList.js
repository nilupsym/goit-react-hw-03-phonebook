import React from 'react';
import ContactListItem from '../ContactListItem';

const ContactList = ({filteredContacts, handleDeleteContact}) => (
    <ul>
        {
            filteredContacts.map(filteredContact => (
                <ContactListItem
                    key={filteredContact.id}
                    id={filteredContact.id}
                    name={filteredContact.name}
                    number={filteredContact.number}
                    handleDeleteContact={handleDeleteContact}
                />))
        }
    </ul>);

export default ContactList;