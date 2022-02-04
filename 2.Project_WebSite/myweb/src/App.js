import logo from './logo.svg';
import './App.css';
import {Button, Divider, Progress} from 'semantic-ui-react'

function App() {
  return (
    <div>
      <p> 안녕하세요 </p>
      <button>버튼</button>
      <Button primary> 방가방가 </Button>
      <Progress percent = {66} indicating/>
    </div>
  
  );
}

export default App;
