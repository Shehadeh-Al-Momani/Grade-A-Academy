import { useState, useEffect } from 'react';
import axios from "axios";
import io from 'socket.io-client';
let socket;

const useChat = (newMessage, stuId, insID, cuurentUser) => {
  const [messages, setMessages] = useState([]); // Sent and received messages
  const [oneMessage, setMessage] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5000/${stuId}/${insID}`)
      .then((res) => {
        setMessages(res.data);
      });
  }, [])

  useEffect(() => {
    socket = io(`http://localhost:5000/`, { query: { insID, stuId } }); // Creates a WebSocket connection

    // Listens for incoming messages
    socket.on('newMessage', (message) => {
      const incomingMessage = { ...message, sender: (message.senderId === socket.id) ? 1 : 0 };
      setMessage(message);
      axios.post('http://localhost:5000/messeges', incomingMessage)
        .then((res) => {
          messages.push(incomingMessage)
          setMessages((messages) => [...messages, incomingMessage]);
        })
        .catch((err) => { console.log('ERR: ', err) })
    });

    return () => { socket.disconnect() }; // Destroys the socket reference when the connection is closed
  }, [oneMessage])


  // Sends a message to the server that forwards it to all users in the same room
  const sendMessage = (newMessage, stuId, insID, cuurentUser) => {
    socket.emit('newMessage', {
      message: newMessage,
      insID: insID,
      stuID: stuId,
      senderId: socket.id,
    }
    );
  };

  return { messages, sendMessage };
};

export default useChat;
