import Header from "./components/Header";
import Footer from "./components/Footer";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Movie from "./pages/Movie";

function App() {
  return (
      <>
        <Router>
            <Header/>
            <main className="container content">
                <Routes>
                    <Route exact path='/' element={<Home/>}/>
                    <Route path='/about' element={<About/>}/>
                    <Route path='/contact' element={<Contact/>}/>
                    <Route path='/movie/:id' element={<Movie/>}/>
                    <Route path='*' element={<NotFound/>}/>
                </Routes>
            </main>
            <Footer/>
        </Router>
      </>
  )
}

export default App;
