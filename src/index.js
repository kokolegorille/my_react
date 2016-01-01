import React from 'react'
import { render } from 'react-dom'
import routes from './routes'

main();

function main() {
  const app = document.createElement('div');
  document.body.appendChild(app);
  render(routes, app);
}