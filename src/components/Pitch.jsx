import React from 'react';

function Pitch() {
  return (
    <div style={{ width: '70%', marginTop: '2em' }}>
      <p>
        Hriday is a free app which can help you in better
        <mark> understanding your heart health.</mark>
      </p>
      <br />
      <p>
        It can tell you{' '}
        <strong>
          mostly when your blood pressure (BP) is elevated, what is your average BP, how many times
          it is elevated, what is the maximum & minimum BP ever recorded, which trend is your BP
          following.
        </strong>{' '}
      </p>
      <br />

      <p>
        You can also export these data and insights as a pdf and share with your physician right
        from the app.
      </p>
    </div>
  );
}

export default Pitch;
