import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { TaskDetails } from "../context/TasksContext";

export const Task = ({ task, id }: TaskDetails, index: number) => {
  return (
    <Draggable draggableId={id.toString()} index={index} key={id.toString()}>
      {(provided) => (
        <div {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
          <Flex
            key={id}
            py="3"
            px="2"
            _hover={{ boxShadow: "base" }}
            _active={{ boxShadow: "base", backgroundColor: "white" }}
          >
            <Text fontSize="xl">{task}</Text>
          </Flex>
        </div>
      )}
    </Draggable>
  );
};
