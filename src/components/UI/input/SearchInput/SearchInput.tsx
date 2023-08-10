import React from 'react'
import * as style from "./SearchInput.module.less"

type Props = {
    children: React.ReactNode,
}

const SearchInput: React.FC<Props> = ({
    children,
}) => {
  return (
    <div className={style.wrapper}>
        {children}
    </div>
  )
}

export default SearchInput