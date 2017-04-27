import React from 'react';
import { shallow } from 'enzyme';
import <%= nameComponent %> from '.';

it('dummy test', () => {
  const wrapper = shallow(<<%= nameComponent %> />);
  expect(true).toBe(true);
});
