import { AddIcon } from "@chakra-ui/icons";
import { Button, Flex, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import { useTasksContext } from "../context/TasksContext";

export const TaskInput = () => {
  const { data, setData } = useTasksContext();

  const initialState = "";

  const [newTask, setNewTask] = useState<string>(initialState);

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key !== "Enter") {
      return;
    }
    handleClick(newTask);
  }

  function handleClick(task: string) {
    if (task === "") {
      return;
    }
    let newData = [...data];
    newData[0].items.push({ task, id: Math.round(Math.random() * 1000) });
    setData(newData);
    setNewTask(initialState);
  }

  return (
    <Flex mt="2">
      <Input
        size="lg"
        bg="white"
        placeholder="New task"
        variant="none"
        mr="2"
        borderRadius="20"
        color="#A043ED"
        fontWeight="semibold"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        onKeyDown={(e) => handleKeyDown(e)}
      />
      <Button
        variant="none"
        color="white"
        bgGradient="linear(to-l, #A043ED, #29A2D3 )"
        borderRadius="25"
        h="100%"
        minW="48px"
        _hover={{ color: "black" }}
        onClick={() => handleClick(newTask)}
      >
        <AddIcon />
      </Button>
    </Flex>
  );
};
