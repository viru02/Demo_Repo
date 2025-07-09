// import React from "react";
import { useState } from "react";
import '../Asset/CSS/Myform.css';

function Myform(){
    const [name, setName]=useState("");

    return(
        <form className="formwrapper">
            <div className="titlewrap">
            <caption className="titletxt">Registration Form</caption>
            </div>
            <div>
                <label className="labl">Enter Your Name:</label>
                <input className="input" type="text" />
            </div>
            <div>
                <label className="labl">Enter Your Contact No:</label>
                <input className="input" type="tel" />
            </div>
            <div>
                <label className="labl">Choose City:</label>
                <select className="input" name="city" id="ct">
                    <option value={""}>Select</option>
                    <option value={"Pune"}>Pune</option>
                    <option value={"Mumbai"}>Mumbai</option>
                    <option value={"Nagpur"}>Nagpur</option>
                    <option value={"Delhi"}>Delhi</option>
                    <option value={"Hyderabad"}>Hyderabad</option>
                </select>
            </div>
            <div>
                <label className="labl">Gender:</label>
                <input type="radio" name="gender" id="male" />Male
                <input type="radio" name="gender" id="female" />Female
                <input type="radio" name="gender" id="others" />Others
            </div>
            <div>
                <label className="labl">Qualification:</label>
                <select className="input" name="qualification" id="quali">
                    <option value={""}>Select</option>
                    <option value={"SSC"}>SSC</option>
                    <option value={"HSC"}>HSC</option>
                    <option value={"UG"}>UG</option>
                    <option value={"PG"}>PG</option>
                </select>
            </div>
            <div>
                <label className="labl">Address:</label>
                <textarea className="input" name="address" rows={3} cols={30} id="addr"></textarea>
            </div>
            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
    )
}

export default Myform