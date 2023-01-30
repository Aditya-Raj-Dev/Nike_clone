export function setTolocalstorage(name, value) {
  return localStorage.setItem(name, JSON.stringify(value));
}

export function extractfromLocatstorage(name) {
  return JSON.parse(localStorage.getItem(name));
}

export function removefromlocalstorage(name) {
  return localStorage.removeItem(name);
}
