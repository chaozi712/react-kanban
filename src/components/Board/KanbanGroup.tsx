import { useDroppable } from '@dnd-kit/core';
import type { PropsWithChildren } from 'react';

interface KanbanGroupProps extends PropsWithChildren {
  groupId: string;
  title: string;
}

export const KanbanGroup = (props: KanbanGroupProps) => {
  const { setNodeRef } = useDroppable({
    id: props.groupId
  });

  return <div ref={setNodeRef}>{props.children}</div>;
};
