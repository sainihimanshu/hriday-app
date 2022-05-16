import React from 'react';
import './animate.css';

function Animate() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div class="lds-ripple">
        <div></div>
        <div></div>
      </div>
      <strong>Doing magic for your heart readings...</strong>
    </div>
  );
}

export default Animate;
