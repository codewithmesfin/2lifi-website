import PublicFooter from "../public/footer";
import Sidebar from "./sidebar";





 
export default function PrivateLayout({ children }:any) {
  return (
    <div className='flex flex-col h-screen bg-white justify-between'>
        <div className="flex">
        <Sidebar />
      <main >{children}</main>
        </div>
      
      <PublicFooter/>
    </div>
  )
}

