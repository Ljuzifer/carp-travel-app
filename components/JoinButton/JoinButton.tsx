import "./JoinButton.css";

export default function JoinButton() {
    return (
        <button
            type='button'
            className='join relative uppercase text-center text-lg font-bold leading-[18px] mx-auto px-16 py-[18px] w-[280px] bg-join-button hover:bg-join-btn-hover transition-all duration-500 ease-in'>
            join now
        </button>
    );
}
