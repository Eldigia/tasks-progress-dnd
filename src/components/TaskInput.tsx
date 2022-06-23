import { AddIcon } from "@chakra-ui/icons";
import { Button, Flex, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import { TaskDetails, useTasksContext } from "../context/TasksContext";

export const TaskInput = () => {
  const { data, setData } = useTasksContext();

  const [newId, setNewId] = useState(6);

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
    setData([...data, data[0].items.task]);
    getNewId();
    setNewTask(initialState);
  }

  return (
    <Flex mt="2">
      {}
      <Input
        size="lg"
        bg="white"
        placeholder="New task"
        variant="none"
        mr="2"
        borderBottom="1px"
        borderRadius="20"
        color="#A043ED"
        fontWeight="semibold"
        value={newTask.task}
        onChange={(e) =>
          setNewTask((prevState) => ({
            ...prevState,
            task: e.target.value,
            id: newId,
          }))
        }
      />
      <Button
        variant="none"
        color="white"
        bgGradient="linear(to-l, #A043ED, #29A2D3 )"
        borderRadius="25"
        h="100%"
        minW="48px"
        onClick={() => handleClick(newTask)}
      >
        <AddIcon />
      </Button>
    </Flex>
  );
};
