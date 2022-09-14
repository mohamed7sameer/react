import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Posts from './components/posts/Posts';
import CreatePost from './components/posts/CreatePost';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <main>
            <Routes>
                <Route path='/' element={<Home />}> </Route>
                <Route path='/posts' element={<Posts />}></Route>
                <Route path='/posts/add' element={<CreatePost />}></Route>
               
            </Routes>
          {/* <Home /> */}
        </main>
        <Footer />
      </div>
    </BrowserRouter>
    
  );
}

export default App;
