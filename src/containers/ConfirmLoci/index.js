import React, { Component } from 'react';
import { connect } from 'react-redux'

import './styles.css';

class ConfirmLoci extends Component{

  constructor(props){
    super(props)
    this.handleStartClick = this.handleStartClick.bind(this);
  }

  handleStartClick(){
    return this.props.history.push('/memory_test');
  }

  render(){
    return(
      <div>
        <h2>Review Your List</h2> 
        <p>
          Take a moment to review the items you want to remember, and where you've "placed" them in your palace.
          Now would be a good time to try to assign a vivid visualization for each of these items, in the corresponding
          location in your palace. For more information about this process, please see the help documentation.
        </p>
        <p>
          {
            this.props.loci.map((locus, idx) => {
              return(
                <span key={locus.id}>
                  {locus.locusValue} is at {locus.locusName }.<br />
                </span>
              )
            })
          }
        </p>

        <p>
          When you're ready, click the "Start Test" button to try your luck!
        </p>
        <div style={{marginTop: '30px'}}>
          <button onClick={ this.handleStartClick } className='btn btn-success btn-lg btn-block'>Start Test</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {palaceName: state.palace.palaceName,
          loci: state.loci };
}

export default connect(mapStateToProps)(ConfirmLoci);


