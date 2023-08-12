import React from 'react'
import * as internalStyle from "./ButtonWithIcon.module.less"

import Button from '../Button/Button'
import Icon from '../../icon/Icon/Icon'

import type { IconsType } from '../../icon/Icon/type'
import type { Props as ButtonProps} from '../Button/Button'

type Props = {
  className?: string,
  icon: IconsType,
  iconSize?: string | number,
} & ButtonProps

const ButtonWithIcon: React.FC<Props> = ({ icon, iconSize, style, className, 
  invisibleBorder=false, onClick, type, disable=false}) => {
  return (
    <Button style={{...style}} className={[internalStyle.wrapper, className].join(" ").trim()}
      invisibleBorder={invisibleBorder} onClick={onClick} type={type} disable={disable}
    >
      <Icon icon={icon} style={{height: iconSize, width: iconSize}}/>
    </Button>
  )
}

export default ButtonWithIcon