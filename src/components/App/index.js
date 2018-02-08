import React, { Component } from 'react';
import { Switch, Route} from 'react-router-dom';

import Home from '../../components/Home';
import StartPalace from '../../containers/StartPalace';
import AddLoci from '../../containers/AddLoci';
import PopulateLoci from '../../containers/PopulateLoci';
import ConfirmLoci from '../../containers/ConfirmLoci';
import MemoryTest from '../../containers/MemoryTest';

import './styles.css';

class App extends Component {
  render() {
    return (
      <div id='wrap'>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/start_palace/' component={ StartPalace } />
          <Route exact path='/add_loci/' component={ AddLoci } />
          <Route exact path='/populate_loci/' component={ PopulateLoci } />
          <Route exact path='/confirm_loci/' component={ ConfirmLoci } />
          <Route exact path='/memory_test/' component={ MemoryTest } />
        </Switch>
      </div>
    );
  }
}

export default App;
