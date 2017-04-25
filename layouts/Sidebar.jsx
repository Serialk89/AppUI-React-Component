import React, { Component } from 'react';

export default class Sidebar extends Component {
	constructor(props){
		super(props);
		this.state = {
			active: '',
			itemmenu: [
				{nom:'Home',link:''},
				{nom:'Ventas',link:'ventas'},
				{nom:'Gerencia',link:'gerencia'},
				{nom:'Produccion',link:'produccion'},
				{nom:'Compras',link:'compras'},
				{nom:'Bodega',link:'bodega'},
				{nom:'Taller',link:'taller'},
				{nom:'Personas',link:'personas'}
			]
		}
	}
	componentDidMount(){
		if (this.state.active !== this.props.active) {
    		this.setState({active: this.props.active});
  		}
	}
	componentWillReceiveProps(nextProps){
		if (this.state.active !== nextProps.active) {
    		this.setState({active: nextProps.active});
  		}
	}
	render(){
		return(
			<div id="sidebar">
			    <div id="sidebar-brand" className="themed-background">
			        <a href="index.php" className="sidebar-title">
			            <i className="fa fa-cube"></i> <span className="sidebar-nav-mini-hide">MERP <strong>APP</strong></span>
			        </a>
			    </div>
			    <div className="slimScrollDiv">
			    	<div id="sidebar-scroll">
				        <div className="sidebar-content">
				            <ul className="sidebar-nav">
	                            {this.state.itemmenu.map(function(obj) {
									const cl = (obj.link == this.state.active) ? "active" : "";
						            return (<li key={obj.nom}>
						                        <a href={'/'+obj.link} className={cl}><i className={"fa fa-user-circle-o sidebar-nav-icon"}></i><span className="sidebar-nav-mini-hide">{obj.nom}</span></a>
						                    </li>
						            );
						        },this)}
	                        </ul>
				        </div>
			    	</div>
			    </div>
			    <div id="sidebar-extra-info" className="sidebar-content sidebar-nav-mini-hide">
			        <div className="text-center">
			            <small>Created <i className="fa fa-rebel text-danger"></i> <a href="http://goo.gl/vNS3I" target="_blank">by Kirico</a></small><br />
			            <small><span id="year-copy">2017</span> © <a href="http://kirico.cl" target="_blank">React-AppUI Alpha</a></small>
			        </div>
			    </div>
			</div>
		)
	}
}