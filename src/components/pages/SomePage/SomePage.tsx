

import React from 'react'
import * as Logo from "~/src/assets/se-logo.png"

import * as style from "./SomePage.module.less"


const SomePage = ({}) => {
    return (
        <div className={style.wrapper}>
            <div className={style.title}>
                <div className={style.logo_wrapper}>
                    <img className={style.logo} src={Logo} alt="Logo" />
                </div>
                <h1 className={style.header}>Source Eyes Template</h1>
            </div>

            <p className={style.text}>
                To see our website click <a href="https://sourceeyes.querlit.com/" target="_blank">here.</a>
            </p>
        </div>
    )
}

export default SomePage