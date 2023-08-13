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
import AddSquareIcon from "~/src/assets/icons/add-square.svg"
import AnchorIcon from "~/src/assets/icons/anchor.svg"
import AttentionIcon from "~/src/assets/icons/attention.svg"
import BackArrowIcon from "~/src/assets/icons/back-arrow.svg"
import ComponentIcon from "~/src/assets/icons/component.svg"
import LayersIcon from "~/src/assets/icons/layers.svg"
import LockIcon from "~/src/assets/icons/lock.svg"
import MinusIcon from "~/src/assets/icons/minus.svg"
import PlayIcon from "~/src/assets/icons/play.svg"
import PlusIcon from "~/src/assets/icons/plus.svg"
import QuestionMarkIcon from "~/src/assets/icons/question-mark.svg"
import RemoveIcon from "~/src/assets/icons/remove.svg"
import SLetterIcon from "~/src/assets/icons/s-letter.svg"
import SearchIcon from "~/src/assets/icons/search.svg"
import SettingsIcon from "~/src/assets/icons/settings.svg"
import TrashIcon from "~/src/assets/icons/trash.svg"


const IconsObject = { ArrowLeftIcon, ArrowRightIcon, ArrowIcon, CloudIcon, CopyrightIcon,
DownloadIcon, FileIcon, FolderIcon, GridIcon, ImageIcon, InputIcon, MouseIcon,
PresentionIcon, RectangleIcon, RightIndentIcon, RowHorizontalIcon, RowVerticalIcon,
SaveIcon, TextIcon, AddSquareIcon, AnchorIcon, AttentionIcon, BackArrowIcon, ComponentIcon,
LayersIcon, LockIcon, MinusIcon, PlayIcon, PlusIcon, QuestionMarkIcon, RemoveIcon, SLetterIcon,
SearchIcon, SettingsIcon, TrashIcon}

type Props = {
  icon: IconsType,
  style?: React.CSSProperties,
}

const Icon: React.FC<Props> = ({ icon, style }) => {
  return (
    <div>
      <img src={IconsObject[icon]} className={internalStyle.wrapper} style={style}/>
    </div>
  )
}

export default Icon