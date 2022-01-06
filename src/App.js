import React from 'react'

       const TEXTS = ['Declarative B', 'Component', 'Learn One']

function App () {
  return (
      <div
        id={'id'}
        className={'class'}
      >
          <h1>Hello React</h1>
          <ul id={'id-2'}>
              {TEXTS.map((item) => (
                  <li>{item}</li>
              ))}
          </ul>
          <div>{(() => 2 + 2)()}</div>
      </div>
  )
}

export default App
