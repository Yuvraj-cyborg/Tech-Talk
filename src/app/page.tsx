// src/app/page.tsx
'use client';

import React from 'react';
import GroupChat from '../components/GroupChat';
import Search from '../components/Search';
const Home: React.FC = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Tech Talk Platform</h1>
      <Search />
      <GroupChat />
    </div>
  );
};

export default Home;
