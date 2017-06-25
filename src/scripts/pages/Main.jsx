'use strict'

// libs
import React from 'react';
import { observer } from 'mobx-react';

// pages
import Menu from '../components/Menu';
import Queues from './Queues';
import Agents from './Agents';
import WallBoard from './Dashboard/WallBoard';
import Dashboard from './Dashboard/Dashboard';
import Reports from './Reports';
import AutomaticDialer from './Modules/AutomaticDialer';
import Chat from './Modules/Chat';
import ClientSnipChat from './Modules/ClientSnipChat';
import Manager from './Manager';
import PageNotFound from './PageNotFound';
import ChatWindow from './ChatWindow';

// store
import DataProvider from '../stores/DataProvider';

@observer
class Main extends React.Component {

	render() {
            console.log('render method main page');
		const Page = {
			queues: Queues,
			agents: Agents,
			wallboard: WallBoard,
			dashboard: Dashboard,
			reports: Reports,
			automatic_dialer: AutomaticDialer,
			chat: Chat,
			manager: Manager,
      client_chat: ClientSnipChat,
      chat_window: ChatWindow
		}[ this.props.page ];

		if (!Page)
			return <PageNotFound />;
    if(this.props.page === 'chat_window')
      return <ChatWindow />;

		return (
			<div>
				<Menu
					active={ this.props.page }
					userName={ this.props.user.name }
				/>
				<div className="content">
					<Page
						data={ DataProvider.getData() }
						subPage={ this.props.subPage }
						params={ this.props.params }
					/>
				</div>
			</div>
		)
	}
}

export default Main;
