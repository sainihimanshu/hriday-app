import React from 'react';
import ShowInsights from '../components/ShowInsights';
import ImportReadings from '../components/ImportReadings';
import { useSelector } from 'react-redux';
import Pitch from '../components/Pitch';
import ReadingsGraph from '../components/ReadingsGraph';
import ReadingsTable from '../components/ReadingsTable';

function Landing() {
  const { readings, fileParsed } = useSelector(state => state.readings);

  const renderData = () => {
    if (fileParsed && readings.length <= 0) return <></>;
    return (
      <>
        <ShowInsights readings={readings} />
        <ReadingsGraph />
        <ReadingsTable />
      </>
    );
  };

  return (
    <div style={{ padding: '4em 3em 4em 3em' }}>
      <ImportReadings />
      {!fileParsed && readings.length === 0 && <Pitch />}
      {renderData()}
    </div>
  );
}

export default Landing;
