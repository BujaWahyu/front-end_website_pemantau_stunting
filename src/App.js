import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BabyList from './components/BabyList';
import CreateBabyForm from './components/CreateBabyForm';
import UpdateBabyForm from './components/UpdateBabyForm';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<BabyList />}/>
        <Route path="/create-baby" element={<CreateBabyForm />} />
        <Route path="/update-baby" element={<UpdateBabyForm />} />
      </Routes>
    </Router>
  );
}

export default App;
