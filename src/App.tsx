import { Link, Routes, Route } from "react-router-dom";
import Products from "./Components/Products";
import './App.css';

const App = () => {
    return(
        <div className="App">
            <nav>
                <Link to='/'>Products</Link>
                <Link to='/purchases'>Purchases<span>(0)</span></Link>
            </nav>
            <div className="content">
                <Routes>
                    <Route path="/" element={<Products />}/>
                    <Route path="/purchases" element={<></>}/>
                </Routes>
            </div>
        </div>
    )
}

export default App;