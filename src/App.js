import styled from 'styled-components';

import Weather from './components/Weather';

import { useEffect, useState } from 'react';

import './App.css';

const StyledDiv = styled.div`
  height: 50%;
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
`;

function App() {
  const [lat, setLat] = useState([]);
  const [lon, setLong] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });

      await fetch(
        `${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_API_KEY}&units=imperial`
      )
        .then((res) => res.json())
        .then((result) => {
          setData(result);
          console.log(result);
        });
    };
    fetchData();
  }, [lat, lon]);

  return (
    <StyledDiv className='App'>
      {data.main !== undefined ? <Weather data={data} /> : <div></div>}
    </StyledDiv>
  );
}

export default App;
