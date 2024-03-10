function hideImage1() {
    // document.getElementById('image-1').classList.add('d-none'); // fügt class d-none hinzu
    // document.getElementById('image-1').classList.remove('d-none'); // class einfügen um sie wieder rauszunehmen ist unnötig, deswegen können wir uns beide Zeilen sparen
    document.getElementById('image-2').classList.remove('d-none'); // entfernt class d-none von image-2
    document.getElementById('image-3').classList.remove('d-none'); // entfernt class d-none von image-3
}

function hideImage2() {
    document.getElementById('image-2').classList.add('d-none'); // fügt class d-none hinzu
}

function hideImage3() {
    document.getElementById('image-3').classList.add('d-none');// fügt class d-none hinzu

}