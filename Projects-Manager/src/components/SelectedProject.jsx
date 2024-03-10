import Tasks from "./Tasks";

export default function SelectedProject({
  project,
  onDeleteProject,
  onAddTask,
  onDeleteTask,
  tasks,
  isDoneTask,
}) {
  let formatedDate = new Date(project.dueDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return (
    <div className="w-[45rem] mt-16 mx-auto">
      <header className="pb-4 mb-4 border-b-2 border-stone-300">
        <div className="flex item-center justify-between">
          <h1 className="text-3xl font-bold text-stone-600 mb-2 text-wrap overflow-hidden text-ellipsis  ">
            {project.title}
          </h1>
          <button
            onClick={onDeleteProject}
            className=" text-stone-600 hover:text-stone-950 hover:underline"
          >
            Delete
          </button>
        </div>
        <p className="mb-4 text-stone-400">{formatedDate}</p>
        <p className="text-stone-600 whitespace-pre-wrap">
          {project.description}
        </p>
      </header>
      <Tasks
        onAdd={onAddTask}
        onDelete={onDeleteTask}
        tasks={tasks.filter((task) => task.projectId === project.id)}
        isDoneTask={isDoneTask}
      />
    </div>
  );
}
