import React, { Component } from 'react';
import { HANG_GAMES, USERS_LIST } from '../../utils/constants';
import UsersList from '../../components/UsersList';
import HangGamesList from '../../components/HangGamesList';

class Home extends Component {

  render() {
    return (
      <div>
        <h1>Home</h1>
        <UsersList usersList={USERS_LIST} />
        <HangGamesList gamesList={HANG_GAMES} />
      </div>
    );
  }
}

export default Home;
