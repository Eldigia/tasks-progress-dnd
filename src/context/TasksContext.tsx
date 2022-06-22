import React, { createContext, useContext, useState } from "react";

type TasksContextValues = {
  sections: SectionDetails[];
  tasks: TaskDetails[];
  setTasks(tasks: TaskDetails[]): void;
};

const TasksContext = createContext<TasksContextValues>({
  sections: [],
  tasks: [],
  setTasks() {},
});

export function useTasksContext() {
  return useContext(TasksContext);
}

export type SectionDetails = {
  title: string;
  id: number;
};

export type TaskDetails = {
  task: string;
  id: number;
};

export function TasksProvider({ children }: any) {
  const [sections, setSections] = useState<SectionDetails[]>([
    {
      title: "To do",
      id: 1,
    },
    {
      title: "In progress",
      id: 2,
    },
    {
      title: "Completed",
      id: 3,
    },
  ]);

  const [tasks, setTasks] = useState<TaskDetails[]>([
    {
      task: "Prepare dinner",
      id: 1,
    },
    {
      task: "Go for a walk",
      id: 2,
    },
  ]);

  const value = { sections, tasks, setTasks };

  return <TasksContext.Provider value={value}>{children}</TasksContext.Provider>;
}

export default TasksContext;
