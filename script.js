window.onload = function(){
	var sld = document.getElementById("sld");
	var aryImg=["images/0.jpg","images/1.jpg","images/2.jpg","images/3.jpg",
				"images/4.jpg","images/5.jpg","images/6.jpg",
				"images/7.jpg","images/8.jpg","images/9.jpg","images/10.jpg"
				];
	var index_img = 0;
	function change_img(){
		sld.setAttribute("src",aryImg[index_img]);
		index_img++;
		index_img = (index_img >=aryImg.length)?0:index_img;	
	}
	var Intervl = setInterval(change_img,1000);
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
