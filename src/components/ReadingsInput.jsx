import { isEmpty } from 'lodash';
import { useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

// import moment from 'moment';

function ReadingsInput({ readings, setReadings }) {
  const chatInput = useRef();

  const parseRecordings = e => {
    const { files } = chatInput.current;

    if (isEmpty(files)) return;

    const chatFile = files[0];

    const fileReader = new FileReader();
    fileReader.onload = () => {
      const chatTxt = fileReader.result;

      const validRowRegex = new RegExp("(\\d+'\\d+'\\d+$)");

      const rawMsgs = chatTxt.split('\n').filter(row => validRowRegex.test(row));

      const selectedRows = [];
      rawMsgs.forEach(row => {
        let [tsPart, reading] = row.split('-');
        tsPart = tsPart.trim();
        reading = reading.split(':')[1].trim();

        let [diastolic, systolic, heartRate] = reading.split("'");
        const recordedAt = tsPart; // moment(tsPart, 'DD/MM/YY, HH:mm');

        // console.log(tsPart);
        // const recordedAt = tsPart; //dayjs(tsPart, 'DD/MM/YY, HH:mm');
        // console.log(recordedAt);
        selectedRows.push({
          diastolic,
          systolic,
          heartRate,
          recordedAt,
        });
      });

      setReadings(selectedRows);
    };

    fileReader.readAsText(chatFile);
  };

  return (
    <Form style={{ width: '100%' }}>
      <Form.Group className="my-4" controlId="chatFile">
        <Form.Label>Upload exported chat txt file</Form.Label>
        <Form.Control ref={chatInput} type="file" accept=".txt" />
      </Form.Group>
      <Button
        onClick={() => {
          parseRecordings();
        }}
      >
        Import txt readings
      </Button>
    </Form>
  );
}

export default ReadingsInput;
