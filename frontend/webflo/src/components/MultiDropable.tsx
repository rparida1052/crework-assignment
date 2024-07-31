import React from 'react'
import { useDroppable } from "@dnd-kit/core";


const MultiDropable = () => {
    const { setNodeRef: setFirstDroppableRef } = useDroppable({
      id: "droppable-1",
    });
    const { setNodeRef: setsecondDroppableRef } = useDroppable({
      id: "droppable-2",
    });
  return (
    <div>
        <div ref={setFirstDroppableRef}>
            Droppable 1
        </div>
        <div ref={setsecondDroppableRef}>
            Droppable 2
        </div>
    </div>
  )
}

export default MultiDropable