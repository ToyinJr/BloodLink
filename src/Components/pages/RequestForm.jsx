import {Link} from 'react-router-dom';

let RequestForm = () => {
    return (
        <div className="mx-10">
            <div className="bg-[#8B0A1A] p-10">
                <p className="text-4xl text-white ext-2">Request Form</p>
            </div>

            <p className="pt-4 text-2xl">Personal Information</p>

            <form className="pt-10 flex flex-col space-y-10">
                <div>
            <div className="space-y-2">
            <label>Patient's full name*</label>
            <input type="text" className="border-2 border-[#40404069] rounded-md p-2 w-full" />
            </div>

            <div className="flex flex-col pt-4 space-y-6">
            <label>Gender*</label>
            <div className="flex gap-10">
            <div className={`space-x-2`}><input type="radio" value={`female`} /><label>Female</label></div>
            <div className={`space-x-2`}><input type="radio" value={`male`} /><label>Male</label></div>
            </div>

            </div>

                </div>

                <div className="flex flex-col space-y-2">
                    <p className="text-2xl">Blood Request details</p>

                    <label>What blood group do you need*?</label>
                    <select className="border-2 border-[#40404069] rounded-md p-2 w-full">
                        <option className="hidden"> </option>
                        <option>A+</option>
                        <option>A-</option>
                        <option>B+</option>
                        <option>B-</option>
                        <option>AB+</option>
                        <option>AB-</option>
                        <option>O+</option>
                        <option>O-</option>
                    </select>

                    <label>How urgent is the request?*</label>
                    <select className="border-2 border-[#40404069] rounded-md p-2 w-full">
                        <option className="hidden"> </option>
                        <option>Emergency</option>
                        <option>Within 24 hours</option>
                        <option>Within 48 hours</option>
                        <option>Within a week</option>
                    </select>

                    <label>Date Needed*</label>
                    <input type="date" className="border-2 border-[#40404069] rounded-md p-2 w-full" />

                    <label>Amount of blood needed?*</label>
                    <input type="text" className="border-2 border-[#40404069] rounded-md p-2 w-full" placeholder="e.g. 5 units" />
                </div>

                <div className="space-y-4">
                    <p className="text-2xl">Hospital Details</p>

                    <div className="space-y-2">
                    <label>Hospital name*</label>
                    <input type="text" className="border-2 border-[#40404069] rounded-md p-2 w-full" />
                    </div>

                    <div className="space-y-2">
                    <label>Address</label>
                    <input type="text" className="border-2 border-[#40404069] rounded-md p-2 w-full" />
                    </div>

                    <div className="space-y-2">
                    <label>Contact number</label>
                    <div className="flex gap-10">
                    <input type="number" className="border-2 border-[#40404069] rounded-md p-2 w-[10%] max-[700px]:w-[20%]" />
                    <input type="number" className="border-2 border-[#40404069] rounded-md p-2 w-[50%]" />
                    </div>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                <input type="checkbox" className={`h-8 w-8`} /> 
                <label>I agree to share this information for the purpose of securing blood donations</label>
                </div>

                
            </form>
            <Link reloadDocument to="/home"><div className="place-self-center"><button className="p-4 bg-[#008000] rounded-lg text-white">Submit Request</button></div></Link>
        </div>
    )
}

export default RequestForm;