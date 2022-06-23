import { CloseIcon } from "@chakra-ui/icons";
import { Button, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { TaskDetails, useTasksContext } from "../context/TasksContext";

type Props = TaskDetails & {
  index: number;
  columnId: number;
};

export const Task = ({ task, id, index, columnId }: Props) => {
  const { data, setData } = useTasksContext();
  function handleClick() {
    let newData = [...data];
    newData[columnId].items.splice(index, 1);
    setData(newData);
  }

  return (
    <Draggable draggableId={id.toString()} index={index} key={id.toString()}>
      {(provided) => (
        <div {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
          <Flex
            key={id}
            py="3"
            px="4"
            my="2"
            color="white"
            bgGradient="linear(to-l, #A043ED, #29A2D3 )"
            borderRadius="20"
            alignItems="center"
            _hover={{ boxShadow: "dark-lg" }}
            _active={{ boxShadow: "dark-lg" }}
          >
            <Text fontSize="xl" fontWeight="semibold">
              {task}
            </Text>
            <Button
              bg="none"
              ml="auto"
              _hover={{ bg: "none", color: "lightDark" }}
              _active={{ bg: "none" }}
              onClick={handleClick}
            >
              <CloseIcon />
            </Button>
          </Flex>
        </div>
      )}
    </Draggable>
  );
};
