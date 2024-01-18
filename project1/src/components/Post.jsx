import { useRef, useState, useEffect } from "react";
import { post } from "../utils/requests";

const Post = ({ data, event }) => {

    const InputRef = useRef();
    const [id, setId] = useState(null);
    const [text, setText] = useState(data);

    useEffect(() => {
        setText(data)
    }, [event]);

    const onSubmit = (e) => {
        e.preventDefault();
        const data = InputRef.current.value;
        post(data)
            .then(res => setId(res))
            .catch(e => console.log(e));
    };

    const handleChange = (e) => {
        setText(e.target.value);
    };

    return (
        <div className="bg-white rounded-md border p-6">
            <h3 className="text-xl">Send To online clipBoard: {id}</h3>
            <form onSubmit={onSubmit}>
                <textarea value={text} onChange={handleChange} ref={InputRef} rows={15} className="border w-full p-2 outline-none rounded-md text-lg" placeholder="Enter Id" />
                <button type="submit" className="bg-sky-400 mt-3 text-lg p-2 px-4 rounded">Submit</button>
            </form>
        </div>
    )
};

export default Post;