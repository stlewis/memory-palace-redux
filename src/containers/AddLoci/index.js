import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from'redux';

class AddLoci extends Component{
constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <h2>Locus For {this.props.palaceName}</h2>
        
        <p>
          Please enter a descriptive name for each of the loci in your palace. To find out more
          about what loci are, please <a href=''>read the help article</a>.
        </p>
        
        <p>
          Once you've added some loci, you can drag them to rearrange their position in the list, or
          click the red X next to the name to remove it.
        </p>
        
        <div id='loci-box-area'>
        </div>

        <div id='loci-list'>
        </div>
        <div>
          <button className='btn btn-lg btn-block btn-success'>Continue</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {palaceName: state.palace.palaceName};
}

//function mapDispatchToProps(dispatch){
  //return bindActionCreators({addPalace}, dispatch);
//}

export default connect(mapStateToProps)(AddLoci);

