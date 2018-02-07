import React, { Component } from 'react';
import { Switch, Route} from 'react-router-dom';

import Home from '../../components/Home';
import StartPalace from '../../containers/StartPalace';
import AddLoci from '../../containers/AddLoci';
import PopulateLoci from '../../components/PopulateLoci';
import ConfirmLoci from '../../components/ConfirmLoci';
import MemoryTest from '../../components/MemoryTest';

import './styles.css';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/start_palace/' component={ StartPalace } />
          <Route exact path='/add_loci/' component={ AddLoci } />
        </Switch>
      </div>
    );
  }
}

export default App;
