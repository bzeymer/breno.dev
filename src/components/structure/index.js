import React from 'react';

function Structure(props) {
  return (
    <div>
      Header
      {props.children}
      Footer
    </div>
  );
}

export default Structure;
