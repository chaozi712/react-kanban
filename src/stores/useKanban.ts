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
}>((set) => ({
  boards: [],
  createBoard: (board) =>
    set((state) => ({ boards: [...state.boards, board] })),
  updateBoard: (board) =>
    set((state) => ({
      boards: state.boards.map((b) => (b.groupId == board.groupId ? board : b))
    }))
}));
