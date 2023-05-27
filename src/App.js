import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Carousels from "./Carousels";
import {Header} from "./Header";
import {Footer} from "./Footer";
import Forms from "./Forms";

function App() {
    return (
        <div>
            <Header/>
            <Carousels/>
            <Forms/>
            <Footer/>
        </div>
    )
}

export default App;

