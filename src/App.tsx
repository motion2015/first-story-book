import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToDoListContextProvider } from "./contexts/ToDoList";
import { Header } from "./components/organisms/Header/Header";
import { ToDoListPage } from "./pages/ToDoListPage";
import { ToDoInputPage } from "./pages/ToDoInutPage";

function App() {
  return (
    <ToDoListContextProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<ToDoListPage />} />
          <Route path="/add" element={<ToDoInputPage />} />
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
      </BrowserRouter>
    </ToDoListContextProvider>
  );
}

export default App;
