import { ContactsCredentials } from "@/data/contacts";
import Subtitle from "@/components/Subtitle/Subtitle";
import ContactsSocials from "@/components/ContactsSocials/ContactsSocials";
import ContactsForm from "@/components/ContactsForm/ContactsForm";

import "./Contacts.css";

export default function Contacts() {
    const { subTitle } = ContactsCredentials;

    return (
        <section id='Contacts' className='contacts relative'>
            <div
                className='container relative z-10 px-[20px] pt-[56px] pb-[54px]
                tab:px-8 tab:py-16
                desk:py-[104px] desk:px-[24px]'>
                <Subtitle
                    caption={subTitle}
                    styles='mb-[36px] tab:mb-[40px] desk:mb-[74px]'
                />

                <div className='desk:flex'>
                    <ContactsSocials />
                    <ContactsForm />
                </div>
            </div>
        </section>
    );
}
