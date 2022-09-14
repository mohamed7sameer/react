import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Posts from './components/posts/Posts';
import CreatePost from './components/posts/CreatePost';
import PostDetails from './components/posts/PostDetails';
import Error from './components/Error';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <main>
            <Routes>
                <Route path='/' element={<Home />}> 
                  <Route path='/' element={<Posts />}></Route>
                  <Route path='/post/:id' element={<PostDetails />}></Route>
                  <Route path='add' element={<CreatePost />}></Route>
                  <Route path='*' element={<Error />}></Route>
                </Route>
            </Routes>
          {/* <Home /> */}
        </main>
        <Footer />
      </div>
    </BrowserRouter>
    
  );
}

export default App;
