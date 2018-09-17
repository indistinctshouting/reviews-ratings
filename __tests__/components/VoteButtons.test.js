import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import VoteButtons from '../../client/components/VoteButtons';


describe('<VoteButtons/>', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <VoteButtons 
        votes={{upvotes: { useful: 10, funny: 2, cool: 0 }}}
      />
    );
  });

  it('should render Vote Buttons component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render 3 button components', () => {
    expect(wrapper.find('.footer-buttons').children()).toEqual(3);
  });
  
  it('should have a method called handleButtonClick', () => {
    let instance = wrapper.instance();
    expect(typeof instance.handleButtonClick).toBe('function');
  });

});