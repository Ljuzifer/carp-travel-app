import { SubTitleProps } from "@/utils/types";

export default function Subtitle({ caption, styles }: SubTitleProps) {
    return (
        <h2 className={`subtitle ${styles}`}>
            {caption.primary}
            <span className='font-medium'>{caption.secondary}</span>
        </h2>
    );
}
