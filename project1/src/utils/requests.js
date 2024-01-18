async function post(data) {
    const Data = {
        "data": data
    }

    const res = await fetch('http://localhost:3000/post', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(Data)
    })
        .then(res => res.json())
        .catch(e => console.log(e));

    return res.Id;
};

async function get(data) {
    const res = await fetch(`http://localhost:3000/get/${data}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
    })
        .then(res => res.json())
        .catch(e => console.log(e));

    return res?.data;
}


export { get, post }