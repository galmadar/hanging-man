import React, { Component } from 'react';
import GamesList from '../../components/GamesList';
import { GAME_STATUS } from '../../utils/constants';
import HangmanFirebase from '../../utils/hangmanFirebase/HangmanFirebase';

const gamesList = [
  {
    user1: '1',
    user2: '2',
    image: '',
    word: '',
    hangGameId: '',
    failures: 1,
    status: GAME_STATUS.ON_GOING
  }
];

class HangGames extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: props.match.userId
    }
  }

  componentDidMount() {
    if (this.state.userId) {

    }
  }

  render() {
    return (
      <div className="hangGames">
        <GamesList gamesList={gamesList} />
      </div>
    );
  }
}

export default HangGames;
