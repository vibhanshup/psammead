import React from 'react';
import { shape, string, oneOf, node } from 'prop-types';
import styled from 'styled-components';
import { getPica, getGreatPrimer } from '@bbc/gel-foundations/typography';
import { C_EBON } from '@bbc/psammead-styles/colours';
import { scriptPropType } from '@bbc/gel-foundations/prop-types';
import { grid } from '@bbc/psammead-styles/detection';
import { getSerifMedium } from '@bbc/psammead-styles/font-styles';
import {
  GEL_SPACING,
  GEL_SPACING_DBL,
  GEL_SPACING_TRPL,
} from '@bbc/gel-foundations/spacings';
import { GEL_GROUP_2_SCREEN_WIDTH_MIN } from '@bbc/gel-foundations/breakpoints';
import Grid from '@bbc/psammead-grid';
import {
  mostReadListGridProps,
  mostReadItemGridProps,
} from '../utilities/gridProps';

// This is to handle the padding between the rank and the link for both ltr and rtl stories.
const paddingStart = ({ dir }) => `padding-${dir === 'ltr' ? 'left' : 'right'}`;

// This is to make where the link ends consistent for both columns
const paddingEnd = ({ dir }) => `padding-${dir === 'ltr' ? 'right' : 'left'}`;

export const getParentColumns = columnLayout => {
  if (columnLayout !== 'oneColumn') {
    return mostReadListGridProps(columnLayout).columns;
  }
  return null;
};

const StyledLink = styled.a`
  ${({ script }) => script && getPica(script)};
  ${({ service }) => getSerifMedium(service)};

  position: static;
  color: ${C_EBON};
  text-decoration: none;
  margin-bottom: ${GEL_SPACING};

  &:hover,
  &:focus {
    text-decoration: underline;
  }

  &:before {
    bottom: 0;
    content: '';
    left: 0;
    overflow: hidden;
    position: absolute;
    right: 0;
    top: 0;
    white-space: nowrap;
    z-index: 1;
  }

  @media (min-width: ${GEL_GROUP_2_SCREEN_WIDTH_MIN}) {
    ${({ script }) => script && getGreatPrimer(script)};
  }
`;

const ALIGN_RANK_TO_LINK_SPACING = '0.375rem';

const StyledItem = styled.div`
  padding-top: ${ALIGN_RANK_TO_LINK_SPACING};
  padding-bottom: ${GEL_SPACING_TRPL};
  ${paddingStart}: ${GEL_SPACING_DBL};
  ${paddingEnd}: ${GEL_SPACING_DBL};

  @supports (${grid}) {
    ${paddingEnd}: 0;
  }
`;

const TimestampWrapper = styled.div`
  padding-top: ${GEL_SPACING};
`;

export const MostReadLink = ({
  dir,
  service,
  script,
  title,
  href,
  children,
}) => (
  <StyledItem dir={dir}>
    <StyledLink href={href} script={script} service={service}>
      {title}
    </StyledLink>
    {children && <TimestampWrapper>{children}</TimestampWrapper>}
  </StyledItem>
);

MostReadLink.propTypes = {
  dir: oneOf(['rtl', 'ltr']),
  service: string.isRequired,
  script: shape(scriptPropType).isRequired,
  title: string.isRequired,
  href: string.isRequired,
  children: node, // this node will be a timestamp container
};

MostReadLink.defaultProps = {
  dir: 'ltr',
  children: null,
};

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0;
  padding: 0;
`;

const StyledGrid = styled(Grid).attrs({
  role: 'listitem',
})`
  position: relative;
`;

export const MostReadItemWrapper = ({ dir, children, columnLayout }) => (
  <StyledGrid
    {...mostReadItemGridProps(columnLayout)}
    parentColumns={getParentColumns(columnLayout)} // parentColumns is required here because on IE, this component would be rendered before it's parent therefore not receiving the parent's grid columns values so we have to explicitly pass it as a prop here so it works on IE
    dir={dir}
    forwardedAs="li"
  >
    <ItemWrapper>{children}</ItemWrapper>
  </StyledGrid>
);

MostReadItemWrapper.propTypes = {
  children: node.isRequired,
  dir: oneOf(['rtl', 'ltr']),
  columnLayout: oneOf(['oneColumn', 'twoColumn', 'multiColumn']),
};

MostReadItemWrapper.defaultProps = {
  dir: 'ltr',
  columnLayout: 'multiColumn',
};
