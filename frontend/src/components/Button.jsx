import classNames from "classnames";


const Button = ({ children, onClick, danger }) => (
    <button
        className={classNames(
            "px-4 py-1 rounded-full transition duration-300",
            {
                "bg-gray-300 hover:bg-gray-400": !danger,
                "bg-red-600 text-white hover:bg-red-700": danger,
            }
        )}
        onClick={onClick}
    >
        {children}
    </button>
);


export default Button;



