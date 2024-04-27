import { ContactsCredentials } from "@/data/contacts";
import { phoneConverter } from "@/utils/phoneConverter";

import "./ContactsSocials.css";

export default function ContactsSocials() {
    const { phone, email, socials } = ContactsCredentials;

    return (
        <ul
            className='pb-[12px] ml-auto w-[280px] 
            tab:ml-[34px] tab:mr-auto tab:mb-[64px] tab:pb-0 
            tab:w-[525px] tab:h-[96px] tab:flex tab:flex-col tab:flex-wrap
            desk:m-0 desk:w-1/2 desk:h-auto desk:flex-nowrap'>
            <li className='mb-[24px] flex flex-row-reverse gap-[20px] desk:mb-[64px]'>
                <span
                    className='w-[81px] text-xs font-extralight leading-[20px] 
                    tab:pt-[4px] desk:mr-[12px] desk:w-[300px]'>
                    {phone.name}
                </span>

                <span
                    className='w-[164px] flex flex-col text-right text-sm font-normal leading-[24px]
                    tab:text-base tab:leading-[24px]'>
                    {phone.contacts.map((contact) => (
                        <a
                            href={`tel:${contact}`}
                            rel='noopener noreferrer nofollow'
                            target='_blank'
                            key={contact}>
                            {phoneConverter(contact)}
                        </a>
                    ))}
                </span>
            </li>

            <li className='mb-[26px] flex flex-row-reverse gap-[20px] tab:mb-0 desk:mb-[124px]'>
                <span
                    className='w-[81px] text-xs font-extralight leading-[20px] 
                    tab:pt-[4px] desk:mr-[12px] desk:w-[300px]'>
                    {email.name}
                </span>

                <span
                    className='text-right text-sm font-normal leading-[24px]
                    tab:text-base tab:leading-[24px]'>
                    {email.contacts.map((contact) => (
                        <a
                            href={`mailto:${contact}`}
                            rel='noopener noreferrer nofollow'
                            target='_blank'
                            key={contact}>
                            {contact}
                        </a>
                    ))}
                </span>
            </li>

            <li className='flex gap-[20px] tab:ml-[90px] desk:flex-row-reverse'>
                <span
                    className='w-[180px] text-right text-xs font-extralight leading-[20px] 
                    tab:w-auto tab:pt-[4px] desk:mr-[12px] desk:w-[300px] desk:text-left'>
                    {socials.name}
                </span>
                <ul
                    className='w-[81px] text-sm font-normal leading-[24px]
                    tab:text-base tab:leading-[24px]'>
                    {socials.contacts.map((contact) => (
                        <li key={contact.title}>
                            <a
                                href={contact.link}
                                rel='noopener noreferrer nofollow'
                                target='_blank'
                                aria-label={contact.title}
                                className='under relative'>
                                {contact.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </li>
        </ul>
    );
}
