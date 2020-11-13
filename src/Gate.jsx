import React from "react";
import styled from "styled-components/macro";

const StyledGate = styled.div`
  div.gate {
    width: 4em;
    height: 4em;

    border-radius: 0.2rem;
    text-align: center;
  }

  div.gate-text {
    padding-top: 30%;
    font-weight: bold;
    font-size: 1rem;
  }

  div.gate:hover {
    background: #3f51b5;
    box-shadow: 0 3px 5px 2px rgba(33, 203, 243, 0.3);
  }
  .H {
    border: 2px solid #b186f7;
    color: #b186f7;
  }

  .CNOT {
    border: 2px solid #1efbfb;
    color: #1efbfb;
  }

  .T,
  .S {
    border: 2px solid #ff26a8;
    color: #ff26a8;
  }

  .X,
  .Y,
  .Z {
    border: 2px solid #fdb813;
    color: #fdb813;
  }

  .Rx,
  .Ry,
  .Rz {
    border: 2px solid #c9fb1e;
    color: #c9fb1e;
  }
`;

const Gate = ({ gateName, selectGate }) => {
  return (
    <StyledGate>
      <div className={`${gateName} gate`} onClick={() => selectGate(gateName)}>
        <div className="gate-text">{gateName}</div>
      </div>
    </StyledGate>
  );
};
export default Gate;
