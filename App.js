import React, { useEffect, useState, useCallback } from "react";
import { AsyncStorage, StatusBar, Text, Button } from "react-native";
import * as Colyseus from "colyseus.js";
import { Buffer } from "buffer";

import { Rooms } from "./Containers/Rooms";
import { Room } from "./Containers/Room";

window.localStorage = AsyncStorage;
global.Buffer = Buffer;

const App = () => {
  const [rooms, setRooms] = useState([]);
  const [room, setRoom] = useState(null);
  const [client, setClient] = useState(null);

  useEffect(() => {
    const url = "ws://belkagame.herokuapp.com";
    const newClient = new Colyseus.Client(url);
    setClient(newClient);
  }, []);

  useEffect(() => {
    updateRooms();
  }, [client]);

  const updateRooms = useCallback(() => {
    if (!client) return;

    async function getRooms() {
      const rooms = await client.getAvailableRooms();
      setRooms(rooms);
    }

    getRooms();
  }, [client]);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      {client ? (
        room ? (
          <Room room={room} />
        ) : (
          <>
            <Button title="update rooms list" onPress={updateRooms} />
            <Rooms client={client} setRoom={setRoom} rooms={rooms} />
          </>
        )
      ) : (
        <Text>Loading...</Text>
      )}
    </>
  );
};

export default App;
