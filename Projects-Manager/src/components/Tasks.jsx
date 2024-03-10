import NewTask from "./NewTask";

export default function Tasks({ tasks, onAdd, onDelete, isDoneTask }) {
  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 my-4">Tasks</h2>
      <NewTask onAdd={onAdd} />
      {tasks.length === 0 ? (
        <p className="text-stone-800 mb-4">
          This project does not have tasks yet.
        </p>
      ) : (
        <ul className="p-4 mt-8 rounded-md bg-stone-100 ">
          {tasks.map((task) => {
            let cssList = `flex justify-between my-4 ${
              task.isDone ? "line-through" : ""
            }`;
            return (
              <li key={task.id} className={cssList}>
                <span>{task.text}</span>
                <div>
                  <button
                    onClick={() => isDoneTask(task.id)}
                    className="text-stone-700 mr-4"
                  >
                    &#x2714;
                  </button>
                  <button
                    onClick={() => onDelete(task.id)}
                    className="text-stone-700 hover:text-red-500"
                  >
                    Clear
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}
