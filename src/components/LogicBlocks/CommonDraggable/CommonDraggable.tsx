
import React from 'react'

import internalStyle from "./CommonDraggable.module.less"

import { useDraggable } from '@dnd-kit/core';
import { useSelector } from 'react-redux';

import { RootState } from '../../../store/store';

type Props = {
    contains: (string | React.ReactNode)[]
    id: number
}

const CommonDraggable: React.FC<Props> = ({ contains, id }) => {
    const {attributes, listeners, setNodeRef, transform} = useDraggable({ id,  });

    const { id: activeId, isDragging } = useSelector((state: RootState) => state.activeBlock)


    const style = transform ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
    } : undefined;

    
    return (
        <button 
            // onClick={() => }
            onClick={() => console.log(1)}
            onDragEnd={() => console.log(2)}
            ref={setNodeRef}
            style={style}
            className={[
                internalStyle.wrapper,
                activeId === id ? internalStyle.active : "",
                activeId === id && isDragging ? internalStyle.dragging : ""
            ].join(" ").trim()}
            {...listeners}
            {...attributes}
        >
            { contains }
        </button>
    );
}

export default CommonDraggable