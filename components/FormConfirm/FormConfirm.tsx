import Image from "next/image";
import { FormConfirmProps } from "@/utils/types";

export default function FormConfirm({
    confirm,
    register,
    errors,
}: FormConfirmProps) {
    return (
        <div className='relative desk:pt-[10px]'>
            <input
                type='checkbox'
                id='policy'
                className='policy-field'
                aria-label='Policy agreement checkbox'
                {...register(confirm.formData, {
                    required: true,
                })}
            />
            <label
                htmlFor='policy'
                className='agreement relative flex pl-[32px]
            text-xs font-extralight leading-[22px] desk:leading-[24px]'>
                <Image
                    src='/icons/unchecked.svg'
                    alt='Empty checkbox icon'
                    width={24}
                    height={24}
                    className='policy-checkbox policy-checkbox-empty'
                />
                <Image
                    src='/icons/checked.svg'
                    alt='Filled checkbox icon'
                    width={24}
                    height={24}
                    className='policy-checkbox policy-checkbox-filled'
                />
                {confirm.text}
            </label>
            {errors.confirm && (
                <div className='validation-error left-5 right-auto'>
                    {confirm.error}
                </div>
            )}
        </div>
    );
}
