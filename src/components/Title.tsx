import { ReactNode } from "react";

const Title = ({ children }: { children: ReactNode }) => {
  return <h1 className="text-4xl text-center font-bold my-5 uppercase">{children}</h1>;
};

export default Title;
