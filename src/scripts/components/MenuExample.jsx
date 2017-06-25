'use strict';

// libs
import React from 'react';
import { Link } from 'react-router-dom'

class Menu extends React.Component {

	render() {
		const active = this.props.active;
		const userName = this.props.userName;
                //Example, should create self menu;
		return (
			<nav className="navbar navbar-default navbar-fixed-top navbar-menu">
	      <div className="container-fluid">
	        <div className="navbar-header">
	          <a className="navbar-brand" href=""><img src="img/tikal_logo.png"/></a>
	        </div>
	        <ul className="nav navbar-nav" >
	          <li className={ active === "queues" ? "active" : "" }>
							<Link to="/page/queues"><i className="fa fa-align-justify"></i>{ i18n("queues") }</Link>
						</li>
	          <li className={ active === "agents" ? "active" : "" }>
							<Link to="/page/agents"><i className="fa fa-user"></i>{ i18n("agents") }</Link>
						</li>
	          <li className={"dropdown" + (~["wallboard", "dashboard"].indexOf(active) ? " active" : "")}>
	            <a className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><i className="fa fa-area-chart" ></i>{ i18n("dashboard") }<span className="caret"></span></a>
              <ul className="dropdown-menu">
                <li className="dropdown-submenu">
                  <a><i className="fa fa-building-o"></i> Wall Board</a>
                  <ul className="dropdown-menu">
                    <li><Link to="/page/wallboard/waiting_calls">Show Waiting Calls</Link></li>
                    <li><Link to="/page/wallboard/show_1_column">Show 1 Column</Link></li>
                    <li><Link to="/page/wallboard/show_2_column">Show 2 Columns</Link></li>
                    <li><Link to="/page/wallboard/show_5_column">Show 5 Columns</Link></li>
                  </ul>
                </li>
                <li>
                  <Link to="/page/dashboard"><i className="fa fa-line-chart"></i> Custom</Link>
                </li>
              </ul>
	          </li>
						<li className={"dropdown" + (active === "reports" ? " active" : "")}>
							<a className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><i className="fa fa-pencil-square-o" ></i>{ i18n("reports") }<span className="caret"></span></a>
							<ul className="dropdown-menu">
								<li className="dropdown-submenu">
									<Link to="/page/reports/queues"><i className="fa fa-align-justify"></i>{ i18n("queues") }</Link>
									<ul className="dropdown-menu">
										<li><Link to="/page/reports/queues?category=overview">Overview</Link></li>
										<li className="dropdown-submenu">
											<Link to="/page/reports/queues?category=incoming">Incoming</Link>
											<ul className="dropdown-menu">
												<li><Link to="/page/reports/queues?category=incoming&filter=overview">Overview</Link></li>
												<li><Link to="/page/reports/queues?category=incoming&filter=answered">Answered</Link></li>
												<li><Link to="/page/reports/queues?category=incoming&filter=waiting_time">Waiting Time</Link></li>
												<li><Link to="/page/reports/queues?category=incoming&filter=abandoned">Abandoned</Link></li>
												<li className="dropdown-submenu">
													<Link to="/page/reports/queues?category=incoming&filter=exit_calls">Exit Calls</Link>
													<ul className="dropdown-menu">
														<li><Link to="/page/reports/queues?category=incoming&filter=exit_calls&sub=overview">Overview</Link></li>
														<li><Link to="/page/reports/queues?category=incoming&filter=exit_calls&sub=exit_by_ivr">Exit by IVR</Link></li>
														<li><Link to="/page/reports/queues?category=incoming&filter=exit_calls&sub=exit_by_timeout">EXIT BY TIMEOUT</Link></li>
														<li><Link to="/page/reports/queues?category=incoming&filter=exit_calls&sub=max_callers">Max Callers</Link></li>
														<li><Link to="/page/reports/queues?category=incoming&filter=exit_calls&sub=max_agent_rings_cycles">Max Agent Rings Cycles</Link></li>
														<li><Link to="/page/reports/queues?category=incoming&filter=exit_calls&sub=join_empty">Join Empty</Link></li>
														<li><Link to="/page/reports/queues?category=incoming&filter=exit_calls&sub=leave_when_empty">Leave when Empty</Link></li>
														<li><Link to="/page/reports/queues?category=incoming&filter=exit_calls&sub=exit_by_cb_req">Exit by CB Req</Link></li>
													</ul>
												</li>
												<li><Link to="/page/reports/queues?category=incoming&filter=ring_na">Ring NA</Link></li>
											</ul>
										</li>
										<li className="dropdown-submenu">
											<a tabIndex="-1" href="#">Outgoing</a>
											<ul className="dropdown-menu">
												<li><Link to="/page/reports/queues?category=outgoing&filter=overview">Overview</Link></li>
												<li><Link to="/page/reports/queues?category=outgoing&filter=answered">Answered</Link></li>
												<li><Link to="/page/reports/queues?category=outgoing&filter=unanswered">Unanswered</Link></li>
											</ul>
										</li>
										<li><Link to="/page/reports/queues?category=exceptions">Exceptions</Link></li>
									</ul>
								</li>
								<li className="dropdown-submenu">
									<Link to="/page/reports/agents"><i className="fa fa-user"></i>{ i18n("agents") }</Link>
									<ul className="dropdown-menu">
										<li><Link to="/page/reports/agents?category=overview">Overview</Link></li>
										<li><Link to="/page/reports/agents?category=incoming">Incoming</Link></li>
										<li><Link to="/page/reports/agents?category=incoming_waiting_time">Incoming Waiting Time</Link></li>
										<li><Link to="/page/reports/agents?category=outgoing">Outgoing</Link></li>
										<li><Link to="/page/reports/agents?category=idle">Idle</Link></li>
										<li><Link to="/page/reports/agents?category=actions">Actions</Link></li>
										<li><Link to="/page/reports/agents?category=efficiency">Efficiency</Link></li>
										<li><Link to="/page/reports/agents?category=ring_na">Ring NA</Link></li>
										<li><Link to="/page/reports/agents?category=exceptions">Exceptions</Link></li>
									</ul>
								</li>
								<li><Link to="/page/reports/chat"><i className="fa fa-comment"></i>Chat</Link></li>
								<li><Link to="/page/reports/custom"><i className="fa fa-random"></i>Custom</Link></li>
							</ul>
						</li>
	          <li className={"dropdown" + (~["automatic_dialer", "chat"].indexOf(active) ? " active" : "")}>
	            <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><i className="fa fa-puzzle-piece"></i>{ i18n("modules") }<span className="caret"></span></a>
	            <ul className="dropdown-menu">
	              <li><Link to="/page/automatic_dialer"><i className="fa fa-tty menuIcon"></i>Automatic Dialer</Link></li>
                      <li><Link to="/page/chat"><span><i className="fa fa-comment menuIcon"></i>Chat</span></Link></li>
                <li><Link to="/page/client_chat"><i className="fa fa-comment menuIcon"></i><span>Client snip-chat</span></Link></li>
	            </ul>
	          </li>
	          <li className="dropdown">
	            <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><i className="fa fa-cogs"></i>{ i18n("manager") }<span className="caret"></span></a>
	            <ul className="dropdown-menu">
	              <li><Link to="/page/manager/queues"><i className="fa fa-align-justify"></i>Queues</Link></li>
	              <li><Link to="/page/manager/agents"><i className="fa fa-user"></i>Agents</Link></li>
	              <li><Link to="/page/manager/queue_group"><i className="fa fa-users"></i>Queue Group</Link></li>
	              <li><Link to="/page/manager/agent_group"><i className="fa fa-users"></i>Agent Group</Link></li>
	              <li><Link to="/page/manager/agent_auto_action"><i className="fa fa-sign-in"></i>Agent Auto Action</Link></li>
	              <li><Link to="/page/manager/phonebook"><i className="fa fa-book"></i>Phonebook</Link></li>
	              <li><Link to="/page/manager/recordings"><i className="fa fa-microphone"></i>Recordings</Link></li>
	              <li className="dropdown-submenu">
	                <a><i className="fa fa-user"></i>Users</a>
	                <ul className="dropdown-menu">
	                  <li><Link to="/page/manager/users">Users</Link></li>
	                  <li><Link to="/page/manager/user_permission">User Permission Groups</Link></li>
	                </ul>
	              </li>
	              <li><Link to="/page/manager/department"><i className="fa fa-th-large"></i>Department</Link></li>
	              <li><Link to="/page/manager/abandoned_alerts"><i className="fa fa-rss"></i>Abandoned Alerts</Link></li>
	              <li className="dropdown-submenu">
	                <a><i className="fa fa-share"></i>Email Reports</a>
	                <ul className="dropdown-menu">
	                  <li><Link to="/page/manager/mailing_list">Mailing List</Link></li>
	                  <li><Link to="/page/manager/tasks">Tasks</Link></li>
	                </ul>
	              </li>
	            </ul>
	          </li>
	        </ul>
	        <ul className="nav navbar-nav navbar-right flip">
	          <li><a>{ i18n("version", {"version": "6.02"}) }</a></li>
	          <li className="dropdown">
	            <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><i className="fa fa-user"></i>{ i18n("hello", { "name": userName }) }<i className="fa fa-flag"></i><span className="caret"></span></a>
	            <ul className="dropdown-menu">
	              <li><a href="#">Action</a></li>
	            </ul>
	          </li>
	        </ul>
	      </div>
	    </nav>
		)
	}
}

export default Menu;
