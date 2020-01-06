import React, { memo, useEffect, useState } from "react";
import { Text, View } from "react-native";

import cloneDeep from "lodash.clonedeep";
import merge from "lodash.merge";

import { Player } from "../Components/Player";
import { Deck } from "../Components/Deck";

export const Room = memo(function({ room }) {
  const [objects, setObjects] = useState(null);
  const [players, setPlayers] = useState(null);

  useEffect(() => {
    room.onMessage(message => {
      if (message.type === "object") {
        const {
          data: {
            state: { objects, clients }
          }
        } = message;
        setObjects(objects);
        setPlayers(clients);
      }
    });
  }, []);

  useEffect(() => {
    if (!room) return;

    room.state.objects.onAdd = obj => {
      // console.log("obj added", obj.id);
    };

    room.state.objects.onChange = (obj, key) => {
      if (obj.type !== 'BelkaPlayer') {
        console.log('objects.onChange', obj);
      }
      setObjects(merge(cloneDeep(objects), { [key]: obj }));
    };

    room.onMessage(message => {
      if (message.type === "object") {
        const {
          data: {
            state: { objects, clients }
          }
        } = message;
        setObjects(objects);
        setPlayers(clients);
      } else if (message.type === "actions") {
        // console.log("obj actions", JSON.stringify(message, null, 2));
      }
    });
  }, [room, objects]);

  return objects && players ? (
    <View style={{ backgroundColor: "green", flex: 1 }}>
      <View style={{ flex: 0.5, backgroundColor: 'yellow' }}>
        <Deck objects={objects} />
      </View>
      {players &&
        Object.entries(players).map(([playerId, playerGameId]) => (
          <Player
            self={room.sessionId === playerId}
            key={playerId}
            id={playerGameId}
            objects={objects}
          />
        ))}
    </View>
  ) : (
    <Text>game is loading...</Text>
  );
});
