import React from 'react';
import styled from 'styled-components';
import { oneOf, number, node } from 'prop-types';
import {
  GEL_GROUP_3_SCREEN_WIDTH_MIN,
  GEL_GROUP_5_SCREEN_WIDTH_MIN,
} from '@bbc/gel-foundations/breakpoints';
import Grid from '@bbc/psammead-grid';
import { mostReadListGridProps } from '../utilities/gridProps';

const OneColumnGrid = styled(Grid).attrs({
  role: 'list',
})`
  list-style-type: none;
  margin: 0;
  padding: 0;
  grid-auto-flow: column;
  grid-template-rows: repeat(${props => props.numberOfItems}, auto);
`;

const TwoColumnGrid = styled(OneColumnGrid)`
  @media (min-width: ${GEL_GROUP_3_SCREEN_WIDTH_MIN}) {
    grid-template-rows: repeat(
      ${props => Math.ceil(props.numberOfItems / 2)},
      auto
    );
  }
`;

const MultiColumnGrid = styled(TwoColumnGrid)`
  @media (min-width: ${GEL_GROUP_5_SCREEN_WIDTH_MIN}) {
    grid-auto-flow: row;
  }
`;

const getColumnLayout = columnLayout =>
  ({
    oneColumn: OneColumnGrid,
    twoColumn: TwoColumnGrid,
    multiColumn: MultiColumnGrid,
  }[columnLayout]);

const MostReadList = ({ numberOfItems, dir, columnLayout, children }) => {
  const MostReadListGrid = getColumnLayout(columnLayout);
  return (
    <MostReadListGrid
      {...mostReadListGridProps(columnLayout)}
      dir={dir}
      numberOfItems={numberOfItems}
      forwardedAs="ol"
    >
      {children}
    </MostReadListGrid>
  );
};

MostReadList.propTypes = {
  children: node.isRequired,
  dir: oneOf(['rtl', 'ltr']),
  columnLayout: oneOf(['oneColumn', 'twoColumn', 'multiColumn']),
  numberOfItems: number.isRequired,
};

MostReadList.defaultProps = {
  dir: 'ltr',
  columnLayout: 'multiColumn',
};

export default MostReadList;
