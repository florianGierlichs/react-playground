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
