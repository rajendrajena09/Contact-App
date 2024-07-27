import {ErrorMessage, Field, Form, Formik} from "formik";
import Modal from "../components/Modal";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import { toast } from "react-toastify";
import * as Yup from "yup";
    
const contactSchemeValidation = Yup.object().shape({
    name:Yup.string().required("Name is required*"),
    email:Yup.string().email("Invalid Email").required("Email is required*"),
})

const AddandUpdate = ({isOpen,onClose,isUpdate,contact}) => {

    
    const addContact = async(contact) => {
        try {
            const contactRef = collection(db,"contacts");
            await addDoc(contactRef,contact);
            toast.success("Contact Added Successfully");
            onClose();
        } catch (error) {
            console.log(error);
        }
    };
    
    const updateContact = async(contact,id) => {
        try {
            const contactRef = doc(db,"contacts",id);
            await updateDoc(contactRef,contact);
            toast.success("Contact Updated Successfully");
            onClose();
        } catch (error) {
            console.log(error);
        }
    };
    

    return (
   
        <div>
  
       <Modal isOpen={isOpen} onClose={onClose}>

       <Formik
       validationSchema={contactSchemeValidation}
       initialValues={isUpdate ?
        {
        name:contact.name,
        email:contact.email,
       }:{
        name: "",
        email: "",
       }}
       onSubmit={(values)=>{
        isUpdate ? updateContact(values,contact.id):
        addContact(values);
       }}

       >
         
         

        <Form className="flex flex-col gap-2">
            <div className="flex flex-col gap-2">
            <label htmlFor="name">Name</label>
            <Field name="name" className="border rounded-sm p-2 " />
            <div className="text-red-500 ">
                <ErrorMessage name="name"/>
            </div>
            </div>
            <div className="flex flex-col gap-2">
            <label htmlFor="email">Email</label>
            <Field  name="email" className="border rounded-sm p-2 " />
            <div className="text-red-500 ">
                <ErrorMessage name="email"/>
            </div>
            </div>

        <button className="border bg-orange px-3 py-1 self-end" >{isUpdate ? "Update" : "Add"} Contact</button>
        </Form>
       </Formik>
          
         
       
       </Modal>
    </div> );
}
 
export default AddandUpdate;