import { FaRegUserCircle } from "react-icons/fa";
import { RiEditCircleLine } from "react-icons/ri";
import { MdDelete } from "react-icons/md";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import AddandUpdate from "./AddandUpdate";
import useDisclouser from "../hooks/useDisclouser";
import { toast } from "react-toastify";

const Contactcard = ({ contact }) => {

  const{ isOpen, onClose, onOpen} = useDisclouser();


const deleteContact = async(id) =>{
  try {
    await deleteDoc(doc(db,"contacts",id));
    toast.error("Contact Deleted Successfully");
  } catch (error) {
    console.log(error);
  }
}


    return ( 
      <>
       
                   
                   <div key="contact.id" className="flex bg-yellow rounded-md items-center p-2 justify-between">
                      
                      <FaRegUserCircle className="text-4xl  text-orange" />
                      
                      <div>
                        <h2 className="font-medium">{contact.name}</h2>
                        <p className="text-sm">{contact.email}</p>
                      </div>
                     <div className="flex text-3xl">
                     <RiEditCircleLine onClick={onOpen} className="cursor-pointer"/>
                     <MdDelete onClick={()=>deleteContact(contact.id)} className="cursor-pointer text-orange"/>
                     </div>
                    </div>


<AddandUpdate isOpen={isOpen}
onClose={onClose} isUpdate 
contact={contact}
/> 
</>
     );
}
 
export default Contactcard;