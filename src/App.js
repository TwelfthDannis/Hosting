import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import {Header} from "./Header.js"
import {Main} from "./Main.js"

function App() {
  return (
    <div className="App">
        <Header />
        <Main />
    </div>
  );
}

export default App;
