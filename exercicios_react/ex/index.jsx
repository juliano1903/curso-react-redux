import React from 'react'
import ReactDOM from 'react-dom'

ReactDOM.render(
                <h1 style={{backgroundColor: 'blue'}}>
                    {true ? <h1>teste</h1> : ''}
                </h1>, document.getElementById('app')
                )