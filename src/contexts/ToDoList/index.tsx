import { createContext, useState, type JSX } from "react";

interface Context {
  readonly toDoList: string[];
  readonly onAdd: (toDo: string) => void;
  readonly onDelete: (toDo: string) => void;
}

const ToDoListContext = createContext<Context>({
  toDoList: [],
  onAdd: () => {},
  onDelete: () => {},
});

interface Props {
  children: JSX.Element | JSX.Element[];
  initialValue?: string[];
}

const ToDoListContextProvider = ({ children, initialValue }: Props) => {
  const [toDoList, setToDoList] = useState<string[]>(
    initialValue || ["리액트 공부하기", "운동하기", "책 읽기"],
  );
  const onAdd = (toDo: string) => {
    setToDoList([...toDoList, toDo]);
  };
  const onDelete = (toDo: string) => {
    setToDoList(toDoList.filter((item) => item !== toDo));
  };
  console.log(toDoList);
  return (
    <ToDoListContext.Provider value={{ toDoList, onAdd, onDelete }}>
      {children}
    </ToDoListContext.Provider>
  );
};

export { ToDoListContext, ToDoListContextProvider };
