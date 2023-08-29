
import React, { useId } from 'react'

import internalStyle from "./CommonDraggable.module.less"

import { useDraggable } from '@dnd-kit/core';

type Props = {
    contains: (string | React.ReactNode)[]
    id: number
}

const CommonDraggable: React.FC<Props> = ({ contains, id }) => {
    const {attributes, listeners, setNodeRef, transform} = useDraggable({ id });

    const style = transform ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
    } : undefined;

    
    return (
        <button 
            ref={setNodeRef}
            style={style}
            className={internalStyle.wrapper}
            {...listeners}
            {...attributes}
        >
            { contains }
        </button>
    );
}

export default CommonDraggable