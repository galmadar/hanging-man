import React from 'react';
import { Link } from 'react-router-dom';

function UserRow(props) {
  return (
    <li>
      <Link to={`/games/${props.id}`}>{props.name}</Link>
    </li>
  )
}

function UsersList(props) {
  return (
    <div>
      <ul>
        {props.usersList.map((user, key) => <UserRow {...user} key={key} />)}
      </ul>
    </div>
  );
}

export default UsersList;
