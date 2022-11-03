import React from 'react';
import renderer from 'react-test-renderer';
import Calculator from '../component/Calculator';

it('It should render the display of button in the screen', () => {
  const screen = renderer
    .create(<Calculator />)
    .toJSON();
  expect(screen).toMatchSnapshot();
});
