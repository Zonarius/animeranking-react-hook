import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './schemas/Home';
import Year from './schemas/Year';
import Season from './schemas/Season';
import { useWebroot } from '../api';
import Loader from './Loader';

export default function Content() {
  return (
    <Router>
      <Route path="/" render={route =>
        <Switcher path={route.location.pathname} />
      } />
    </Router>
  )
}

function Switcher({ path }) {
  const { node } = useWebroot(path);
  if (!node) {
    return <Loader />
  } else if (node.path === '/') {
    return <Home node={node} />
  } else if (node.fields.__typename === 'year') {
    return <Year node={node} />
  } else if (node.fields.__typename === 'season') {
    return <Season node={node} />
  } else {
    console.error('Invalid node', node)
    throw new Error('Invalid node')
  }
}