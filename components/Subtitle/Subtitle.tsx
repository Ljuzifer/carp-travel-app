import { subTitleProps } from "@/utils/types";

export default function Subtitle({ caption, styles }: subTitleProps) {
    return (
        <h2 className={`subtitle ${styles}`}>
            {caption.primary}
            <span className='font-medium'>{caption.secondary}</span>
        </h2>
    );
}
