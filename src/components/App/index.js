import React, { Component } from 'react';
import { Switch, Route} from 'react-router-dom';

import Home from '../../components/Home';
import StartPalace from '../../containers/StartPalace';
import AddLoci from '../../containers/AddLoci';
import PopulateLoci from '../../containers/PopulateLoci';
import ConfirmLoci from '../../containers/ConfirmLoci';
import MemoryTest from '../../containers/MemoryTest';
import { baseURL } from '../../constants';

import './styles.css';

class App extends Component {
  render() {
    return (
      <div id='wrap'>
        <Switch>
          <Route exact path={ baseURL + '/' } component={Home} />
          <Route exact path={ baseURL + '/start_palace/' } component={ StartPalace } />
          <Route exact path={ baseURL + '/add_loci/' } component={ AddLoci } />
          <Route exact path={ baseURL + '/populate_loci/' } component={ PopulateLoci } />
          <Route exact path={ baseURL + '/confirm_loci/' } component={ ConfirmLoci } />
          <Route exact path={ baseURL + '/memory_test/'  } component={ MemoryTest } />
        </Switch>
      </div>
    );
  }
}

export default App;
