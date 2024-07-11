import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';

const MainLayout = () => {
  return (
    <div className='bg-primary-gradient h-screen text-white'>
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;

// bg-[#07001f]
