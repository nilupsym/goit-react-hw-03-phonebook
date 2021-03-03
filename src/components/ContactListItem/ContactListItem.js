import React from 'react';
// import PropTypes from 'prop-types';

const ContactListItem = ({ id, name, number, handleDeleteContact }) => (
  <li key={id}>
    {name}: {number}
    <button onClick={() => handleDeleteContact(id)}>Delete</button>
  </li>);

export default ContactListItem;