import {
  Button,
  Flex,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Text,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { useTasksContext, TaskDetails } from "../context/TasksContext";

export const Tasks = () => {
  const { tasks, setTasks } = useTasksContext();

  const initialState = {
    task: "",
    time: 0,
  };

  const [newTask, setNewTask] = useState<TaskDetails>(initialState);

  function handleClick(task: TaskDetails) {
    if (task.task === "" || task.time === 0) {
      return;
    }
    setTasks([...tasks, task]);
    setNewTask(initialState);
  }

  return (
    <Flex boxShadow="base" p="5" w="40%" ml="10" flexDir="column">
      <Flex>
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
            }))
          }
        />
        <NumberInput
          step={5}
          defaultValue={0}
          min={0}
          max={600}
          size="lg"
          variant="none"
          w="28"
          mr="5"
          value={newTask.time}
          onChange={(e) =>
            setNewTask((prevState) => ({
              ...prevState,
              time: parseInt(e),
            }))
          }
        >
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>

        <Button variant="none" onClick={() => handleClick(newTask)}>
          <AddIcon />
        </Button>
      </Flex>
      <Flex pt="3" flexDir="column">
        {tasks.map((task) => {
          return (
            <Flex py="3" px="2" _hover={{ boxShadow: "base" }}>
              <Text fontSize="xl">{task.task}</Text>
              <Text fontSize="xl" ml="auto">
                {task.time}
              </Text>
            </Flex>
          );
        })}
      </Flex>
    </Flex>
  );
};
