
import React, { useId } from 'react'

import internalStyle from "./InvidibleDroppable.module.less"

import { useDroppable } from '@dnd-kit/core';

type Props = {
    disabled?: boolean
    direction: "row" | "column",
    row: number | null
    column: number | null
}

const InvidibleDroppable: React.FC<Props> = ({  direction, row, column, disabled=false }) => {
    const {isOver, setNodeRef} = useDroppable({
        disabled,
        id: useId(),
        data: { direction, row, column }
    });
    
    return (
        <div ref={setNodeRef} className={[
            internalStyle.wrapper,
            direction === "column" ? internalStyle.columnWrapper : internalStyle.rowWrapper,
            isOver ? internalStyle.hover : ""
        ].join(" ").trim()} />
    );
}

export default InvidibleDroppable