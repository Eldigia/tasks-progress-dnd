import React, { createContext, useContext, useState } from "react";

type TasksContextValues = {
  tasks: TaskDetails[];
  setTasks(tasks: TaskDetails[]): void;
};

const TasksContext = createContext<TasksContextValues>({
  tasks: [],
  setTasks() {},
});

export function useTasksContext() {
  return useContext(TasksContext);
}

export type TaskDetails = {
  task: string;
  time: number;
};

export function TasksProvider({ children }: any) {
  const [tasks, setTasks] = useState<TaskDetails[]>([
    {
      task: "Prepare dinner",
      time: 45,
    },
    {
      task: "Go for a walk",
      time: 90,
    },
  ]);

  const value = { tasks, setTasks };

  return <TasksContext.Provider value={value}>{children}</TasksContext.Provider>;
}

export default TasksContext;
