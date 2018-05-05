import React from 'react';

function UserRow(props) {
  const { user } = props;
  return (
    <li onClick={() => props.onClick(user)}>
      <p>{user.name}</p>
    </li>
  )
}

function UsersList(props) {
  return (
    <div>
      <ul>
        {props.usersList.map((user, key) => <UserRow user={user} key={key} onClick={props.onUserClick} />)}
      </ul>
    </div>
  );
}

export default UsersList;
