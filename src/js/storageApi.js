function getData(key){
    if(!isKeyExist(key))
    {
        alert('No key in storage')
        return null;
    }
    return JSON.parse(localStorage.getItem(key));
}

function setData(key, data){
    localStorage.setItem(key, JSON.stringify(data))
    return true
}

function isKeyExist(key){
    return localStorage.getItem(key) !== null;
}

export {setData, getData, isKeyExist}