function getStorageData(key){
    if(!isKeyExist(key))
    {
        alert('No key in storage')
        return null;
    }
    return JSON.parse(localStorage.getItem(key));
}

function setStorageData(key, data){
    localStorage.setItem(key, JSON.stringify(data))
    return true
}

function isStorageKeyExist(key){
    return localStorage.getItem(key) !== null;
}

export {setStorageData, getStorageData, isStorageKeyExist}