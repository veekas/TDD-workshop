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
    expect(wrapper.find('[placeholder]').length).toBe(1);
  });

  it('has renders red text if char count > 10', () => {
    const wrapper = shallow(<TextInput />);
    wrapper.setState({ value: 'greater-than-10-characters' });
    // console.log(wrapper.state());
    expect(wrapper.find('input').hasClass('red-text')).toBe(true);
  });

  it('has renders red text if char count < 10', () => {
    const wrapper = shallow(<TextInput />);
    wrapper.setState({ value: '<10char' });
    // console.log(wrapper.state());
    expect(wrapper.find('input').hasClass('red-text')).toBe(false);
  });

});
