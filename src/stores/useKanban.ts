import { create } from 'zustand';

type Task = {
  id: number | string;
  title: string;
};

interface Board {
  groupId: string;
  groupName: string;
  tasks: Task[];
}

export const useKanban = create<{
  boards: Board[];
  createBoard: (board: Board) => void;
  updateBoard: (board: Board) => void;
  moveTask: (taskId: string, srcGroupId: string, targetGroupId: string) => void;
}>((set) => ({
  boards: [],
  createBoard: (board) =>
    set((state) => ({ boards: [...state.boards, board] })),
  updateBoard: (board) =>
    set((state) => ({
      boards: state.boards.map((b) => (b.groupId == board.groupId ? board : b))
    })),
  moveTask: (taskId, srcGroupId, targetGroupId) =>
    set((state) => ({
      boards: state.boards.map((b) => {
        if (b.groupId == srcGroupId) {
          b.tasks = b.tasks.filter((task) => task.id != taskId);
        }
        if (b.groupId == targetGroupId) {
          b.tasks.push({ id: taskId, title: 'New Task' });
        }
        return b;
      })
    }))
}));
