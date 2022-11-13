import { FC, ReactNode, HTMLAttributes } from "react";
import clsx from "clsx";

export type InfoCardProps = HTMLAttributes<HTMLDivElement> & {
    icon?: ReactNode;
    cardTitle?: ReactNode;
    description?: ReactNode;
};

const InfoCard: FC<InfoCardProps> = (props) => {
    const { className, icon, cardTitle, description, ...restProps } = props;
    return <div className={clsx([className, "flex flex-col justify-start items-start gap-2"])} {...restProps}>
        <span className="text-4xl">{icon}</span>
        <span className="text-base font-extrabold capitalize pt-3">{cardTitle}</span>
        <p className="text-gray-500">{description}</p>
    </div>
};

InfoCard.displayName = 'InfoCard';

export default InfoCard;