import React, { useState } from 'react';
import { FaSearch, FaPaperPlane, FaPhone, FaVideo, FaEllipsisV, FaSmile, FaPaperclip } from 'react-icons/fa';

const MessagesPage = () => {
  const [selectedChat, setSelectedChat] = useState(1);
  const [newMessage, setNewMessage] = useState('');

  const conversations = [
    {
      id: 1,
      name: 'Guanjoi Trading LLC',
      lastMessage: 'Thank you for your inquiry about the smart watch...',
      time: '2 min ago',
      unread: 2,
      avatar: 'https://ui-avatars.com/api/?name=GT&background=3b82f6&color=fff',
      online: true
    },
    {
      id: 2,
      name: 'TechStore Support',
      lastMessage: 'Your order has been shipped and will arrive...',
      time: '1 hour ago',
      unread: 0,
      avatar: 'https://ui-avatars.com/api/?name=TS&background=10b981&color=fff',
      online: false
    },
    {
      id: 3,
      name: 'Fashion Hub',
      lastMessage: 'We have new arrivals that match your style...',
      time: '3 hours ago',
      unread: 1,
      avatar: 'https://ui-avatars.com/api/?name=FH&background=f59e0b&color=fff',
      online: true
    },
    {
      id: 4,
      name: 'Electronics World',
      lastMessage: 'The laptop you were interested in is now...',
      time: '1 day ago',
      unread: 0,
      avatar: 'https://ui-avatars.com/api/?name=EW&background=ef4444&color=fff',
      online: false
    }
  ];

  const messages = [
    {
      id: 1,
      sender: 'other',
      message: 'Hello! Thank you for your inquiry about our Smart Watch Pro. I\'d be happy to help you with any questions.',
      time: '10:30 AM',
      avatar: 'https://ui-avatars.com/api/?name=GT&background=3b82f6&color=fff'
    },
    {
      id: 2,
      sender: 'me',
      message: 'Hi! I\'m interested in the Smart Watch Pro. Can you tell me more about the battery life and water resistance?',
      time: '10:32 AM'
    },
    {
      id: 3,
      sender: 'other',
      message: 'Absolutely! The Smart Watch Pro features a 7-day battery life with typical use and is water resistant up to 50 meters. It\'s perfect for swimming and daily activities.',
      time: '10:35 AM',
      avatar: 'https://ui-avatars.com/api/?name=GT&background=3b82f6&color=fff'
    },
    {
      id: 4,
      sender: 'me',
      message: 'That sounds great! What about the warranty and return policy?',
      time: '10:37 AM'
    },
    {
      id: 5,
      sender: 'other',
      message: 'We offer a 2-year manufacturer warranty and a 30-day return policy. If you\'re not completely satisfied, you can return it for a full refund.',
      time: '10:40 AM',
      avatar: 'https://ui-avatars.com/api/?name=GT&background=3b82f6&color=fff'
    }
  ];

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (newMessage.trim()) {
      // Handle sending message
      console.log('Sending message:', newMessage);
      setNewMessage('');
    }
  };

  const selectedConversation = conversations.find(conv => conv.id === selectedChat);

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="px-0 md:px-16 lg:px-24 py-2 md:py-6">
        {/* Header */}
        <div className="bg-white md:rounded-2xl shadow-lg p-4 md:p-6 mb-4 md:mb-6 mx-4 md:mx-0">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Messages</h1>
          <p className="text-gray-600">Chat with sellers and support</p>
        </div>

        <div className="bg-white md:rounded-2xl shadow-lg overflow-hidden mx-4 md:mx-0" style={{ height: 'calc(100vh - 200px)' }}>
          <div className="flex flex-col md:flex-row h-full">
            {/* Conversations List */}
            <div className="w-full md:w-1/3 border-r border-gray-200 flex flex-col">
              {/* Search */}
              <div className="p-4 border-b border-gray-200">
                <div className="relative">
                  <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                  <input
                    type="text"
                    placeholder="Search conversations..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>

              {/* Conversations */}
              <div className="flex-1 overflow-y-auto">
                {conversations.map((conversation) => (
                  <div
                    key={conversation.id}
                    onClick={() => setSelectedChat(conversation.id)}
                    className={`p-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50 transition-colors ${
                      selectedChat === conversation.id ? 'bg-blue-50 border-blue-200' : ''
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <img
                          src={conversation.avatar}
                          alt={conversation.name}
                          className="w-12 h-12 rounded-full"
                        />
                        {conversation.online && (
                          <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <h3 className="font-medium text-gray-900 truncate text-sm md:text-base">{conversation.name}</h3>
                          <span className="text-xs text-gray-500">{conversation.time}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <p className="text-xs md:text-sm text-gray-600 truncate">{conversation.lastMessage}</p>
                          {conversation.unread > 0 && (
                            <span className="bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center ml-2">
                              {conversation.unread}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Chat Area */}
            <div className="flex-1 flex flex-col">
              {selectedConversation ? (
                <>
                  {/* Chat Header */}
                  <div className="p-4 border-b border-gray-200 bg-white">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="relative">
                          <img
                            src={selectedConversation.avatar}
                            alt={selectedConversation.name}
                            className="w-10 h-10 rounded-full"
                          />
                          {selectedConversation.online && (
                            <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                          )}
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-900 text-sm md:text-base">{selectedConversation.name}</h3>
                          <p className="text-sm text-gray-500">
                            {selectedConversation.online ? 'Online' : 'Last seen 2 hours ago'}
                          </p>
                        </div>
                      </div>
                      <div className="hidden md:flex items-center gap-2">
                        <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                          <FaPhone size={16} />
                        </button>
                        <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                          <FaVideo size={16} />
                        </button>
                        <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                          <FaEllipsisV size={16} />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Messages */}
                  <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
                    {messages.map((message) => (
                      <div
                        key={message.id}
                        className={`flex ${message.sender === 'me' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div className={`flex items-end gap-2 max-w-xs lg:max-w-md ${
                          message.sender === 'me' ? 'flex-row-reverse' : 'flex-row'
                        }`}>
                          {message.sender === 'other' && (
                            <img
                              src={message.avatar}
                              alt="Avatar"
                              className="w-8 h-8 rounded-full"
                            />
                          )}
                          <div className={`px-4 py-2 rounded-2xl ${
                            message.sender === 'me'
                              ? 'bg-blue-600 text-white'
                              : 'bg-white text-gray-900 border border-gray-200'
                          }`}>
                            <p className="text-sm">{message.message}</p>
                            <p className={`text-xs mt-1 ${
                              message.sender === 'me' ? 'text-blue-100' : 'text-gray-500'
                            }`}>
                              {message.time}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Message Input */}
                  <div className="p-4 border-t border-gray-200 bg-white">
                    <form onSubmit={handleSendMessage} className="flex items-center gap-2">
                      <button
                        type="button"
                        className="hidden md:block p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                      >
                        <FaPaperclip size={16} />
                      </button>
                      <div className="flex-1 relative">
                        <input
                          type="text"
                          value={newMessage}
                          onChange={(e) => setNewMessage(e.target.value)}
                          placeholder="Type a message..."
                          className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                        <button
                          type="button"
                          className="hidden md:block absolute right-2 top-1/2 transform -translate-y-1/2 p-1 text-gray-600 hover:bg-gray-100 rounded transition-colors"
                        >
                          <FaSmile size={16} />
                        </button>
                      </div>
                      <button
                        type="submit"
                        disabled={!newMessage.trim()}
                        className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <FaPaperPlane size={16} />
                      </button>
                    </form>
                  </div>
                </>
              ) : (
                <div className="flex-1 flex items-center justify-center bg-gray-50">
                  <div className="text-center">
                    <div className="text-6xl mb-4">💬</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Select a conversation</h3>
                    <p className="text-gray-600">Choose a conversation from the list to start messaging</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessagesPage;