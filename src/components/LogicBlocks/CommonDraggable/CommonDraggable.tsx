
import React from 'react'

import internalStyle from "./CommonDraggable.module.less"

import { useDraggable } from '@dnd-kit/core';
import { useSelector } from 'react-redux';

import { RootState } from '../../../store/store';
import { BlockType } from '../../../types/LogicEditorTypes/logicalBlocks';

type Props = {
    block: BlockType
}

const CommonDraggable: React.FC<Props> = ({ block }) => {
    const { id } = block
    const {attributes, listeners, setNodeRef, transform} = useDraggable({ id: id || 0 });

    const { id: activeId, isDragging } = useSelector((state: RootState) => state.activeBlock)


    const style = transform ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
    } : undefined;

    
    return (
        <button
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
            <p>{ block.value }</p>
        </button>
    );
}

export default CommonDraggable