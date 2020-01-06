import React, { memo, useMemo, useCallback } from "react";
import { View, Text } from "react-native";

export const Player = memo(function({ id, me, objects }) {
  const self = useMemo(() => {
    if (!objects) return;
    return objects[id];
  }, [objects]);

  const backCards = useMemo(() => {
    if (!self || !objects) return [];
    return objects[self.handId];
  }, [self, objects]);

  const faceCards = useMemo(() => {
    if (!self || !objects) return [];
    return objects[self.cardSlotId];
  }, [self, objects]);

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10
      }}
    >
      <Text>{self.name}</Text>
      {self.timer >= 0 && <Text>time: {self.timer}</Text>}
      <Text>score: {self.score}</Text>
      {faceCards &&
        faceCards.items &&
        faceCards.items.map(cardId => (
          <View
            style={{
              width: 20,
              height: 20,
              backgroundColor: "white",
              borderRadius: 5,
              alignItems: "center",
              justifyContent: "center"
            }}
            key={objects[cardId].id}
          >
            <Text>
              {me
                ? `${objects[cardId].data.suit} ${objects[cardId].data.value}`
                : "*"}
            </Text>
          </View>
        ))}
      {backCards &&
        backCards.items &&
        backCards.items.map(cardId => (
          <View
            key={objects[cardId].id}
            style={{
              width: 20,
              height: 20,
              backgroundColor: "white",
              borderRadius: 5,
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <Text>*</Text>
          </View>
        ))}
    </View>
  );
});
