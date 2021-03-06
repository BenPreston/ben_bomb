import React, { useState } from "react";
import { Row } from "react-bootstrap";

import Teamsheet from "./Teamsheet";
import "./matchData.css";

function MatchData({ data }) {
  // Set a state, need to change this for global game stats as a loader I think
  const [playerState, setPlayerState] = useState({
    click: "on a player",
    for: "stats",
  });

  // Stores a record of every player with their main stats
  const playerEventTally = [];
  // Stores the starting 11
  const starting11 = [];

  // Looks up a player based on click and sets state to that to show stats
  const lookUpPlayer = async (playerName) => {
    const newPlayer = await playerEventTally.find(
      (player) => player.name === playerName
    );
    setPlayerState(newPlayer);
  };

  // Sets starting 11 and makes all of the stats based on the relevant game events
  const calcEventWithPlayer = (event) => {
    if (event.type.name === "Starting XI") {
      starting11.push(event);
    }

    if (event.player && event.player.name && event.type && event.type.name) {
      const player = event["player"]["name"];
      const type = event["type"]["name"];

      if (!playerEventTally.find((person) => person.name === player)) {
        playerEventTally.push({
          name: player,
          team: event["team"]["name"],
          position: event["position"]["name"],
        });
      }

      const footballer = playerEventTally.find((obj) => {
        return obj.name === player;
      });

      footballer[type] ? footballer[type]++ : (footballer[type] = 1);
    }
  };

  // Data imported to deliver these stats
  data.map((event) => calcEventWithPlayer(event));

  return (
    <div>
      <h1 className="team_names_heading">
        {starting11[0].team.name} vs {starting11[1].team.name}
      </h1>
      <p>
        This is a first cut of the data. I wrote a function to go through each
        match and then calculate each players given statistics such as shots and
        goals. if you click on a player you will see a modal with a summary of
        this data.
      </p>
      <Row className="justify-content-md-center">
        {starting11.map((teamName) => {
          return (
            <Teamsheet
              teamName={teamName.team.name}
              formation={teamName.tactics.formation}
              lineups={teamName.tactics.lineup}
              onChange={(selectedPlayer) => lookUpPlayer(selectedPlayer)}
              player={playerState}
            />
          );
        })}
      </Row>
    </div>
  );
}

export default MatchData;
