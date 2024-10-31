// src/components/ChatRoom.tsx
'use client';

import React, { useEffect, useState } from 'react';
import { db } from '../firebase/config';
import { collection, addDoc, onSnapshot } from 'firebase/firestore';

interface ChatRoomProps {
  roomId: string;
}

const ChatRoom: React.FC<ChatRoomProps> = ({ roomId }) => {
  const [messages, setMessages] = useState<any[]>([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, `rooms/${roomId}/messages`), (snapshot) => {
      const messagesData = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setMessages(messagesData);
    });
    return () => unsubscribe();
  }, [roomId]);

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      await addDoc(collection(db, `rooms/${roomId}/messages`), { text: input });
      setInput('');
    }
  };

  return (
    <div>
      <div className="flex flex-col">
        {messages.map((msg) => (
          <div key={msg.id} className="p-2 border-b">{msg.text}</div>
        ))}
      </div>
      <form onSubmit={sendMessage} className="flex">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border p-2 flex-grow"
          placeholder="Type a message"
        />
        <button type="submit" className="bg-blue-500 text-white p-2">Send</button>
      </form>
    </div>
  );
};

export default ChatRoom;
