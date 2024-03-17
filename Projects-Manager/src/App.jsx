import { useState } from "react";
import NoProjectSelected from "./components/NoProjectSelected";
import NewProject from "./components/NewProject";
import ProjectsSidebar from "./components/ProjectsSidebar";
import SelectedProject from "./components/SelectedProject";
import ProjectsContext from "./context/ProjectsContext";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });

  function handleAddTask(text) {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        tasks: [
          ...prevState.tasks,
          {
            id: Math.random().toString(),
            text: text,
            projectId: prevState.selectedProjectId,
            isDone: false,
          },
        ],
      };
    });
  }

  function handleDeleteTask(id) {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.id !== id),
      };
    });
  }

  function isDoneTask(id) {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.map((task) => {
          if (task.id === id) {
            return {
              ...task,
              isDone: task.isDone ? false : true,
            };
          }
          return task;
        }),
      };
    });
  }

  function startAddProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  function onCancel() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  }

  function handleAddProject(projectData) {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, projectData],
      };
    });
  }

  function handleSelectProject(id) {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id,
      };
    });
  }

  function handleDeleteProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter(
          (project) => project.id !== prevState.selectedProjectId
        ),
      };
    });
  }
  const selectedProject = projectsState.projects.find(
    (project) => project.id === projectsState.selectedProjectId
  );
  let content = (
    <SelectedProject
      project={selectedProject}
      onDeleteProject={handleDeleteProject}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      isDoneTask={isDoneTask}
    />
  );
  if (projectsState.selectedProjectId === null)
    content = (
      <NewProject handleAddProject={handleAddProject} onCancel={onCancel} />
    );
  else if (projectsState.selectedProjectId === undefined)
    content = <NoProjectSelected startAddProject={startAddProject} />;

  return (
    <ProjectsContext.Provider value={projectsState}>
      <main className="h-[calc(100vh-4rem)] my-8 flex gap-8 ">
        <ProjectsSidebar
          startAddProject={startAddProject}
          onSelectProject={handleSelectProject}
          selectedProjectId={projectsState.selectedProjectId}
        />
        {content}
      </main>
    </ProjectsContext.Provider>
  );
}

export default App;
