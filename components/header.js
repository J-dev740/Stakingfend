import { useEffect, useState } from "react";
import { Beans } from "@web3uikit/icons";
import { useAccount,useConnect,useDisconnect } from "wagmi";

export default function Header(){
    const[isLoggedIn,setIsLoggedIn]=useState(false)
    const{isConnected}=useAccount()
    const {connect, connectors}=useConnect()
    const {disconnect}= useDisconnect()

    useEffect(()=>{
        if(!isConnected){
            setIsLoggedIn[true]
        }else{
            setIsLoggedIn[false]
        }
    },[isConnected])

    return (
        <section className="bg-slate-400">
            <section className="bg-slalte-500">
                <h1>Beans Stakings</h1>
                <Beans className=" font-bold text-[20px] text-black"
                />
            </section>
            <section>
                {
                    !isLoggedIn?(
                        <button className="text-white"
                         onClick={disconnect}>Disconnect Wallet  </button>
                    )
                    :
                    (
                         <>

                         </>
                    )
                }
            </section>
        </section>
    )
}


