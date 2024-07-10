import { ReactNode } from 'react';

type TContainerProps = {
  children: ReactNode;
};

const Container = ({ children }: TContainerProps) => {
  return <div className='w-full max-w-screen-2xl mx-auto'>{children}</div>;
};

export default Container;
