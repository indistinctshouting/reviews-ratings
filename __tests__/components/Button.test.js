import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Button from '../../client/components/Button';

const handleButtonClick = (count, clicked) => {
  if (!count && !clicked) {
    count = 1;
  } else if (!clicked) {
    count += 1;
  } else if (clicked) {
    count -= 1;
  }
  this.setState({
    count,
    clicked: !clicked
  });
};

describe('<Button />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Button 
        name={'funny'}
        count={2}
        handleButtonClick={handleButtonClick}
      />
    );
  });

  it('should render a button component', () => {
    expect(wrapper).toMatchSnapshot();
  });
  
  
});