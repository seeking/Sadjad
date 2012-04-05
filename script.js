function clear_fld(field){
	if(field.value==field.defaultValue)
		field.value = "";
	else if (field.value=="")
		field.value=field.defaultValue;
}
