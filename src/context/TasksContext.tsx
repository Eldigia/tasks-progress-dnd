import React, { createContext, useContext, useState } from "react";

type TasksContextValues = {
  data: DataDetails[];
  setData(tasks: DataDetails[]): void;
};

const TasksContext = createContext<TasksContextValues>({
  data: [],
  setData() {},
});

export function useTasksContext() {
  return useContext(TasksContext);
}

export type TaskDetails = {
  task: string;
  id: number;
};

export type DataDetails = {
  name: string;
  items: TaskDetails[];
};

export function TasksProvider({ children }: any) {
  const [data, setData] = useState<DataDetails[]>([
    {
      name: "To do",
      items: [
        {
          task: "Prepare for a party",
          id: 1,
        },
        {
          task: "Go for a walk",
          id: 2,
        },
      ],
    },
    {
      name: "In progress",
      items: [
        {
          task: "Finish the book",
          id: 3,
        },
      ],
    },
    {
      name: "Completed",
      items: [
        {
          task: "Practice yoga",
          id: 4,
        },
        {
          task: "Do shopping for a barbecue",
          id: 5,
        },
      ],
    },
  ]);

  const value = { data, setData };

  return <TasksContext.Provider value={value}>{children}</TasksContext.Provider>;
}

export default TasksContext;
