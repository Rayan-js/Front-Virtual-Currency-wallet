import React from 'react';
import UsersList from '../components/Users/UsersList';
import UserForm from '../components/Users/UserForm';

const Users = () => (
  <div>
    <h1>Manage Users</h1>
    <UserForm />
    <UsersList />
  </div>
);

export default Users;

