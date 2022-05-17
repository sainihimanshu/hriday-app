import React from 'react';

function Story() {
  return (
    <div className="container">
      <h3> The story behind the Hriday App</h3>
      <p>
        My mother suffers from chronic hypertension. Every time we visit our cardiologist, he asks
        for her previous blood pressure(BP) readings. We used the paper-pen method, excel, and a few
        heart monitor apps to record her BP. Nothing worked well for monitoring & storing BP
        readings. It was hard for her to add records to the apps.
      </p>
      <p>
        One fine day, when I was in the office, she sent me her BP readings on WhatsApp. Something
        clicked in my mind. She is super familiar with WhatsApp just like most of our parents are. I
        thought about using WhatsApp regulary to monitor her BP. Thus, the Hriday App was born. The
        app started as a personal project for my mother. Now all of us in our family are using the
        app regularly.
      </p>
      <h3> How safe is the app? </h3>
      <p>
        A very prudent question. The app is as safe as it can get. None of your data leaves your
        mobile or computer. All data processing is done right in your browser. It is an open source
        app. You can check its source code on{' '}
        <a href="https://github.com/sainihimanshu" className="link">
          github.
        </a>
        <br />
        <br />
        If you have any more questions or suggestions, please dm on{' '}
        <a href="https://twitter.com/_himsaini" className="link">
          twitter.
        </a>
      </p>
    </div>
  );
}

export default Story;
