import React from 'react';
import { Link } from 'react-router-dom';
import exportImage from '../assets/export.png';
import grpImage from '../assets/grp.png';

const imgStyle = { display: 'block', width: '400px' };
function Instructions() {
  return (
    <div className="container">
      <h3> How do I use the Hriday App? </h3>
      <p>It is super convenient to use the app. First time setup takes 2 minutes.</p>
      <p> Follow these steps.</p>
      <ul>
        <li>Create a WhatsApp group. </li>
        <li>
          Add your family member to it, if you want to share your BP readings with them. This step
          is totally optional.
        </li>
        <li>
          Whenever you monitor your BP using a sphygmomanometer (BP monitoring machine), send that
          reading as message in the following format - <b>higherReading.lowerReading.heartRate</b>
          <br />
          Here are my heart readings that I have been recording.{' '}
          <img src={grpImage} style={imgStyle} alt="whatsapp group containing bp readings" />
        </li>
        <li>
          When you decide to get the insights from the BP readings, export the chat as a text file.
          <img src={exportImage} style={imgStyle} alt="whatsapp group export chat function" />
        </li>
        <li> Import this chat text file to the Hriday App. #Add image</li>
      </ul>
      <p>
        Hriday App will very quickly give you insights about your BP readings.{' '}
        <Link to="/" className="link">
          Try it yourself
        </Link>
      </p>
    </div>
  );
}

export default Instructions;
