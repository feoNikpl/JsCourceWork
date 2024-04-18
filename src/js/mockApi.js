function getItems(){
    return fetch('https://661d5dae98427bbbef019d09.mockapi.io/api/pinterest/Posts', {
        method: 'GET',
        headers: {'content-type':'application/json'},
    }).then(res => {
        if (res.ok) {
            return res.json();
    }});
}

function updateItemDesk(item){
    return fetch('https://661d5dae98427bbbef019d09.mockapi.io/api/pinterest/Posts/'+item.id, {
        method: 'PUT',
        headers: {'content-type':'application/json'},
        body: JSON.stringify({desk:item.desk})
    }).then(res => {
        if (res.ok) {
            return res.json();
    }});
}

function createComplaint(complaint){
    return fetch('https://661d5dae98427bbbef019d09.mockapi.io/api/pinterest/Complaints', {
        method: 'POST',
        headers: {'content-type':'application/json'},
        body: JSON.stringify(complaint)
    }).then(res => {
        if (res.ok) {
            return res.json();
    }});
}
export {getItems, updateItemDesk, createComplaint}