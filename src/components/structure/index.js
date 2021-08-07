import React from 'react';
import Header from './header';
import Footer from './footer';

import coroa from '../../images/coroa-cortada-verde.png';

function Structure(props) {
  return (
    <div className="structure">
      <Header />
      <img className="coroa" src={coroa} />
      <div className="body">
        {props.children}
        <Footer />
      </div>
    </div>
  );
}

export default Structure;
