// components/TopicSearch.tsx
'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Input } from "./ui/placeholders-and-vanish-input";
import { Button } from "./ui/button";

interface Topic {
  id: string;
  title: string;
  description: string;
  keywords: string[];
}

const TopicSearch: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [topics, setTopics] = useState<Topic[]>([]);

  const handleSearch = async () => {
    // This is a placeholder implementation
    const mockTopics: Topic[] = [
      {
        id: '1',
        title: 'AI Automation in Cars',
        description: 'Discussing latest trends in autonomous vehicle technology',
        keywords: ['AI', 'Cars', 'Automation']
      },
      {
        id: '2',
        title: 'Machine Learning Advances',
        description: 'Exploring cutting-edge ML techniques',
        keywords: ['ML', 'AI', 'Technology']
      }
    ];

    setTopics(
      mockTopics.filter(topic => 
        topic.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        topic.keywords.some(keyword => 
          keyword.toLowerCase().includes(searchTerm.toLowerCase())
        )
      )
    );
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex space-x-2 mb-6">
       <Input placeholders={[]} onChange={function (e: React.ChangeEvent<HTMLInputElement>): void {
                  throw new Error('Function not implemented.');
              } } onSubmit={function (e: React.FormEvent<HTMLFormElement>): void {
                  throw new Error('Function not implemented.');
              } } />
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {topics.map((topic) => (
          <motion.div 
            key={topic.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border p-4 rounded-lg shadow-md hover:shadow-xl transition-all"
          >
            <h3 className="text-xl font-bold mb-2">{topic.title}</h3>
            <p className="text-gray-600 mb-2">{topic.description}</p>
            <div className="flex flex-wrap gap-2">
              {topic.keywords.map((keyword) => (
                <span 
                  key={keyword}
                  className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TopicSearch;
