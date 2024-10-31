// src/components/GroupChat.tsx
'use client';

import React, { useState } from 'react';
import ChatRoom from './ChatRoom';

const GroupChat: React.FC = () => {
  const [roomId, setRoomId] = useState('');

  return (
    <div>
      <input
        type="text"
        value={roomId}
        onChange={(e) => setRoomId(e.target.value)}
        placeholder="Enter room ID"
        className="border p-2"
      />
      {roomId && <ChatRoom roomId={roomId} />}
    </div>
  );
};

export default GroupChat;
