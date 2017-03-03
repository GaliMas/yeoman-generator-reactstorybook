import React from 'react';
import { storiesOf } from '@kadira/storybook';
import <%= nameComponent %> from '.';

storiesOf('<%= nameComponent %>', module)
	.add('Test', () => (
			<<%= nameComponent %>/>
  )
);