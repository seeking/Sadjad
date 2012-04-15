window.onload = function(){
	var sld = document.getElementById("sld");
	var aryImg=["images/1.png","images/2.png","images/3.png",
				"images/4.png","images/5.png","images/6.png",
				"images/7.jpg","images/8.jpg","images/9.jpg"
				];
	var index_img = 0;
	function change_img(){
		sld.setAttribute("src",aryImg[index_img]);
		index_img++;
		index_img = (index_img >=aryImg.length)?0:index_img;	
	}
	var Intervl = setInterval(change_img,3000);
	sld.onclick = function (){
		clearInterval(Intervl);	
	}	
}

function clear_fld(field){
	if(field.value==field.defaultValue)
		field.value = "";
	else if (field.value=="")
		field.value=field.defaultValue;
}
