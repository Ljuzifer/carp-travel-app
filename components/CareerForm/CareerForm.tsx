"use client";

import { toast } from "react-hot-toast";
import { useForm } from "react-hook-form";
import useFormPersist from "react-hook-form-persist";
import { FormData } from "@/utils/types";
import { CareerFormCredentials } from "@/data/career";
import FormInputFields from "../FormInputFields/FormInputFields";
import FormTextarea from "../FormTextarea/FormTextarea";
import FormConfirm from "../FormConfirm/FormConfirm";
import FormButton from "../FormButton/FormButton";

export default function CareerForm() {
    const {
        register,
        handleSubmit,
        reset,
        watch,
        setValue,
        formState: { errors },
    } = useForm<FormData>();

    useFormPersist("career-info", {
        watch,
        setValue,
    });

    const {
        description,
        formContent: { inputs, textarea, policy },
    } = CareerFormCredentials;

    const onFormSubmit = (info: FormData) => {
        reset();
        toast.success(
            `Thank you for your message, ${info.name}! We'll answer to you soon.`
        );
    };

    return (
        <>
            <p
                className='ml-auto mb-[36px] w-[179px] text-sm font-extralight leading-[20px]
                    tab:ml-0 tab:mb-[28px] tab:w-[221px] tab:text-[13px]
                    desk:mb-[14px] desk:w-[234px] desk:text-lg desk:leading-[24px]'>
                {description}
            </p>

            <form
                onSubmit={handleSubmit(onFormSubmit)}
                aria-label='Career'
                noValidate
                className='flex flex-col tab:w-[464px] tab:grid tab:grid-cols-2 tab:gap-x-5 desk:w-[606px]'>
                <div className='flex flex-col'>
                    {inputs.map((input) => (
                        <div
                            className='relative mb-[16px] flex flex-col desk:mb-[26px]'
                            key={input.id}>
                            <FormInputFields
                                inputInfo={input}
                                register={register}
                                errors={errors}
                            />
                        </div>
                    ))}
                </div>

                <div className='mb-[16px] flex flex-col tab:mb-0'>
                    <FormTextarea
                        register={register}
                        textarea={textarea}
                        textareaStyles='min-h-[196px] tab:min-h-[244px] desk:w-[292px] desk:min-h-[274px]'
                    />
                </div>

                {policy && (
                    <FormConfirm
                        confirm={policy}
                        register={register}
                        errors={errors}
                    />
                )}

                <FormButton design='mt-4 tab:m-0 tab:absolute tab:bottom-[15px] tab:right-[3px] desk:bottom-[21px] desk:right-0 desk:text-[32px]' />
            </form>
        </>
    );
}
