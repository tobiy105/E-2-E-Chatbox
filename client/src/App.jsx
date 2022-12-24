import React from 'react';
import { StreamChat } from 'stream-chat';
import { Channel, ChannelList, Chat } from 'stream-chat-react';
import Cookies from 'universal-cookie';

import { ChannelContainer, ChannelListContainer, Auth } from './components';
import './App.css';

const apiKey = 'd54gavmu7r3z';

const authToken = false;

const client = StreamChat.getInstance(apiKey);

if (authToken) {
  client.connectUser({
    id: cookies.get('userId'),
    name: cookies.get('username'),
    fullName: cookies.get('fullName'),
    image: cookies.get('imageURL'),
    hashedPassword: cookies.get('hashedPassword'),
    contactNumber: cookies.get('contactNumber'),
  }, authToken)
}

const App = () => {
  if (!authToken) return <Auth />
  return (
    <div className='app__wrapper'>
      <Chat client={client} theme="team light">
        <ChannelListContainer />
        <ChannelContainer />
      </Chat>
    </div>
  );
}

export default App
