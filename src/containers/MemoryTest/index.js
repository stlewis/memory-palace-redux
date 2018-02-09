import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { baseURL } from '../../constants';

import './styles.css';

class MemoryTest extends Component{
  constructor(props){
    super(props);
    this.state = { 
      loci: this.props.loci, 
      currentLocus: this.props.loci[0], 
      currentGuess: '',
      currentMessage: '' }
    this.bindHandlers();
  }

  bindHandlers(){
    this.updateGuess = this.updateGuess.bind(this);
    this.submitGuess = this.submitGuess.bind(this);
  }

  updateGuess(e){
    let value = e.target.value; 
    this.setState({currentGuess: value});
  }

  submitGuess(e){
    e.preventDefault();
    if( this.state.currentGuess === this.state.currentLocus.locusValue){
      let currentIdx = this.state.loci.indexOf(this.state.currentLocus);
      this.setState({currentLocus: this.state.loci[currentIdx + 1], currentMessage: '', currentGuess: '' });
      e.target.focus();
    }else{
      this.setState({currentMessage: "Sorry, that's not right. Try again!"});
    }
  }

  render(){

    if(this.state.currentLocus){
      return(
        <div>
          <div>{ this.state.currentMessage }</div>
          <form onSubmit={ this.submitGuess } >
            <div className='form-group'>
              <label htmlFor=''>What is at {this.state.currentLocus.locusName }?</label>
              <input onChange={ this.updateGuess } value={ this.state.currentGuess } type='text' className='form-control' autoFocus />
              <input type='submit' value='Submit' className='btn btn-success' />
            </div>
          </form>
        </div>
      );
    }else{
      return(
        <div>
          <h2>Congratulations!</h2>
          <p>
            You remembered everything!
            <Link to={baseURL + '/'} className='btn btn-success btn-block btn-lg'>Start Over!</Link>
          </p>
        </div>
      ); 
    }

  }

}

function mapStateToProps(state){
  return {palaceName: state.palace.palaceName,
          loci: state.loci };
}


export default connect(mapStateToProps)(MemoryTest);

