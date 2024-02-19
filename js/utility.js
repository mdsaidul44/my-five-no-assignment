function hiddenElement( elementId){
    const element =document.getElementById(elementId)
    element.classList.add('hidden')
}
function showElement( elementId){
    const element =document.getElementById(elementId)
    element.classList.remove('hidden')
}
function hiddenElementSection( elementId){
    const element = document.getElementById(elementId)
    element.classList.remove('hidden')
}