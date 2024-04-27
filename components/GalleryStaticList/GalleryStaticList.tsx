import Image from "next/image";
import { galleryImages } from "@/data/gallery";

export default function GalleryStaticList() {
    return (
        <ul className='flex flex-col gap-[24px] items-center tab:hidden'>
            {galleryImages.map((img) => (
                <li key={img} className='w-[280px] h-[187px]'>
                    <Image
                        width={280}
                        height={187}
                        src={img}
                        alt='gallery nature slide'
                        loading='lazy'
                        className='w-[280px] h-[187px] object-cover'
                    />
                </li>
            ))}
        </ul>
    );
}
