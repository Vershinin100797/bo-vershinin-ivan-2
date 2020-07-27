function range(){
	let val = ('.range').val();
	('.range').css({'background':'-webkit-linear-gradient(left ,#c29974 0%,#c29974 '+(val*100)/500+'%,#000000 '+(val*100)/500+'%, #000000 100%)'});
 }
