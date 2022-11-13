import clsx from "clsx";
import { FC, HTMLAttributes, useCallback } from "react";
import LargeButton from "../LargeButton";
import UndrawWorkout from "./UndrawWorkout.svg";

export type HeroComponentProps = HTMLAttributes<HTMLDivElement> & {};

const HeroComponent: FC<HeroComponentProps> = (props) => {
    const { className, ...restProps } = props;

    const btnClickHandler = useCallback(() => {
        if (process.env.REACT_APP_TRY_FOR_FREE_URL) {
            window.open(process.env.REACT_APP_TRY_FOR_FREE_URL);
        }
    }, [])

    return <div className={clsx([className, "flex items-center gap-8 py-8"])} {...restProps}>
        <div className="flex flex-col items-start gap-6 max-w-sm">
            <h1 className="capitalize font-extrabold text-5xl">It's time to regain your fitness</h1>
            <p className="text-gray-500 text-base">Do fitness anywhere and anytime with our training videos.</p>
            <LargeButton type="button" onClick={btnClickHandler}>Try it for free</LargeButton>
        </div>
        <div className="flex-auto">
            <img src={UndrawWorkout} alt="Workout" width={0} height={0} className="object-contain w-full h-full" />
        </div>
    </div>
}

HeroComponent.displayName = 'HeroComponent';

export default HeroComponent;