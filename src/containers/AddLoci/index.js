import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from'redux';
import { updateLoci } from '../../actions';
import Locus  from '../../components/Locus';
import Dragula from 'react-dragula';

import './styles.css';

class AddLoci extends Component{
  
  constructor(props){
    super(props);

    this.palaceName = this.props.palaceName ? this.props.palaceName : 'Your Palace';
    
    this.drake = null;
    this.state = {currentLocus: '', loci: this.props.loci }
    this.bindResponders();
  }

  bindResponders(){
    this.handleAddLoci     = this.handleAddLoci.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.dragulaDecorator  = this.dragulaDecorator.bind(this);
    this.reorderLoci       = this.reorderLoci.bind(this);
    this.handleFinishLoci  = this.handleFinishLoci.bind(this);
    this.handleDeleteLoci  = this.handleDeleteLoci.bind(this);
  }


  dragulaDecorator(componentBackingInstance){
    if(componentBackingInstance){
      let options = {} ;
      this.drake = Dragula([componentBackingInstance], options);
      this.drake.on('drop', this.reorderLoci);
    }
  }

  reorderLoci(dropped, container, sourceContainer, nextItem){
    let lociNames = Array.from(container.childNodes).map((n) => {return n.getAttribute('id') });
    let reordered = [];
    let self = this;

    lociNames.forEach((name) => {
      let found = self.state.loci.filter((locus) => {
        return locus.id === name; 
      })[0];

      reordered.push(found);
    });
    self.setState({loci: reordered});
  }

  handleAddLoci(e){
    e.preventDefault();
    let currentLoci = [...this.state.loci]
    currentLoci.push({locusName: this.state.currentLocus, locusValue: undefined, id: this.state.currentLocus + Date.now() })
    
    this.setState({currentLocus: '', loci: currentLoci });
    e.target.focus();
  }

  handleFinishLoci(e){
    this.props.updateLoci(this.state.loci)
    return this.props.history.push('/populate_loci');
  }

  handleDeleteLoci(lociId){

    let current_loci  = this.state.loci
    let toRemove      = current_loci.filter((locus) => { return (locus.id === lociId);  })[0];
    let removalIndex  = current_loci.indexOf(toRemove);
    current_loci.splice(removalIndex, 1);
    
    this.setState({loci: current_loci});
  }

  handleInputChange(e){
    let val = e.target.value; 
    this.setState({currentLocus: val});
  }

  render(){
    return(
      <div>
        <p>
          Please enter a descriptive name for each of the loci in { this.palaceName }. To find out more
          about what loci are, please <a href=''>read the help article</a>.
        </p>
        
        <p>
          Once you've added some loci, you can drag them to rearrange their position in the list, or
          click the red X next to the name to remove it.
        </p>
        <form name='addLoci' onSubmit={ this.handleAddLoci }>
          <div className='container'>
            
            <div className='row'>
              <div className='col-md-10'>
                <input value={ this.state.currentLocus } type='text' className='form-control' onChange={ this.handleInputChange } placeholder='Locus' autoFocus />
              </div>
              <div className='col-md-2'>
                <input type='submit' value='Add' className='btn btn-success' />
              </div>
            </div>

            <div className='row' id='lociRow'>
              <div className='col-md-12' ref={ this.dragulaDecorator }>
                {
                  this.state.loci.map((locus, idx) =>{
                    return <Locus handleDelete={ this.handleDeleteLoci } id={locus.id} key={locus.locusName + idx} locusName={ locus.locusName } locusValue={ locus.locusValue } /> 
                  })
                }
              </div>
            </div>
          </div>
        </form>

        <div style={ { marginTop: '30px' } }>
          <button onClick={ this.handleFinishLoci } className='btn btn-lg btn-block btn-success'>Continue</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(AddLoci);

