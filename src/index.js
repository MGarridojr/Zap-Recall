import ReactDOM from "react-dom";
import StartPage from "./componentes/Start";

function App(){
    return(
        <div>
            <StartPage />
        </div>
    
    
    )
}

ReactDOM.render(<App /> , document.querySelector(".root"))