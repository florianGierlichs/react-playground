import React from "react";
import PasswordInput from "../components/PasswordInput";
import { withKnobs, text } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

export default {
  title: "PasswordInput",
  component: PasswordInput,
  decorators: [withKnobs]
};

export const Empty = () => <PasswordInput value="" />;
export const NotSafe = () => <PasswordInput value="abc" />;
export const Safe = () => <PasswordInput value="abcdefg" />;
export const Safer = () => <PasswordInput value="abcdefghijk" />;

//Leons Lösung:

// export const Empty = () => {
//     return (
//       <PasswordInput
//         value={text("password", "")}
//         onChange={action("password-change")}
//       />
//     );
//   };

//   export const NotSafe = () => {
//     return (
//       <PasswordInput
//         value={text("password", "abc")}
//         onChange={action("password-change")}
//       />
//     );
//   };

//   export const Safe = () => {
//     return (
//       <PasswordInput
//         value={text("password", "abcasdasd")}
//         onChange={action("password-change")}
//       />
//     );
//   };

//   export const Safer = () => {
//     return (
//       <PasswordInput
//         value={text("password", "abcasdasdasdasdasdassdasxcv")}
//         onChange={action("password-change")}
//       />
//     );
//   };
