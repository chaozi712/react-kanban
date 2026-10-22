interface TaskProps {
  title: string;
}

export const Task = (props: TaskProps) => {
  const { title } = props;
  return (
    <div key={title} className="p-2 mb-1 border-gray-100 rounded-md bg-white">
      {title}
    </div>
  );
};
