import React from 'react';
import renderer from 'react-test-renderer';
import Navbar from '../component/Pages/navbar';

it('It should render Navbar properly', () => {
  const tree = renderer
  .create(<Navbar />)
  .toJSON();
  expect(tree).toMatchSnapshot();
})
