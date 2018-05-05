import React, { Component } from 'react';
import { HANG_GAMES, USERS_LIST } from '../../utils/constants';
import UsersList from '../../components/UsersList';
import HangGamesList from '../../components/HangGamesList';

import './home.css';

class Home extends Component {

  render() {
    return (
      <div>
        <h1>Home</h1>
        <div className="mainContainer">
          <div>
            <h1>Players</h1>
            <UsersList usersList={USERS_LIST} />
          </div>
          <div>
            <h1>Games List</h1>
            <HangGamesList gamesList={HANG_GAMES} />
          </div>
        </div>
      </div>
    );
  }
}


export default Home;
