import { BrowserRouter,  Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import Quiz from "./pages/Classroom/Quiz"
import Chat from "./pages/Chat"
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ChatBotProvider from "./context/ChatBotContext"
import WhiteBoard from "./pages/WhiteBoard";
import Logout from "./pages/Logout";
import CreateClassroom from "./pages/Classroom/CreateClassroom";
import BoardProvider from "./context/BoardContext"
import './App.css'
import './chat.css'
import Auth from "./utils/Auth";

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/signup" element={<Signup/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/" element={<Auth/>}>
          <Route path="" element={<Home />} />
          <Route path="logout" element={<Logout/> } />
          <Route path="class/:classId" element={<Home/>} />
          <Route path="quiz" element={<Quiz/>} />
          <Route path="create" element={<CreateClassroom/>} />
          <Route path="board" element={<BoardProvider/>}>
            <Route path="" element={<WhiteBoard />} />
          </Route>
          <Route path="ai" element={<ChatBotProvider/> }>
            <Route path="" element={<Chat />} />
          </Route>
        </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
