import React, { useState } from 'react';
import { StreamChat } from 'stream-chat';
import { Channel, ChannelList, Chat } from 'stream-chat-react';
import Cookies from 'universal-cookie';

import { ChannelContainer, ChannelListContainer, Auth } from './components';
import './App.css';

const apiKey = 'd54gavmu7r3z';
const cookies = new Cookies();

const authToken = cookies.get("token");



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
  const [createType, setCreateType] = useState('');
  const [isCreating, setIsCreating] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  if (!authToken) return <Auth />
  return (
    <div className='app__wrapper'>
      <Chat client={client} theme="team light">
        <ChannelListContainer 
          isCreating={isCreating}
          setIsCreating={setIsCreating}
          setCreateType={setCreateType}
          setIsEditing={setIsEditing}
        />
        <ChannelContainer 
          isCreating={isCreating}
          setIsCreating={setIsCreating}
          isEditing={isEditing}
          setIsEditing={setIsEditing}
          createType={createType}
        />
      </Chat>
    </div>
  );
}

export default App
