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
        <div className="w-full max-w-lg mx-auto px-4 py-6">
            <div className="flex flex-col">
                <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-yellow-400 mb-1 self-center italic">Let's Get You Started!</p>
                <p className="text-sm md:text-base font-light italic text-center mb-4">Tell us a little about yourself. <br/>Our Team will help you get started with the app</p>
                <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                    <p className="font-medium text-sm md:text-lg">Enter Your Full Name :</p>
                    <input 
                    id="fullname" 
                    name="fullname"
                    value={formdata.fullname}
                    onChange={handleChange}
                    type="text" 
                    placeholder="Enter Your Full Name" 
                    className="border-2 border-yellow-400 bg-gray-100 rounded-xl w-full h-9 md:h-12 px-3 py-1 text-sm md:text-base">
                    </input>
                    <p className="text-sm md:text-lg font-semibold">Enter Your Number :</p>
                    <input 
                    id="number" 
                    name="number"
                    value={formdata.number}
                    onChange={handleChange}
                    type="number" 
                    placeholder="Enter Your Number" 
                    className="border-2 border-yellow-400 bg-gray-100 rounded-xl w-full h-9 md:h-12 px-3 py-1 text-sm md:text-base">
                    </input>
                    <p className="text-sm md:text-lg font-semibold">Enter Your Email :</p>
                    <input 
                    id="email" 
                    name="email"
                    value={formdata.email}
                    onChange={handleChange}
                    type="email" 
                    placeholder="Enter Your Email" 
                    className="border-2 border-yellow-400 bg-gray-100 rounded-xl w-full h-9 md:h-12 px-3 py-1 text-sm md:text-base">
                    </input>
                    <p className="font-semibold text-sm md:text-lg">Service :</p>
                    <input 
                    id="service"
                    name="service"
                    value={formdata.service}
                    onChange={handleChange}
                    type="text" 
                    placeholder="Enter Your Service" 
                    className="border-2 border-yellow-400 bg-gray-100 rounded-xl w-full h-9 md:h-12 px-3 py-1 text-sm md:text-base">
                    </input>
                    <p className="font-semibold text-sm md:text-lg">Message :</p>
                    <textarea 
                    id="message"
                    name="message"
                    value={formdata.message}
                    onChange={handleChange}
                    placeholder="Enter Your Message" 
                    className="border-2 border-yellow-400 bg-gray-100 rounded-xl w-full h-24 md:h-32 px-3 py-2 text-sm md:text-base"/>
                    <button 
                    type="submit" 
                    className="self-center flex items-center gap-2 bg-yellow-400 text-white rounded-full px-4 py-1.5 text-sm shadow-md hover:scale-105 hover:shadow-xl transition-all duration-300"
                    >
                        Enquire
                        <Send size={11} />
                    </button>
                </form>
            </div>
        </div>  
    )
}
export default Service;