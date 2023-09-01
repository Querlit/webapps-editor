
import React from 'react'

import internalStyle from "./IncludableDraggable.module.less"

import { useDraggable } from '@dnd-kit/core';
import { useSelector } from 'react-redux';

import { RootState } from '../../../store/store';

type Props = {
    contains: (string | React.ReactNode)[]
    id: number
}

const IncludableDraggable: React.FC<Props> = ({ contains, id }) => {
    const {attributes, listeners, setNodeRef, transform} = useDraggable({ id,  });

    const { id: activeId, isDragging } = useSelector((state: RootState) => state.activeBlock)


    const style = transform ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
    } : undefined;

    
    return (
        <div
            ref={setNodeRef}
            style={style}
            {...listeners}
            {...attributes}
        >
            <button
                className={[
                    internalStyle.wrapper,
                    activeId === id ? internalStyle.active : "",
                    activeId === id && isDragging ? internalStyle.dragging : ""
                ].join(" ").trim()}
            >
                { contains }
            </button>
            <div className={internalStyle.addition}>
                <div className={internalStyle} />
            </div>
        </div>
    );
}

export default IncludableDraggable