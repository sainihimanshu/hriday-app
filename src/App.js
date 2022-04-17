import { useState } from 'react';
import { Container } from 'react-bootstrap';
import ReadingsInput from './components/ReadingsInput';
import ReadingsGraph from './components/ReadingsGraph';
import { isEmpty } from 'lodash';
import InputAnalytics from './components/InputAnalytics';
import sample from './assets/readings.json';
function App() {
  const [readings, setReadings] = useState(sample);

  return (
    <Container
      style={{ margin: '5rem auto 0 auto' }}
      className="d-flex flex-column justify-content-center align-items-center"
    >
      <div>
        <h2 style={{ textAlign: 'center' }}>A small step towards Heart health</h2>
        <ReadingsInput readings={readings} setReadings={setReadings} />
        {!isEmpty(readings) && <ReadingsGraph readings={readings} />}
        <InputAnalytics rawReadings={readings} />
      </div>
    </Container>
  );
}

export default App;
