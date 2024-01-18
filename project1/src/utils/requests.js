const url = 'https://applicationbackend-dev-ssms.2.us-1.fl0.io'

async function post(data) {

    const Data = {
        "data": data
    }

    const res = await fetch(`${url}/post`, {
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
    const res = await fetch(`${url}/get/${data}`, {
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