import { FormTextareaProps } from "@/utils/types";

export default function FormTextarea({
    register,
    textarea,
    textareaStyles,
}: FormTextareaProps) {
    return (
        <>
            <label htmlFor={textarea.id} className='label-style'>
                {textarea.label}
            </label>
            <textarea
                id={textarea.id}
                autoComplete={textarea.autoComplete}
                aria-label={textarea.aria}
                className={`input-style resize-none ${textareaStyles}`}
                {...register(textarea.formData)}></textarea>
        </>
    );
}
