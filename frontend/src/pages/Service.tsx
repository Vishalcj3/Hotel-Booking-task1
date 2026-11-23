import { Send } from "lucide-react";
import { useState } from "react";
function Service(){
    const [formdata,setFormdata] = useState({
        fullname:'',
        email:'',
        number:'',
        service:'',
        message:''
    });
    const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        if(!formdata.fullname || !formdata.email || !formdata.number || !formdata.service || !formdata.message){
            alert('Please fill in all fields!');
            return;
        }
        try{
            const response = await fetch('http://localhost:5000/api/enquiries/enquiry',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({
                    fullname: formdata.fullname,
                    email: formdata.email,
                    phone: formdata.number,
                    Service: formdata.service,
                    message: formdata.message
                })
            });
            const data = await response.json();
            if(response.ok){
                alert(data.message || 'Enquiry submitted successfully!');
                setFormdata({
                    fullname:'',
                    email:'',
                    number:'',
                    service:'',
                    message:''
                });
            } else{
                alert(data.message || "Failed to submit enquiry!");
            }
        } catch(error){
            alert("Server connection failed!")
            console.log(error)
        }
    };
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {id, value} = e.target;
        setFormdata(prev => ({
            ...prev,
            [id]: value
        }))
    }
    return(
        <div className="justify-center w-130 mx-auto border-white py-3">
            <div className="items-center mx-auto ">
                <p className="text-5xl font-bold text-yellow-400 mb-2 italic">Let's Get You Started!</p>
                <p className="text-[17px] font-light italic text-center mb-3">Tell us a little about yourself. <br/>Our Team will help you get started with the app</p>
                <form onSubmit={handleSubmit}>
                    <p className="font-medium text-lg mb-1 ">Enter Your Full Name :</p>
                    <input 
                    id="fullname" 
                    name="fullname"
                    value={formdata.fullname}
                    onChange={handleChange}
                    type="text" 
                    placeholder="Enter Your Full Name" 
                    className="translate-x-3 border-2 border-yellow-400 bg-gray-100 mb-3 rounded-xl w-96 h-12 px-4 py-2">
                    </input>
                    <p className="text-lg font-semibold mb-1">Enter Your Number :</p>
                    <input 
                    id="number" 
                    name="number"
                    value={formdata.number}
                    onChange={handleChange}
                    type="number" 
                    placeholder="Enter Your Number" 
                    className="translate-x-3 border-2 border-yellow-400 bg-gray-100 mb-3 rounded-xl w-96 h-12 px-4 py-2">
                    </input>
                    <p className="text-lg font-semibold mb-1">Enter Your Email :</p>
                    <input 
                    id="email" 
                    name="email"
                    value={formdata.email}
                    onChange={handleChange}
                    type="email" 
                    placeholder="Enter Your Email" 
                    className="translate-x-3 border-2 border-yellow-400 bg-gray-100 mb-3 rounded-xl w-96 h-12 px-4 py-2">
                    </input>
                    <p className="font-semibold text-lg mb-1">Service :</p>
                    <input 
                    id="service"
                    name="service"
                    value={formdata.service}
                    onChange={handleChange}
                    type="text" 
                    placeholder="Enter Your Service" 
                    className="translate-x-3 border-2 border-yellow-400 bg-gray-100 mb-3 rounded-xl w-96 h-12 px-4 py-2">
                    </input>
                    <p className="font-semibold text-lg mb-1">Message :</p>
                    <textarea 
                    id="message"
                    name="message"
                    value={formdata.message}
                    onChange={handleChange}
                    placeholder="Enter Your Message " 
                    className="translate-x-3 border-2 border-yellow-400 bg-gray-100 mb-3 rounded-xl w-96 h-30 px-4 py-2"/>
                    <br/>
                    <button 
                    type="submit" 
                    className="translate-x-37 flex bg-yellow-400 text-white rounded-full px-6 py-2 mt-4 shadow-md hover:scale-105 hover:shadow-xl transition-all duration-300"
                    >
                        Enquire
                        <Send size={19} className="translate-x-2 translate-y-1"/>
                    </button>
                </form>
            </div>
        </div>  
    )
}
export default Service;