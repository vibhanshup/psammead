import React from 'react';
import { storiesOf } from '@storybook/react';
import { inputProvider } from '@bbc/psammead-storybook-helpers';
import {
  UsefulLink,
  UsefulLinksLi,
  UsefulLinksUl,
  UsefulLinkItem,
} from './index';
import SectionLabel from '../../psammead-section-label/src';
import notes from '../README.md';

const singleItem = ['Labaran BBC Hausa a text'];
const multipleItems = [
  'Mitocinmu da sauko da sautin labarai',
  'Labaran BBC Hausa a text',
  'Abokan huldar BBC Hausa',
  'Timi Frank: Osinbajo ya maka mutum biyu',
  'Gwaninta ba ta karbi wani dan Nijeriya',
];

const generateStory = ({ usefulItems, strapline }) =>
  inputProvider({
    // eslint-disable-next-line react/prop-types
    componentFunction: ({ script, service }) => {
      return (
        <div>
          {strapline ? (
            <SectionLabel
              script={script}
              labelId="example-section-label"
              service={service}
            >
              Useful links
            </SectionLabel>
          ) : null}
          {usefulItems.length === 1 ? (
            <UsefulLink
              usefulItems={usefulItems}
              script={script}
              service={service}
            />
          ) : (
            <UsefulLinksUl role="list" usefulItems={usefulItems}>
              {usefulItems.map(item => {
                return (
                  <UsefulLinksLi role="listitem">
                    <UsefulLinkItem service={service} sript={script}>
                      {item}
                    </UsefulLinkItem>
                  </UsefulLinksLi>
                );
              })}
            </UsefulLinksUl>
          )}
        </div>
      );
    },
  });

storiesOf('Components|UsefulLinks', module)
  .add(
    'one link',
    generateStory({ usefulItems: singleItem, strapline: false }),
    {
      notes,
    },
  )
  .add(
    'multiple links',
    generateStory({ usefulItems: multipleItems, strapline: false }),
    {
      notes,
    },
  )
  .add(
    'with section label',
    generateStory({ usefulItems: multipleItems, strapline: true }),
    {
      notes,
    },
  );
