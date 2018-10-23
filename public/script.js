// Form data handler
const formObj = document.getElementById('convertForm')
const endPoint = '/api/convert'

// Get form data
const getFormData = (form) => {
  let getData = new FormData(form)
  let params = {
    input: getData.get('input')
  }
  let query = Object.keys(params)
    .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
    .join('&')
  let url = `${endPoint}?${query}`
  console.log(`url is ${url}`)
  return url
}

// Convert input
const convertData = (url) => {
  document.getElementById('jsonResult').innerText = 'Loading data. Please wait...'
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      document.getElementById('result').innerText = data.string ? data.string : data
      document.getElementById('jsonResult').innerText = JSON.stringify(data)
    })
}

//Assign form handling functions to forms
formObj.onsubmit = (e) => {
  e.preventDefault()
  let data = getFormData(formObj)
  convertData(data)
}