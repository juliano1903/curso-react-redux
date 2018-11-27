import React from 'react'
import ReactDOM from 'react-dom'
import Familia from './familia'
import Membro from './membro'

ReactDOM.render(
    <Familia lastName='Silva'>
        <Membro name='Juliano'/>
        <Membro name='Juliano'/>
        <Membro name='Juliano'/>
    </Familia>
    ,document.getElementById('app'))