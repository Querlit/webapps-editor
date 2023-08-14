import React, { ReactElement, useState } from 'react'
import * as style from "./SliderSelect.module.less"

import Button from '../../../../components/UI/button/Button/Button'
import Text from '../../../../components/UI/text/Text/Text'
import Layout from '../../../../components/UI/layout/Layout/Layout'

type Props = {
  optionsList?: string[] | ReactElement[],
  onChange?: (option: number) => void,
  defaultActiveIndex?: number,
  invisibleBorder?: boolean,
  className?: string
}

const SliderSelect: React.FC<Props> = ({ optionsList=[], onChange=()=>{}, defaultActiveIndex=0, invisibleBorder=false,
  className }) => {
  const [activeButton, setActiveButton] = useState(defaultActiveIndex)
  return (
    <Layout className={[style.wrapper, className].join(" ").trim()}>
      { optionsList.map((option, index) => (
        <Button key={index} onClick={() => {
          setActiveButton(index)
          onChange(index)
        }} active={index === activeButton} invisibleBorder={invisibleBorder}>
          <Text fontWeight={index === activeButton ? 500 : 300}>{option}</Text>
        </Button>
      )) }
    </Layout>
  )
}

export default SliderSelect