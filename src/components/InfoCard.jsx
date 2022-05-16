import React from 'react';

function InfoCard(props) {
  return (
    <div
      style={{
        color: 'white',
        backgroundColor: `${props.bg || 'yellowgreen'}`,
        fontSize: '1.2em',
        borderRadius: '5px',
        boxShadow: '2px 2px 8px grey',
        width: '45%',
        minHeight: '5em',
        verticalAlign: 'center',
      }}
      className="p-3 m-2"
      dangerouslySetInnerHTML={{ __html: props.children }}
    ></div>
  );
}

export default InfoCard;
