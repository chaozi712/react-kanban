# React Kanban

A kanban board built with React and TypeScript. Tasks are organized into groups, and can be created and moved between groups with drag and drop.

## Features

- Task groups (columns)
- Create tasks within a group
- Drag and drop tasks between groups

## Tech Stack

- [React](https://react.dev) 19 + [TypeScript](https://www.typescriptlang.org)
- [Vite](https://vite.dev) for dev server and builds
- [Tailwind CSS](https://tailwindcss.com) v4 + [shadcn/ui](https://ui.shadcn.com)
- [dnd-kit](https://dndkit.com) for drag and drop
- [Zustand](https://zustand.docs.pmnd.rs) for state management
- [React Router](https://reactrouter.com), [React Hook Form](https://react-hook-form.com), [Zod](https://zod.dev)

## Getting Started

```bash
npm install
npm run dev
```

## Scripts

| Command           | Description                         |
| ----------------- | ----------------------------------- |
| `npm run dev`     | Start the Vite dev server           |
| `npm run build`   | Type-check and build for production |
| `npm run lint`    | Run ESLint                          |
| `npm run preview` | Preview the production build        |

## Project Structure

```
src/
├── components/   # Board, Task, and shared UI (shadcn/ui)
├── pages/        # Route-level pages
├── router/       # Route definitions
├── stores/       # Zustand stores (useKanban)
└── lib/          # Utilities
```
