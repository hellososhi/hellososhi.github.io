function searchEsJa() {
    let word = document.getElementById("esjaword").value
    window.open("https://kotobank.jp/esjaword/"+word)
    //window.open("https://www.google.com/search?q=site%3Akotobank.jp%2Fesjaword+" + word)
}

function searchJaEs() {
    let word = document.getElementById("jaesword").value
    window.open("https://kotobank.jp/jaesword/" + word)
}