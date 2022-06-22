import { Flex } from "@chakra-ui/react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { Tasks } from "./components/Tasks";
import { useTasksContext } from "./context/TasksContext";

function App() {
  const { sections } = useTasksContext();

  const onDragEnd = (result) => {
    // const { tasks, setTasks } = useTasksContext();
    // const { destination, source, draggableId } = result;
    // if (!destination) {
    //   return;
    // }
    // if (destination.droppableId === source.droppableId && destination.index === source.index) {
    //   return;
    // }
    // const sourceColIndex = tasks.findIndex((e) => e.id === source.droppableId);
    // const destinationColIndex = tasks.findIndex((e) => e.id === destination.droppableId);
    // const sourceCol = tasks[sourceColIndex];
    // const destinationCol = tasks[destinationColIndex];
    // {
    //   console.log(sourceCol);
    // }
    // const sourceTask = [...sourceCol.id];
    // const destinationTask = [...destinationCol.task];
    // const [removed] = sourceTask.splice(source.index, 1);
    // destinationTask.splice(destination.index, 0, removed);
    // tasks[sourceColIndex].task = sourceTask;
    // tasks[destinationColIndex].task = destinationTask;
    // setTasks(tasks);
    // const column = this.state.columns[source.droppableId];
    // const newTaskIds = Array.from(column.taskIds);
    // newTaskIds.splice(source.index, 1);
    // newTaskIds.splice(destination.index, 0, draggableId);
    // const newColumn = {
    //   ...column,
    //   taskIds: newTaskIds,
    // };
    // const newState = {
    //   ...this.state,
    //   columns: {
    //     ...this.state.columns,
    //     [newColumn.id]: newColumn,
    //   },
    // };
    // this.setState(newState);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Flex m="10">
        {sections.map((section) => (
          <Droppable key={section.id} droppableId={section.id.toString()}>
            {(provided) => (
              <Flex {...provided.droppableProps} ref={provided.innerRef} m="5" w="100%">
                <Tasks title={section.title} />
                {provided.placeholder}
              </Flex>
            )}
          </Droppable>
        ))}
      </Flex>
    </DragDropContext>
  );
}

export default App;
