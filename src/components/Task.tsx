import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import { TaskDetails } from "../context/TasksContext";

export const Task = ({ task, id }: TaskDetails) => {
  return (
    <Flex
      key={id}
      py="3"
      px="2"
      _hover={{ boxShadow: "base" }}
      _active={{ boxShadow: "base", backgroundColor: "white" }}
    >
      <Text fontSize="xl">{task}</Text>
    </Flex>
  );
};
