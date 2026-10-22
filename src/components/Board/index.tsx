import { useKanban } from '@/stores/useKanban';
import { Task } from './Task';
import { DndContext } from '@dnd-kit/core';
import { KanbanGroup } from './KanbanGroup';
import { Button } from '@/components/ui/button';

export const Board = () => {
  const { boards, updateBoard } = useKanban();
  return (
    <DndContext>
      <div className="flex flex-row">
        {boards.map((board) => (
          <div key={board.groupId} className="flex flex-row">
            <KanbanGroup title={board.groupName}>
              <div className="kanban-group p-2 mr-1 w-65 rounded-2xl bg-blue-100">
                <div className="flex flex-col">
                  <div className="w-fit rounded-full bg-blue-200 px-1 mb-2">
                    Not Started
                  </div>
                  <div>
                    {board.tasks.map((item) => (
                      <Task
                        key={item.id}
                        id={`${board.groupId}-${item.id}`}
                        title={item.title}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <Button
                onClick={() =>
                  updateBoard({
                    groupId: board.groupId,
                    groupName: board.groupName,
                    tasks: [
                      ...board.tasks,
                      {
                        id: board.tasks.length,
                        title: 'New Task'
                      }
                    ]
                  })
                }
              >
                Create Task
              </Button>
            </KanbanGroup>
          </div>
        ))}
      </div>
    </DndContext>
  );
};
