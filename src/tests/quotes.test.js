import React from 'react';
import renderer from 'react-test-renderer';
import Quote from '../component/Pages/qoute';

it('It should properly render the quotes page', () => {
  const tree = renderer
    .create(<Quote />).toJSON();

  expect(tree).toMatchSnapshot();
});
