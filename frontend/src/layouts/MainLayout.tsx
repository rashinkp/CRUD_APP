import { ReactNode } from 'react'
import Navbar from '../components/Navbar';

type Props = {
  children: ReactNode;
}

const MainLayout = ({ children } : Props) => {
  return (
    <div className="h-screen bg-gray-100">
      <Navbar />
      <main className="p-4">{children}</main>
    </div>
  );
}

export default MainLayout