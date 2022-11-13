import clsx from "clsx";
import { FC, HTMLAttributes } from "react";
import { BsCalendar2Date, BsLaptop, BsPeople } from "react-icons/bs";
import InfoCard from "./InfoCard";

export type FooterComponentProps = HTMLAttributes<HTMLDivElement> & { /** additional attributes */ };

const FooterComponent: FC<FooterComponentProps> = (props) => {
    const { className, ...restProps } = props;
    return <div className={clsx([className, "flex justify-between gap-8"])} {...restProps}>
        <InfoCard
            icon={<BsCalendar2Date className="text-yellow-500" />}
            cardTitle={"Daily workouts 7 days a week"}
            description="Get personalized workouts on a daily basis from professionals."
        />
        <InfoCard
            icon={<BsLaptop className="text-fuchsia-500" />}
            cardTitle={"Access from any plateform"}
            description="Use the benefits of the service anywhere and on any device."
        />
        <InfoCard
            icon={<BsPeople className="text-blue-700" />}
            cardTitle={"Guides & community"}
            description="A private community where we help each other."
        />
    </div>
}

FooterComponent.displayName = 'FooterComponent';

export default FooterComponent;