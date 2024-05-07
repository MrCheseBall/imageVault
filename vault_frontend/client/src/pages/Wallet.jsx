import {useWeb3Context} from "../contexts/useWeb3Context"
import { connectWallet } from "../utils/connectWallet";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const Wallet = () => {
    const navigateTo=useNavigate()
    const {updateWeb3State,web3State} = useWeb3Context()
    const {selectedAccount}=web3State;
    useEffect(()=>{
      if(selectedAccount){
        navigateTo("/home")
      }
    },[selectedAccount,navigateTo])
    
    const handleWalletConnection = async()=>{
        const {contractInstance,selectedAccount} = await connectWallet();
        updateWeb3State({contractInstance,selectedAccount})
    }
    
    return ( 
      <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-white font-bold text-xl">SecureSnap</span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
                <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About Us</a>
                <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact Us</a>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <button
                className="bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-white px-3 py-2 rounded-md text-sm font-medium shadow-md hover:shadow-lg transition duration-300"
                  onClick={handleWalletConnection}
                    >
                      Connect Wallet
                    </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
    
  );
}

 
export default Wallet;