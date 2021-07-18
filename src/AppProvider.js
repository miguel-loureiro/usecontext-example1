
import React, {Component} from 'react';
import PropTypes from "prop-types";
import {Provider} from './AppContext';

const darkTheme = {
    name: "dark",
    backgroundColor: "#282c34",
    color: "#0956f3",
    linkColor: "#61dafb",
    logoBackground: "white",
  };
  
  const lightTheme = {
    name: "light",
    backgroundColor: "#0956f3",
    color: "#282c34",
    linkColor: "#61dafb",
    logoBackground: "red",
  };
  
  class AppProvider extends Component {
    constructor(props) {
      super(props)
      this.state = {
        selectedTheme: darkTheme,
        availableThemes: [darkTheme,lightTheme],
      };
    }
    selectTheme = (name) => {
        const theme = this.state.availableThemes.find(theme => theme.name === name);
        this.setState({selectedTheme: theme});
    }
  
    render() {
      return (
            <Provider value={{
                    state: this.state,
                    selectTheme: this.selectTheme,    
               }}>
                {this.props.children}
            </Provider>
      );
    }
  }
  
AppProvider.propTypes = {
  children: PropTypes.node,
};
 
  export default AppProvider;
