import React, { Component } from 'react';

class Text extends Component {
    render(){
        return (
            <div className="row">
                {this.props.copy.map(function(p, i) {
                    return <p key={i}>{ p }</p>
                })}
            </div>
        );
    }
}

export default Text;
