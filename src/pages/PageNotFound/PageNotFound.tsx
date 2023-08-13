

import React from 'react'
import * as Logo from "~/src/assets/se-logo.png"

import * as style from "./PageNotFound.module.less"

import { Link } from 'react-router-dom'

type Props = {

}

const PageNotFound: React.FC<Props> = ({}) => {
    return (
        <div className={style.wrapper}>
            <div className={style.title}>
                <div className={style.logo_wrapper}>
                    <img className={style.logo} src={Logo} alt="Logo" />
                </div>
                <h1 className={style.header}>Page not found</h1>
            </div>

            <p className={style.text}>
                Go <Link to="/">here</Link> and see our work!
            </p>
        </div>
    )
}

export default PageNotFound