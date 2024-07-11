import { Link, NavLink } from 'react-router-dom';
// import Container from '../ui/Container';

const Header = () => {
  const activeColor =
    'font-bold border-b-white border-2  border-t-0 border-r-0 border-l-0 rounded-none text-white';

  const links = (
    <>
      <li className='md:pr-12 lg:pr-12 pb-4 md:pb-0 lg:pb-0'>
        <NavLink
          to='/'
          className={({ isActive, isPending }) =>
            isPending ? 'pending' : isActive ? activeColor : ''
          }
        >
          Home
        </NavLink>
      </li>

      <li className='md:pr-12 lg:pr-12 pb-4 md:pb-0 lg:pb-0'>
        <NavLink
          to='/products'
          className={({ isActive, isPending }) =>
            isPending ? 'pending' : isActive ? activeColor : ''
          }
        >
          Products
        </NavLink>
      </li>

      <li className='md:pr-12 lg:pr-12 pb-4 md:pb-0 lg:pb-0'>
        <NavLink
          to='/product-management'
          className={({ isActive, isPending }) =>
            isPending ? 'pending' : isActive ? activeColor : ''
          }
        >
          Product Management
        </NavLink>
      </li>

      <li className='md:pr-12 lg:pr-12 pb-4 md:pb-0 lg:pb-0'>
        <NavLink
          to='/cart'
          className={({ isActive, isPending }) =>
            isPending ? 'pending' : isActive ? activeColor : ''
          }
        >
          Cart
        </NavLink>
      </li>
      <li className='md:pr-12 lg:pr-12 pb-4 md:pb-0 lg:pb-0'>
        <NavLink
          to='/checkout'
          className={({ isActive, isPending }) =>
            isPending ? 'pending' : isActive ? activeColor : ''
          }
        >
          Checkout
        </NavLink>
      </li>

      <li className='pb-8 md:pb-0 lg:pb-0'>
        <NavLink
          to='/about-us'
          className={({ isActive, isPending }) =>
            isPending ? 'pending' : isActive ? activeColor : ''
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
          <div className='flex items-center gap-1 font-mono text-2xl'>
            <h2>Workout</h2>
            <div className='max-w-10'>
              <img src='/public/icon.svg' alt='logo image' />
            </div>
            <h2>Gear</h2>
          </div>
        </Link>
      </div>

      {/* Dropdown Start */}
      <div className='dropdown bg-indigo-50'>
        <label tabIndex={0} className='btn btn-ghost xl:hidden'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-5 w-5 p-0'
            viewBox='0 0 50 50'
            stroke='currentColor'
          >
            <path d='M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z'></path>
          </svg>
        </label>
        <ul
          tabIndex={0}
          className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow w-40 text-white outline outline-1 bg-[#1d1f5b]'
        >
          {links}
        </ul>
      </div>
      {/* Dropdown end */}

      <div className='hidden xl:flex xl:flex-row items-center justify-center gap-3'>
        <div className='text-center mt-9 md:mt-0 lg:mt-0 '>
          <ul className=' md:flex lg:flex text-lg text-white'>{links}</ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
