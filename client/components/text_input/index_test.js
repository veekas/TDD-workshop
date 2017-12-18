import React from 'react';
import { shallow } from 'enzyme';

import TextInput from './index';

describe('<TextInput />', () => {
  // instead of manually creating a new wrapper every time, write a beforeEach function up here

  it('renders a form input with id=test', () => {
    const wrapper = shallow(<TextInput />);
    expect(wrapper.find('#test').length).toBe(1);
  });

  it('has placeholder text', () => {
    const wrapper = shallow(<TextInput />);
    expect(wrapper.find('[placeholder]').length).toBe(1);
  });

  // another way to do the following is to test the helper function textColor, which prevents weird bugs in the test
  it('has renders red text if char count > 10', () => {
    const wrapper = shallow(<TextInput />);
    wrapper.setState({ value: 'greater-than-10-characters' });
    expect(wrapper.find('input').hasClass('red-text')).toBe(true);
  });

  it('has renders red text if char count < 10', () => {
    const wrapper = shallow(<TextInput />);
    wrapper.setState({ value: '<10char' });
    expect(wrapper.find('input').hasClass('red-text')).toBe(false);
  });

  it('has a submit button', () => {
    const wrapper = shallow(<TextInput />);
    expect(wrapper.find('.submit').type()).toBe('button');
  });

  it('renders a dynamically sized paragraph (based on input length) on submit', () => {
    const wrapper = shallow(<TextInput />);
    wrapper.setState({ value: '<10char' });
    // click simulate
    // check if helper function renderInput was called
  });

  it('', () => {
    const wrapper = shallow(<TextInput />);
    wrapper.setState({ value: '<10char' });
    // check whether element with font size style is rendered
  });
});
