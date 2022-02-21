import React from "react";
import styled from "styled-components";
import { COLORS } from "../../constants";
import Icon from "../Icon/Icon";
import VisuallyHidden from "../VisuallyHidden";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper value={value} onChange={onChange}>
      {displayedValue}
      <InlineIcon id={"chevron-down"} strokeWidth={2} />
      <VisuallyHidden>
        <HiddenSelect>{children}</HiddenSelect>
      </VisuallyHidden>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  padding: 12px 16px;
  border: none;
  background-color: ${COLORS.transparentGray15};
  border-radius: 8px;
  width: fit-content;
  align-items: center;

  display: flex;
  flex-direction: row;
  gap: 24px;
  color: ${COLORS.gray700};

  font-size: 16px;
  line-height: 19px;

  &:hover {
    color: ${COLORS.black};
  }
  &:focus {
    border: 2px solid #4374cb;
    background-color: red;
  }
`;

const InlineIcon = styled(Icon)`
  display: inline-block;
`;
const HiddenSelect = styled.select`
  opacity: 0;
  width: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  -webkit-appearance: none;
`;

export default Select;
