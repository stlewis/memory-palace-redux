import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from'redux';
import { updateLoci } from '../../actions';

import './styles.css';

class PopulateLoci extends Component{

  constructor(props){
    super(props);
    this.state = {loci: [...this.props.loci]};
    
    this.updateLocusValue = this.updateLocusValue.bind(this);
    this.handleFinishLoci = this.handleFinishLoci.bind(this);
  }

  updateLocusValue(e){
    e.preventDefault();
    let locusId      = e.target.getAttribute('data-locus-id');
    let locusValue   = e.target.value;
    let locus        = this.state.loci.filter((locus) => { return locus.id === locusId })[0]
    locus.locusValue = locusValue; // This mutates local state -- is this something we care about?
  }

  handleFinishLoci(e){
    this.props.updateLoci(this.state.loci)
    return this.props.history.push('/confirm_loci');
  }

  render(){
    return(
      <div>
        <h2>Populate { this.props.palaceName }</h2> 
        <p>
          Now that you've decided what your loci are, and what order they appear in,
          the next step is to fill up each loci with an item you'd like to remember.
          For more information about how this is done, refer to the help documentation.
        </p>
        <p>
          Once you've finished adding items, click on "Continue" to confirm your selections
          and start testing yourself.
        </p>
        {
          this.props.loci.map((locus, idx) =>{
            return(
              <span key={locus.id} className='form-group'>
                <label htmlFor={"value-for-" + locus.locusName}>What is at {locus.locusName }?</label>
                <input onChange={ this.updateLocusValue } value={locus.locusValue } data-locus-id={locus.id} type='text' className='form-control' id={"value-for-" + locus.locusName } />
              </span>
            )
          })
        }
        <div>
          <button onClick={ this.handleFinishLoci } className='btn btn-success btn-lg btn-block'>Continue</button>
        </div>
      </div>
    );
  }

}

function mapStateToProps(state){
  return {palaceName: state.palace.palaceName,
          loci: state.loci };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({updateLoci}, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(PopulateLoci);
