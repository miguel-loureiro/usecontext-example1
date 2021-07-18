import React, {Component} from 'react';
import logo from "./logo.svg";
import {Consumer} from './AppContext'


class Logo extends Component {
    render() {

        return (
            <Consumer>{
                (context) =>{
                    const {selectedTheme} = context.state;
                return (
                    <img src={logo} 
                        className="app-logo" alt="logo" 
                        style={{ backgroundColor: selectedTheme.logoBackground }} />
                    );
                }
            }
            </Consumer>
        );
    }
}
export default Logo;