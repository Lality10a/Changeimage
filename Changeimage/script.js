//SELECTION :
var monImage = document.getElementsByTagName('img');
console.log(monImage);

var monBouton = document.getElementsByTagName('button');
console.log(monBouton);
var nomImage = 'a';

//EVENEMENT :
monBouton[0].addEventListener('click', changeImage);

//FONCTION :

function changeImage() {
	console.log('click !');





	if(nomImage == 'a') {
		nomImage = 'b';

	 
		console.log(nomImage);
	} else {
		nomImage = 'a';			
		console.log(nomImage);
	}




	monImage[0].src = 'img/' + nomImage + '.jpg';
	


}