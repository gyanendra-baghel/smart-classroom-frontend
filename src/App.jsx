import { BrowserRouter,  Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import Quiz from "./pages/Quiz"
import Chat from "./pages/Chat"
import ContextProvider from "./context/context"
import './App.css'

function App() {

  return (
    <BrowserRouter>
    <Routes>
        {/* <Route path="/" element={<Home/>} /> */}
        <Route path="/quiz" element={<Quiz/>} />
        {/* <Route path="/" element={<ContextProvider><Chat/></ContextProvider> } /> */}
    </Routes>
    </BrowserRouter>
  )
}

export default App
