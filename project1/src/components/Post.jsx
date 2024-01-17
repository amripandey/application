import { useRef } from "react";

const Post = () => {
    const InputRef = useRef();

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(InputRef.current.value);
    }

    return (
        <div className="bg-white rounded-md border p-6">
            <h3 className="text-xl">Send To online clipBoard:</h3>
            <form onSubmit={onSubmit}>
                <textarea ref={InputRef} rows={15} className="border w-full p-2 outline-none rounded-md text-lg" placeholder="Enter Id" />
                <button type="submit" className="bg-sky-400 mt-3 text-lg p-2 px-4 rounded">Submit</button>
            </form>
        </div>
    )
};

export default Post;