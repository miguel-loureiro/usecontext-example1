import React, {Component} from 'react';
import {Consumer} from './AppContext';

class Footer extends Component {
    render() {
        return (
            <Consumer>{
                (context) =>{
                    const {selectedTheme} = context.state;
                    return(
                        <footer className="app-footer">
                            <span>{selectedTheme.name}</span>
                        </footer>
                    );
                }
            }
            </Consumer>
        );   
    }
}
export default Footer;