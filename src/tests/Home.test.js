import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from '../component/Pages/Home';

it('It should render the Homepage', () => {
  const home = renderer
    .create(<Router><Home /></Router>)
    .toJSON();
  expect(home).toMatchSnapshot();
});
