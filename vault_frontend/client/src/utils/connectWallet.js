import { ethers } from "ethers";
import contractAbi from "../constants/contractAbi.json"
import toast from "react-hot-toast";
import axios from "axios";

export const connectWallet=async()=>{

    try {
        if(!window.ethereum){
            throw new Error("Metamask is not installed")
        }
        const accounts = await window.ethereum.request({
            method: "eth_requestAccounts"
        })
        const selectedAccount=accounts[0];
        const provider=new ethers.BrowserProvider(window.ethereum);
        const signer=await provider.getSigner();

        const message="Welcome to Crypto Vault Website"
        const signature = await signer.signMessage(message);
        console.log(signature);
        const dataSignature = {
            signature
        }
        const url=`http://localhost:3000/api/authentication?address=${selectedAccount}`
        const res= await axios.post(url,dataSignature);
        //console.log(res.data.token);
        const token=res.data.token;
        localStorage.setItem("token",token);

        const contractAddress="0xF6ef612FEE8E0bca8Af1EDae95f7E830B3AD0d11";
        const contractInstance=new ethers.Contract(contractAddress,contractAbi,signer);
        return {contractInstance,selectedAccount}
    } catch (error) {
        toast.error("wallet connnection failed")
        console.error(error);
    }

   
}