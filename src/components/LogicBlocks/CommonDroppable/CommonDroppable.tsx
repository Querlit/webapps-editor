
import React, { useId } from 'react'

import internalStyle from "./CommonDroppable.module.less"

import { useDroppable } from '@dnd-kit/core';

type Props = {
    disabled?: boolean
}

const CommonDroppable: React.FC<Props> = ({ disabled=false }) => {
    const {isOver, setNodeRef} = useDroppable({
        disabled,
        id: useId()
    });
    
    return (
        <div ref={setNodeRef} className={[
            internalStyle.wrapper,
            isOver ? internalStyle.hover : ""
        ].join(" ").trim()} />
    );
}

export default CommonDroppable