import { AddIcon } from "@chakra-ui/icons";
import { Button, Flex, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import { TaskDetails, useTasksContext } from "../context/TasksContext";

export const TaskInput = () => {
  const { tasks, setTasks } = useTasksContext();

  const [newId, setNewId] = useState(3);

  function getNewId() {
    let n = newId + 1;
    return setNewId(n);
  }

  const initialState = {
    task: "",
    id: 0,
  };

  const [newTask, setNewTask] = useState<TaskDetails>(initialState);

  function handleClick(task: TaskDetails) {
    if (task.task === "") {
      return;
    }
    setTasks([...tasks, task]);
    getNewId();
    setNewTask(initialState);
  }

  return (
    <Flex>
      {}
      <Input
        size="lg"
        placeholder="New task"
        p="0"
        variant="none"
        borderBottom="1px"
        borderRadius="0"
        value={newTask.task}
        onChange={(e) =>
          setNewTask((prevState) => ({
            ...prevState,
            task: e.target.value,
            id: newId,
          }))
        }
      />
      <Button variant="none" onClick={() => handleClick(newTask)}>
        <AddIcon />
      </Button>
    </Flex>
  );
};
