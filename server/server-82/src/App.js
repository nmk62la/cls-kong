import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function Server82() {
  return <h2>Đây là server-82</h2>;
}

function Home() {
  return <h2>Đây là trang chủ</h2>;
}

function Account() {
  return <h2>Đây là trang quản lý tài khoản</h2>;
}

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route path="/" element={<Server82 />} />
            <Route path="/home" element={<Home />} />
            <Route path="/account" element={<Account />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
