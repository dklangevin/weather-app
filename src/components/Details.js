import styled from 'styled-components';

const StyledDiv = styled.div`
  color: white;
  font-size: 15px;
  margin-top: 30px;
`;

function Details(props) {
  return (
    <StyledDiv>
      <div>Humidity: {props.humidity}%</div>
      <div>Pressure: {props.pressure/1000} bar</div>
      <div>Visibility: {props.visibility} ft</div>
    </StyledDiv>
  );
}

export default Details;
