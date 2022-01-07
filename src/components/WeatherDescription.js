import styled from 'styled-components';

const StyledDiv = styled.div`
  color: white;
  font-size: 20px;
`;

function WeatherDescription(props) {
  return <StyledDiv>{props.description}</StyledDiv>;
}

export default WeatherDescription;
