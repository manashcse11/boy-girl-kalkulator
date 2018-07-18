import React from 'react';
import styled from 'styled-components';

const StepperContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1em;
`;

const Stepper = ({
  handleNext,
  handlePrevious,
  disableNext,
  disablePrevious
}) => <StepperContainer>
  <button onClick={handlePrevious} disabled={disablePrevious} >Previous</button>
  <button onClick={handleNext} disabled={disableNext} >Next</button>
</StepperContainer>;

export default Stepper;