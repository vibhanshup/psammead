import React, { memo } from 'react';
import { Helmet } from 'react-helmet';
import { shape, string } from 'prop-types';
import styled, { css } from 'styled-components';

const LANDSCAPE_RATIO = '56.25%';

/**
 * Apply provider-specific styles.
 */
const OEmbed = styled.div`
  ${({ styles }) => styles}
  display: flex;
  justify-content: center;
`;

/**
 * The following object declares a list of supported Canonical providers
 * and their attributes. Not all providers have the same attributes.
 */
export const providers = {
  instagram: {
    script: 'https://www.instagram.com/embed.js',
  },
  twitter: {
    script: 'https://platform.twitter.com/widgets.js',
  },
  youtube: {
    styles: css`
      padding-top: ${LANDSCAPE_RATIO};
      position: relative;
      overflow: hidden;

      > iframe {
        border: none;
        height: 100%;
        left: 0;
        position: absolute;
        top: 0;
        width: 100%;
      }
    `,
  },
};

const CanonicalEmbed = ({ provider, oEmbed }) => (
  <>
    {providers[provider].script && (
      <Helmet>
        <script async src={providers[provider].script} />
      </Helmet>
    )}
    <OEmbed
      styles={providers[provider].styles}
      dangerouslySetInnerHTML={{ __html: oEmbed.html }}
    />
  </>
);

CanonicalEmbed.propTypes = {
  provider: string.isRequired,
  oEmbed: shape({
    html: string.isRequired,
  }).isRequired,
};

export default memo(CanonicalEmbed);
