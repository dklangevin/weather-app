import styled from 'styled-components';

const StyledDiv = styled.div`
  color: white;
  font-size: 100px;
  padding: 0 0 0 20px;
`;

function Temperature(props) {
  return (
    <StyledDiv>
      {props.temp}
      {props.temp ? '\xB0' : null}
    </StyledDiv>
  );
}

export default Temperature;
