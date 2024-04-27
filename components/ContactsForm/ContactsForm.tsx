"use client";

import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import useFormPersist from "react-hook-form-persist";
import { FormData } from "@/utils/types";
import { ContactFormCredentials } from "@/data/contacts";
import FormInputFields from "../FormInputFields/FormInputFields";
import FormTextarea from "../FormTextarea/FormTextarea";
import FormButton from "../FormButton/FormButton";

export default function ContactsForm() {
    const {
        register,
        handleSubmit,
        reset,
        watch,
        setValue,
        formState: { errors },
    } = useForm<FormData>();

    useFormPersist("contact-info", {
        watch,
        setValue,
    });

    const {
        formContent: { inputs, textarea },
    } = ContactFormCredentials;

    const onFormSubmit = (info: FormData) => {
        reset();
        toast.success(
            `Thank you for your message, ${info.name}! We'll answer to you soon.`
        );
    };

    return (
        <form
            className='flex flex-col 
                tab:flex-row tab:gap-[20px] 
                desk:w-1/2 desk:flex-col desk:gap-[40px]'
            onSubmit={handleSubmit(onFormSubmit)}
            aria-label='Contact'
            noValidate>
            <div className='flex flex-col desk:flex-row desk:gap-[20px]'>
                {inputs.map((input) => (
                    <div
                        className='relative mb-[24px] flex flex-col desk:mb-0'
                        key={input.id}>
                        <FormInputFields
                            inputInfo={input}
                            inputStyles='desk:w-[293px]'
                            register={register}
                            errors={errors}
                        />
                    </div>
                ))}
            </div>

            <div className='flex flex-col'>
                <FormTextarea
                    textarea={textarea}
                    textareaStyles='mb-[16px] min-h-[193px]
                    tab:w-[463px] tab:min-h-[221px]
                    desk:w-[607px] desk:min-h-[174px] desk:mb-[24px]'
                    register={register}
                />

                <FormButton design='desk:mr-[8px]' />
            </div>
        </form>
    );
}
