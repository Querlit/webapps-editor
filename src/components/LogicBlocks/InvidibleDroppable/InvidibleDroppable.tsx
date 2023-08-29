
import React, { useId } from 'react'

import internalStyle from "./InvidibleDroppable.module.less"

import { useDroppable } from '@dnd-kit/core';

export type DroppableData = {
    direction: "row" | "column"
    row: number | null
    column: number | null
}

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
        data: { direction, row, column } as DroppableData
    });
    
    return (
        <div ref={setNodeRef} className={[
            internalStyle.wrapper,
            isOver ? (
                direction == "column" ? internalStyle.hoverColumn : internalStyle.hoverRow
            ) : ""
        ].join(" ").trim()} />
    );
}

export default InvidibleDroppable