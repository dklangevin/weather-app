import styled from 'styled-components';

const StyledDiv = styled.div`
  color: white;
  font-size: 30px;
`;

function CityLabel(props) {
  return (
    <StyledDiv>
      {props.city}, {props.country}
    </StyledDiv>
  );
}

export default CityLabel;
