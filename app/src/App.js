import React from 'react';
import CustomerList from './CustomerList';
import MenuBar from './MenuBar';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CustomerForm from './CustomerForm';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core';
import { purple } from '@material-ui/core/colors';


class App extends React.Component {
  render() {

    const palette = { primary: { main: '#FF9800' } };
    const themeName = 'Pizazz Razzmatazz Pronghorn';
    
    const theme= createMuiTheme({ palette, themeName });
    

      return(
          <div>
              <ThemeProvider theme={theme}>
                <Router>
                    <MenuBar></MenuBar>
                    <Switch>
                        <Route exact path="/customers" component={CustomerList} />
                        <Route path="/customers/new" component={CustomerForm} />
                    </Switch>
                </Router>
              </ThemeProvider>
          </div>
      )
  }
}

export default App
