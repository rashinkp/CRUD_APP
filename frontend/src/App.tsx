import {BrowserRouter as Router,Route , Routes} from 'react-router-dom'
import Home from './pages/Home';
import Students from './pages/Students';
import AddStudents from './pages/AddStudents';
import EditStudents from './pages/EditStudents';
import NotFound from './pages/NotFound';
import MainLayout from './layouts/MainLayout';
function App() {

  return (
    <>
      <Router>
        <MainLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/students" element={<Students />} />
            <Route path="/add-student" element={<AddStudents />} />
            <Route path="/edit-student/:id" element={<EditStudents />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </MainLayout>
      </Router>
    </>
  );
}

export default App
