import { Flex, Text } from "@chakra-ui/react";
import { Draggable } from "react-beautiful-dnd";
import { useTasksContext } from "../context/TasksContext";
import { Task } from "./Task";
import { TaskInput } from "./TaskInput";

export const Tasks = (title: string) => {
  const { tasks } = useTasksContext();
  return (
    <Flex boxShadow="base" p="10" w="100%" flexDir="column" borderRadius="10px">
      <Text fontSize="2rem">{title.title}</Text>
      {title.title === "To do" ? <TaskInput /> : null}

      <Flex pt="3" flexDir="column">
        {tasks.map((task, index) => (
          <Draggable draggableId={task.id.toString()} index={index} key={task.id.toString()}>
            {(provided) => (
              <div {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                <Task key={task.id} id={task.id} task={task.task} />
              </div>
            )}
          </Draggable>
        ))}
      </Flex>
    </Flex>
  );
};
