import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from'redux';
import { addPalace } from '../../actions';
import { baseURL } from '../../constants';

class StartPalace extends Component{

  constructor(props){
    super(props);
    this.state = {palaceName: this.props.palaceName}
    this.updatePalaceName = this.updatePalaceName.bind(this);
    this.setPalaceName = this.setPalaceName.bind(this);
  }

  updatePalaceName(e){
    let val = e.target.value; 
    this.setState({palaceName: val});
  }
  
  setPalaceName(e){
    e.preventDefault();
    this.props.addPalace(this.state.palaceName);
    this.props.history.push(baseURL + '/add_loci');
  }

  render(){
    return(
      <div>
        <p>
          What should we call your palace? Right now it doesn't matter much, but in the future
          it will be possible to save multiple palaces and come back to train in one's you've previously created,
          so it's important to have a unique name you can refer to.
        </p>
        <form name='namePalace' onSubmit={ this.setPalaceName }>
          <input value={this.state.palaceName} onChange={this.updatePalaceName} className='form-control' type='text' id='palace-name' name='palace_name' placeholder='Palace Name' /><br />
          <input type='submit' value='Name My Palace' className='btn btn-lg btn-block btn-success' />
        </form>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {palaceName: state.palace.palaceName};
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({addPalace}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(StartPalace);

