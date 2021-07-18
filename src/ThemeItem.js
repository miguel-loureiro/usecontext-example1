import React, {Component} from 'react';
import PropTypes from "prop-types";
import {Consumer} from './AppContext';

class ThemeItem extends Component {
  render() {
    const {themeName} = this.props;
    return (
      <Consumer>{
        (context) =>{
          const {state, selectTheme} = context;
          const {selectedTheme} = state;
          return (
              <button style={{color: selectedTheme.linkColor}} 
                      onClick={() => selectTheme(themeName)}>
                  {themeName}
              </button>
          );
        }
        }
        </Consumer>
    );
  }
}
ThemeItem.propTypes = {
  themeName: PropTypes.string.isRequired,
};
export default ThemeItem;
