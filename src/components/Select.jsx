import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { MessageError } from "./Input";

const SelectWrap = styled.div`
  &.active {
    display: block !important;
  }
`;

export default function Select({ label, options, onChange, error, placeholder }) {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState(placeholder);
  useEffect(() => {
    const click = () => {
      setIsOpen(false);
    };
    window.addEventListener("click", click);
    return () => {
      window.removeEventListener("click", click);
    };
  }, []);

  const onClick = (ev) => {
    ev.stopPropagation();
    setIsOpen(!isOpen);
  };

  const onSelect = (ev, value) => {
    ev.preventDefault();
    setValue(value);
    onChange?.(value);
  };
  return (
    <label>
      <p>{label}</p>
      <div className="input-form" style={{flex: 1}}>
        <div className="select">
          <div className="head" onClick={onClick}>
            {value}
          </div>
          <SelectWrap className={`sub ${isOpen ? "active" : ""} `}>
            {options.map((e) => (
              <a href="#" key={e} onClick={(ev) => onSelect(ev, e)}>
                {e}
              </a>
            ))}
          </SelectWrap>
          {error && <MessageError>{error}</MessageError>}
        </div>
      </div>
    </label>
  );
}
