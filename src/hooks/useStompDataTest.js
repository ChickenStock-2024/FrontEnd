import * as StompJs from "@stomp/stompjs";
import { useEffect, useState } from "react";
import useStockDataStore from "../store/useStockDataStore";

const useStompDataTest = (stockId) => {
  const { setHokaData, setStockInfo } = useStockDataStore();

  useEffect(() => {
    const client = new StompJs.Client({
      brokerURL: "wss://socket.givendragon.site/stock-info",
      connectHeaders: {
        login: "",
        passcode: "password",
      },
      debug: function (str) {
        console.log(str);
      },
      reconnectDelay: 5000,
      heartbeatIncoming: 4000,
      heartbeatOutgoing: 4000,
    });

    client.onConnect = () => {
      client.subscribe(`/stock-hoka/${stockId}`, (message) => {
        const newMessage = JSON.parse(message.body);
        setHokaData(newMessage);
      });

      client.subscribe(`/stock-purchase/${stockId}`, (message) => {
        const newMessage = JSON.parse(message.body);
        setStockInfo(newMessage);
      });
    };

    client.onStompError = (frame) => {
      console.error("Broker reported error: " + frame.headers["message"]);
      console.error("Additional details: " + frame.body);
    };

    client.activate();

    return () => {
      client.deactivate();
    };
  }, [setHokaData, setStockInfo, stockId]);
};

export default useStompDataTest;
