import { clsx } from "clsx";
import s from "./Container.module.css";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const Container = ({ children, className }: ContainerProps) => {
  return <div className={clsx(s.container, className)}>{children}</div>;
};
