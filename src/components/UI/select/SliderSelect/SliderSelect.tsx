import React, { useState } from 'react'
import * as style from "./SliderSelect.module.less"

import Button from '../../button/Button/Button'
import Text from '../../text/Text/Text'
import Layout from '../../layout/Layout/Layout'

type Props = {
  optionsList?: string[],
  onChange?: (option: string) => void,
  defaultActiveIndex?: number,
  invisibleBorder?: boolean
}

const SliderSelect: React.FC<Props> = ({ optionsList=[], onChange=()=>{}, defaultActiveIndex=0, invisibleBorder=false }) => {
  const [activeButton, setActiveButton] = useState(optionsList[defaultActiveIndex])
  return (
    <Layout className={style.wrapper}>
      { optionsList.map((option, index) => (
        <Button key={index} onClick={() => {
          setActiveButton(option)
          onChange(option)
        }} active={option === activeButton} invisibleBorder={invisibleBorder}>
          <Text fontWeight={option === activeButton ? 600 : 300}>{option}</Text>
        </Button>
      )) }
    </Layout>
  )
}

export default SliderSelect