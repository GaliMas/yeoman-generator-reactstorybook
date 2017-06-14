import React from 'react';
import { mount } from 'enzyme';
import <%= nameComponent %> from '.';

describe('<%= nameComponent %>', () => {
  it('Component works', () => {
    mount(<<%= nameComponent %> />);
  });
});
