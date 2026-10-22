import { useDroppable } from '@dnd-kit/core';
import type { PropsWithChildren } from 'react';

interface KanbanGroupProps extends PropsWithChildren {
  title: string;
}

export const KanbanGroup = (props: KanbanGroupProps) => {
  const { setNodeRef } = useDroppable({
    id: 'droppable'
  });

  return <div ref={setNodeRef}>{props.children}</div>;
};
