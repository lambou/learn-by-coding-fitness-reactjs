import clsx from "clsx"; // import of the clsx function
import { FC, HTMLAttributes } from "react"; // import HTMLAttributes
import { BiMenuAltLeft } from "react-icons/bi"; // import the menu icon

/**
 * Typescript
 * -------------------------------------
 * creating the type of the component - Every <div> attributes + additional attributes
 */
export type HeaderComponentProps = HTMLAttributes<HTMLDivElement> & { /** additional attributes */ };

const HeaderComponent: FC<HeaderComponentProps> = (props) => {
    const { className, ...restProps } = props;
    return <div className={clsx([className, "flex"])} {...restProps}>
        <BiMenuAltLeft className="text-4xl" />
        <div className="flex-grow flex-shrink basis-auto hidden sm:inline-flex items-center justify-end gap-6 font-semibold text-gray-500">
            <span className="capitalize">Workouts & programs</span>
            <span className="capitalize">Nutrition plans</span>
            <span className="capitalize">Community</span>
        </div>
    </div>
}

HeaderComponent.displayName = 'HeaderComponent';

export default HeaderComponent;