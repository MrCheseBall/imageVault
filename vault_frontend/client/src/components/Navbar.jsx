import ConnectedAccount from "./ConnectedAccount";
import {useNavigate} from "react-router-dom"
const Navbar = () => {
    
    return (  
        <div className=" w-full h-[80px] bg-sky-300 flex justify-center items-center border-b-2 border-gray-700">
         <ConnectedAccount />
         
        </div> 
    );
    // className="bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-white px-3 py-2 rounded-md text-sm font-medium shadow-md hover:shadow-lg transition duration-300"
}
 
export default Navbar;