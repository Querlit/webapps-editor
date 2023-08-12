import React from 'react'
import * as style from "./Select.module.less"

type Props = {
  optionsList: string[],
}

const Select: React.FC<Props> = ({ optionsList }) => {
  return (
    <select className={style.wrapper}>
        { optionsList.map(option => (
          <option value={option}>{option}</option>
        )) }
    </select>
  )
}

export default Select