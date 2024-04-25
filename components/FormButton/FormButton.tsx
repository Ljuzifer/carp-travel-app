export default function FormButton({ design }: { design: string }) {
    return (
        <button
            type='submit'
            className={`${design} ml-auto uppercase text-3xl font-medium leading-[32px] 
                opacity-80 hover:opacity-100 focus:opacity-100 transition-opacity ease-in duration-300`}>
            send
        </button>
    );
}
