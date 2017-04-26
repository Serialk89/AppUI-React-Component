import React, { Component } from 'react';

export default class Header extends Component{
	constructor(props){
		super(props);
		this.state = {
			active: '',
			username: '',
			apellido: ''
		}
	}
	componentDidMount(){
		//console.log(Meteor.user().profile.nombre, Meteor.user().profile.apellido);
		if (this.state.active !== this.props.active) {
    		this.setState({
    			active: this.props.active
    		});
  		}
	}
	componentWillReceiveProps(nextProps){
		if (this.state.active !== nextProps.active) {
    		this.setState({active: nextProps.active});
  		}
	}
	infouser(){
		if (Meteor.user()){
			return Meteor.user().profile.nombre+" "+Meteor.user().profile.apellido+" "+Meteor.user().profile.tipousuario;	
		}
	}
	render(){
		//const name = Meteor.user().profile.nombre;
		//const ape = Meteor.user().profile.apellido;
		return(
			<header className="navbar navbar-inverse navbar-fixed-top">
			    <ul className="nav navbar-nav-custom">
			        <li>
			            <a href="javascript:void(0)">
			                <i className="fa fa-ellipsis-v fa-fw animation-fadeInRight" id="sidebar-toggle-mini"></i>
			                <i className="fa fa-bars fa-fw animation-fadeInRight" id="sidebar-toggle-full"></i>
			            </a>
			        </li>
			        <li className="hidden-xs animation-fadeInQuick">
			            <a href=""><strong className='text-capitalize'>{this.state.active}</strong></a> 
			        </li>
			    </ul>
			    <ul className="nav navbar-nav-custom pull-right">
			        <li>
			            <a href="javascript:void(0)">
			                <i className="gi gi-settings"></i>
			            </a>
			        </li>
			        <li className="dropdown">
			        	<a href="javascript:void(0)">
			                <strong className="text-uppercase">{this.infouser()}</strong> <img src="/img/placeholders/avatars/avatar.jpg" alt="avatar" />
			            </a>
			        </li>
			    </ul>
			</header>
		)
	}
}