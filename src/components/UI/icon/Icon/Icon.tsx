import React from 'react'
import * as internalStyle from "./Icon.module.less"

import type { IconsType } from "./type"

import ArrowLeftIcon from "~/src/assets/icons/arrow-left.svg"
import ArrowRightIcon from "~/src/assets/icons/arrow-right.svg"
import ArrowIcon from "~/src/assets/icons/arrow.svg"
import CloudIcon from "~/src/assets/icons/cloud.svg"
import CopyrightIcon from "~/src/assets/icons/copyright.svg"
import DownloadIcon from "~/src/assets/icons/download.svg"
import FileIcon from "~/src/assets/icons/file.svg"
import FolderIcon from "~/src/assets/icons/folder.svg"
import GridIcon from "~/src/assets/icons/grid.svg"
import ImageIcon from "~/src/assets/icons/image.svg"
import InputIcon from "~/src/assets/icons/input.svg"
import MouseIcon from "~/src/assets/icons/mouse.svg"
import PresentionIcon from "~/src/assets/icons/presention.svg"
import RectangleIcon from "~/src/assets/icons/rectangle.svg"
import RightIndentIcon from "~/src/assets/icons/right-indent.svg"
import RowHorizontalIcon from "~/src/assets/icons/row-horizontal.svg"
import RowVerticalIcon from "~/src/assets/icons/row-vertical.svg"
import SaveIcon from "~/src/assets/icons/save.svg"
import TextIcon from "~/src/assets/icons/text.svg"

const IconsObject = { ArrowLeftIcon, ArrowRightIcon, ArrowIcon, CloudIcon, CopyrightIcon,
DownloadIcon, FileIcon, FolderIcon, GridIcon, ImageIcon, InputIcon, MouseIcon,
PresentionIcon, RectangleIcon, RightIndentIcon, RowHorizontalIcon, RowVerticalIcon,
SaveIcon, TextIcon }

type Props = {
  icon: IconsType,
  style?: React.CSSProperties,
}

const Icon: React.FC<Props> = ({ icon, style }) => {
  return (
    <img src={IconsObject[icon]} className={internalStyle.wrapper} style={style}/>
  )
}

export default Icon