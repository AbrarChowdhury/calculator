import Display from "./components/Display";
import ButtonGrid from "./components/ButtonGrid";

function App() {
  return (
    <div className="App">
      <h1>Calculator</h1>
      <Display opperation={"2+2+5"} result={9}/>
      <ButtonGrid/>
    </div>
  );
}

export default App;
