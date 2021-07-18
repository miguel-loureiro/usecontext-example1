import React, {Component} from 'react';
import ThemeItem from './ThemeItem';
import {Consumer} from './AppContext';


class Header extends Component {
  
  render() {
    return (
      <Consumer>{
        (context) =>{
          const {selectedTheme, availableThemes} = context.state;
            return (
              <header className="app-header" style={{ backgroundColor:  selectedTheme.backgroundColor, color:  selectedTheme.color  }}>
                <span>{`Current theme: ${selectedTheme.name}`}</span>
                <div className="app-menu">
                  <span>Select theme: </span>
                  {
                    availableThemes.map((theme) => (
                      <ThemeItem
                          key={theme.name}
                          themeName={theme.name}
                      />
                      )
                      )
                  }
                </div>
              </header>
            );
          }
       }
       </Consumer>
        
    );
  }
}

export default Header;
