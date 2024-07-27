import NavBar from "./components/Navbar";
import { FaSearch } from "react-icons/fa";
import { CiCirclePlus } from "react-icons/ci";
import { useEffect, useState } from "react";
import { collection,getDocs, onSnapshot } from "firebase/firestore";
import { db } from "./config/firebase";

import Contactcard from "./components/Contactcard";
import AddandUpdate from "./components/AddandUpdate";
import useDisclouser from "./hooks/useDisclouser";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NotFound from "./components/Notfound";



const App = () => {

 
const[contacts,setContacts] = useState([]);

const{ isOpen, onClose, onOpen} = useDisclouser();

useEffect(() => {

  

const getContacts = async () => {

  try {
    
    const contactsRef = collection( db, "contacts");
    

    onSnapshot(contactsRef,(snapshot)=>{
       
      const contactList = snapshot.docs.map((doc) => {
        return {
          id:doc.id,
          ...doc.data(),
        };
      });
  
      setContacts(contactList);

      return contactList;
    })

  

  } catch (error) {
    console.log(error);
  }


}
 
getContacts();
},[]);

const filterContact = (e) =>{

const value = e.target.value;
const contactsRef = collection( db, "contacts");
    

    onSnapshot(contactsRef,(snapshot)=>{
       
      const contactList = snapshot.docs.map((doc) => {
        return {
          id:doc.id,
          ...doc.data(),
        };
      });

      const filteredContact =contactList.filter((contact) =>
        contact.name.toLowerCase().includes(value.toLowerCase())
      );
        
      setContacts(filteredContact);

      return filteredContact;
    });


};


  return(

<>
<div className="max-w-[370px] mx-auto px-4" >
  <NavBar/>
  
  <div className="flex gap-2 mb-4">
  <div className="flex relative items-center flex-grow">
    <FaSearch className="absolute text-xl text-white ml-2" />
    <input onChange={filterContact} type="text" className="pl-9 h-10 flex-grow bg-transparent border border-white  rounded-md text-white"/>
  </div>
  <div>
  <CiCirclePlus onClick={onOpen} className="text-5xl text-white cursor-pointer" />
  </div>
  </div>

<div  className="flex flex-col gap-4" >
{contacts.length <= 0 ? <NotFound/> :
contacts.map((contact) => (
              <Contactcard key={contact.id} contact={contact} />
            ))}
</div>



</div>

  <AddandUpdate isOpen={isOpen}  onClose={onClose}/>
  <ToastContainer />
</>
  );
   
}
 
export default App;