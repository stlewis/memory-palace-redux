import React from 'react';
import './styles.css';

export default function Locus(props){
  const { locusName } = props

  return(
    <div id={ props.id } className='locusContainer'>
      <div className='row'>
        <div className='col-md-11'>{ locusName }</div>
        <div className='col-md-1 delete-loci' onClick={() => { props.handleDelete(props.id) } }>X</div>
      </div>
    </div>
  );
}
