import { useRef, useState } from "react";
import { get } from "../utils/requests";

const Get = ({ changeText, clickEvent }) => {
    const inputRef = useRef();

    const handleClick = () => {
        const data = inputRef.current.value;

        const resp = get(data)
            .then(res => {
                changeText(res);
            })
            .catch(e => console.log(e))
            .finally(res => clickEvent());
    }

    return (

        <div className="bg-white rounded-md border p-6">
            <h3 className="text-xl">Enter Retrive Id:</h3>
            <input ref={inputRef} className="border w-full p-2 outline-none rounded-md text-lg" placeholder="Enter Id" />
            <button className="bg-sky-400 mt-3 text-lg p-2 px-4 rounded" onClick={handleClick}>Submit</button>
        </div>
    )
};


export default Get;