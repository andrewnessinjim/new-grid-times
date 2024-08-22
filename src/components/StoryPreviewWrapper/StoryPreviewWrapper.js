import React from "react";
import styled from "styled-components";
import { QUERIES } from "../../constants";

const StoryPreviewWrapper = styled.a`
  &:not(:first-child) {
    padding-top: 16px;
  }

  &:not(:last-child) {
    padding-bottom: 16px;
    border-bottom: 1px solid var(--color-gray-300);
  }

  @media ${QUERIES.tabletOnly} {
    &:not(:last-child) {
      padding-bottom: revert;
      border-bottom: revert;
    }
  }
`;

export default StoryPreviewWrapper;
