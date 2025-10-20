type ButtonProps = {
  onClick?: () => void;
  children?: React.ReactNode;
  className?: string;
};
export function Button({onClick, children, className=""}:ButtonProps) {
    return(  
            <button 
             onClick={onClick}
             className="bg-red-600 hover:bg-gray-300 hover:text-black">{children} </button>
    
    )
}