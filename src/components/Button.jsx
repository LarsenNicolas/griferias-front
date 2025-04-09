export default function Button({ children, onClick, className }) {
    return (
        <button
            onClick={onClick}
            className={`bg-[#a5732db5] cursor-pointer text-white px-4 py-2 rounded hover:bg-[#a5732db5]-700 transition ${className}`}
        >
            {children}
        </button>
    );
}
