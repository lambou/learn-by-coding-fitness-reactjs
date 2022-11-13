import { FC, ButtonHTMLAttributes } from "react";
import clsx from "clsx";

export type LargeButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {};

const LargeButton: FC<LargeButtonProps> = (props) => {
    const { className, children, ...restProps } = props;
    return <button className={clsx([className, "inline-flex items-center justify-center capitalize px-6 py-2 font-bold bg-fuchsia-500 hover:bg-fuchsia-600 text-white rounded-md"])} {...restProps}>
        {children}
    </button>
};

LargeButton.displayName = 'LargeButton';

export default LargeButton;