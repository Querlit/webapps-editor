import React from 'react'
import * as style from "./ButtonWithIcon.module.less"

import Button from '../Button/Button'
import Icon from '../../icon/Icon/Icon'

import type { IconsType } from '../../icon/Icon/type'

type Props = {
    icon: IconsType
}

const ButtonWithIcon: React.FC<Props> = ({
    icon,
}) => {
  return (
    <Button>
      <Icon icon={icon} />
    </Button>
  )
}

export default ButtonWithIcon