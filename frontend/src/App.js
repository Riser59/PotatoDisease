import Card from "./components/Card";
// import Counter from "./components/Counter";
import MyDropzone from "./components/MyDropzone";
import Navbar from "./components/Navbar";
import Labels from "./components/Labels";

function App() {

  return (
    <>
      <Navbar />
      <Card Comp={MyDropzone}/>
      <Card Comp={Labels}/>
      {/* <Counter/> */}
    </>
  );
}

export default App;
