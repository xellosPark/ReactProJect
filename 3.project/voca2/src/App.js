import DayList from './component/DayList';
import Header from './component/Header';
import Day from './component/Day';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EmptyPage from './component/EmptyPage';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          {/* path="/" = 첫 페이지 */}
          {/* V5 문법 
          <Route path="/*" component={ DayList } />
          <Route path="/day/:day" component={ Day } />
          <Route component={ EmptyPage } /> */}
          {/* V6 문번 */}
          <Route path="/*" element={<DayList />} />
          <Route path="/day/:day" element={<Day />} />
          {/* <Route path="dm" element={ <EmptyPage /> } /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
