function getItems(){
    return fetch('https://661d5dae98427bbbef019d09.mockapi.io/api/pinterest/Posts', {
        method: 'GET',
        headers: {'content-type':'application/json'},
    }).then(res => {
        if (res.ok) {
            return res.json();
    }});
}

export {getItems}