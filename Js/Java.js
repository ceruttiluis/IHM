$(document).ready(function() {

    let bannerAtual = 1;
    let listaBanner = ["banner1", "banner2", "banner3"];

    setInterval(mudarBanner, 2000);

    function mudarBanner() {
        if (bannerAtual > 0) { 
            $("#carrossel").removeClass(listaBanner[bannerAtual - 1]);  
        } else {
            $("#carrossel").removeClass(listaBanner[2]);
        }

        $("#carrossel").addClass(listaBanner[bannerAtual]);
        
        bannerAtual++;

        if (bannerAtual > 2) {
            bannerAtual = 0;
        }
    }
})

function abrirMenu() {
    document.getElementById("menu").style.width = "350px";
}
function fecharMenu() {
    document.getElementById("menu").style.width = "0px";
}