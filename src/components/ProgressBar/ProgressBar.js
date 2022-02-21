/* eslint-disable no-unused-vars */
import React from "react";
import styled, { css } from "styled-components";
import { COLORS } from "../../constants";

const SizedWrapperStyle = {
  small: css``,
  medium: css``,
  large: css`
    border-radius: 8px;
    padding: 4px;
  `,
};

const SizedBarStyle = {
  small: css`
    height: 8px;
    border-radius: 4px;
  `,
  medium: css`
    height: 12px;
    border-radius: 4px;
  `,
  large: css`
    height: 16px;
    border-radius: 4px;
  `,
};
const ProgressBar = ({ value: percent, size }) => {
  return (
    <Wrapper size={size}>
      <BarShape size={size}>
        <Bar
          size={size}
          percent={percent}
          role="progressbar"
          aria-valuemax={100}
          aria-valuemin={0}
          aria-valuenow={percent}
        />
      </BarShape>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  box-sizing: border-box;
  background-color: ${COLORS.transparentGray15};
  ${(props) => SizedWrapperStyle[props.size]};
`;

const BarShape = styled.div`
  background-color: transparent;
  ${(props) => SizedBarStyle[props.size]};
  overflow: hidden;
`;

const Bar = styled.div`
  width: ${(props) => props.percent}%;
  background-color: ${COLORS.primary};
  height: 100%;
`;

export default ProgressBar;
