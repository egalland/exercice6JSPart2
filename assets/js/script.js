// FONCTION CHANGEMENT D'IMAGE LORSQU'ON VA OU SORT DE LA ZONE DE L'IMAGE
function swapImage(id){
    // CHANGEMENT DE LA SOURCE DE L'IMAGE
    document.getElementById(id).src = 'assets/images/' + id + '_2.jpg';
}
function reverseImage(id){
    document.getElementById(id).src = 'assets/images/' + id + '.jpg';
}
