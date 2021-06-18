import React from 'react';
import { Link } from 'react-router-dom';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import LogoButton from './LogoButton'
import CreateButton from './CreateButton'
import Nav from './Nav';

configure({adapter: new Adapter()});

describe('<Nav />', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<Nav />)
  })

  it('Deberia renderizar un LogoButton />', () => {
    expect(wrapper.find(LogoButton)).toHaveLength(1);
  });
  it('Deberia renderizar un CreateButton />', () => {
    expect(wrapper.find(CreateButton)).toHaveLength(1);
  });
})
describe('<LogoButton />', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<LogoButton />)
  })
  it('Deberia renderizar un Link a Recipes />', () => {
    expect(wrapper.find(Link).at(0).prop('to')).toEqual('/recipes');
  });
})
describe('<CreateButton />', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<CreateButton />)
  })
  it('Deberia renderizar un Link a Recipe', () => {
    expect(wrapper.find(Link).at(0).prop('to')).toEqual('/recipe');
  });
})