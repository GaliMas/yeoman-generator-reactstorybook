import React from 'react';
import storiesOf from '../../../../.storybook/util';
import <%= nameComponent %> from '.';

storiesOf('<%= nameComponent %>', module).add('Default', () => <<%= nameComponent %> />);
