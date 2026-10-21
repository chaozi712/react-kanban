import { useKanban } from '@/stores/useKanban';

export const Board = () => {
  const { boards, createBoard } = useKanban();
  return (
    <div className="bg-amber-200">
      {boards.map((board) => (
        <div className=" bg-amber-600 text-amber-950" key={board.id}>
          {board.name}
        </div>
      ))}

      <button
        className="border-t-neutral-400 bg-amber-600 text-amber-950"
        onClick={() =>
          createBoard({ id: `${boards.length}`, name: 'New Board' })
        }
      >
        Create
      </button>
    </div>
  );
};
