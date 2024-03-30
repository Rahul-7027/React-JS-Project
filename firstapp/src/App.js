import './App.css';
import Nav from './component/Navbar/Nav';
import Text from './component/TextArea/Text';

function App() {
  return (
    <div className="App">
      <Nav title={"TextUtils App"}/>
      <Text heading="Enter Your Text"/>
    </div>
  );
}

export default App;
