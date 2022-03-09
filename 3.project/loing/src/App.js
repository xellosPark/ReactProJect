import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Container from '@mui/material/Container';

function App() {
  return (
    <Container fixed className="App">
      <Header />
    </Container>
  );
}

export default App;
