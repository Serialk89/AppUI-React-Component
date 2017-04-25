import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

export default class Infobox extends Component {
	constructor(props){
		super(props);
		this.state = {
			color: ['danger','success','warning','info'][Math.floor((Math.random() * 3) + 1)]
		}
	}
	
	render(){
		return (
			<div className={this.props.size}>
	            <a href="javascript:void(0)" className="widget">
	                <div className="widget-content widget-content-mini text-right clearfix">
	                    <div className={"widget-icon pull-left themed-background-"+this.state.color}>
	                        <i className={this.props.icon+" text-light-op"}></i>
	                    </div>
	                    <h2 className={"widget-heading h3 text-"+this.state.color}>
	                        <strong><span data-toggle="counter">{this.props.data}</span></strong>
	                    </h2>
	                    <span className="text-muted">{this.props.string}</span>
	                </div>
	            </a>
	        </div>
		)
	}
}

Infobox.defaultProps = {
  	size: 'col-sm-6 col-lg-3',
  	icon: 'fa fa-users'
};

Infobox.propTypes = {
	string: PropTypes.string.isRequired,
	icon: PropTypes.string,
	size: PropTypes.string
};