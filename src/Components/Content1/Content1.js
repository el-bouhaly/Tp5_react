import React, {useContext} from 'react'
import BtnToggle from '../BtnToggle/BtnToggle'
import './Content1.css'

import {ThemeContext} from '../../Context1/ThemeContext'

export default function Content() {

    const {theme} = useContext(ThemeContext)

    console.log(theme);
    
    return (
        <div className="container"  >
            <BtnToggle />
           
        </div>
    )
}
