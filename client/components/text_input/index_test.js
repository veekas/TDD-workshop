import React from 'react';
import { shallow } from 'enzyme';

import TextInput from './index';

describe('<TextInput />', () => {
  it('renders a form input with id=test', () => {
    const wrapper = shallow(<TextInput />);
    expect(wrapper.find('#test').length).toBe(1);
  });

  it('has placeholder text', () => {
    const wrapper = shallow(<TextInput />);
    // expect(wrapper.contains(<input placeholder="say hello!" />).toBe(true));
    expect(wrapper.find('[placeholder]').length).toBe(1);
  });
});

