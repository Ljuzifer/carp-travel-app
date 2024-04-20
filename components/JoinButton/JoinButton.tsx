import "./JoinButton.css";

export default function JoinButton() {
    return (
        <button
            type='button'
            className='join relative uppercase text-center text-lg font-bold leading-[18px] mx-auto px-16 py-[18px] w-[280px] bg-join-button hover:bg-join-btn-hover focus:bg-join-btn-hover transition-all duration-400 ease-in
            tab:w-[230px] tab:py-4 tab:bg-opacity-5
            desk:w-[294px] desk:text-[32px] desk:leading-[39px]'>
            join now
        </button>
    );
}
