import React from 'react';

function GameRow(props) {
  return (
    <div>
      <p>{props.name}</p>
    </div>
  )
}

function GamesList(props) {
  return (
    <div>
      {props.gamesList.map((game, key) => <GameRow {...game} key={key} />)}
    </div>
  );
}

export default GamesList;
