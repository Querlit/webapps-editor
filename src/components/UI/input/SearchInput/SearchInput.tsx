import React from 'react'
import * as internalStyle from "./SearchInput.module.less"

import Icon from '../../icon/Icon/Icon'
import Input from '../Input/Input'
import type { Props as InputProps } from '../../input/Input/Input'


type Props = {
  iconSize?: number | string
} & InputProps

const SearchInput: React.FC<Props> = ({ iconSize, placeholder, className, style , onChange=()=>{}}) => {
  return (
    <div className={[internalStyle.wrapper, className].join(" ").trim()} style={style}>
        <Icon icon="SearchIcon" style={{height: iconSize, width: iconSize}} />
        <Input invisibleBorder placeholder={placeholder} onChange={onChange} />
    </div>
  )
}

export default SearchInput