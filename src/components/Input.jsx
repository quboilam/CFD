import React from "react";
import styled from "styled-components";

export const MessageError = styled.div`
  color: red;
`;

export default function Input({
  label,
  required,
  placeholder,
  onChange,
  error,
}) {
  return (
    <label>
      <p>
        {label}
        <span>{required ? "*" : ""}</span>
      </p>
      <div className="input-group" style={{flex: 1}}>
        <input
          type="text"
          placeholder={placeholder}
          onChange={onChange}
          style={{display: "block", width: "100%"}}
        />
        {error && <MessageError>{error}</MessageError>}
      </div>
    </label>
  );
}
