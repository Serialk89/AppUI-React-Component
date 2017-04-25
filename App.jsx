import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';

import Header from './layouts/Header.jsx';
import Sidebar from './layouts/Sidebar.jsx';

// App component - represents the whole app
export default class App extends Component {
	constructor(props){
		super(props);
	}
	componentDidMount(){
		$("#page-content").css({'height':$(window).height()+"px"});
	}
	render() {
		return (
			<div id="page-wrapper">
	    		<div className="preloader">
			        <div className="inner">
			            <div className="preloader-spinner themed-background hidden-lt-ie10"></div>
						<h3 className="text-primary visible-lt-ie10"><strong>Loading..</strong></h3>
			        </div>
			    </div>
	   			<div id="page-container" className="header-fixed-top sidebar-visible-lg-full">
			        <div id="main-container">
			        	<Sidebar active={this.props.active} />
			        	<Header active={this.props.active} />
			        	{this.props.content}
			        </div>
			    </div>
			</div>
	    )
	}
}

// para la conexion con mongo, se crea un contenedor
App.propTypes = {
	content: PropTypes.element.isRequired,
	active: PropTypes.string
    //tasks: PropTypes.array.isRequired,
	//incompleteCount: PropTypes.number.isRequired,
	//currentUser: PropTypes.object,
};
/*
export default createContainer(() => {
	Meteor.subscribe('tasks');
	return {
		tasks: Tasks.find({}, { sort: { createdAt: -1 } }).fetch(),
		incompleteCount: Tasks.find({ checked: { $ne: true } }).count(),
		currentUser: Meteor.user(),
	};
}, App);
*/