import * as StompJs from "@stomp/stompjs";
import { useEffect, useState } from "react";

const useStompData = () => {
  const [messages, setMessages] = useState({});
  const [stockInfo, setStockInfo] = useState({});

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
      client.subscribe("/stock-hoka", (message) => {
        const newMessage = JSON.parse(message.body);
        setMessages(newMessage);
      });

      client.subscribe("/stock-purchase", (message) => {
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
  }, []);

  return {
    offers: messages.offers || [],
    bids: messages.bids || [],
    messages: messages,
    stockInfo: stockInfo,
  };
};

export default useStompData;
