import { Link, NavLink } from 'react-router-dom';
// import Container from '../ui/Container';

const Header = () => {
  const links = (
    <>
      <li className='md:pr-12 lg:pr-12 pb-4 md:pb-0 lg:pb-0'>
        <NavLink
          to='/'
          className={({ isActive, isPending }) =>
            isPending
              ? 'pending'
              : isActive
              ? 'text-[#2D5FDA] underline font-bold'
              : ''
          }
        >
          Home
        </NavLink>
      </li>

      <li className='md:pr-12 lg:pr-12 pb-4 md:pb-0 lg:pb-0'>
        <NavLink
          to='/about'
          className={({ isActive, isPending }) =>
            isPending
              ? 'pending'
              : isActive
              ? 'text-[#2D5FDA] underline font-bold'
              : ''
          }
        >
          Products
        </NavLink>
      </li>

      <li className='md:pr-12 lg:pr-12 pb-4 md:pb-0 lg:pb-0'>
        <NavLink
          to='/contact'
          className={({ isActive, isPending }) =>
            isPending
              ? 'pending'
              : isActive
              ? 'text-[#2D5FDA] underline font-bold'
              : ''
          }
        >
          Product Management
        </NavLink>
      </li>

      <li className='md:pr-12 lg:pr-12 pb-4 md:pb-0 lg:pb-0'>
        <NavLink
          to='/coupon'
          className={({ isActive, isPending }) =>
            isPending
              ? 'pending'
              : isActive
              ? 'text-[#2D5FDA] underline font-bold'
              : ''
          }
        >
          Cart
        </NavLink>
      </li>
      <li className='md:pr-12 lg:pr-12 pb-4 md:pb-0 lg:pb-0'>
        <NavLink
          to='/coupon'
          className={({ isActive, isPending }) =>
            isPending
              ? 'pending'
              : isActive
              ? 'text-[#2D5FDA] underline font-bold'
              : ''
          }
        >
          Checkout
        </NavLink>
      </li>

      <li className='pb-8 md:pb-0 lg:pb-0'>
        <NavLink
          to='/login'
          className={({ isActive, isPending }) =>
            isPending
              ? 'pending'
              : isActive
              ? 'text-[#2D5FDA] underline font-bold'
              : ''
          }
        >
          About Us
        </NavLink>
      </li>
    </>
  );
  return (
    <div className='flex flex-row-reverse xl:flex-row px-3 md:px-6 items-center justify-between max-w-screen-2xl mx-auto py-10 text-white'>
      <div>
        <Link to='/'>
          <div className='flex items-center gap-1 font-mono text-white text-2xl'>
            <h2>Workout</h2>
            <div className='max-w-10'>
              <img src='/public/icon.svg' alt='logo image' />
            </div>
            <h2>Gear</h2>
          </div>
        </Link>
      </div>
      <div className='text-center mt-9 md:mt-0 lg:mt-0 '>
        <ul className=' md:flex lg:flex text-lg'>{links}</ul>
      </div>
    </div>
  );
};

export default Header;

{
  /* <Container>
<div className='text-white text-2xl  '>
  <div className='flex items-center gap-1 font-mono'>
    <h2>Workout</h2>
    <div className='max-w-10'>
      <img src='/public/icon.svg' alt='logo' />
    </div>
    <h2>Gear</h2>
  </div>
</div>
</Container> */
}
