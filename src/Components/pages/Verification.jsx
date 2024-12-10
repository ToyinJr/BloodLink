import "./verification.css"
import { Link } from "react-router-dom";

let Verification = () =>  {
    return (
        <div className="mx-10">
        <div className="bg-[#8B0A1A] p-10">
            <p className="text-4xl text-white ext-2">Pre-request Verification</p>
        </div>

        <form className="pt-10 flex flex-col space-y-4">
            <div>
        <div className="space-y-3">
        <label>Name of Organization*</label>
        <input type="text" className="border-2 border-[#40404069] rounded-md p-2 w-full" />
        </div>

        <div className="space-y-3 pt-2 pb-2">
        <label>Email*</label>
        <input type="email" className="border-2 border-[#40404069] rounded-md p-2 w-full" />
        </div>

        <label>Conatct Number*</label>
        <div className="flex gap-10 pt-2">
                <input type="number" className="border-2 border-[#40404069] rounded-md p-2 w-[10%] max-[700px]:w-[20%]" />
                <input type="number" className="border-2 border-[#40404069] rounded-md p-2 w-[50%]" />
                </div>
        </div>

        <div className="space-y-2">
        <label>Address*</label>
        <input type="text" className="border-2 border-[#40404069] rounded-md p-2 w-full" />
        </div>

        <div className="space-y-2">
        <label>Name of contact person*</label>
        <input type="text" className="border-2 border-[#40404069] rounded-md p-2 w-full" />
        </div>

        <div className="space-y-2">
        <label>Position of contact person*</label>
        <input type="text" className="border-2 border-[#40404069] rounded-md p-2 w-full" />
        </div>

        <div className="flex flex-col space-y-4">
        <label>Authorized Personnel ID</label>
        <label htmlFor="file-upload" className="custom-file-upload">
        <div className="flex flex-col items-center p-10">
        <img src="images/cloud.png" alt="cloud" className="h-10 w-10" /> <p>Drag files here or browse</p>
        </div>
    </label>
<input id="file-upload" type="file" />

        <div className="flex gap-2 items-center"><img src="images/info.png" />Upload a valid ID of the contact person</div>
        </div>

        <div className="flex flex-col space-y-4 pt-8">
        <label>Organization License</label>
        <label htmlFor="file-upload" className="custom-file-upload">
        <div className="flex flex-col items-center p-10">
        <img src="images/cloud.png" alt="cloud" className="h-10 w-10" /> <p>Drag files here or browse</p>
        </div>
    </label>
<input id="file-upload" type="file" />

        <div className="flex gap-2 items-center"><img src="images/info.png" />Upload a document for verification, such as registration certificate</div>
        </div>

        </form>
        <Link reloadDocument to="/requestform"><div className="place-self-center "><button className="p-4 pl-6 pr-6 bg-[#008000] rounded-lg text-white ">SAVE</button></div></Link>
    </div>
    )
}

export default Verification;