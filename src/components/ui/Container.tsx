import { ReactNode } from "react";

type TContainerProps = {
  children: ReactNode;
};

const Container = ({ children }: TContainerProps) => {
  return (
    <div className="mx-auto w-full max-w-screen-2xl px-3 md:px-6">
      {children}
    </div>
  );
};

export default Container;
