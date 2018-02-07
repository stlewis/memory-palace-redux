import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from'redux';
import { addPalace } from '../../actions';

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
    this.props.history.push('/add_loci');
  }

  render(){
    return(
      <div>
        <h2>Name Your Palace</h2> 
        <p>
          It's possible, (even likely), that you're going to want more than one 
          memory palace. With that in mind, give this one a unique name so that you
          can refer back to it later.
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

