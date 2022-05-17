import { isEmpty } from 'lodash';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { setReadings } from '../features/readingsSlice';
import '../index.css';

import sampleReadings from '../assets/readings.json';

function ReadingsInput() {
  const chatInput = useRef();

  const dispatch = useDispatch();

  const parseRecordings = e => {
    e.preventDefault();
    console.log('1');

    const { files } = chatInput.current;

    console.log(files);
    if (isEmpty(files)) return;

    const chatFile = files[0];

    console.log({ chatFile });
    const fileReader = new FileReader();
    fileReader.onload = () => {
      const chatTxt = fileReader.result;
      const validRowRegex = new RegExp('(\\d+.\\d+.\\d+$)');
      const rawMsgs = chatTxt.split('\n').filter(row => validRowRegex.test(row));
      const selectedRows = [];
      rawMsgs.forEach(row => {
        let [tsPart, reading] = row.split('-');
        tsPart = tsPart.trim();
        reading = reading.split(':')[1].trim();

        let [diastolic, systolic, heartRate] = reading.split('.');
        const recordedAt = tsPart;

        selectedRows.push({
          diastolic,
          systolic,
          heartRate,
          recordedAt,
        });
      });

      dispatch(setReadings(selectedRows));
    };

    fileReader.readAsText(chatFile);
  };

  return (
    <section>
      <h2>A small step towards Heart health</h2>
      <div className="txt-row">
        <label className="btn import" htmlFor="chatFile">
          Upload txt file
        </label>
        <input
          style={{ display: 'none' }}
          id="chatFile"
          ref={chatInput}
          type="file"
          onChange={parseRecordings}
          accept=".txt"
        />
        <button
          className="btn sample"
          onClick={() => {
            dispatch(setReadings(sampleReadings));
          }}
        >
          Load sample data
        </button>
      </div>
    </section>
  );
}

export default ReadingsInput;
