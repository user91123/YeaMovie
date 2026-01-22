import styles from "./styles.module.css";
import clsx from "clsx";

interface FilterButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children?: string;
  isActive: boolean;
}

export const FilterButton = ({
  className,
  isActive,
  children,
  ...rest
}: FilterButtonProps) => {
  return (
    <button
      className={clsx(
        styles.filterButton,
        isActive && styles.active,
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
};
