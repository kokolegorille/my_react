import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import routes from './routes'

main();

function main() {
  const app = document.getElementById('app');
  render(routes, app);
}