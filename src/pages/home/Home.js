import React, { Component } from 'react';
import { HANG_GAMES, USERS_LIST } from '../../utils/constants';
import UsersList from '../../components/UsersList';
import HangGamesList from '../../components/HangGamesList';

import './home.css';
import CreateGameModal from '../../components/CreateGameModal';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false
    }
  }

  onUserClick = (user) => {
    this.setState({ isModalOpen: true})
  };

  render() {
    return (
      <div>
        <h1>Home</h1>
        <CreateGameModal isOpen={this.state.isModalOpen} />
        <div className="mainContainer">
          <div>
            <h1>Players</h1>
            <UsersList usersList={USERS_LIST} onUserClick={this.onUserClick} />
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
