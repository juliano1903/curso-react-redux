import React from 'react'
import ReactDOM from 'react-dom'
import Familia from './familia'
import Membro from './membro'

ReactDOM.render(
    <Familia>
        <Membro name='Juliano' lastName='Silva'/>
    </Familia>
    ,document.getElementById('app'))