import React from 'react';
import { ChannelList, useChatContext } from 'stream-chat-react';
import { ChannelSearch, TeamChannelList, TeamChannelPreview } from './';
import Cookies from 'universal-cookie';
import webIcon from '../assets/index.png'
import LogoutIcon from '../assets/logout.png'

const SideBar = () => (
    <div className='channel-list__sidebar'>
        <div className='channel-list__sidebar__icon1'>
            <div className='icon1__inner'>
                <img src={webIcon} alt='Personal Trainer' width="30"></img>
            </div>
        </div>
        <div className='channel-list__sidebar__icon1'>
            <div className='icon1__inner'>
                <img src={LogoutIcon} alt='Logout' width="30"></img>
            </div>
        </div>
    </div>
)

const CompanyHeader = () => (
    <div className='channel-list__header '>
        <p className='channel-list__header__text'>
            Personal Trainer
        </p>
    </div>
)


const ChannelListContainer = () => {
  return (
    <>
        <SideBar />
        <div className='channel-list__list__wrapper'>
            <CompanyHeader />
            <ChannelSearch />
            <ChannelList 
                filters={{}}
                channelRenderFilterFn={() => {}}
                List={(listProps) => (
                    <TeamChannelList 
                        {...listProps}
                        type="team"
                    />
                )}
                Preview={(previewProps)  => (
                    <TeamChannelPreview 
                        {...previewProps}
                        type="team"
                    />
                )}
            />
            <ChannelList 
                filters={{}}
                channelRenderFilterFn={() => {}}
                List={(listProps) => (
                    <TeamChannelList 
                        {...listProps}
                        type="messaging"
                    />
                )}
                Preview={(previewProps)  => (
                    <TeamChannelPreview 
                        {...previewProps}
                        type="messaging"
                    />
                )}
            />
        </div>
    </>
  );
}

export default ChannelListContainer;
