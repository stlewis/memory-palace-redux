import React from 'react';
import { Link } from 'react-router-dom';
import { baseURL } from '../../constants';

export default function(){
  return(
    <div>
        <p>
          Welcome to the Memory Palace Trainer. This application will help you master the
          Memory Palace memorization technique by helping you to construct and visualize your
          own Memory Palace. Before you start, if you haven't already, you should take a look 
          at the <a href=''>about page</a> to learn about the technique and how to use the trainer.
        </p>
        <p>
          If you're ready to get started, click the big green button below!
        </p> 

        <Link className='btn btn-success btn-block btn-lg' to={baseURL + '/start_palace'}>Start Palace</Link>
    </div>
  );
}
