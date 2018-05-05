import React from 'react';

function HangGameRow(props) {
  return (
    <div>
      <p>{props.user1}</p>
      <p>{props.user2}</p>
      <p>{props.games.length}</p>
    </div>
  )
}

function HangGamesList(props) {
  return (
    <div>
      {props.gamesList.map((game, key) => <HangGameRow {...game} key={key} />)}
    </div>
  );
}

export default HangGamesList;
