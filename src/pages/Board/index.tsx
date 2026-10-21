import { useKanban } from '@/stores/useKanban';

export const Board = () => {
  const { boards, createBoard } = useKanban();
  return (
    <div>
      {boards.map((board) => (
        <div key={board.id}>{board.name}</div>
      ))}

      <button
        onClick={() =>
          createBoard({ id: `${boards.length}`, name: 'New Board' })
        }
      >
        Create
      </button>
    </div>
  );
};
