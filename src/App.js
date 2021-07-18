import React, {Component} from 'react';
import {Consumer} from './AppContext'
import Header from './Header';
import Body from './Body';
import Footer from './Footer';


class App extends Component {
  render() {
    return (
      <Consumer>{
        (context) =>{
          const {selectedTheme} = context.state;
          return(
            <div  className="app" style={{backgroundColor: selectedTheme.backgroundColor, color: selectedTheme.color}}>
              <Header />
              <Body />
              <Footer />
            </div>
          );
        }
      }
       </Consumer>
    );
  }
}


export default App;
