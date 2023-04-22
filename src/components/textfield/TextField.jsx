import { useMemo } from "react";
import { nanoid } from "@reduxjs/toolkit";
import { Wrapper } from "./TextField.styled";
import { Field } from "./TextField.styled";

const TextField = ({ label, handleChange, ...props }) => {
    const id = useMemo(() => nanoid(), []);

    return (
      <Wrapper>
        <label htmlFor={id}>{label}</label>
        <Field id={id} onChange={handleChange} {...props} />
      </Wrapper>
    );
}

export default TextField;