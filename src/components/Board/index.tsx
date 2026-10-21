import { useKanban } from '@/stores/useKanban';

export const Board = () => {
  const { boards } = useKanban();
  return (
    <div className="flex flex-row">
      {boards.map((board) => (
        <div key={board.id} className="flex flex-row">
          <div className="kanban-group p-2 mr-1 w-65 rounded-2xl bg-blue-100">
            <div className="flex flex-col">
              <div className="w-fit rounded-full bg-blue-200 px-1 mb-2">Not Started</div>
              <div>
                {[0, 1, 2].map((item) => (
                  <div key={item} className='p-2 mb-1 border-gray-100 rounded-md bg-white'>Mission {item}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
