function openWhatsApp(){

const phone = "18298502170"

const message = "Hola, estoy interesado en una pagina web"

const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`

window.open(url,"_blank")

}


function viewDemo(url){

window.open(url,"_blank")

}