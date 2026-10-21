import { Board } from '@/components/Board';
import { Button } from '@/components/ui/button';
import { useKanban } from '@/stores/useKanban';

export const BoardPage = () => {
  const { boards, createBoard } = useKanban();
  return (
    <div>
      <Board />
      <Button
        variant="default"
        onClick={() =>
          createBoard({ id: `${boards.length}`, name: 'New Board' })
        }
      >
        Create
      </Button>
    </div>
  );
};
