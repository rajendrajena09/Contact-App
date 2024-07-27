import {createPortal} from "react-dom";
import { RxCross2 } from "react-icons/rx";

const Modal = ({isOpen,onClose,children}) => {
    return createPortal( 
       <>
        
        {isOpen && (
            <>
            <div className="top-[-200px] z-50  relative min-h-[200px] max-w-[50%] bg-white m-auto p-4">
         <div onClick={onClose} className="flex justify-end m-2 text-3xl">
           <RxCross2 />
         </div>
         <div className="m-4">{children}</div>
        </div>

        <div onClick={onClose} className="z-40 absolute h-screen w-screen backdrop-blur top-0 " />
             </>
        )}
         
       </>
     ,document.getElementById("modal-root"));
};
 
export default Modal;