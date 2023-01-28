export function setTolocalstorage(name,value){
  localStorage.setItem(name,JSON.stringify(value))
}

export function extractfromLocatstorage(name){
    JSON.parse(localStorage.getItem(name))
}

export function removefromlocalstorage(name){
    localStorage.removeItem(name)
}