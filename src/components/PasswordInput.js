import React from "react";
import styled from "@emotion/styled";

const Input = styled.input`
  background-color: hsl(
    ${props =>
      props.value.length <= 10
        ? props.value.length === 0
          ? 200
          : props.value.length * 10
        : 100},
    100%,
    50%
  );
`;

export default function PasswordInput() {
  const [inputValue, setInputValue] = React.useState("");

  return (
    <Input
      value={inputValue}
      type="password"
      onChange={event => {
        setInputValue(event.target.value);
      }}
    />
  );
}

// Leons Lösung:

// function calculateHue(passwordLength) {
//   return Math.min(passwordLength * 10, 100);
// }

// const PasswordInput = styled.input`
//   border: 4px solid slateblue;
//   font-size: 2em;
//   padding-left: 4px;
//   &:focus {
//     background-color: ${props =>
//       `hsl(${calculateHue(props.value.length)}, 100%, 50%)`};
//   }
// `;

// PasswordInput.defaultProps = {
//   type: "password"
// };

// export default PasswordInput;
