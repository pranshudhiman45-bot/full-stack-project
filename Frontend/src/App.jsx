import "./App.css";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import CreatePost from "./pages/CreatePost";
import FeedPage from "./pages/FeedPage";

function App() {
  return <>
  
  <Router>
    <Routes>
      <Route path="/" element={<CreatePost/>}/>
      <Route path="/create-post" element={<CreatePost/>}/>
      <Route path="/post" element={<FeedPage/>}/>
    </Routes>
  </Router>
  
  </>;
}

export default App;
