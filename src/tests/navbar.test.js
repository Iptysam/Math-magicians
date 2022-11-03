import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from '../component/Pages/navbar';

it('It should render Navbar properly', () => {
  const tree = renderer
    .create(<Router><Navbar /></Router>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
