import React from 'react';

function UsersList(props) {
  return (
    <div>
      <ul>
        {props.usersList.map((user, key) => <li key={key}>{user.name}</li>)}
      </ul>
    </div>
  );
}

export default UsersList;
