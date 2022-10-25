import { Link, Routes, Route } from "react-router-dom";
import Products from "./Components/Products";
import './App.css';
import { useSelector } from "react-redux";
import { selectPurchases } from "./Reducers/Card";
import PurchasesList from "./Components/PurchasesList";

const App = () => {
    const state = useSelector(selectPurchases);
    const sum = () => state.reduce((sum,next) => sum + next.count,0);
    return(
        <div className="App">
            <nav>
                <Link to='/'>Products</Link>
                <Link to='/purchases'>Purchases<span>({sum()})</span></Link>
            </nav>
            <div className="content">
                <Routes>
                    <Route path="/" element={<Products />}/>
                    <Route path="/purchases" element={<PurchasesList />}/>
                </Routes>
            </div>
        </div>
    )
}

export default App;