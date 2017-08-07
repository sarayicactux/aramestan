// JavaScript Document
function isNumberKey(evt){

var charCode = (evt.which) ? evt.which : event.keyCode
if (charCode > 31 && (charCode < 47 || charCode > 57))
return false;

return true;}
function NotNumberKey(evt){

var charCode = (evt.which) ? evt.which : event.keyCode
if (charCode > 31 && (charCode < 47 || charCode > 57))
return true;
if ( charCode == 8 ){
	return true;
}
return false;}
function validate(address) {
 
   var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  
   if(reg.test(address) == false) {
 
      return false;
   }
   else {
	   return true;  
   }}
function checkMelliCode(meli_code) {


    if (meli_code.length == 10) {
        if (meli_code == '1111111111' ||
            meli_code == '0000000000' ||
            meli_code == '2222222222' ||
            meli_code == '3333333333' ||
            meli_code == '4444444444' ||
            meli_code == '5555555555' ||
            meli_code == '6666666666' ||
            meli_code == '7777777777' ||
            meli_code == '8888888888' ||
            meli_code == '9999999999') {
            
           
            return false;
        }
        c = parseInt(meli_code.charAt(9));
        n = parseInt(meli_code.charAt(0)) * 10 +
            parseInt(meli_code.charAt(1)) * 9 +
            parseInt(meli_code.charAt(2)) * 8 +
            parseInt(meli_code.charAt(3)) * 7 +
            parseInt(meli_code.charAt(4)) * 6 +
            parseInt(meli_code.charAt(5)) * 5 +
            parseInt(meli_code.charAt(6)) * 4 +
            parseInt(meli_code.charAt(7)) * 3 +
            parseInt(meli_code.charAt(8)) * 2;
        r = n - parseInt(n / 11) * 11;
        if ((r == 0 && r == c) || (r == 1 && c == 1) || (r > 1 && c == 11 - r)) {
			
            return true;
        } else {
            
            
            return false;
        }
    } else {
		 
        return false;
    }}
function removeOptionSelected( source,destination , removed ){
var  replaced = removed.value;
if (replaced != "") { // if selected
 
  var elSel = document.getElementById(source);
  var elSel2 = document.getElementById(destination);
  
  
   for (i = 0;i<elSel.length;i++ ) {
		if (elSel.options[i].selected) {
				var elOptNew = document.createElement('option');
				elOptNew.text = elSel.options[i].text;
 				 elOptNew.value = elSel.options[i].value;
				  try {
					elSel2.add(elOptNew, null); // standards compliant; doesn't work in IE
				  }
				  catch(ex) {
					elSel2.add(elOptNew); // IE only
				  }
		}
  
  
  }
 

	 
	  var i;
	  for (i = elSel.length - 1; i>=0; i--) {
		if (elSel.options[i].selected) {
	
		  elSel.remove(i);
		}
	}
 }// end of if selected

}
function checkUsername(username) {

  		$('#bg').fadeIn(100);
			$('#wait').fadeIn(100);
			$.post("index.php/applicant/checkusername", { 
					  		username     : username,
					   },
				 function(data){
					 $('#m_ch').html(data.msg);
					  if ( data.status ){ 
							 $('#userOk').val('1');
					  }
					  else {
					    	 $('#userOk').val('0');	
					  }
					 $('#bg').fadeOut(100);
			  		 $('#wait').fadeOut(100);}, "json");		
	
}
function reportMenus(url){
	$('#bg').fadeIn(100);
	$('#wait').fadeIn(100);
	$.post("index.php/"+url, { 
			   },
		 function(data){ 
		
		 if ( data ){
			 $('#reportsSpan').html(data);
			 $('#bg').fadeOut(100);
	  		 $('#wait').fadeOut(100);
			 }//  2pm
		 });	
}
function postMenus(url){
	$('html, body').animate({ scrollTop: 0 }, 1000);
	$('#bg').fadeIn(100);
	$('#wait').fadeIn(100);
	$.post(url, { 
		   _token           : $('#_token').val(),
			   },
		 function(data){ 
		
		 if ( data ){
			 $('#AdminDiv').html(data);
			 $('#bg').fadeOut(100);
	  		 $('#wait').fadeOut(100);
			 }//  2pm
		 });	
}
function changeAdPass(){
	 		var msg = '';
			if ( $('#user_pass_old').val() == '' ){
				$('#user_pass_old').focus();
				msg = 'رمز عبور قبلی وارد نشده';
			}
			else if ( $('#user_pass').val() == '' ){
				$('#user_pass').focus();
				msg = 'رمز عبور جدید وارد نشده';
			}
			else if ( $('#user_pass1').val() == '' ){
				$('#user_pass1').focus();
				msg = 'تکرار رمز عبور وارد نشده';
			}
			else if ( $('#user_pass1').val() != $('#user_pass').val() ){
				msg = 'رمز عبور و تکرار رمز عبور یکسان نیست';
			}
			if ( msg != '' ){
					$('#err_msg').html(msg);
					$('#bg').fadeIn(100,function(){
												$('#alerts').fadeIn(200); 
												 });
					
			}
			else { 
					
					

		
			
		$.post("index.php/admin/changeAdPass", { 
			  		username    : $('#username').val(),
					old_pass    : $('#user_pass_old').val(),
					password    : $('#user_pass').val()
			   },
		 function(data){ 
		 if ( data.status ){
			$('#changeMemP').html('<div class="rt_msg"><label class="required"><div align="center" >با تشکر<br />رمز عبور شما در پایگاه داده ها به روز رسانی شد.</label></div>');
			 
		 }//  2pm
		 else {
			 msg = data.error;
			  $('#err_msg').html(msg);
					$('#bg').fadeIn(100,function(){
												$('#alerts').fadeIn(200); 
												 });
			 }
		 }, "json");
											
									
	  
		}	
}
function ajaxFileUpload(source , file_el_id ,msg_id , check_id ){
		
		
		
				var file_data = $('#'+file_el_id).prop('files')[0];   
				var form_data = new FormData();                  
				form_data.append('file', file_data);
				$.ajax({
							url: source, // point to server-side PHP script 
							dataType: 'text',  // what to expect back from the PHP script, if anything
							cache: false,
							contentType: false,
							processData: false,
							data: form_data,                         
							type: 'post',
							success: function(data){
								
									
										if(data != '1')
										{
											document.getElementById(msg_id).innerHTML = data ;
											$('#'+check_id).val('1');
										}else
										{
											
											document.getElementById(msg_id).innerHTML = 'حجم فایل بیشتر از حد مجاز است' ;
											$('#'+check_id).val('0');
											
										}
									
				
							}
				 });
	/*			
    var file_data = $("#sortpicture").prop("files")[0];   
    var form_data = new FormData();                  
    form_data.append("file", file_data)
    alert(form_data);                             
    $.ajax({
                url: "/uploads",
                dataType: 'script',
                cache: false,
                contentType: false,
                processData: false,
                data: form_data,                         
                type: 'post',
                success: function(){
                    alert("works"); 
                }
     });*/

		
		/*$.ajaxFileUpload
		(
			{
				url:source,
				secureuri:false,
				fileElementId:file_el_id,
				dataType: 'json',
				success: function (data, status)
				{
					if(typeof(data.error) != 'undefined')
					{
						if(data.error != '1')
						{
							
							document.getElementById(msg_id).innerHTML = data.msg ;
							$('#'+check_id).val('1');
						}else
						{
							
							document.getElementById(msg_id).innerHTML = data.msg+'<br />حجم فایل بیشتر از حد مجاز است' ;
							$('#'+check_id).val('0');
							
						}
					}
				},
				error: function (data, status, e)
				{
					alert(e);
				}
			}
		)
		
		return false;*/

	}
function searchLogs(){

		//usage.length;
		
				 
			$('#wait').fadeIn(100);
		      $.post("index.php/reports/logs", { 
					userId       : $('#userId').val(),
					actDateStart : $('#actDateStart').val(),
					actDateEnd   : $('#actDateEnd').val(),
					order        : $('#order').val(),

										
			   },
		 function(data){
			 
					 $('#searchResult').html(data);
					 $('#bg').fadeOut(100);
			  		 $('#wait').fadeOut(100);
			 });
											
									
	  
		
			
}
function regRole(){
		var msg = '';
			if ( $('#name').val() == '' ){
				$('#name').focus();
				msg = 'نام نقش وارد نشده';
			}	
			if ( msg != '' ){
					$('#err_msg').html(msg);
					$('#bg').fadeIn(100,function(){
												$('#alerts').fadeIn(200); 
												 });
					
			}
			else {
				 
			$('#wait').fadeIn(100);
		      $.post("index.php/users/roles", { 
					name        : $('#name').val(),
			  		description : $('#description').val(),
					id          : $('#roleId').val(),
			   },
		 function(data){
			 $('#AdminDiv').html(data);
			  $("body").removeClass("modal-open");
			 $('.modal-backdrop').fadeOut(100);
			 $('#bg').fadeOut(100);
	  		 $('#wait').fadeOut(100);
			 });
		}
}
function editPermissionForm(id){
	
			$('#wait').fadeIn(100);	
			$.post("index.php/users/editPermissionForm", { 
				   roleid     : id,
			   },
					 function(data){ 
					
					 if ( data ){
						 $('#LayerDiv').html(data);
				  		 $('#wait').fadeOut(100);
						 }//  2pm
					 });
			}
function changeAccess(mid,rid,acc){
	
			$('#wait').fadeIn(100);	
			$.post("index.php/users/changeAccess", { 
				   mid     : mid,
				   rid     : rid,
				   acc     : acc,
			   },
					 function(data){ 
					
					 if ( data ){
						 $('#'+'acstatus'+mid).html(data);
	  					 $('#wait').fadeOut(100);
						 }//  2pm
					 });
			}
function checkUsername2(username) {

  		$('#bg').fadeIn(100);
			$('#wait').fadeIn(100);
			$.post("index.php/users/checkusername", { 
					  		username     : username,
					   },
				 function(data){
					 $('#m_ch').html(data.msg);
					  if ( data.status ){ 
							 $('#userOk').val('1');
							 $('#userCPl').html('');
					  }
					  else {
					    	 $('#userOk').val('0');	
							 $('#userCPl').html('نام کاربری وارد شده تکراری است');
					  }
					 $('#bg').fadeOut(100);
			  		 $('#wait').fadeOut(100);}, "json");		
	
}
function regNum(regNum) {

  	
			$.post("index.php/decedent/cregNum", { 
					  		regNum     : regNum,
					   },
				 function(data){
					 $('#m_ch1').html(data.msg);
					  if ( data.status ){ 
							 $('#regOk').val('1');
					  }
					  else {
					    	 $('#regOk').val('0');	
					  }
			  		 }, "json");		
	
}
function fishNum(fishNum,acc_id) {

			$.post("index.php/decedent/cfishNum", { 
					  		fishNum    : fishNum,
							acc_id     : acc_id,
					   },
				 function(data){
					 $('#m_ch1').html(data.msg);
					  if ( data.status ){ 
							 $('#fishOk').val('1');
					  }
					  else {
					    	 $('#fishOk').val('0');	
					  }
					 
			  		 }, "json");		
	
}
function addEditUser(){
		$('#wait').fadeIn(100);
	 		var msg = '';
			if ( $('#name').val() == '' ){
				$('#name').focus();
				msg = 'نام وارد نشده';
			}
			else if ( $('#family').val() == '' ){
				$('#family').focus();
				msg = 'نام خانوادگی وارد نشده';
			}
			else if ( $('#username').val() == '' ){
				$('#username').focus();
				msg = 'نام کاربری وارد نشده';
			}
			else if ( $('#userOk').val() != '1' ){
				msg = 'نام کاربری وارد شده معتبر نیست';
			}
			else if ( $('#password').val() == '' ){
				$('#password').focus();
				msg = 'رمز عبور نمی تواند خالی باشد';
			}
			
			if ( msg != '' ){
					$('#err_msg').html(msg);
					$('#bg').fadeIn(100,function(){
												$('#alerts').fadeIn(200); 
												 });
					
			}
			else { 
	
		$.post("index.php/users/users", { 
			  		name      : $('#name').val(),
					family    : $('#family').val(),
					username  : $('#username').val(),
					password  : $('#password').val(),
					mobile    : $('#mobile').val(),
					role_id   : $('#role_id').val(),
					is_active : $('#is_active').val(),
					userId    : $('#userId').val()
			   },
		 function(data){
			 $("body").removeClass("modal-open");
			 $('.modal-backdrop').fadeOut(100);
			 $('#AdminDiv').html(data);
	  		 $('#wait').fadeOut(100);
			 });
											
									
	  
		}	  		
}
function taxes(id,percent){
		var msg = '';
			if ( percent == '' ){
				
				msg = 'درصد مالیات وارد نشده';
			}
			
			if ( msg != '' ){
					$('#err_msg').html(msg);
					$('#bg').fadeIn(100,function(){
												$('#alerts').fadeIn(200); 
												 });
					
			}
			else {
				 
			$('#bg').fadeIn(100);
			$('#wait').fadeIn(100);
		      $.post("index.php/decedent/taxE", { 

					percent  : percent,
					id       : id,
			   },
		 function(data){
			 $('#AdminDiv').html(data);
			 $("body").removeClass("modal-open");
			 $('.modal-backdrop').fadeOut(100);
			 $('#bg').fadeOut(100);
	  		 $('#wait').fadeOut(100);
			 });
		}
}
function regGrMember(count,g_id){ 
			
			var ser_str = '';
			for (i=0;i<count;i++){
				
				if ( $('#check'+i).is( ":checked" ) ){
					ser_str = ser_str +  $('#check'+i).val() + ',';
				}
			
			}
			$.post("index.php/decedent/grouping", { 
							ser_str  :  ser_str,
							tId      :  g_id,
							
					   },
				 function(data){
					 alert('اطلاعات با موفقیت به روز رسانی شد ');
					
					 ctrlAct(g_id,'decedent/grouping');
					 });	
}
function tgroup(id,g_des,name){
		var msg = '';
			if ( name == '' ){
				
				msg = ' نام گروه وارد نشده';
			}
			if ( msg != '' ){
					$('#err_msg').html(msg);
					$('#bg').fadeIn(100,function(){
												$('#alerts').fadeIn(200); 
												 });
					
			}
			else {
				 
			$('#bg').fadeIn(100);
			$('#wait').fadeIn(100);
		      $.post("index.php/decedent/tariffGroup", { 
					g_des   : g_des,
					name    : name,
					id      : id,
			   },
		 function(data){
			 $('#AdminDiv').html(data);
			 $("body").removeClass("modal-open");
			 $('.modal-backdrop').fadeOut(100);
			 $('#bg').fadeOut(100);
	  		 $('#wait').fadeOut(100);
			 });
		}
}
function tariff(manual,toption,id,name,description,price,mult,tax){
		var msg = '';
			if ( name == '' ){
				
				msg = 'عنوان نوع تعرفه وارد نشده';
			}
			else if ( price == '' ){
				
				msg = ' مبلغ تعرفه وارد نشده';
			}
			else if ( mult == '1' ){
				
				if ( toption == '' ){
				
				msg = ' مبنای محاسبه وارد نشده';
				}
			}
			if ( msg != '' ){
					$('#err_msg').html(msg);
					$('#bg').fadeIn(100,function(){
												$('#alerts').fadeIn(200); 
												 });
					
			}
			else {
				 
			$('#bg').fadeIn(100);
			$('#wait').fadeIn(100);
		      $.post("index.php/decedent/tariff", { 
					manual      : manual,
			  		toption     : toption,
					name        : name,
			  		description : description,
					price       : price,
					mult        : mult,
					tax         : tax,
					id          : id,
			   },
		 function(data){
			 $('#AdminDiv').html(data);
			 $("body").removeClass("modal-open");
			 $('.modal-backdrop').fadeOut(100);
			 $('#bg').fadeOut(100);
	  		 $('#wait').fadeOut(100);
			 });
		}
}
function bankAcc(id,b_acc,counter_code,counter,branch_code,branch,bank_name){
		var msg = '';
			if ( bank_name == '' ){
				
				msg = 'نام بانک وارد نشده';
			}
			else if ( branch == '' ){
				
				msg = ' شعبه وارد نشده';
			}
			else if ( branch_code == '' ){
				
				msg = ' کد شعبه وارد نشده';
			}
			else if ( b_acc == '' ){
				
				msg = ' شماره حساب وارد نشده';
			}
			if ( msg != '' ){
					$('#err_msg').html(msg);
					$('#bg').fadeIn(100,function(){
												$('#alerts').fadeIn(200); 
												 });
					
			}
			else {
				 
			$('#bg').fadeIn(100);
			$('#wait').fadeIn(100);
		      $.post("index.php/bank_acc", { 
					bank_name    : bank_name,
			  		branch       : branch,
					branch_code  : branch_code,
			  		counter      : counter,
					counter_code : counter_code,
					b_acc        : b_acc,
					id           : id,
			   },
		 function(data){
			 $('#AdminDiv').html(data);
			 $("body").removeClass("modal-open");
			 $('.modal-backdrop').fadeOut(100);
			 $('#bg').fadeOut(100);
	  		 $('#wait').fadeOut(100);
			 });
		}
}
function cars(id,plate,model,c_type,system_c,car_type){
		var msg = '';
			if ( system_c == '' ){
				
				msg = ' سیستم وارد نشده';
			}
			else if ( c_type == '' ){
				
				msg = ' تیپ وارد نشده';
			}
			else if ( model == '' ){
				
				msg = ' مدل وارد نشده';
			}
			else if ( plate == '' ){
				
				msg = ' شماره پلاک وارد نشده';
			}
			if ( msg != '' ){
					$('#err_msg').html(msg);
					$('#bg').fadeIn(100,function(){
												$('#alerts').fadeIn(200); 
												 });
					
			}
			else {
				 
			$('#bg').fadeIn(100);
			$('#wait').fadeIn(100);
		      $.post("index.php/cars", { 
					car_type: car_type,
			  		system_c  : system_c,
					c_type  : c_type,
			  		model   : model,
					plate   : plate,
					id      : id,
			   },
		 function(data){
			 $('#AdminDiv').html(data);
			 $("body").removeClass("modal-open");
			 $('.modal-backdrop').fadeOut(100);
			 $('#bg').fadeOut(100);
	  		 $('#wait').fadeOut(100);
			 });
		}
}
function updateCarStat(id,status){
		
			
				 
			$('#bg').fadeIn(100);
			$('#wait').fadeIn(100);
		      $.post("index.php/cars", { 
					status  : status,
					id      : id,
			   },
		 function(data){
			 $('#AdminDiv').html(data);
			 $('#bg').fadeOut(100);
	  		 $('#wait').fadeOut(100);
			 });
		
}
function updateBankStat(id,status){
		
			
				 
			$('#bg').fadeIn(100);
			$('#wait').fadeIn(100);
		      $.post("index.php/bank_acc", { 
					status  : status,
					id      : id,
			   },
		 function(data){
			 $('#AdminDiv').html(data);
			 $('#bg').fadeOut(100);
	  		 $('#wait').fadeOut(100);
			 });
		
}
function deleteBAcc(id){
		
			
				 
			$('#bg').fadeIn(100);
			$('#wait').fadeIn(100);
		      $.post("index.php/bank_acc", { 
					delbank  : 'delete',
					id       : id,
			   },
		 function(data){
			 $('#AdminDiv').html(data);
			 $('#bg').fadeOut(100);
	  		 $('#wait').fadeOut(100);
			 });
		
}
function drivers(frmCheck,id,tel,n_code,family,name){
		var msg = '';
			if ( name == '' ){
				
				msg = ' نام راننده وارد نشده';
			}
			else if ( family == '' ){
				
				msg = ' نام خانوادگی وارد نشده';
			}
			else if ( n_code == '' ){
				
				msg = ' کد ملی راننده وارد نشده';
			}
			else if ( frmCheck == 0 ){
				
				msg = ' کد ملی راننده وارد شده صحیح نیست و یا تکراری وارد شده';
			}
			else if ( tel == '' ){
				
				msg = ' شماره تماس راننده وارد نشده';
			}
			if ( msg != '' ){
					$('#err_msg').html(msg);
					$('#bg').fadeIn(100,function(){
												$('#alerts').fadeIn(200); 
												 });
					
			}
			else {
				 
			$('#bg').fadeIn(100);
			$('#wait').fadeIn(100);
		      $.post("index.php/drivers", { 
					tel     : tel,
			  		n_code  : n_code,
					family  : family,
			  		name    : name,
					id      : id,
			   },
		 function(data){
			 $('#AdminDiv').html(data);
			 $("body").removeClass("modal-open");
			 $('.modal-backdrop').fadeOut(100);
			 $('#bg').fadeOut(100);
	  		 $('#wait').fadeOut(100);
			 });
		}
}
function updateDriversStat(id,status){
		
			
				 
			$('#bg').fadeIn(100);
			$('#wait').fadeIn(100);
		      $.post("index.php/drivers", { 
					status  : status,
					id      : id,
			   },
		 function(data){
			 $('#AdminDiv').html(data);
			 $('#bg').fadeOut(100);
	  		 $('#wait').fadeOut(100);
			 });
		
}
function deleteDriver(id){
		
			
				 
			$('#bg').fadeIn(100);
			$('#wait').fadeIn(100);
		      $.post("index.php/drivers", { 
					delDriver  : 'delete',
					id         : id,
			   },
		 function(data){
			 $('#AdminDiv').html(data);
			 $('#bg').fadeOut(100);
	  		 $('#wait').fadeOut(100);
			 });
		
}
function otherServ(manual,toption,id,name,description,price,mult,tax){
		var msg = '';
			if ( name == '' ){
				
				msg = 'عنوان نوع تعرفه وارد نشده';
			}
			else if ( price == '' ){
				
				msg = ' مبلغ تعرفه وارد نشده';
			}
			else if ( mult == '1' ){
				
				if ( toption == '' ){
				
				msg = ' مبنای محاسبه وارد نشده';
				}
			}
			if ( msg != '' ){
					$('#err_msg').html(msg);
					$('#bg').fadeIn(100,function(){
												$('#alerts').fadeIn(200); 
												 });
					
			}
			else {
				 
			$('#bg').fadeIn(100);
			$('#wait').fadeIn(100);
		      $.post("index.php/decedent/otherServ", { 
					manual      : manual,
			  		toption     : toption,
					name        : name,
			  		description : description,
					price       : price,
					mult        : mult,
					tax         : tax,
					id          : id,
			   },
		 function(data){
			 $('#AdminDiv').html(data);
			 $('#bg').fadeOut(100);
			  $("body").removeClass("modal-open");
			 $('.modal-backdrop').fadeOut(100);
	  		 $('#wait').fadeOut(100);
			 });
		}
}
function origin(id,ori_des,or_name){
		var msg = '';
			if ( or_name == '' ){
				
				msg = ' نام فیلد مبدا وارد نشده';
			}
			
			if ( msg != '' ){
					$('#err_msg').html(msg);
					$('#bg').fadeIn(100,function(){
												$('#alerts').fadeIn(200); 
												 });
					
			}
			else {
				 
			$('#bg').fadeIn(100);
			$('#wait').fadeIn(100);
		      $.post("index.php/origin", { 
					ori_des  : ori_des,
			  		or_name  : or_name,
					id       : id,
			   },
		 function(data){
			 $('#AdminDiv').html(data);
			 $("body").removeClass("modal-open");
			 $('.modal-backdrop').fadeOut(100);
			 $('#bg').fadeOut(100);
	  		 $('#wait').fadeOut(100);
			 });
		}
}
function cDeath(id,c_death,c_code){
		var msg = '';
			if ( c_code == '' ){
				
				msg = ' کد علت وارد نشده';
			}
			else if ( c_death == '' ){
				
				msg = ' علت فوت وارد نشده';
			}
			
			if ( msg != '' ){
					$('#err_msg').html(msg);
					$('#bg').fadeIn(100,function(){
												$('#alerts').fadeIn(200); 
												 });
					
			}
			else {
				 
			$('#bg').fadeIn(100);
			$('#wait').fadeIn(100);
		      $.post("index.php/c_death", { 
					c_death  : c_death,
			  		c_code   : c_code,
					id       : id,
			   },
		 function(data){
			 $('#AdminDiv').html(data);
			 $("body").removeClass("modal-open");
			 $('.modal-backdrop').fadeOut(100);
			 $('#bg').fadeOut(100);
	  		 $('#wait').fadeOut(100);
			 });
		}
}
function updateOriStat(id,status){
		
			
				 
			$('#bg').fadeIn(100);
			$('#wait').fadeIn(100);
		      $.post("index.php/origin", { 
					status  : status,
					id      : id,
			   },
		 function(data){
			 $('#AdminDiv').html(data);
			 $('#bg').fadeOut(100);
	  		 $('#wait').fadeOut(100);
			 });
		
}
function stores_rent(id,p_type,number,usage,space,addr){
		var msg = '';
			if ( number == '' ){
				
				msg = ' شماره وارد نشده';
			}
			else if ( usage == '' ){
				
				msg = ' کاربری وارد نشده';
			}
			else if ( space == '' ){
				
				msg = ' مساحت وارد نشده';
			}
			else if ( addr == '' ){
				
				msg = ' نشانی وارد نشده';
			}
			if ( msg != '' ){
					$('#err_msg').html(msg);
					$('#bg').fadeIn(100,function(){
												$('#alerts').fadeIn(200); 
												 });
					
			}
			else {
				 
			$('#bg').fadeIn(100);
			$('#wait').fadeIn(100);
		      $.post("index.php/stores", { 
					p_type  : p_type,
			  		number  : number,
					usage   : usage,
			  		space   : space,
					addr    : addr,
					id      : id,
			   },
		 function(data){
			 $('#AdminDiv').html(data);
			 $("body").removeClass("modal-open");
			 $('.modal-backdrop').fadeOut(100);
			 $('#bg').fadeOut(100);
	  		 $('#wait').fadeOut(100);
			 });
		}
}
function updateStoreStat(id,status){
		
			
				 
			$('#bg').fadeIn(100);
			$('#wait').fadeIn(100);
		      $.post("index.php/stores", { 
					status  : status,
					id      : id,
			   },
		 function(data){
			 $('#AdminDiv').html(data);
			 $("body").removeClass("modal-open");
			 $('.modal-backdrop').fadeOut(100);
			 $('#bg').fadeOut(100);
	  		 $('#wait').fadeOut(100);
			 });
		
}
function pray_p(id,pray_des,tariff,name){
		var msg = '';
			if ( name == '' ){
				
				msg = ' نام حسینیه وارد نشده';
			}
			else if ( tariff == '' ){
				
				msg = ' مبلغ اجاره وارد نشده';
			}
			if ( msg != '' ){
					$('#err_msg').html(msg);
					$('#bg').fadeIn(100,function(){
												$('#alerts').fadeIn(200); 
												 });
					
			}
			else {
				 
			$('#bg').fadeIn(100);
			$('#wait').fadeIn(100);
		      $.post("index.php/pray_p", { 
					pray_des: pray_des,
			  		tariff  : tariff,
					name    : name,
					id      : id,
			   },
		 function(data){
			 $('#AdminDiv').html(data);
			 $("body").removeClass("modal-open");
			 $('.modal-backdrop').fadeOut(100);
			 $('#bg').fadeOut(100);
	  		 $('#wait').fadeOut(100);
			 });
		}
}
function pray_times(id,sel_time,tariff,p_date,tId){
		var msg = '';
			if ( p_date == '' ){
				
				msg = ' تاریخ وارد نشده';
			}
		
			if ( msg != '' ){
				alert(msg);				
			}
			else {
				 
			$('#wait').fadeIn(100);
		      $.post("index.php/pray_p/prayTimes", { 
					sel_time  : sel_time,
			  		tariff    : tariff,
					p_date    : p_date,
					id        : id,
					tId       : tId,
			   },
		 function(data){
			 $('#LayerDiv').html(data);
	  		 $('#wait').fadeOut(100);
			 });
		}
}
function ctrlAct(id,ctrlAct){
			$('#wait').fadeIn(100);
			$('#LayerDiv').html('');
			$.post("index.php/"+ctrlAct, { 
				   tId     : id,
			   },
					 function(data){ 
					
					 if ( data ){
						 $('#LayerDiv').html(data);
				  		 $('#wait').fadeOut(100);
						 }//  2pm
					 });
			}
function orgs(id,org_des,name){
		var msg = '';
			if ( name == '' ){
				
				msg = ' نام سازمان/ارگان وارد نشده';
			}
			
			if ( msg != '' ){
					$('#err_msg').html(msg);
					$('#bg').fadeIn(100,function(){
												$('#alerts').fadeIn(200); 
												 });
					
			}
			else {
				 
			$('#bg').fadeIn(100);
			$('#wait').fadeIn(100);
		      $.post("index.php/orgs", { 
					org_des  : org_des,
			  		name     : name,
					id       : id,
			   },
		 function(data){
			 $('#AdminDiv').html(data);
			 $("body").removeClass("modal-open");
			 $('.modal-backdrop').fadeOut(100);
			 $('#bg').fadeOut(100);
	  		 $('#wait').fadeOut(100);
			 });
		}
}
function updateOrgStat(id,status){
		
			
				 
			$('#bg').fadeIn(100);
			$('#wait').fadeIn(100);
		      $.post("index.php/orgs", { 
					status  : status,
					id      : id,
			   },
		 function(data){
			 $('#AdminDiv').html(data);
			 $('#bg').fadeOut(100);
	  		 $('#wait').fadeOut(100);
			 });
		
}
function attachs(id,att_des,name){
		var msg = '';
			if ( name == '' ){
				
				msg = ' نوع فایل الصاقی وارد نشده';
			}
			
			if ( msg != '' ){
					$('#err_msg').html(msg);
					$('#bg').fadeIn(100,function(){
												$('#alerts').fadeIn(200); 
												 });
					
			}
			else {
				 
			$('#bg').fadeIn(100);
			$('#wait').fadeIn(100);
		      $.post("index.php/attachs", { 
					att_des  : att_des,
			  		name     : name,
					id       : id,
			   },
		 function(data){
			 $('#AdminDiv').html(data);
			 $("body").removeClass("modal-open");
			 $('.modal-backdrop').fadeOut(100);
			 $('#bg').fadeOut(100);
	  		 $('#wait').fadeOut(100);
			 });
		}
}
function updateattachstat(id,status){
		
			
				 
			$('#bg').fadeIn(100);
			$('#wait').fadeIn(100);
		      $.post("index.php/attachs", { 
					status  : status,
					id      : id,
			   },
		 function(data){
			 $('#AdminDiv').html(data);
			 $('#bg').fadeOut(100);
	  		 $('#wait').fadeOut(100);
			 });
		
}
function segment_types(id,type_des,type_name){
		var msg = '';
			if ( type_name == '' ){
				
				msg = ' نوع قطعه وارد نشده';
			}
			
			if ( msg != '' ){
					$('#err_msg').html(msg);
					$('#bg').fadeIn(100,function(){
												$('#alerts').fadeIn(200); 
												 });
					
			}
			else {
				 
			$('#bg').fadeIn(100);
			$('#wait').fadeIn(100);
		      $.post("index.php/tombs/segmentTypes", { 
					type_name : type_name,
			  		type_des  : type_des,
					id        : id,
			   },
		 function(data){
			 $('#AdminDiv').html(data);
			 $("body").removeClass("modal-open");
			 $('.modal-backdrop').fadeOut(100);
			 $('#bg').fadeOut(100);
	  		 $('#wait').fadeOut(100);
			 });
		}
}
function updateSegmentStat(id,status){
		
			
				 
			$('#bg').fadeIn(100);
			$('#wait').fadeIn(100);
		      $.post("index.php/tombs/segments", { 
					status  : status,
					id      : id,
			   },
		 function(data){
			 $('#AdminDiv').html(data);
			 $('#bg').fadeOut(100);
	  		 $('#wait').fadeOut(100);
			 });
		
}
function sub_type(id,segment_num,segment_name,tId,segments,old){
		var msg = '';
			
			/*if ( segment_name == '' ){
				
				msg = ' نام قطعه وارد نشده';
			}
			else*/ 
			var stat = false;
			for (var i = 0; i < segments.length; i++) {
					
  				  if (segments[i] === segment_num) {
      					  stat = true;
						  if (segment_num == old){ stat = false;}
  		  			}
			}
			if ( segment_num == '' ){
				
				msg = ' شماره قطعه وارد نشده';
			}
			else if ( stat ){
				msg = ' شماره قطعه وارد شده تکراری است';
			}
			if ( msg != '' ){
				alert(msg);				
			}
			else {
				 
			$('#wait').fadeIn(100);
		      $.post("index.php/tombs/sub_types", { 
					segment_name    : segment_name,
					segment_num     : segment_num,
					id              : id,
					tId             : tId,
			   },
		 function(data){
			 $('#LayerDiv').html(data);
	  		 $('#wait').fadeOut(100);
			 });
		}
}
function segments(id,segment_num,segment_name,type_id){
		var msg = '';
			/*if ( segment_name == '' ){
				
				msg = ' نام قطعه وارد نشده';
			}
			else */if ( segment_num == '' ){
				
				msg = ' شماره قطعه وارد نشده';
			}
			
			if ( msg != '' ){
				alert(msg);				
			}
			else {
				 
			$('#bg').fadeIn(100);
			$('#wait').fadeIn(100);
		      $.post("index.php/tombs/segments", { 
					segment_name    : segment_name,
					segment_num     : segment_num,
					id              : id,
					type_id         : type_id,
			   },
		 function(data){
			 $('#AdminDiv').html(data);
			 $("body").removeClass("modal-open");
			 $('.modal-backdrop').fadeOut(100);
			 $('#bg').fadeOut(100);
	  		 $('#wait').fadeOut(100);
			 });
		}
}
function sub_segment(id,row_num,tId,tombs_row,old){
		var msg = '';
		var stat = false;
			for (var i = 0; i < tombs_row.length; i++) {
					
  				  if (tombs_row[i] === row_num) {
      					  stat = true;
						  if (row_num == old){ stat = false;}
  		  			}
			}
			if ( row_num == '' ){
				
				msg = ' شماره ردیف وارد نشده';
			}
			else if ( stat ){
				msg = ' شماره ردیف وارد شده تکراری است';
			}
			if ( msg != '' ){
				alert(msg);				
			}
			else {
				 
			$('#wait').fadeIn(100);
		      $.post("index.php/tombs/sub_segment", { 
					row_num  : row_num,
					id       : id,
					tId      : tId,
			   },
		 function(data){
			 $('#LayerDiv').html(data);
	  		 $('#wait').fadeOut(100);
			 });
		}
}
function regTombNum(id,fl_num,tomb_num,tId,tombs_num, old){
		var msg = '';
			var stat = false;
			for (var i = 0; i < tombs_num.length; i++) {
					
  				  if (tombs_num[i] === tomb_num) {
      					  stat = true;
						  if (tomb_num == old){ stat = false;}
  		  			}
			}
			if ( tomb_num == '' ){
				
				msg = ' شماره قبر وارد نشده';
			}
			else if ( stat ){
				msg = ' شماره قبر وارد شده تکراری است';
			}
			if ( msg != '' ){
				alert(msg);				
			}
			else {
				 
			$('#wait').fadeIn(100);
		      $.post("index.php/tombs/tombs_ls", { 
					tomb_num : tomb_num,
					fl_num   : fl_num,
					id       : id,
					tId      : tId,
			   },
		 function(data){
			 $('#LayerDiv').html(data);
	  		 $('#wait').fadeOut(100);
			 });
		}
}
function chambers(id,c_name,c_num,segment_id){
		var msg = '';
			if ( c_num == '' ){
				
				msg = ' شماره حجره وارد نشده';
			}
			else if ( c_name == '' ){
				
				msg = ' نام حجره وارد نشده';
			}
			if ( msg != '' ){
					$('#err_msg').html(msg);
					$('#bg').fadeIn(100,function(){
												$('#alerts').fadeIn(200); 
												 });
					
			}
			else {
				 
			$('#bg').fadeIn(100);
			$('#wait').fadeIn(100);
		      $.post("index.php/tombs/chambers", { 
					c_name     : c_name,
			  		c_num      : c_num,
					segment_id : segment_id,
					id         : id,
			   },
		 function(data){
			 $('#AdminDiv').html(data);
			 $("body").removeClass("modal-open");
			 $('.modal-backdrop').fadeOut(100);
			 $('#bg').fadeOut(100);
	  		 $('#wait').fadeOut(100);
			 });
		}
}
function ch_tombs(id,fl_num,tomb_num,tId){
		var msg = '';
			if ( tomb_num == '' ){
				
				msg = ' شماره قبر وارد نشده';
			}
			else if ( fl_num == '' ){
				
				msg = ' تعداد طبقات وارد نشده';
			}
			else if ( fl_num*1  > 2 ){
				
				msg = ' تعداد طبقات وارد شده معتبر نیست';
			}
			if ( msg != '' ){
				alert(msg);				
			}
			else {
				 
			$('#wait').fadeIn(100);
		      $.post("index.php/tombs/ch_tombs", { 
					fl_num    : fl_num,
					tomb_num  : tomb_num,
					id        : id,
					tId       : tId,
			   },
		 function(data){
			 $('#LayerDiv').html(data);
	  		 $('#wait').fadeOut(100);
			 });
		}
}
function regDead() {
			var msg = '';
			d_date = $('#d_date').val();
			ddate = d_date.split('/'); 
			int_date = $('#int_date').val();
			intdate = int_date.split('/'); 
			if ( $('#name').val() == '' ){
				$('#name').focus();
				msg = 'نام وارد نشده';
			}
			else if ( $('#family').val() == '' ){
				$('#family').focus();
				msg = 'نام خانوادگی وارد نشده';
			}
			else if ( $('#f_name').val() == '' ){
				$('#f_name').focus();
				msg = 'نام پدر وارد نشده';
			}
			else if ( $('#nationality').val() == '' ){
				$('#nationality').focus();
				msg = 'ملیت وارد نشده';
			}			
			/*else if ( $('#m_name').val() == '' ){
				$('#m_name').focus();
				msg = 'نام مادر وارد نشده';
			}
			
			
			else if ( $('#b_num').val() == '' ){
				$('#b_num').focus();
				msg = 'شماره شناسنامه وارد نشده';
			}
			else if ( $('#b_location').val() == '' ){
				$('#b_location').focus();
				msg = 'محل صدور وارد نشده';
			}*/
			else if ( $('#n_code').val() == '' ){
				$('#n_code').focus();
				msg = 'شماره ملی وارد نشده';
			}/*
			else if ( $('#frmCheck').val() == '0' ){
						msg = 'شماره ملی وارد شده، صحیح نبوده یا تکراری است';
			}*/
			else if ( $('#b_date').val() == '' ){
				$('#b_date').focus();
				msg = 'تاریخ تولد وارد نشده';
			}
			
			else if ( $('#addr').val() == '' ){
				$('#addr').focus();
				msg = 'نشانی وارد نشده';
			}
			/*else if ( $('#age').val() == '' ){
				$('#age').focus();
				msg = 'سن وارد نشده';
			}
			else if ( $('#tel').val() == '' ){
				$('#tel').focus();
				msg = 'شماره تماس وارد نشده';
			}
			else if ( $('#tel').val() < 02199999999 ){
				$('#tel').focus();
				msg = 'شماره تماس وارد شده صحیح نیست';
			}*/
			/*else if ( $('#city').val() == '' ){
				$('#city').focus();
				msg = 'شهر محل سکونت وارد نشده';
			}
			else if ( $('#zipcode').val() == '' ){
				$('#zipcode').focus();
				msg = 'کدپستی وارد نشده';
			}*/
			else if ( $('#d_date').val() == '' ){
				$('#d_date').focus();
				msg = 'تاریخ فوت وارد نشده';
			}
			
			else if ( $('#int_date').val() == '' ){
				$('#int_date').focus();
				msg = 'تاریخ ثبت وارد نشده';
			}
			else if ( intdate < ddate ){
				$('#int_date').focus();
				msg = 'تاریخ ثبت و تاریخ فوت، صحیح نیست';
			}
			else if ( $('#d_reason').val() == '' ){
				$('#d_reason').focus();
				msg = 'علت فوت وارد نشده';
			}
			else if ( $('#fridge_num').val() == '' ){
				$('#fridge_num').focus();
				msg = 'شماره سردخانه وارد نشده';
			}
			else if ( $('#reg_num').val() == '' ){
				$('#reg_num').focus();
				$('#regOk').val('0');
				msg = 'شماره ثبت دفتری وارد نشده';
			}
			else if ( $('#regOk').val() == '0' ){
				$('#reg_num').focus();
				msg = 'شماره ثبت دفتری وارد شده، تکراری و نامعتبر است';
			}
			/*
			else if ( $('#regCheck').val() == '0' ){
						msg = 'شماره سردخانه وارد شده تکراری و نامعتبر است';
			}*/
			
			if ( msg != '' ){
					$('#err_msg').html(msg);
					$('#bg').fadeIn(100,function(){
												$('#alerts').fadeIn(200); 
												 });
					
			}
			else {
				 
				$('#bg').fadeIn(100);
			$('#wait').fadeIn(100);
		      $.post("index.php/decedent/decsave", { 
					gender       : $('#gender').val(),
					name         : $('#name').val(),
			  		family       : $('#family').val(),
					f_name       : $('#f_name').val(),
					m_name       : $('#m_name').val(),
					nationality  : $('#nationality').val(),
					n_code       : $('#n_code').val(),
					b_num        : $('#b_num').val(),
					b_location   : $('#b_location').val(),
					sh_serial    : $('#sh_serial').val(),
					sh_series    : $('#sh_series').val(),
					b_date       : $('#b_date').val(),
					addr         : $('#addr').val(),
					age          : $('#age').val(),
					job          : $('#job').val(),
					tel          : $('#tel').val(),
					mobile       : $('#mobile').val(),
					zipcode      : $('#zipcode').val(),
					d_date       : $('#d_date').val(),
					d_date_status: $('#d_date_status').val(),
					int_date     : $('#int_date').val(),
					d_place      : $('#d_place').val(),
					d_reason     : $('#d_reason').val(),
					disease      : $('#disease').val(),
					hos_dc       : $('#hos_dc').val(),
					fridge_num   : $('#fridge_num').val(),
					burial       : $('#burial').val(),
					burial_p     : $('#burial_p').val(),
					driver       : $('#driver').val(),
					add_txt      : $('#add_txt').val(),
					reg_num      : $('#reg_num').val(),
					discription  : $('#discription').val(),
					
									
					
			   },
		 function(data){  
			  alert('متوفی جدید با موفقیت ثبت شد');
			 $("body").removeClass("modal-open");
			 $('.modal-backdrop').fadeOut(100);
			 postMenus('decedent/decList');
		
		
		 });
											
									
	  
		
			}
}
function searchDec(){
  			$('#bg').fadeIn(100);
			$('#wait').fadeIn(100);
			$.post("index.php/decedent/searchDec", { 
					  		gender   :  $('#gender').val(),
							wcolumn  :  $('#wcolumn').val(),
							orderBy  :  $('#orderBy').val(),
							verb     :  $('#verb').val(),
							decStart :  $('#decStart').val(),
							decEnd   :  $('#decEnd').val(),
					   },
				 function(data){
					 $('#searchResult').html(data);
					 $('#bg').fadeOut(100);
			  		 $('#wait').fadeOut(100);});	
}
function sendDeadDoc(att_id,id){
	var msg = '';
			
			if ( $('#image_check2').val() == '0' ){
				$('#image_file2').focus();
				msg = 'فایل ارسال نشده یا حجم آن مناسب نیست';alert(msg);
			}
			if ( msg != '' ){
				$('#msgch').html(msg);
			}
			else {
			$('#wait').fadeIn(100);	
			$.post("index.php/decedent/sendDeadDoc", { 
				   att_id : att_id,
				   id     : id,
			   },
					 function(data){ 
					
					
						 
						ctrlAct(id,'decedent/attachs');
						 
					 });
	}
}
function regnewTombDec(d_id){
		var msg = '';
			if ( $('#segment_id').val() == '0' ){
				
				msg = ' قطعه انتخاب نشده';
			}
			else if ( $('#cham_row_id').val() == '0' ){
				
				msg = ' ردیف / حجره انتخاب نشده';
			}
			else if ( $('#tombs_num_id').val() == '0' ){
				
				msg = ' قبر انتخاب نشده';
			}
			else if ( $('#tomb_fl_num').val() == '0' ){
				
				msg = ' قبر انتخاب نشده';
			}
			if ( $('#fl_num').val() == '2' ){
				if ( $('#name').val() == '' ){
				
				msg = ' نام صاحب قبر وارد نشده';
				}
				else if ( $('#family').val() == '' ){
					
					msg = ' نام خانودگی صاحب قبر وارد نشده';
				}
				else if ( $('#n_code').val() == '' ){
					
					msg = ' کد ملی وارد نشده';
				}
			}
			 			
			if ( msg != '' ){
				alert(msg);				
			}
			else {
				 
			//$('#bg').fadeIn(100);
			$('#wait').fadeIn(100);
		      $.post("index.php/decedent/tombInfNewT", { 
					tId          : d_id,
					p_type       : $('#p_type').val(),
					segment_id   : $('#segment_id').val(),
					cham_row_id  : $('#cham_row_id').val(),
					tomb_num_id  : $('#tombs_num_id').val(),
					fl_num       : $('#tomb_fl_num').val(),
					t_des        : $('#t_des').val(),
					t_id         : $('#tomb_id').val(),
					name         : $('#name').val(),
					family       : $('#family').val(),
					f_name       : $('#f_name').val(),
					n_code       : $('#n_code').val(),
					tel          : $('#tel').val(),
					mobil        : $('#mobil').val(),
					b_num        : $('#b_num').val(),
					b_location   : $('#b_location').val(),
					zipcode      : $('#zipcode').val(),
					addr         : $('#addr').val(),
					fl_num1      : $('#fl_num').val(),
			   },
		 function(data){
			 $('#LayerDiv').html(data);
				  		 $('#wait').fadeOut(100,function(){ $('#LayerDiv').fadeIn(100);$('#closeLayer').fadeIn(100);});
			 });
		}
}
function fl1Tomb(d_id){
		var msg = '';
			if ( $('#segment_id1').val() == '0' ){
				
				msg = ' قطعه انتخاب نشده';
			}
			else if ( $('#cham_row_id1').val() == '0' ){
				
				msg = ' ردیف / حجره انتخاب نشده';
			}
			else if ( $('#tombs_num_id1').val() == '0' ){
				
				msg = ' قبر انتخاب نشده';
			}
			if ( msg != '' ){
				alert(msg);				
			}
			else {
				 
			//$('#bg').fadeIn(100);
			$('#wait').fadeIn(100);
		      $.post("index.php/decedent/fl1Tomb", { 
					tId          : d_id,
					p_type       : $('#p_type1').val(),
					segment_id   : $('#segment_id1').val(),
					cham_row_id  : $('#cham_row_id1').val(),
					tomb_num_id  : $('#tombs_num_id1').val(),
					fl_num       : $('#tomb_fl_num1').val(),
					t_des        : $('#t_des1').val(),
					t_id         : 0,
			   },
		 function(data){
			 $('#LayerDiv').html(data);
				  		 $('#wait').fadeOut(100,function(){ $('#LayerDiv').fadeIn(100);$('#closeLayer').fadeIn(100);});
			 });
		}
}
function deleteTombDec(d_id){
	
			
				 
			//$('#bg').fadeIn(100);
			$('#wait').fadeIn(100);
		      $.post("index.php/decedent/tombDelete", { 
					id          : d_id,
					
			   },
		 function(data){
			 $('#LayerDiv').html(data);
				  		 $('#wait').fadeOut(100,function(){ $('#LayerDiv').fadeIn(100);$('#closeLayer').fadeIn(100);});
			 });
		
}
function deleteTombRes(num_id,d_id){
	
			
			$('#wait').fadeIn(100);
		      $.post("index.php/reservation/tombDelete", { 
					tId    : d_id,
					num_id : num_id,
					
			   },
		 function(data){
			 $('#LayerDiv').html(data);
				  		 $('#wait').fadeOut(100,function(){ $('#LayerDiv').fadeIn(100);$('#closeLayer').fadeIn(100);});
			 });
		
}
function editTombDec(d_id,t_id){
		var msg = '';
			if ( $('#segment_id').val() == '0' ){
				
				msg = ' قطعه انتخاب نشده';
			}
			else if ( $('#cham_row_id').val() == '0' ){
				
				msg = ' ردیف / حجره انتخاب نشده';
			}
			else if ( $('#tombs_num_id').val() == '0' ){
				
				msg = ' قبر انتخاب نشده';
			}
			else if ( $('#tomb_fl_num').val() == '0' ){
				
				msg = ' قبر انتخاب نشده';
			}
			else if ( $('#name').val() == '' ){
				
				msg = ' نام صاحب قبر وارد نشده';
			}
			else if ( $('#family').val() == '' ){
				
				msg = ' نام خانودگی صاحب قبر وارد نشده';
			}
			else if ( $('#n_code').val() == '' ){
				
				msg = ' کد ملی وارد نشده';
			}
			
			if ( msg != '' ){
				alert(msg);				
			}
			else {
				 
			//$('#bg').fadeIn(100);
			$('#wait').fadeIn(100);
		      $.post("index.php/decedent/tombInfEdit", { 
					tId          : d_id,
					t_id         : t_id,
					p_type       : $('#p_type').val(),
					segment_id   : $('#segment_id').val(),
					cham_row_id  : $('#cham_row_id').val(),
					tomb_num_id  : $('#tombs_num_id').val(),
					fl_num       : $('#tomb_fl_num').val(),
					t_des        : $('#t_des').val(),
					t_id         : $('#tomb_id').val(),
					name         : $('#name').val(),
					family       : $('#family').val(),
					f_name       : $('#f_name').val(),
					n_code       : $('#n_code').val(),
					tel          : $('#tel').val(),
					mobil        : $('#mobil').val(),
					b_num        : $('#b_num').val(),
					b_location   : $('#b_location').val(),
					zipcode      : $('#zipcode').val(),
					addr         : $('#addr').val(),
			   },
		 function(data){
			 $('#LayerDiv').html(data);
				  		 $('#wait').fadeOut(100,function(){ $('#LayerDiv').fadeIn(100);$('#closeLayer').fadeIn(100);});
			 });
		}
}
function regFl2(tomb_id){
		var msg = '';
			
				 
			$('#bg').fadeIn(100);
			$('#wait').fadeIn(100);
		      $.post("index.php/decedent/tombInfFl2", { 
					tomb_id   : tomb_id,
					tId       : $('#d_id').val(),
					
			   },
		 function(data){
			 $('#LayerDiv').html(data);
				  		 $('#wait').fadeOut(100,function(){ $('#LayerDiv').fadeIn(100);$('#closeLayer').fadeIn(100);});
			 });
		
}
function regFreeFl2(tomb_id,d_id){
		var msg = '';
			
				 
			//$('#bg').fadeIn(100);
			$('#wait').fadeIn(100);
		      $.post("index.php/decedent/regFreeFl2", { 
					tomb_id   : tomb_id,
					tId       : d_id,
					
			   },
		 function(data){
			 $('#LayerDiv').html(data);
				  		 $('#wait').fadeOut(100,function(){ $('#LayerDiv').fadeIn(100);$('#closeLayer').fadeIn(100);});
			 });
		
}
function regServices(count,d_id) {
			$('#bg').fadeIn(100);
			$('#wait').fadeIn(100);
		for (i=0;i<count;i++){
			var cheK = '0';
			if ( $('#check'+i).is( ":checked" ) ){
				cheK = '1';
			}
			t_id     = $('#t_id'+i).val();
			toption  = $('#toption'+i).val();
			op_count = $('#op_count'+i).val();
			amount   = $('#amount'+i).val();
			place    = 'tarr'+i;
			regService(t_id,cheK,toption,op_count,d_id,place,amount);
		}
		$('#wait').delay(1500).fadeOut(100,function(){
										$('#err_msg').html('خدمات با موفقیت ثبت شد');
					$('#bg').fadeIn(100,function(){
												$('#alerts').fadeIn(200); 
												 });	
										});
	
		 
}
function regService(t_id,cheK,toption,op_count,d_id,place,amount){
	 
				 
			
		      $.post("index.php/decedent/addServ", { 
					t_id     : t_id,
			  		toption  : toption,
					amount   : amount,
					op_count : op_count,
					d_id     : d_id,
					cheK     : cheK,
			   },
		 function(data){$('#'+place).html(data)});
		
}
function regdiscountInf(d_id){
	
		var msg = '';
		
			if ( $('#org').val() == '' ){
				msg = 'نام سازمان درخواست کننده وارد نشده';
			}
			else if ( $('#l_num').val() == '' ){
						msg = 'شماره نامه درخواست وارد نشده';
			}
			else if ( $('#l_date').val() == '' ){
						msg = 'تاریخ نامه درخواست وارد نشده';
			}
			else if ( $('#d_amount').val() == '' ){
						msg = 'مبلغ تخفیف وارد نشده';
			}
			if ( msg != '' ){
					$('#err_msg').html(msg);
					$('#bg').fadeIn(100,function(){
												$('#alerts').fadeIn(200); 
												 });
					
			}
			else {
				 
			//$('#bg').fadeIn(100);
			$('#wait').fadeIn(100);
		      $.post("index.php/decedent/discountE", { 
								d_id        : d_id,
								org         : $('#org').val(),
								l_num       : $('#l_num').val(),
								l_date      : $('#l_date').val(),
								d_amount    : $('#d_amount').val(),
								dpercent    : $('#dpercent').val(),
								description : $('#description').val(),
								
			   },
		 function(data){
			ctrlAct(d_id,'decedent/discount');
			 });
		}
}
function regdiscountInfNewBorn(d_id,d_type){
	
		var msg = '';
		
			if ( $('#org').val() == '' ){
				msg = 'نام سازمان درخواست کننده وارد نشده';
			}
			else if ( $('#l_num').val() == '' ){
						msg = 'شماره نامه درخواست وارد نشده';
			}
			else if ( $('#l_date').val() == '' ){
						msg = 'تاریخ نامه درخواست وارد نشده';
			}
			else if ( $('#d_amount').val() == '' ){
						msg = 'مبلغ تخفیف وارد نشده';
			}
			if ( msg != '' ){
					$('#err_msg').html(msg);
					$('#bg').fadeIn(100,function(){
												$('#alerts').fadeIn(200); 
												 });
					
			}
			else {
				 
			//$('#bg').fadeIn(100);
			$('#wait').fadeIn(100);
		      $.post("index.php/newborn/discountE", { 
								d_id        : d_id,
								d_type      : d_type,
								org         : $('#org').val(),
								l_num       : $('#l_num').val(),
								l_date      : $('#l_date').val(),
								d_amount    : $('#d_amount').val(),
								dpercent    : $('#dpercent').val(),
								description : $('#description').val(),
								
			   },
		 function(data){
			ctrlAct(d_id,'newborn/discount?d_type='+d_type);
			 });
		}
}
function regdiscountInfUni(d_id){
	
		var msg = '';
		
			if ( $('#org').val() == '' ){
				msg = 'نام سازمان درخواست کننده وارد نشده';
			}
			else if ( $('#l_num').val() == '' ){
						msg = 'شماره نامه درخواست وارد نشده';
			}
			else if ( $('#l_date').val() == '' ){
						msg = 'تاریخ نامه درخواست وارد نشده';
			}
			else if ( $('#d_amount').val() == '' ){
						msg = 'مبلغ تخفیف وارد نشده';
			}
			if ( msg != '' ){
					$('#err_msg').html(msg);
					$('#bg').fadeIn(100,function(){
												$('#alerts').fadeIn(200); 
												 });
					
			}
			else {
				 
			//$('#bg').fadeIn(100);
			$('#wait').fadeIn(100);
		      $.post("index.php/unidentified/discountE", { 
								d_id        : d_id,
								d_type      : 3,
								org         : $('#org').val(),
								l_num       : $('#l_num').val(),
								l_date      : $('#l_date').val(),
								d_amount    : $('#d_amount').val(),
								dpercent    : $('#dpercent').val(),
								description : $('#description').val(),
								
			   },
		 function(data){
			ctrlAct(d_id,'unidentified/discount');
			 });
		}
}
function regbank_fInfUni(d_id){
	
		var msg = '';
		
			if ( $('#serial').val() == '' ){
				msg = 'سریال فیش وارد نشده';
			}
			else if ( $('#f_num').val() == '' ){
						msg = 'شماره فیش وارد نشده';
			}
			else if ( $('#f_date').val() == '' ){
						msg = 'تاریخ پرداخت وارد نشده';
			}
			else if ( $('#amount').val() == '' ){
						msg = 'مبلغ فیش وارد نشده';
			}
			else if ( $('#fishOk').val() == '0' ){
						msg = 'شماره فیش وارد شده تکراری و نامعتبر است';
			}	
			if ( msg != '' ){
					$('#err_msg').html(msg);
					$('#bg').fadeIn(100,function(){
												$('#alerts').fadeIn(200); 
												 });
					
			}
			else {
				 
			$('#wait').fadeIn(100);
		      $.post("index.php/unidentified/bankFE", { 
								d_id          : d_id,
								pay_type      : 1,
								acc_id        : $('#acc_id').val(),
								serial        : $('#serial').val(),
								f_num         : $('#f_num').val(),
								f_date        : $('#f_date').val(),
								amount        : $('#amount').val(),
								hamount       : $('#hamount').val(),
								payer_name    : $('#payer_name').val(),
								payer_n_code  : $('#payer_n_code').val(),
								
			   },
		 function(data){
			ctrlAct(d_id,'unidentified/bankF');
			 });
		}
}
function reg_dec_cashUni(d_id){
	
		var msg = '';
		
			if ( $('#payer_nameCash').val() == '' ){
				msg = 'نام پرداخت کننده وارد نشده';
			}
			else if ( $('#payer_n_codeCash').val() == '' ){
						msg = 'شماره ملی پرداخت کننده وارد نشده';
			}
			if ( msg != '' ){
					$('#err_msg').html(msg);
					$('#bg').fadeIn(100,function(){
												$('#alerts').fadeIn(200); 
												 });
					
			}
			else {
				 
			//$('#bg').fadeIn(100);
			$('#wait').fadeIn(100);
		      $.post("index.php/unidentified/bankFE", { 
								d_id          : d_id,
								pay_type      : 2,
								acc_id        : 0,
								serial        : 0,
								f_num         : 0,
								amount        : $('#amountCash').val(),
								hamount       : $('#hamountCash').val(),
								payer_name    : $('#payer_nameCash').val(),
								payer_n_code  : $('#payer_n_codeCash').val(),
								
			   },
		 function(data){
			ctrlAct(d_id,'unidentified/bankF');
			 });
		}
}
function reg_dec_posUni(d_id,acc_id,f_num,serial){
	
		var msg = '';
		
			if ( $('#payer_namePos').val() == '' ){
				msg = 'نام پرداخت کننده وارد نشده';
			}
			else if ( $('#payer_n_codePos').val() == '' ){
						msg = 'شماره ملی پرداخت کننده وارد نشده';
			}
			if ( msg != '' ){
					$('#err_msg').html(msg);
					$('#bg').fadeIn(100,function(){
												$('#alerts').fadeIn(200); 
												 });
					
			}
			else {
				 
			//$('#bg').fadeIn(100);
			$('#wait').fadeIn(100);
		      $.post("index.php/unidentified/bankFE", { 
								d_id          : d_id,
								pay_type      : 0,
								acc_id        : acc_id,
								serial        : serial,
								f_num         : f_num,
								amount        : $('#amountPos').val(),
								hamount       : $('#hamountPos').val(),
								payer_name    : $('#payer_namePos').val(),
								payer_n_code  : $('#payer_n_codePos').val(),
								
			   },
		 function(data){
			ctrlAct(d_id,'unidentified/bankF');
			 });
		}
}
function regbank_fInf(d_id){
	
		var msg = '';
		
			if ( $('#serial').val() == '' ){
				msg = 'سریال فیش وارد نشده';
			}
			else if ( $('#f_num').val() == '' ){
						msg = 'شماره فیش وارد نشده';
			}
			else if ( $('#f_date').val() == '' ){
						msg = 'تاریخ پرداخت وارد نشده';
			}
			else if ( $('#amount').val() == '' ){
						msg = 'مبلغ فیش وارد نشده';
			}
			else if ( $('#fishOk').val() == '0' ){
						msg = 'شماره فیش وارد شده تکراری و نامعتبر است';
			}	
			if ( msg != '' ){
					$('#err_msg').html(msg);
					$('#bg').fadeIn(100,function(){
												$('#alerts').fadeIn(200); 
												 });
					
			}
			else {
				 
			$('#wait').fadeIn(100);
		      $.post("index.php/decedent/bankFE", { 
								d_id          : d_id,
								pay_type      : 1,
								acc_id        : $('#acc_id').val(),
								serial        : $('#serial').val(),
								f_num         : $('#f_num').val(),
								f_date        : $('#f_date').val(),
								amount        : $('#amount').val(),
								hamount       : $('#hamount').val(),
								payer_name    : $('#payer_name').val(),
								payer_n_code  : $('#payer_n_code').val(),
								
			   },
		 function(data){
			ctrlAct(d_id,'decedent/bankF');
			 });
		}
}
function editDead() {
			var msg = '';
			d_date = $('#d_date').val();
			ddate = d_date.split('/'); 
			int_date = $('#int_date').val();
			intdate = int_date.split('/'); 
			if ( $('#name').val() == '' ){
				$('#name').focus();
				msg = 'نام وارد نشده';
			}
			else if ( $('#family').val() == '' ){
				$('#family').focus();
				msg = 'نام خانوادگی وارد نشده';
			}
			else if ( $('#f_name').val() == '' ){
				$('#f_name').focus();
				msg = 'نام پدر وارد نشده';
			}			
			/*else if ( $('#m_name').val() == '' ){
				$('#m_name').focus();
				msg = 'نام مادر وارد نشده';
			}*/
			else if ( $('#nationality').val() == '' ){
				$('#nationality').focus();
				msg = 'ملیت شغل وارد نشده';
			}
			else if ( $('#n_code').val() == '' ){
				$('#n_code').focus();
				msg = 'شماره ملی وارد نشده';
			}/*
			else if ( $('#frmCheck').val() == '0' ){
						msg = 'شماره ملی وارد شده، صحیح نبوده یا تکراری است';
			}
			else if ( $('#b_num').val() == '' ){
				$('#b_num').focus();
				msg = 'شماره شناسنامه وارد نشده';
			}
			else if ( $('#b_location').val() == '' ){
				$('#b_location').focus();
				msg = 'محل صدور وارد نشده';
			}*/
			else if ( $('#b_date').val() == '' ){
				$('#b_date').focus();
				msg = 'تاریخ تولد وارد نشده';
			}
			/*else if ( $('#age').val() == '' ){
				$('#age').focus();
				msg = 'سن وارد نشده';
			}
			else if ( $('#tel').val() == '' ){
				$('#tel').focus();
				msg = 'شماره تماس وارد نشده';
			}
			else if ( $('#tel').val() < 02199999999 ){
				$('#tel').focus();
				msg = 'شماره تماس وارد شده صحیح نیست';
			}
			/*else if ( $('#city').val() == '' ){
				$('#city').focus();
				msg = 'شهر محل سکونت وارد نشده';
			}
			else if ( $('#zipcode').val() == '' ){
				$('#zipcode').focus();
				msg = 'کدپستی وارد نشده';
			}*/
			else if ( $('#d_date').val() == '' ){
				$('#d_date').focus();
				msg = 'تاریخ فوت وارد نشده';
			}
			else if ( $('#int_date').val() == '' ){
				$('#int_date').focus();
				msg = 'تاریخ ثبت وارد نشده';
			}
			else if ( intdate < ddate ){
				$('#int_date').focus();
				msg = 'تاریخ ثبت و تاریخ فوت، صحیح نیست';
			}
			/*else if ( $('#d_reason').val() == '' ){
				$('#d_reason').focus();
				msg = 'علت فوت وارد نشده';
			}*/
			else if ( $('#fridge_num').val() == '' ){
				msg = 'شماره سردخانه وارد نشده';
			}
			else if ( $('#reg_num').val() == '' ){
				$('#reg_num').focus();
				msg = 'شماره ثبت دفتری وارد نشده';
			}
			else if ( $('#regOk').val() == '0' ){
				$('#reg_num').focus();
				msg = 'شماره ثبت دفتری وارد شده، تکراری و نامعتبر است';
			}
			/*else if ( $('#regCheck').val() == '0' ){
						msg = 'شماره سردخانه وارد شده تکراری و نامعتبر است';
			}*/
			
			if ( msg != '' ){
					$('#err_msg').html(msg);
					$('#bg').fadeIn(100,function(){
												$('#alerts').fadeIn(200); 
												 });
					
			}
			else {
				 
			$('#wait').fadeIn(100);
		      $.post("index.php/decedent/decEdit", { 
					gender       : $('#gender_edit').val(),
					name         : $('#name').val(),
			  		family       : $('#family').val(),
					f_name       : $('#f_name').val(),
					m_name       : $('#m_name').val(),
					nationality  : $('#nationality').val(),
					n_code       : $('#n_code').val(),
					b_num        : $('#b_num').val(),
					b_location   : $('#b_location').val(),
					sh_serial    : $('#sh_serial').val(),
					sh_series    : $('#sh_series').val(),
					b_date       : $('#b_date').val(),
					age          : $('#age').val(),
					job          : $('#job').val(),
					tel          : $('#tel').val(),
					mobile       : $('#mobile').val(),
					addr         : $('#addr').val(),
					zipcode      : $('#zipcode').val(),
					d_date       : $('#d_date').val(),
					d_date_status: $('#d_date_status').val(),
					int_date     : $('#int_date').val(),
					d_place      : $('#d_place').val(),
					d_reason     : $('#d_reason').val(),
					disease      : $('#disease').val(),
					hos_dc       : $('#hos_dc').val(),
					fridge_num   : $('#fridge_num').val(),
					burial       : $('#burial').val(),
					burial_p     : $('#burial_p').val(),
					driver       : $('#driver').val(),
					add_txt      : $('#add_txt').val(),
					reg_num      : $('#reg_num').val(),
					discription  : $('#discription').val(),
					id           : $('#deadIdEd').val(),
					
									
					
			   },
		 function(data){  
		 
			
			$('#err_msg').html('اطلاعات متوفی با موفقیت به روز رسانی شد');
					$('#bg').fadeIn(100,function(){
												$('#alerts').fadeIn(200); 
												 });
						 
		 
			  $('#wait').fadeOut(100);
		
		
		 });
											
									
	  
		
			}
}
function deleteDec(id){
		
				 
			$('#wait').fadeIn(100);
		      $.post("index.php/decedent/deleteDec", { 
					id    : id,
			   },
		 function(data){
			 postMenus('decedent/decList');
			 $("body").removeClass("modal-open");
			 $('.modal-backdrop').fadeOut(100);
			 	
			
	  		 $('#wait').fadeOut(100);
			 });
		
}
function searchDecReport(){
  			$('#bg').fadeIn(100);
			$('#wait').fadeIn(100);
			$.post("index.php/reports/searchDec", { 
					  		gender   :  $('#gender').val(),
							d_reason :  $('#d_reason').val(),
							burial   :  $('#burial').val(),
							wcolumn  :  $('#wcolumn').val(),
							orderBy  :  $('#orderBy').val(),
							verb     :  $('#verb').val(),
							decStart :  $('#decStart').val(),
							decEnd   :  $('#decEnd').val(),
					   },
				 function(data){
					 $('#searchResult').html(data);
					 $('#bg').fadeOut(100);
			  		 $('#wait').fadeOut(100);});	
}
function deleteTariff(id){
  			$('#bg').fadeIn(100);
			$('#wait').fadeIn(100);
			$.post("index.php/decedent/deleteTariff", { 
					  		id   :  id,
							
					   },
				 function(data){
					 $('#AdminDiv').html(data);
					 $('#bg').fadeOut(100);
					 $('#wait').fadeOut(100);
					 });	
}
function deleteOtherSer(id){
  			$('#bg').fadeIn(100);
			$('#wait').fadeIn(100);
			$.post("index.php/decedent/deleteOther", { 
					  		id   :  id,
							
					   },
				 function(data){
					 $('#AdminDiv').html(data);
					 $('#bg').fadeOut(100);
					 $('#wait').fadeOut(100);
					 });	
}
function deleteStore(id){
  			$('#bg').fadeIn(100);
			$('#wait').fadeIn(100);
			$.post("index.php/stores/deleteStore", { 
					  		id   :  id,
							
					   },
				 function(data){
					 $('#AdminDiv').html(data);
					 $('#bg').fadeOut(100);
					 $('#wait').fadeOut(100);
					 });	
}
function deletePray(id){
  			$('#bg').fadeIn(100);
			$('#wait').fadeIn(100);
			$.post("index.php/pray_p/deletePray", { 
					  		id   :  id,
							
					   },
				 function(data){
					 $('#AdminDiv').html(data);
					 $('#bg').fadeOut(100);
					 $('#wait').fadeOut(100);
					 });	
}
function deleteorgs(id){
  			$('#bg').fadeIn(100);
			$('#wait').fadeIn(100);
			$.post("index.php/orgs/deleteOrgs", { 
					  		id   :  id,
							
					   },
				 function(data){
					 $('#AdminDiv').html(data);
					 $('#bg').fadeOut(100);
					 $('#wait').fadeOut(100);
					 });	
}
function deletesegment_types(id){
  			$('#bg').fadeIn(100);
			$('#wait').fadeIn(100);
			$.post("index.php/tombs/deleteSegment_types", { 
					  		id   :  id,
							
					   },
				 function(data){
					 $('#AdminDiv').html(data);
					 $('#bg').fadeOut(100);
					 $('#wait').fadeOut(100);
					 });	
}
function deleteTgroup(id){
  			$('#bg').fadeIn(100);
			$('#wait').fadeIn(100);
			$.post("index.php/decedent/deleteTgroup", { 
					  		id   :  id,
							
					   },
				 function(data){
					 $('#AdminDiv').html(data);
					 $('#bg').fadeOut(100);
					 $('#wait').fadeOut(100);
					 });	
}
function deleteSegments(id){
  			$('#bg').fadeIn(100);
			$('#wait').fadeIn(100);
			$.post("index.php/tombs/deleteSegments", { 
					  		id   :  id,
							
					   },
				 function(data){
					 $('#AdminDiv').html(data);
					 $('#bg').fadeOut(100);
					 $('#wait').fadeOut(100);
					 });	
}
function deleteChambers(id){
  			$('#bg').fadeIn(100);
			$('#wait').fadeIn(100);
			$.post("index.php/tombs/deleteChambers", { 
					  		id   :  id,
							
					   },
				 function(data){
					 $('#AdminDiv').html(data);
					 $('#bg').fadeOut(100);
					 $('#wait').fadeOut(100);
					 });	
}
function deleteTombs_row(id,tId){
  			$('#bg').fadeIn(100);
			$('#wait').fadeIn(100);
			$.post("index.php/tombs/deleteTombs_row", { 
					  		id   :  id,
							tId  :  tId,
							
					   },
				 function(data){
					 $('#LayerDiv').html(data);
					 $('#bg').fadeOut(100);
					 $('#wait').fadeOut(100);
					 });	
}
function deleteTombs_Num(id,tId){
  			$('#bg').fadeIn(100);
			$('#wait').fadeIn(100);
			$.post("index.php/tombs/deleteTombs_Num", { 
					  		id   :  id,
							tId  :  tId,
							
					   },
				 function(data){
					 $('#LayerDiv').html(data);
					 $('#bg').fadeOut(100);
					 $('#wait').fadeOut(100);
					 });	
}
function deleteCdeath(id){
  			$('#bg').fadeIn(100);
			$('#wait').fadeIn(100);
			$.post("index.php/c_death/deleteCdeath", { 
					  		id   :  id,
							
					   },
				 function(data){
					 $('#AdminDiv').html(data);
					 $('#bg').fadeOut(100);
					 $('#wait').fadeOut(100);
					 });	
}
function deleteCars(id){
  			$('#bg').fadeIn(100);
			$('#wait').fadeIn(100);
			$.post("index.php/cars/deleteCars", { 
					  		id   :  id,
							
					   },
				 function(data){
					 $('#AdminDiv').html(data);
					 $('#bg').fadeOut(100);
					 $('#wait').fadeOut(100);
					 });	
}
function addnewBorn(){
	var msg = '';
	if ( $('#acharge').val() == '' ){
				msg = 'کرایه آمبولانس وارد نشده';
	}
	else if ( $('#int_date').val() == '' ){
				msg = 'تاریخ ثبت وارد نشده';
	}
	else if ( $('#d_date').val() == '' ){
				msg = 'تاریخ فوت وارد نشده';
	}
	
	
	if ( msg != '' ){
					$('#err_msg').html(msg);
					$('#bg').fadeIn(100,function(){
												$('#alerts').fadeIn(200); 
												 });
					
			
	}
	else {
	$('#bg').fadeIn(100);
			$('#wait').fadeIn(100);
			 $.post("index.php/newborn/regnewBorn", { 
								m_name      : $('#m_name').val(),
								d_name      : $('#d_name').val(),
								d_reason    : $('#d_reason').val(),
								tariff      : $('#tariff').val(),
								fridge      : $('#fridge').val(),
								acharge     : $('#acharge').val(),
								other_serv  : $('#other_serv').val(),
								total_f     : $('#total').val()*1,
								from_h      : $('#from_h').val(),
								int_date    : $('#int_date').val(),
								d_date      : $('#d_date').val(),
								discription : $('#discription').val(),
								
								
								
						 	  },
					 function(data){
						 	$('#err_msg').html('اطلاعات با موفقیت ثبت شد');
						$('#bg').fadeIn(100,function(){
												$('#alerts').fadeIn(200); 
												 });
					 postMenus('newborn/list');

					 });
			
	}
}
function addnewBornSome(){
	var msg = '';
	if ( $('#bcount').val() == '' ){
				msg = 'تعداد وارد نشده';
	}
	else if ( $('#acharge').val() == '' ){
				msg = 'کرایه آمبولانس وارد نشده';
	}
	else if ( $('#int_date').val() == '' ){
				msg = 'تاریخ ثبت وارد نشده';
	}
	
	
	if ( msg != '' ){
					$('#err_msg').html(msg);
					$('#bg').fadeIn(100,function(){
												$('#alerts').fadeIn(200); 
												 });
					
			
	}
	else {
	$('#bg').fadeIn(100);
			$('#wait').fadeIn(100);
			 $.post("index.php/newBorn/regnewBornSome", { 
								bcount      : $('#bcount').val(),
								tariff      : $('#tariff').val(),
								fridge      : $('#fridge').val(),
								other_serv  : $('#other_serv').val(),
								from_h      : $('#from_h').val(),
								int_date    : $('#int_date').val(),
								total_f     : $('#total').val(),
								acharge     : $('#acharge').val(),
								discription : $('#discription').val(),
								
								
								
						 	  },
					 function(data){
						 	$('#err_msg').html('اطلاعات با موفقیت ثبت شد');
						$('#bg').fadeIn(100,function(){
												$('#alerts').fadeIn(200); 
												 });
					 postMenus('newborn/list');

					 });
			
	}
}
function editnewBorn(id){
	var msg = '';
	if ( $('#acharge').val() == '' ){
				msg = 'کرایه آمبولانس وارد نشده';
	}
	else if ( $('#int_date').val() == '' ){
				msg = 'تاریخ ثبت وارد نشده';
	}
	else if ( $('#d_date').val() == '' ){
				msg = 'تاریخ فوت وارد نشده';
	}
	
	if ( msg != '' ){
					$('#err_msg').html(msg);
					$('#bg').fadeIn(100,function(){
												$('#alerts').fadeIn(200); 
												 });
					
			
	}
	else {
	//$('#bg').fadeIn(100);
			$('#wait').fadeIn(100);
			 $.post("index.php/newborn/editRev", { 
								m_name      : $('#m_name').val(),
								d_name      : $('#d_name').val(),
								d_reason    : $('#d_reason').val(),
								tariff      : $('#tariff').val(),
								fridge      : $('#fridge').val(),
								acharge     : $('#acharge').val(),
								other_serv  : $('#other_serv').val(),
								total_f     : $('#total').val()*1,
								from_h      : $('#from_h').val(),
								int_date    : $('#int_date').val(),
								d_date      : $('#d_date').val(),
								discription : $('#discription').val(),
								id			: id,
								
								
								
						 	  },
					 function(data){
						  $("body").removeClass("modal-open");
			 			$('.modal-backdrop').fadeOut(100);
						 	$('#err_msg').html('اطلاعات با موفقیت ثبت شد');
							$('#alerts').fadeIn(200); 
					 postMenus('newborn/list');

					 });
			
	}}
function editnewBornSome(id){
	var msg = '';
	if ( $('#bcount').val() == '' ){
				msg = 'تعداد وارد نشده';
	}
	else if ( $('#acharge').val() == '' ){
				msg = 'کرایه آمبولانس وارد نشده';
	}
	else if ( $('#from_h').val() == '' ){
				msg = 'مبدا وارد نشده';
	}
	else if ( $('#int_date').val() == '' ){
				msg = 'تاریخ ثبت وارد نشده';
	}
	
	if ( msg != '' ){
					$('#err_msg').html(msg);
					$('#bg').fadeIn(100,function(){
												$('#alerts').fadeIn(200); 
												 });
					
			
	}
	else {
	$('#bg').fadeIn(100);
			$('#wait').fadeIn(100);
			 $.post("index.php/newBorn/editSomeR", { 
								bcount      : $('#bcount').val(),
								tariff      : $('#tariff').val(),
								fridge      : $('#fridge').val(),
								other_serv  : $('#other_serv').val(),
								from_h      : $('#from_h').val(),
								int_date    : $('#int_date').val(),
								total_f     : $('#total').val(),
								acharge     : $('#acharge').val(),
								discription : $('#discription').val(),
								id			: id,
								
								
								
						 	  },
					 function(data){
						   $("body").removeClass("modal-open");
			 			$('.modal-backdrop').fadeOut(100);
						 	$('#err_msg').html('اطلاعات با موفقیت ثبت شد');
						
												$('#alerts').fadeIn(200); 
												
					 postMenus('newborn/list');

					 });
			
	}}
function deleteNewBorn(id){
		
				 
			//$('#bg').fadeIn(100);
			$('#wait').fadeIn(100);
		      $.post("index.php/newborn/deleteNewBorn", { 
					id    : id,
			   },
		 function(data){
			 
			 $("body").removeClass("modal-open");
			 $('.modal-backdrop').fadeOut(100);
			 postMenus('newborn/list');});
		
}
function deleteNewBornSome(id){
		
				 
			//$('#bg').fadeIn(100);
			$('#wait').fadeIn(100);
		      $.post("index.php/newborn/deleteNewBornSome", { 
					id    : id,
			   },
		 function(data){
			 
			 $("body").removeClass("modal-open");
			 $('.modal-backdrop').fadeOut(100);
			 postMenus('newborn/list');});
		
}
function regbank_fnewBorn(d_id){
	
		var msg = '';
		
			if ( $('#serial').val() == '' ){
				msg = 'سریال فیش وارد نشده';
			}
			else if ( $('#f_num').val() == '' ){
						msg = 'شماره فیش وارد نشده';
			}
			else if ( $('#f_date').val() == '' ){
						msg = 'تاریخ پرداخت وارد نشده';
			}
			else if ( $('#amount').val() == '' ){
						msg = 'مبلغ فیش وارد نشده';
			}
			if ( msg != '' ){
					$('#err_msg').html(msg);
					$('#bg').fadeIn(100,function(){
												$('#alerts').fadeIn(200); 
												 });
					
			}
			else {
				 
			$('#bg').fadeIn(100);
			$('#wait').fadeIn(100);
		      $.post("index.php/newborn/bankFE", { 
								d_id     : d_id,
								acc_id   : $('#acc_id').val(),
								serial   : $('#serial').val(),
								f_num    : $('#f_num').val(),
								f_date   : $('#f_date').val(),
								amount   : $('#amount').val(),
								hamount  : $('#hamount').val(),
								payer_name    : $('#payer_name').val(),
								payer_n_code  : $('#payer_n_code').val(),
								type     : 6,
								
			   },
		 function(data){
			ctrlAct(d_id,'newborn/viewInf');
			 });
		}
}
function searchNewBorn(){
  			$('#bg').fadeIn(100);
			$('#wait').fadeIn(100);
			$.post("index.php/newborn/searchNewBorn", { 
							from_h   :  $('#from_hS').val(),
							regType  :  $('#regType').val(),
							orderBy  :  $('#orderBy').val(),
							regStart :  $('#regStart').val(),
							regEnd   :  $('#regEnd').val(),
					   },
				 function(data){
					 $('#searchResult').html(data);
					 $('#bg').fadeOut(100);
			  		 $('#wait').fadeOut(100);});	
}
function addMutilation(){
	var msg = '';
	
	if ( $('#name').val() == '' ){
				msg = 'نام وارد نشده';
	}
	else if ( $('#family').val() == '' ){
				msg = 'نام خانوادگی وارد نشده';
	}
	else if ( $('#f_name').val() == '' ){
				msg = 'نام پدر وارد نشده';
	}
	else if ( $('#addr').val() == '' ){
				msg = 'نشانی وارد نشده';
	}
	else if ( $('#int_date').val() == '' ){
				msg = 'تاریخ ثبت وارد نشده';
	}
	else if ( $('#organ').val() == '' ){
				msg = 'عضو قطع شده وارد نشده';
	}
	else if ( $('#c_reason').val() == '' ){
				msg = 'علت قطع عضو وارد نشده';
	}
		
	if ( msg != '' ){
					$('#err_msg').html(msg);
					$('#bg').fadeIn(100,function(){
												$('#alerts').fadeIn(200); 
												 });
					
			
	}
	else {
		
	$('#bg').fadeIn(100);
			$('#wait').fadeIn(100);
			 $.post("index.php/mutilation/regmutilation", { 
								gender     : $('#gender').val(),
								name       : $('#name').val(),
								family     : $('#family').val(),
								f_name     : $('#f_name').val(),
								nationality: $('#nationality').val(),
								n_code     : $('#n_code').val(),
								b_num      : $('#b_num').val(),
								b_location : $('#b_location').val(),
								b_date     : $('#b_date').val(),
								tel        : $('#tel').val(),
								zipcode    : $('#zipcode').val(),
								addr       : $('#addr').val(),
								int_date   : $('#int_date').val(),
								hos_dc     : $('#hos_dc').val(),
								organ      : $('#organ').val(),
								c_reason   : $('#c_reason').val(),
								burial_p   : $('#burial_p').val(),
								discription: $('#discription').val(),
								
								
								
								
						 	  },
					 function(data){
					
						 	$('#err_msg').html('اطلاعات با موفقیت ثبت شد');
						$('#bg').fadeIn(100,function(){
												$('#alerts').fadeIn(200); 
												 });
					 postMenus('mutilation/list');
						
					 });
			
	}
}
function searchmutilation(){
  			$('#bg').fadeIn(100);
			$('#wait').fadeIn(100);
			$.post("index.php/mutilation/searchMutilation", { 
							gender   :  $('#gender').val(),
							wcolumn  :  $('#wcolumn').val(),
							verb     :  $('#verb').val(),
							orderBy  :  $('#orderBy').val(),
							regStart :  $('#regStart').val(),
							regEnd   :  $('#regEnd').val(),
					   },
				 function(data){
					 $('#searchResult').html(data);
					 $('#bg').fadeOut(100);
			  		 $('#wait').fadeOut(100);});	
}
function editMutilation(id){
	var msg = '';
	if ( $('#name').val() == '' ){
				msg = 'نام وارد نشده';
	}
	else if ( $('#family').val() == '' ){
				msg = 'نام خانوادگی وارد نشده';
	}
	else if ( $('#f_name').val() == '' ){
				msg = 'نام پدر وارد نشده';
	}
	else if ( $('#b_num').val() == '' ){
				msg = 'شماره شناسنامه وارد نشده';
	}
	else if ( $('#addr').val() == '' ){
				msg = 'نشانی وارد نشده';
	}
	else if ( $('#int_date').val() == '' ){
				msg = 'تاریخ ثبت وارد نشده';
	}
	else if ( $('#organ').val() == '' ){
				msg = 'عضو قطع شده وارد نشده';
	}
	else if ( $('#c_reason').val() == '' ){
				msg = 'علت قطع عضو وارد نشده';
	}
	
	
	
	if ( msg != '' ){
					$('#err_msg').html(msg);
					$('#bg').fadeIn(100,function(){
												$('#alerts').fadeIn(200); 
												 });
					
			
	}
	else {
	//$('#bg').fadeIn(100);
			$('#wait').fadeIn(100);
			 $.post("index.php/mutilation/editRev", { 
								gender     : $('#gender1').val(),
								name       : $('#name').val(),
								family     : $('#family').val(),
								f_name     : $('#f_name').val(),
								nationality: $('#nationality').val(),
								n_code     : $('#n_code').val(),
								b_num      : $('#b_num').val(),
								b_location : $('#b_location').val(),
								b_date     : $('#b_date').val(),
								tel        : $('#tel').val(),
								zipcode    : $('#zipcode').val(),
								addr       : $('#addr').val(),
								int_date   : $('#int_date').val(),
								hos_dc     : $('#hos_dc').val(),
								organ      : $('#organ').val(),
								c_reason   : $('#c_reason').val(),
								burial_p   : $('#burial_p').val(),
								discription: $('#discription').val(),
								id         : id,
								
								
								
								
						 	  },
					 function(data){
						 	$('#err_msg').html('اطلاعات با موفقیت ثبت شد');
							$("body").removeClass("modal-open");
							$('.modal-backdrop').fadeOut(100);
			 				$('#alerts').fadeIn(200);		
						$('#bg').fadeIn(100,function(){
												$('#alerts').fadeIn(200); 
												 });
					 postMenus('mutilation/list');

					 });
			
	}

	}
function regMutServices(count,d_id) {
			$('#bg').fadeIn(100);
			$('#wait').fadeIn(100);
		for (i=0;i<count;i++){
			var cheK = '0';
			if ( $('#check'+i).is( ":checked" ) ){
				cheK = '1';
			}
			t_id     = $('#t_id'+i).val();
			toption  = $('#toption'+i).val();
			op_count = $('#op_count'+i).val();
			amount   = $('#amount'+i).val();
			place    = 'tarr'+i;
			regMutService(t_id,cheK,toption,op_count,d_id,place,amount);
		}
		$('#wait').delay(1500).fadeOut(100,function(){
										$('#err_msg').html('خدمات با موفقیت ثبت شد');
					$('#alerts').fadeIn(200); 	
										});
	
		 
}
function regMutService(t_id,cheK,toption,op_count,d_id,place,amount){
	 
				 
			
		      $.post("index.php/mutilation/addServ", { 
					t_id     : t_id,
			  		toption  : toption,
					amount   : amount,
					op_count : op_count,
					d_id     : d_id,
					cheK     : cheK,
			   },
		 function(data){$('#'+place).html(data)});
		
}
function deleteMutilation(id){
		
				 
			//$('#bg').fadeIn(100);
			$('#wait').fadeIn(100);
		      $.post("index.php/mutilation/deleteMutilation", { 
					id    : id,
			   },
		 function(data){
			 $("body").removeClass("modal-open");
			 $('.modal-backdrop').fadeOut(100);
			 postMenus('mutilation/list');});
		
}
function regbank_fInfMut(d_id){
	
		var msg = '';
		
			if ( $('#serial').val() == '' ){
				msg = 'سریال فیش وارد نشده';
			}
			else if ( $('#f_num').val() == '' ){
						msg = 'شماره فیش وارد نشده';
			}
			else if ( $('#f_date').val() == '' ){
						msg = 'تاریخ پرداخت وارد نشده';
			}
			else if ( $('#amount').val() == '' ){
						msg = 'مبلغ فیش وارد نشده';
			}
			else if ( $('#fishOk').val() == '0' ){
						msg = 'شماره فیش وارد شده تکراری و نامعتبر است';
			}
			if ( msg != '' ){
					$('#err_msg').html(msg);
					$('#bg').fadeIn(100,function(){
												$('#alerts').fadeIn(200); 
												 });
					
			}
			else {
				 
			//$('#bg').fadeIn(100);
			$('#wait').fadeIn(100);
		      $.post("index.php/mutilation/bankFE", { 
								d_id          : d_id,
								pay_type      : 1,
								acc_id        : $('#acc_id').val(),
								serial        : $('#serial').val(),
								f_num         : $('#f_num').val(),
								f_date        : $('#f_date').val(),
								amount        : $('#amount').val(),
								hamount       : $('#hamount').val(),
								payer_name    : $('#payer_name').val(),
								payer_n_code  : $('#payer_n_code').val(),
								
			   },
		 function(data){
			ctrlAct(d_id,'mutilation/bankF');
			 });
		}
}
function addUniden(){
	var msg = '';
	
	if ( $('#age').val() == '' ){
				msg = 'سن وارد نشده';
	}
	else if ( $('#e_date').val() == '' ){
				msg = 'تاریخ ورود به سازمان وارد نشده';
	}
	else if ( $('#d_cer_num').val() == '' ){
				msg = 'گواهی فوت وارد نشده';
	}
	else if ( $('#burial_doc').val() == '' ){
				msg = ' دفن وارد نشده';
	}
	else if ( $('#burial_date').val() == '' ){
				msg = 'تاریخ دفن وارد نشده';
	}
	else if ( $('#reg_num').val() == '' ){
				$('#reg_num').focus();
				$('#regOk').val('0');
				msg = 'شماره ثبت دفتری وارد نشده';
	}
	else if ( $('#regOk').val() == '0' ){
				$('#reg_num').focus();
				msg = 'شماره ثبت دفتری وارد شده، تکراری و نامعتبر است';
	}
	if ( msg != '' ){
					$('#err_msg').html(msg);
					$('#bg').fadeIn(100,function(){
												$('#alerts').fadeIn(200); 
												 });
					
			
	}
	else {
		
	$('#bg').fadeIn(100);
			$('#wait').fadeIn(100);
			 $.post("index.php/unidentified/regunidentified", { 
								gender       : $('#gender').val(),
								age          : $('#age').val(),
								e_date       : $('#e_date').val(),
								origin_id    : $('#origin_id').val(),
								t_tel        : $('#t_tel').val(),
								d_cer_num    : $('#d_cer_num').val(),
								burial_doc   : $('#burial_doc').val(),
								burial_date  : $('#burial_date').val(),
								t_addr       : $('#t_addr').val(),
								description  : $('#description').val(),
								dispatch_addr: $('#dispatch_addr').val(),
								reg_num      : $('#reg_num').val(),
								d_date       : $('#d_date').val(),
								d_reason     : $('#d_reason').val(),
								
								
								
								
								
						 	  },
					 function(data){
						 	$('#err_msg').html('اطلاعات با موفقیت ثبت شد');
						$('#bg').fadeIn(100,function(){
												$('#alerts').fadeIn(200); 
												 });
					 postMenus('unidentified/list');

					 });
			
	}
}
function editUnidentified(id){
	var msg = '';
		
	if ( $('#age').val() == '' ){
				msg = 'سن وارد نشده';
	}
	else if ( $('#e_date').val() == '' ){
				msg = 'تاریخ ورود به سازمان وارد نشده';
	}
	else if ( $('#d_cer_num').val() == '' ){
				msg = 'گواهی فوت وارد نشده';
	}
	else if ( $('#burial_doc').val() == '' ){
				msg = 'گواهی دفن وارد نشده';
	}
	else if ( $('#burial_date').val() == '' ){
				msg = 'تاریخ دفن وارد نشده';
	}
	else if ( $('#reg_num').val() == '' ){
				$('#reg_num').focus();
				$('#regOk').val('0');
				msg = 'شماره ثبت دفتری وارد نشده';
	}
	else if ( $('#regOk').val() == '0' ){
				$('#reg_num').focus();
				msg = 'شماره ثبت دفتری وارد شده، تکراری و نامعتبر است';
	}
	
	
	if ( msg != '' ){
					$('#err_msg').html(msg);
					$('#bg').fadeIn(100,function(){
												$('#alerts').fadeIn(200); 
												 });
					
			
	}
	else {
	//$('#bg').fadeIn(100);
			$('#wait').fadeIn(100);
			 $.post("index.php/unidentified/editRev", { 
						    	gender       : $('#gender').val(),
								age          : $('#age').val(),
								e_date       : $('#e_date').val(),
								origin_id    : $('#origin_id').val(),
								t_tel        : $('#t_tel').val(),
								d_cer_num    : $('#d_cer_num').val(),
								burial_doc   : $('#burial_doc').val(),
								burial_date  : $('#burial_date').val(),
								t_addr       : $('#t_addr').val(),
								description  : $('#description').val(),
								dispatch_addr: $('#dispatch_addr').val(),
								reg_num      : $('#reg_num').val(),
								d_date       : $('#d_date').val(),
								d_reason     : $('#d_reason').val(),
								id           : id,
								 
								
								
								
						 	  },
					 function(data){
						 	$('#err_msg').html('اطلاعات با موفقیت ثبت شد');
							$('#alerts').fadeIn(200);
							$("body").removeClass("modal-open");
							$('.modal-backdrop').fadeOut(100);
						
					 postMenus('unidentified/list');

					 });
			
	}

	}
function searchuniden(){
  			$('#bg').fadeIn(100);
			$('#wait').fadeIn(100);
			$.post("index.php/unidentified/searchUnidentified", { 
						
							orderBy  :  $('#orderBy').val(),
							regStart :  $('#regStart').val(),
							regEnd   :  $('#regEnd').val(),
					   },
				 function(data){
					 $('#searchResult').html(data);
					 $('#bg').fadeOut(100);
			  		 $('#wait').fadeOut(100);});	
}
function regUnidenServices(count,d_id) {
			//$('#bg').fadeIn(100);
			$('#wait').fadeIn(100);
		for (i=0;i<count;i++){
			var cheK = '0';
			if ( $('#check'+i).is( ":checked" ) ){
				cheK = '1';
			}
			t_id     = $('#t_id'+i).val();
			toption  = $('#toption'+i).val();
			op_count = $('#op_count'+i).val();
			amount   = $('#amount'+i).val();
			place    = 'tarr'+i;
			regUnidenService(t_id,cheK,toption,op_count,d_id,place,amount);
		}
		$('#wait').delay(1500).fadeOut(100,function(){
										$('#err_msg').html('خدمات با موفقیت ثبت شد');
										$('#alerts').fadeIn(200);
										});
	
		 
}
function regUnidenService(t_id,cheK,toption,op_count,d_id,place,amount){
	 
				 
			
		      $.post("index.php/unidentified/addServ", { 
					t_id     : t_id,
			  		toption  : toption,
					amount   : amount,
					op_count : op_count,
					d_id     : d_id,
					cheK     : cheK,
			   },
		 function(data){$('#'+place).html(data)});
		
}
function deleteUnidentified(id){
		
				 
			//$('#bg').fadeIn(100);
			$('#wait').fadeIn(100);
		      $.post("index.php/unidentified/deleteUnidentified", { 
					id    : id,
			   },
		 function(data){
			 $("body").removeClass("modal-open");
			 $('.modal-backdrop').fadeOut(100);
			 postMenus('unidentified/list');});
		
}
function addStoreCon(){
	var msg = '';
	
	if ( $('#name').val() == '' ){
				msg = 'نام مستاجر وارد نشده';
	}
	else if ( $('#family').val() == '' ){
				msg = 'نام خانوادگی مستاجر وارد نشده';
	}
	else if ( $('#tenant_mobil').val() == '' ){
				msg = 'شماره تلفن همراه وارد نشده';
	}
	else if ( $('#rent_amount').val() == '' ){
				msg = 'مبلغ اجاره وارد نشده';
	}
	else if ( $('#tanancy').val() == '' ){
				msg = 'مدت اجاره وارد نشده';
	}
	else if ( $('#con_date').val() == '' ){
				msg = 'تاریخ عقد قرارداد وارد نشده';
	}
	else if ( $('#con_start_date').val() == '' ){
				msg = 'تاریخ شروع قرارداد وارد نشده';
	}
	else if ( $('#con_end_date').val() == '' ){
				msg = 'تاریخ پایان قرارداد وارد نشده';
	}
	else if ( $('#collateral').val() == '' ){
				msg = 'نوع وثیقه وارد نشده';
	}
	else if ( $('#coll_num').val() == '' ){
				msg = 'شماره سريال وثیقه وارد نشده';
	}
	else if ( $('#coll_am').val() == '' ){
				msg = 'مبلغ وثیقه وارد نشده';
	}
	else if ( $('#con_num').val() == '' ){
				msg = 'شماره قرارداد وارد نشده';
	}

	
	if ( msg != '' ){
					$('#err_msg').html(msg);
					$('#bg').fadeIn(100,function(){
												$('#alerts').fadeIn(200); 
												 });
					
			
	}
	else {
		
	$('#bg').fadeIn(100);
			$('#wait').fadeIn(100);
			 $.post("index.php/stores/regstorescon", { 
								name           : $('#name').val(),
								family         : $('#family').val(),
								f_name         : $('#f_name').val(),
								n_code         : $('#n_code').val(),
								tenant_tel     : $('#tenant_tel').val(),
								tenant_mobil   : $('#tenant_mobil').val(),
								tenant_addr    : $('#tenant_addr').val(),
								shop_id        : $('#shop_id').val(),
								rent_amount    : $('#rent_amount').val(),
								tanancy        : $('#tanancy').val(),
								con_date       : $('#con_date').val(),
								con_start_date : $('#con_start_date').val(),
								con_end_date   : $('#con_end_date').val(),
								collateral     : $('#collateral').val(),
								coll_num       : $('#coll_num').val(),
								coll_am        : $('#coll_am').val(),
								con_num        : $('#con_num').val(),
								
								
								
								
								
						 	  },
					 function(data){
						 	$('#err_msg').html('اطلاعات با موفقیت ثبت شد');
						$('#bg').fadeIn(100,function(){
												$('#alerts').fadeIn(200); 
												 });
					 postMenus('stores/list');

					 });
			
	}
}
function editStoreCon(id){
	var msg = '';
	
	if ( $('#name').val() == '' ){
				msg = 'نام مستاجر وارد نشده';
	}
	else if ( $('#family').val() == '' ){
				msg = 'نام خانوادگی مستاجر وارد نشده';
	}
	else if ( $('#tenant_mobil').val() == '' ){
				msg = 'شماره تلفن همراه وارد نشده';
	}
	else if ( $('#rent_amount').val() == '' ){
				msg = 'مبلغ اجاره وارد نشده';
	}
	else if ( $('#tanancy').val() == '' ){
				msg = 'مدت اجاره وارد نشده';
	}
	else if ( $('#con_date').val() == '' ){
				msg = 'تاریخ عقد قرارداد وارد نشده';
	}
	else if ( $('#con_start_date').val() == '' ){
				msg = 'تاریخ شروع قرارداد وارد نشده';
	}
	else if ( $('#con_end_date').val() == '' ){
				msg = 'تاریخ پایان قرارداد وارد نشده';
	}
	else if ( $('#collateral').val() == '' ){
				msg = 'نوع وثیقه وارد نشده';
	}
	else if ( $('#coll_num').val() == '' ){
				msg = 'شماره سريال وثیقه وارد نشده';
	}
	else if ( $('#coll_am').val() == '' ){
				msg = 'مبلغ وثیقه وارد نشده';
	}
	else if ( $('#con_num').val() == '' ){
				msg = 'شماره قرارداد وارد نشده';
	}

	
	if ( msg != '' ){
					$('#err_msg').html(msg);
					$('#bg').fadeIn(100,function(){
												$('#alerts').fadeIn(200); 
												 });
					
			
	}
	else {
		
	//$('#bg').fadeIn(100);
			$('#wait').fadeIn(100);
			 $.post("index.php/stores/editRev", { 
								name           : $('#name').val(),
								family         : $('#family').val(),
								f_name         : $('#f_name').val(),
								n_code         : $('#n_code').val(),
								tenant_tel     : $('#tenant_tel').val(),
								tenant_mobil   : $('#tenant_mobil').val(),
								tenant_addr    : $('#tenant_addr').val(),
								shop_id        : $('#shop_id').val(),
								rent_amount    : $('#rent_amount').val(),
								tanancy        : $('#tanancy').val(),
								con_date       : $('#con_date').val(),
								con_start_date : $('#con_start_date').val(),
								con_end_date   : $('#con_end_date').val(),
								collateral     : $('#collateral').val(),
								coll_num       : $('#coll_num').val(),
								coll_am        : $('#coll_am').val(),
								con_num        : $('#con_num').val(),
								id             : id,
								
								
								
								
								
						 	  },
					 function(data){
						 	$('#err_msg').html('اطلاعات با موفقیت ثبت شد');
							$("body").removeClass("modal-open");
			 				$('.modal-backdrop').fadeOut(100);
							$('#alerts').fadeIn(200); 
												 
					 postMenus('stores/list');

					 });
			
	}
}
function deleteStoreRent(id){
		
				 
			//$('#bg').fadeIn(100);
			$('#wait').fadeIn(100);
		      $.post("index.php/stores/deleteStoreRent", { 
					id    : id,
			   },
		 function(data){
			 $("body").removeClass("modal-open");
			 $('.modal-backdrop').fadeOut(100);
			 postMenus('stores/list');});
		
}
function searchRentCon(){
  			$('#bg').fadeIn(100);
			$('#wait').fadeIn(100);
			$.post("index.php/stores/searchStoresCon", { 
							shop_id    :  $('#shop_id1').val(),
							conStart   :  $('#conStart').val(),
							conEnd     :  $('#conEnd').val(),
							ConStatus  :  $('#ConStatus').val(),
							regStart   :  $('#regStart').val(),
							regEnd     :  $('#regEnd').val(),
					   },
				 function(data){
					 $('#searchResult').html(data);
					 $('#bg').fadeOut(100);
			  		 $('#wait').fadeOut(100);});	
}
function findFl2Ho(n_code,name,family){
	if ( (n_code != '') || (name != '') || (family != '') ){
			$('#wait').fadeIn(100);
			$.post("index.php/decedent/findFl2Ho", { 
							n_code    :  n_code,
							name      :  name,
							family    :  family,

					   },
				 function(data){
					 $('#findFl2Ho').html(data);
			  		 $('#wait').fadeOut(100);});	
	}
}
function reg_dec_pos(d_id,acc_id,f_num,serial){
	
		var msg = '';
		
			if ( $('#payer_namePos').val() == '' ){
				msg = 'نام پرداخت کننده وارد نشده';
			}
			else if ( $('#payer_n_codePos').val() == '' ){
						msg = 'شماره ملی پرداخت کننده وارد نشده';
			}
			if ( msg != '' ){
					$('#err_msg').html(msg);
					$('#bg').fadeIn(100,function(){
												$('#alerts').fadeIn(200); 
												 });
					
			}
			else {
				 
			//$('#bg').fadeIn(100);
			$('#wait').fadeIn(100);
		      $.post("index.php/decedent/bankFE", { 
								d_id          : d_id,
								pay_type      : 0,
								acc_id        : acc_id,
								serial        : serial,
								f_num         : f_num,
								amount        : $('#amountPos').val(),
								hamount       : $('#hamountPos').val(),
								payer_name    : $('#payer_namePos').val(),
								payer_n_code  : $('#payer_n_codePos').val(),
								
			   },
		 function(data){
			ctrlAct(d_id,'decedent/bankF');
			 });
		}
}
function reg_dec_cash(d_id){
	
		var msg = '';
		
			if ( $('#payer_nameCash').val() == '' ){
				msg = 'نام پرداخت کننده وارد نشده';
			}
			else if ( $('#payer_n_codeCash').val() == '' ){
						msg = 'شماره ملی پرداخت کننده وارد نشده';
			}
			if ( msg != '' ){
					$('#err_msg').html(msg);
					$('#bg').fadeIn(100,function(){
												$('#alerts').fadeIn(200); 
												 });
					
			}
			else {
				 
			//$('#bg').fadeIn(100);
			$('#wait').fadeIn(100);
		      $.post("index.php/decedent/bankFE", { 
								d_id          : d_id,
								pay_type      : 2,
								acc_id        : 0,
								serial        : 0,
								f_num         : 0,
								amount        : $('#amountCash').val(),
								hamount       : $('#hamountCash').val(),
								payer_name    : $('#payer_nameCash').val(),
								payer_n_code  : $('#payer_n_codeCash').val(),
								
			   },
		 function(data){
			ctrlAct(d_id,'decedent/bankF');
			 });
		}
}
function addReserv(){
	var msg = '';
	if ( $('#name').val() == '' ){
				msg = ' نام وارد نشده';
	}
	else if ( $('#family').val() == '' ){
				msg = 'نام خانوادگی وارد نشده';
	}
	else if ( $('#n_code').val() == '' ){
				msg = 'شماره ملی وارد نشده';
	}
	else if ( $('#t_count').val() == '' ){
				msg = 'تعداد قبرها وارد نشده';
	}
	
	if ( msg != '' ){
					$('#err_msg').html(msg);
					$('#bg').fadeIn(100,function(){
												$('#alerts').fadeIn(200); 
												 });
					
			
	}
	else {
	$('#bg').fadeIn(100);
			$('#wait').fadeIn(100);
			 $.post("index.php/reservation/regReserv", { 
								name        : $('#name').val(),
								family      : $('#family').val(),
								f_name      : $('#f_name').val(),
								n_code      : $('#n_code').val(),
								b_num       : $('#b_num').val(),
								b_location  : $('#b_location').val(),
								tel         : $('#tel').val(),
								mobil       : $('#mobil').val()*1,
								t_count     : $('#t_count').val(),
								zipcode     : $('#zipcode').val(),
								req_num     : $('#req_num').val(),
								req_date    : $('#req_date').val(),
								addr        : $('#addr').val(),	
								
								
						 	  },
					 function(data){
						 	$('#err_msg').html('اطلاعات با موفقیت ثبت شد');
						$('#bg').fadeIn(100,function(){
												$('#alerts').fadeIn(200); 
												 });
					 postMenus('reservation/list');

					 });
			
	}
}
function addReservFl2(){
	var msg = '';
	if ( $('#name').val() == '' ){
				msg = ' نام وارد نشده';
	}
	else if ( $('#family').val() == '' ){
				msg = 'نام خانوادگی وارد نشده';
	}
	else if ( $('#n_code').val() == '' ){
				msg = 'شماره ملی وارد نشده';
	}
	else if ( $('#t_count').val() == '' ){
				msg = 'تعداد قبرها وارد نشده';
	}
	
	if ( msg != '' ){
					$('#err_msg').html(msg);
					$('#bg').fadeIn(100,function(){
												$('#alerts').fadeIn(200); 
												 });
					
			
	}
	else {
	$('#bg').fadeIn(100);
			$('#wait').fadeIn(100);
			 $.post("index.php/reservation/regReservFl2", { 
								name        : $('#name').val(),
								family      : $('#family').val(),
								f_name      : $('#f_name').val(),
								n_code      : $('#n_code').val(),
								b_num       : $('#b_num').val(),
								b_location  : $('#b_location').val(),
								tel         : $('#tel').val(),
								mobil       : $('#mobil').val()*1,
								t_count     : $('#t_count').val(),
								zipcode     : $('#zipcode').val(),
								req_num     : $('#req_num').val(),
								req_date    : $('#req_date').val(),
								addr        : $('#addr').val(),	
								tomb_id     : $('input[name=tombId]:checked').val(),
								
								
						 	  },
					 function(data){
						 	$('#err_msg').html('اطلاعات با موفقیت ثبت شد');
						$('#bg').fadeIn(100,function(){
												$('#alerts').fadeIn(200); 
												 });
					 postMenus('reservation/list');

					 });
			
	}
}
function editReserv(id){
	var msg = '';
	if ( $('#name').val() == '' ){
				msg = ' نام وارد نشده';
	}
	else if ( $('#family').val() == '' ){
				msg = 'نام خانوادگی وارد نشده';
	}
	else if ( $('#n_code').val() == '' ){
				msg = 'شماره ملی وارد نشده';
	}
	else if ( $('#t_count').val() == '' ){
				msg = 'تعداد قبرها وارد نشده';
	}
	
	if ( msg != '' ){
					$('#err_msg').html(msg);
					$('#bg').fadeIn(100,function(){
												$('#alerts').fadeIn(200); 
												 });
					
			
	}
	else {
			$('#wait').fadeIn(100);
			 $.post("index.php/reservation/editReserv", { 
								name        : $('#name').val(),
								family      : $('#family').val(),
								f_name      : $('#f_name').val(),
								n_code      : $('#n_code').val(),
								b_num       : $('#b_num').val(),
								b_location  : $('#b_location').val(),
								tel         : $('#tel').val(),
								mobil       : $('#mobil').val()*1,
								t_count     : $('#t_count').val(),
								zipcode     : $('#zipcode').val(),
								req_num     : $('#req_num').val(),
								req_date    : $('#req_date').val(),
								addr        : $('#addr').val(),	
								id          : id,
								
								
						 	  },
					 function(data){
						 $("body").removeClass("modal-open");
			 				$('.modal-backdrop').fadeOut(100);
						 	$('#err_msg').html('اطلاعات با موفقیت به روز رسانی شد');
						$('#bg').fadeIn(100,function(){
												$('#alerts').fadeIn(200); 
												 });
					 postMenus('reservation/list');

					 });
			
	}
}
function regReservTomb(d_id){
		var msg = '';
			if ( $('#segment_id').val() == '0' ){
				
				msg = ' قطعه انتخاب نشده';
			}
			else if ( $('#cham_row_id').val() == '0' ){
				
				msg = ' ردیف / حجره انتخاب نشده';
			}
			else if ( $('#tombs_num_id').val() == '0' ){
				
				msg = ' قبر انتخاب نشده';
			}
			
			
			if ( msg != '' ){
				alert(msg);				
			}
			else {
				 
			$('#wait').fadeIn(100);
		      $.post("index.php/reservation/reservTomb", { 
					tId          : d_id,
					p_type       : $('#p_type').val(),
					segment_id   : $('#segment_id').val(),
					cham_row_id  : $('#cham_row_id').val(),
					tomb_num_id  : $('#tombs_num_id').val(),
					t_des        : $('#t_des').val(),
					
			   },
		 function(data){
			 $('#LayerDiv').html(data);
				  		 $('#wait').fadeOut(100,function(){ $('#LayerDiv').fadeIn(100);$('#closeLayer').fadeIn(100);});
			 });
		}
}
function regbank_rInf(d_id){
	
		var msg = '';
		
			if ( $('#serial').val() == '' ){
				msg = 'سریال فیش وارد نشده';
			}
			else if ( $('#f_num').val() == '' ){
						msg = 'شماره فیش وارد نشده';
			}
			else if ( $('#f_date').val() == '' ){
						msg = 'تاریخ پرداخت وارد نشده';
			}
			else if ( $('#amount').val() == '' ){
						msg = 'مبلغ فیش وارد نشده';
			}
			else if ( $('#fishOk').val() == '0' ){
						msg = 'شماره فیش وارد شده تکراری و نامعتبر است';
			}
			if ( msg != '' ){
					$('#err_msg').html(msg);
					$('#bg').fadeIn(100,function(){
												$('#alerts').fadeIn(200); 
												 });
					
			}
			else {
				 
			$('#wait').fadeIn(100);
		      $.post("index.php/reservation/bankFE", { 
								d_id          : d_id,
								pay_type      : 1,
								acc_id        : $('#acc_id').val(),
								serial        : $('#serial').val(),
								f_num         : $('#f_num').val(),
								f_date        : $('#f_date').val(),
								amount        : $('#amount').val(),
								hamount       : $('#hamount').val(),
								payer_name    : $('#payer_name').val(),
								payer_n_code  : $('#payer_n_code').val(),
								fish_t        : $('#fish_t').val(),
								
			   },
		 function(data){
			ctrlAct(d_id,'reservation/bankF');
			 });
		}
}
function reg_res_pos(d_id,acc_id,f_num,serial){
	
		var msg = '';
		
			if ( $('#payer_namePos').val() == '' ){
				msg = 'نام پرداخت کننده وارد نشده';
			}
			else if ( $('#payer_n_codePos').val() == '' ){
						msg = 'شماره ملی پرداخت کننده وارد نشده';
			}
			if ( msg != '' ){
					$('#err_msg').html(msg);
					$('#bg').fadeIn(100,function(){
												$('#alerts').fadeIn(200); 
												 });
					
			}
			else {
				 
			$('#wait').fadeIn(100);
		      $.post("index.php/reservation/bankFE", { 
								d_id          : d_id,
								pay_type      : 0,
								acc_id        : acc_id,
								serial        : serial,
								f_num         : f_num,
								amount        : $('#amountPos').val(),
								hamount       : $('#hamountPos').val(),
								payer_name    : $('#payer_namePos').val(),
								payer_n_code  : $('#payer_n_codePos').val(),
								fish_t        : $('#fish_tPos').val(),
								
			   },
		 function(data){
			ctrlAct(d_id,'reservation/bankF');
			 });
		}
}
function reg_res_cash(d_id){
	
		var msg = '';
		
			if ( $('#payer_nameCash').val() == '' ){
				msg = 'نام پرداخت کننده وارد نشده';
			}
			else if ( $('#payer_n_codeCash').val() == '' ){
						msg = 'شماره ملی پرداخت کننده وارد نشده';
			}
			if ( msg != '' ){
					$('#err_msg').html(msg);
					$('#bg').fadeIn(100,function(){
												$('#alerts').fadeIn(200); 
												 });
					
			}
			else {
				 
			$('#wait').fadeIn(100);
		      $.post("index.php/reservation/bankFE", { 
								d_id          : d_id,
								pay_type      : 2,
								acc_id        : 0,
								serial        : 0,
								f_num         : 0,
								amount        : $('#amountCash').val(),
								hamount       : $('#hamountCash').val(),
								payer_name    : $('#payer_nameCash').val(),
								payer_n_code  : $('#payer_n_codeCash').val(),
								fish_t        : $('#fish_tCash').val(),
								
			   },
		 function(data){
			ctrlAct(d_id,'reservation/bankF');
			 });
		}
}
function searchReserv(){
  			$('#bg').fadeIn(100);
			$('#wait').fadeIn(100);
			$.post("index.php/reservation/searchReserv", { 
							n_code   :  $('#n_code_se').val(),
							name     :  $('#name_se').val(),
							family   :  $('#family_se').val(),
							r_type   :  $('#r_type_se').val(),
					   },
				 function(data){
					 $('#searchResult').html(data);
					 $('#bg').fadeOut(100);
			  		 $('#wait').fadeOut(100);});	
}
function regnewTombMut(d_id){
		var msg = '';
			if ( $('#segment_id').val() == '0' ){
				
				msg = ' قطعه انتخاب نشده';
			}
			else if ( $('#cham_row_id').val() == '0' ){
				
				msg = ' ردیف / حجره انتخاب نشده';
			}
			else if ( $('#tombs_num_id').val() == '0' ){
				
				msg = ' قبر انتخاب نشده';
			}
			else if ( $('#tomb_fl_num').val() == '0' ){
				
				msg = ' قبر انتخاب نشده';
			}
			else if ( $('#name').val() == '0' ){
				
				msg = ' نام صاحب قبر وارد نشده';
			}
			else if ( $('#family').val() == '0' ){
				
				msg = ' نام خانودگی صاحب قبر وارد نشده';
			}
			else if ( $('#n_code').val() == '' ){
				
				msg = ' کد ملی وارد نشده';
			}
			
			if ( msg != '' ){
				alert(msg);				
			}
			else {
				 
			//$('#bg').fadeIn(100);
			$('#wait').fadeIn(100);
		      $.post("index.php/mutilation/tombInfNewT", { 
					tId          : d_id,
					p_type       : $('#p_type').val(),
					segment_id   : $('#segment_id').val(),
					cham_row_id  : $('#cham_row_id').val(),
					tomb_num_id  : $('#tombs_num_id').val(),
					fl_num       : $('#tomb_fl_num').val(),
					t_des        : $('#t_des').val(),
					t_id         : $('#tomb_id').val(),
					name         : $('#name').val(),
					family       : $('#family').val(),
					f_name       : $('#f_name').val(),
					n_code       : $('#n_code').val(),
					tel          : $('#tel').val(),
					mobil        : $('#mobil').val(),
					b_num        : $('#b_num').val(),
					b_location   : $('#b_location').val(),
					zipcode      : $('#zipcode').val(),
					addr         : $('#addr').val(),
			   },
		 function(data){
			 $('#LayerDiv').html(data);
				  		 $('#wait').fadeOut(100,function(){ $('#LayerDiv').fadeIn(100);$('#closeLayer').fadeIn(100);});
			 });
		}
}
function findFl2HoMut(n_code){
			$('#wait').fadeIn(100);
			$.post("index.php/mutilation/findFl2Ho", { 
							n_code    :  n_code,

					   },
				 function(data){
					 $('#findFl2Ho').html(data);
			  		 $('#wait').fadeOut(100);});	
}
function regFl2Mut(tomb_id){
		var msg = '';
			
				 
			$('#bg').fadeIn(100);
			$('#wait').fadeIn(100);
		      $.post("index.php/mutilation/tombInfFl2", { 
					tomb_id   : tomb_id,
					tId       : $('#d_id').val(),
					
			   },
		 function(data){
			 $('#LayerDiv').html(data);
				  		 $('#wait').fadeOut(100,function(){ $('#LayerDiv').fadeIn(100);$('#closeLayer').fadeIn(100);});
			 });
		
}
function findReservedMut(n_code){
			$('#wait').fadeIn(100);
			$.post("index.php/mutilation/findReserved", { 
							n_code    :  n_code,

					   },
				 function(data){
					 $('#findReserved').html(data);
			  		 $('#wait').fadeOut(100);});	
}
function findReservedDec(n_code,name,family){
			$('#wait').fadeIn(100);
			$.post("index.php/decedent/findReserved", { 
							n_code    :  n_code,
							name      :  name,
							family    :  family,

					   },
				 function(data){
					 $('#findReserved').html(data);
			  		 $('#wait').fadeOut(100);});	
}
function regResMut(tomb_id,resId){
		var msg = '';
			
				 
			$('#bg').fadeIn(100);
			$('#wait').fadeIn(100);
		      $.post("index.php/mutilation/tombInfRes", { 
					tomb_id   : tomb_id,
					resId     : resId,
					tId       : $('#d_id').val(),
					
			   },
		 function(data){
			 $('#LayerDiv').html(data);
				  		 $('#wait').fadeOut(100,function(){ $('#LayerDiv').fadeIn(100);$('#closeLayer').fadeIn(100);});
			 });
		
}
function regResDec(tomb_id,resId){
		var msg = '';
			
				 
			//$('#bg').fadeIn(100);
			$('#wait').fadeIn(100);
		      $.post("index.php/decedent/tombInfRes", { 
					tomb_id   : tomb_id,
					resId     : resId,
					tId       : $('#d_id').val(),
					
			   },
		 function(data){
			 $('#LayerDiv').html(data);
				  		 $('#wait').fadeOut(100,function(){ $('#LayerDiv').fadeIn(100);$('#closeLayer').fadeIn(100);});
			 });
		
}
function reg_mut_pos(d_id,acc_id,f_num,serial){
	
		var msg = '';
		
			if ( $('#payer_namePos').val() == '' ){
				msg = 'نام پرداخت کننده وارد نشده';
			}
			else if ( $('#payer_n_codePos').val() == '' ){
						msg = 'شماره ملی پرداخت کننده وارد نشده';
			}
			if ( msg != '' ){
					$('#err_msg').html(msg);
					$('#bg').fadeIn(100,function(){
												$('#alerts').fadeIn(200); 
												 });
					
			}
			else {
				 
			//$('#bg').fadeIn(100);
			$('#wait').fadeIn(100);
		      $.post("index.php/mutilation/bankFE", { 
								d_id          : d_id,
								pay_type      : 0,
								acc_id        : acc_id,
								serial        : serial,
								f_num         : f_num,
								amount        : $('#amountPos').val(),
								hamount       : $('#hamountPos').val(),
								payer_name    : $('#payer_namePos').val(),
								payer_n_code  : $('#payer_n_codePos').val(),
								
			   },
		 function(data){
			ctrlAct(d_id,'mutilation/bankF');
			 });
		}
}
function reg_mut_cash(d_id){
	
		var msg = '';
		
			if ( $('#payer_nameCash').val() == '' ){
				msg = 'نام پرداخت کننده وارد نشده';
			}
			else if ( $('#payer_n_codeCash').val() == '' ){
						msg = 'شماره ملی پرداخت کننده وارد نشده';
			}
			if ( msg != '' ){
					$('#err_msg').html(msg);
					$('#bg').fadeIn(100,function(){
												$('#alerts').fadeIn(200); 
												 });
					
			}
			else {
				 
			//$('#bg').fadeIn(100);
			$('#wait').fadeIn(100);
		      $.post("index.php/mutilation/bankFE", { 
								d_id          : d_id,
								pay_type      : 2,
								acc_id        : 0,
								serial        : 0,
								f_num         : 0,
								amount        : $('#amountCash').val(),
								hamount       : $('#hamountCash').val(),
								payer_name    : $('#payer_nameCash').val(),
								payer_n_code  : $('#payer_n_codeCash').val(),
								
			   },
		 function(data){
			ctrlAct(d_id,'mutilation/bankF');
			 });
		}
}
function reg_newb_pos(d_id,acc_id,f_num,serial,fish_type){
	
		var msg = '';
		
			if ( $('#payer_namePos').val() == '' ){
				msg = 'نام پرداخت کننده وارد نشده';
			}
			else if ( $('#payer_n_codePos').val() == '' ){
						msg = 'شماره ملی پرداخت کننده وارد نشده';
			}
			if ( msg != '' ){
					$('#err_msg').html(msg);
					$('#bg').fadeIn(100,function(){
												$('#alerts').fadeIn(200); 
												 });
					
			}
			else {
				 
			//$('#bg').fadeIn(100);
			$('#wait').fadeIn(100);
		      $.post("index.php/newborn/bankFE", { 
								d_id          : d_id,
								pay_type      : 0,
								fish_type     : fish_type,
								acc_id        : acc_id,
								serial        : serial,
								f_num         : f_num,
								amount        : $('#amountPos').val(),
								hamount       : $('#hamountPos').val(),
								payer_name    : $('#payer_namePos').val(),
								payer_n_code  : $('#payer_n_codePos').val(),
								
			   },
		 function(data){
			ctrlAct(d_id,'newborn/bankF?fish_type='+fish_type);
			 });
		}
}
function regbank_rInfNewb(d_id,fish_type){
	
		var msg = '';
		
			if ( $('#serial').val() == '' ){
				msg = 'سریال فیش وارد نشده';
			}
			else if ( $('#f_num').val() == '' ){
						msg = 'شماره فیش وارد نشده';
			}
			else if ( $('#f_date').val() == '' ){
						msg = 'تاریخ پرداخت وارد نشده';
			}
			else if ( $('#amount').val() == '' ){
						msg = 'مبلغ فیش وارد نشده';
			}
			else if ( $('#fishOk').val() == '0' ){
						msg = 'شماره فیش وارد شده تکراری و نامعتبر است';
			}
			if ( msg != '' ){
					$('#err_msg').html(msg);
					$('#bg').fadeIn(100,function(){
												$('#alerts').fadeIn(200); 
												 });
					
			}
			else {
				 
			$('#wait').fadeIn(100);
		      $.post("index.php/newborn/bankFE", { 
								d_id          : d_id,
								pay_type      : 1,
								fish_type     : fish_type,
								acc_id        : $('#acc_id').val(),
								serial        : $('#serial').val(),
								f_num         : $('#f_num').val(),
								f_date        : $('#f_date').val(),
								amount        : $('#amount').val(),
								hamount       : $('#hamount').val(),
								payer_name    : $('#payer_name').val(),
								payer_n_code  : $('#payer_n_code').val(),
								
			   },
		 function(data){
			ctrlAct(d_id,'newborn/bankF?fish_type='+fish_type);
			 });
		}
}
function reg_newb_cash(d_id,fish_type){
	
		var msg = '';
		
			if ( $('#payer_nameCash').val() == '' ){
				msg = 'نام پرداخت کننده وارد نشده';
			}
			else if ( $('#payer_n_codeCash').val() == '' ){
						msg = 'شماره ملی پرداخت کننده وارد نشده';
			}
			if ( msg != '' ){
					$('#err_msg').html(msg);
					$('#bg').fadeIn(100,function(){
												$('#alerts').fadeIn(200); 
												 });
					
			}
			else {
				 
			//$('#bg').fadeIn(100);
			$('#wait').fadeIn(100);
		      $.post("index.php/newborn/bankFE", { 
								d_id          : d_id,
								fish_type     : fish_type,
								pay_type      : 2,
								acc_id        : 0,
								serial        : 0,
								f_num         : 0,
								amount        : $('#amountCash').val(),
								hamount       : $('#hamountCash').val(),
								payer_name    : $('#payer_nameCash').val(),
								payer_n_code  : $('#payer_n_codeCash').val(),
								
			   },
		 function(data){
			ctrlAct(d_id,'newborn/bankF?fish_type='+fish_type);
			 });
		}
}
function searchDeMis(){

		//usage.length;
		
				 
			$('#wait').fadeIn(100);
		      $.post("index.php/mission/searchDeMis", { 
					n_code       : $('#d_n_code').val(),
					
										
			   },
		 function(data){
			 
					 $('#resultDiv').html(data);
			  		 $('#wait').fadeOut(100);
			 });
											
									
	  
		
			
}
function regMis(id) {
			var msg = '';
			
			if ( $('#m_num').val() == '' ){
				$('#m_num').focus();
				msg = 'شماره ماموریت وارد نشده';
			}
			else if ( $('#regCheck').val() == '0' ){
						msg = 'شماره ماموریت وارد شده تکراری و نامعتبر است';
			}
			else if ( $('#st_date').val() == '' ){
				$('#st_date').focus();
				msg = 'تاریخ ماموریت وارد نشده';
			}
			else if ( $('#destination').val() == '' ){
				$('#destination').focus();
				msg = 'مقصد ماموریت وارد نشده';
			}
			else if ( $('#subject').val() == '' ){
				$('#subject').focus();
				msg = 'موضوع ماموریت وارد نشده';
			}
			else if ( $('#is_d_id').val() == '1' ){
				 if ( $('#d_id').val() == '0' ){
						msg = 'اطلاعات متوفی صحیح وارد نشده';
				}
			}
					
			if ( msg != '' ){
					$('#err_msg').html(msg);
					$('#bg').fadeIn(100,function(){
												$('#alerts').fadeIn(200); 
												 });
					
			}
			else {
				 
				//$('#bg').fadeIn(100);
			$('#wait').fadeIn(100);
		      $.post("index.php/mission/missave", { 
					dr_id       : $('#dr_id').val(),
					car_id      : $('#car_id').val(),
			  		m_num       : $('#m_num').val(),
					st_date     : $('#st_date').val(),
					end_date    : $('#end_date').val(),
					m_time      : $('#m_time').val(),
					distance    : $('#distance').val(),
					destination : $('#destination').val(),
					subject     : $('#subject').val(),
					dispatcher  : $('#dispatcher').val(),
					m_office    : $('#m_office').val(),
					office      : $('#office').val(),
					m_cash      : $('#m_cash').val(),
					is_d_id     : 1,
					d_id        : $('#d_id').val(),
					serv_id     : id,

										
			   },
		 function(data){
			 $("body").removeClass("modal-open");
			 $('.modal-backdrop').fadeOut(100);
			 postMenus('mission/list');
		 });
											
									
	  
		
			}
}
function searchMis(){
  			$('#bg').fadeIn(100);
			$('#wait').fadeIn(100);
			$.post("index.php/mission/searchMis", { 
							wcolumn  :  $('#wcolumn').val(),
							orderBy  :  $('#orderBy').val(),
							verb     :  $('#verb').val(),
							misStart :  $('#misStart').val(),
							misEnd   :  $('#misEnd').val(),
					   },
				 function(data){
					 $('#searchResult').html(data);
					 $('#bg').fadeOut(100);
			  		 $('#wait').fadeOut(100);});	
}
function searchNoMis(){
  			$('#bg').fadeIn(100);
			$('#wait').fadeIn(100);
			$.post("index.php/mission/searchNoMis", { 
							wcolumn    :  $('#wcolumn').val(),
							filterType :  $('#filterType').val(),
							verb       :  $('#verb').val(),
					   },
				 function(data){
					 $('#searchResult').html(data);
					 $('#bg').fadeOut(100);
			  		 $('#wait').fadeOut(100);});	
}
function editMis(id) {
			var msg = '';
			
			if ( $('#m_num').val() == '' ){
				$('#m_num').focus();
				msg = 'شماره ماموریت وارد نشده';
			}
			else if ( $('#regCheck').val() == '0' ){
						msg = 'شماره ماموریت وارد شده تکراری و نامعتبر است';
			}
			else if ( $('#st_date').val() == '' ){
				$('#st_date').focus();
				msg = 'تاریخ ماموریت وارد نشده';
			}
			else if ( $('#destination').val() == '' ){
				$('#destination').focus();
				msg = 'مقصد ماموریت وارد نشده';
			}
			else if ( $('#subject').val() == '' ){
				$('#subject').focus();
				msg = 'موضوع ماموریت وارد نشده';
			}
			else if ( $('#is_d_id').val() == '1' ){
				 if ( $('#d_id').val() == '0' ){
						msg = 'اطلاعات متوفی صحیح وارد نشده';
				}
			}
					
			if ( msg != '' ){
					$('#err_msg').html(msg);
					$('#bg').fadeIn(100,function(){
												$('#alerts').fadeIn(200); 
												 });
					
			}
			else {
				 
				//$('#bg').fadeIn(100);
			$('#wait').fadeIn(100);
		      $.post("index.php/mission/editMis", { 
					dr_id       : $('#dr_id').val(),
					car_id      : $('#car_id').val(),
			  		m_num       : $('#m_num').val(),
					st_date     : $('#st_date').val(),
					end_date    : $('#end_date').val(),
					m_time      : $('#m_time').val(),
					distance    : $('#distance').val(),
					destination : $('#destination').val(),
					subject     : $('#subject').val(),
					dispatcher  : $('#dispatcher').val(),
					m_office    : $('#m_office').val(),
					office      : $('#office').val(),
					m_cash      : $('#m_cash').val(),
					id          : id,

										
			   },
		 function(data){
			  $("body").removeClass("modal-open");
			 $('.modal-backdrop').fadeOut(100);
			 postMenus('mission/list');
		 });
											
									
	  
		
			}
}
function deleteMis(id){
		
				 
			//$('#bg').fadeIn(100);
			$('#wait').fadeIn(100);
		      $.post("index.php/mission/deleteMis", { 
					id    : id,
			   },
		 function(data){  $("body").removeClass("modal-open");
			 $('.modal-backdrop').fadeOut(100);postMenus('mission/list');});
		
}
function misReport(id,rep){
			//$('#bg').fadeIn(100);
			$('#wait').fadeIn(100);	
			$.post("index.php/mission/report", { 
				   tId    : id,
				   report : rep,
			   },
					 function(data){ 
					
					 
						 $('#err_msg').html('گزارش ماموریت با موفقیت ثبت شد');
						 $("body").removeClass("modal-open");
			 			 $('.modal-backdrop').fadeOut(100);
						 postMenus('mission/list');
						
					 });
			}
function find_pray_times(res_type,p_date,p_id){
			$('#wait').fadeIn(100);
		      $.post("index.php/pray_p/find_pray_times", { 
					res_type  : res_type,
					p_date    : p_date,
					p_id      : p_id,
					
										
			   },
		 function(data){
			 
					 $('#resultDiv').html(data);
			  		 $('#wait').fadeOut(100);
			 });
}
function find_pray_times1(res_type,p_date,p_id,oldId){
			$('#wait').fadeIn(100);
		      $.post("index.php/pray_p/find_pray_times1", { 
					res_type  : res_type,
					p_date    : p_date,
					p_id      : p_id,
					oldId     : oldId,
					
										
			   },
		 function(data){
			 
					 $('#resultDiv').html(data);
			  		 $('#wait').fadeOut(100);
			 });
}
function regPtime(pt_id,tariff,description,res_type,p_date) {
			var msg = '';
			
			if ( $('#res_name').val() == '' ){
				$('#res_name').focus();
				msg = 'نام رزرو کننده وارد نشده';
			}
			else if ( $('#res_tel').val() == '' ){
				$('#res_tel').focus();
				msg = 'شماره تماس رزرو کننده وارد نشده';
			}	
			if ( msg != '' ){
					$('#err_msg').html(msg);
					$('#bg').fadeIn(100,function(){
												$('#alerts').fadeIn(200); 
												 });
					
			}
			else {
				 
				$('#bg').fadeIn(100);
			$('#wait').fadeIn(100);
		      $.post("index.php/pray_p/regPtime", { 
					p_id        : $('#p_id').val(),
					res_name    : $('#res_name').val(),
			  		res_tel     : $('#res_tel').val(),
					pt_id       : pt_id,
					tariff      : tariff,
					description : description,
					res_type    : res_type,
					p_date      : p_date,
										
			   },
		 function(data){
			 postMenus('pray_p/list');
		 });
											
									
	  
		
			}
}
function editPtime(pt_id,tariff,description,res_type,p_date,oldId) {
			var msg = '';
			
			if ( $('#res_name').val() == '' ){
				$('#res_name').focus();
				msg = 'نام رزرو کننده وارد نشده';
			}
			else if ( $('#res_tel').val() == '' ){
				$('#res_tel').focus();
				msg = 'شماره تماس رزرو کننده وارد نشده';
			}	
			if ( msg != '' ){
					$('#err_msg').html(msg);
					$('#bg').fadeIn(100,function(){
												$('#alerts').fadeIn(200); 
												 });
					
			}
			else {
				 
				$('#bg').fadeIn(100);
			$('#wait').fadeIn(100);
		      $.post("index.php/pray_p/editPtime", { 
					p_id        : $('#p_id').val(),
					res_name    : $('#res_name').val(),
			  		res_tel     : $('#res_tel').val(),
					pt_id       : pt_id,
					tariff      : tariff,
					description : description,
					res_type    : res_type,
					p_date      : p_date,
					oldId       : oldId,
										
			   },
		 function(data){
			  $("body").removeClass("modal-open");
			 $('.modal-backdrop').fadeOut(100);
			 postMenus('pray_p/list');
		 });
											
									
	  
		
			}
}
function searchResPray(){
  			$('#bg').fadeIn(100);
			$('#wait').fadeIn(100);
			$.post("index.php/pray_p/searchPray_time", { 
							pray_p       :  $('#pray_p1').val(),
							p_dateStart  :  $('#p_dateStart').val(),
							p_dateEnd    :  $('#p_dateEnd').val(),
							res_name     :  $('#res_name1').val(),
							res_dateStart:  $('#res_dateStart').val(),
							res_dateEnd  :  $('#res_dateEnd').val(),
							regStart     :  $('#regStart').val(),
							regEnd       :  $('#regEnd').val(),
							orderBy      :  $('#orderBy').val(),
					   },
				 function(data){
					 $('#searchResult').html(data);
					 $('#bg').fadeOut(100);
			  		 $('#wait').fadeOut(100);});	
}
function reg_pray_cash(d_id){
	
		var msg = '';
		
			if ( $('#payer_nameCash').val() == '' ){
				msg = 'نام پرداخت کننده وارد نشده';
			}
			else if ( $('#payer_n_codeCash').val() == '' ){
						msg = 'شماره ملی پرداخت کننده وارد نشده';
			}
			if ( msg != '' ){
					$('#err_msg').html(msg);
					$('#bg').fadeIn(100,function(){
												$('#alerts').fadeIn(200); 
												 });
					
			}
			else {
				 
			//$('#bg').fadeIn(100);
			$('#wait').fadeIn(100);
		      $.post("index.php/pray_p/bankFE", { 
								d_id          : d_id,
								pay_type      : 2,
								acc_id        : 0,
								serial        : 0,
								f_num         : 0,
								amount        : $('#amountCash').val(),
								hamount       : $('#hamountCash').val(),
								payer_name    : $('#payer_nameCash').val(),
								payer_n_code  : $('#payer_n_codeCash').val(),
								
			   },
		 function(data){
			ctrlAct(d_id,'pray_p/bankF');
			 });
		}
}
function reg_pray_pos(d_id,acc_id,f_num,serial){
	
		var msg = '';
		
			if ( $('#payer_namePos').val() == '' ){
				msg = 'نام پرداخت کننده وارد نشده';
			}
			else if ( $('#payer_n_codePos').val() == '' ){
						msg = 'شماره ملی پرداخت کننده وارد نشده';
			}
			if ( msg != '' ){
					$('#err_msg').html(msg);
					$('#bg').fadeIn(100,function(){
												$('#alerts').fadeIn(200); 
												 });
					
			}
			else {
				 
			//$('#bg').fadeIn(100);
			$('#wait').fadeIn(100);
		      $.post("index.php/pray_p/bankFE", { 
								d_id          : d_id,
								pay_type      : 0,
								acc_id        : acc_id,
								serial        : serial,
								f_num         : f_num,
								amount        : $('#amountPos').val(),
								hamount       : $('#hamountPos').val(),
								payer_name    : $('#payer_namePos').val(),
								payer_n_code  : $('#payer_n_codePos').val(),
								
			   },
		 function(data){
			ctrlAct(d_id,'pray_p/bankF');
			 });
		}
}
function regbank_fPray(d_id){
	
		var msg = '';
		
			if ( $('#serial').val() == '' ){
				msg = 'سریال فیش وارد نشده';
			}
			else if ( $('#f_num').val() == '' ){
						msg = 'شماره فیش وارد نشده';
			}
			else if ( $('#f_date').val() == '' ){
						msg = 'تاریخ پرداخت وارد نشده';
			}
			else if ( $('#amount').val() == '' ){
						msg = 'مبلغ فیش وارد نشده';
			}
			else if ( $('#fishOk').val() == '0' ){
						msg = 'شماره فیش وارد شده تکراری و نامعتبر است';
			}
			if ( msg != '' ){
					$('#err_msg').html(msg);
					$('#bg').fadeIn(100,function(){
												$('#alerts').fadeIn(200); 
												 });
					
			}
			else {
				 
			//$('#bg').fadeIn(100);
			$('#wait').fadeIn(100);
		      $.post("index.php/pray_p/bankFE", { 
								d_id          : d_id,
								pay_type      : 1,
								acc_id        : $('#acc_id').val(),
								serial        : $('#serial').val(),
								f_num         : $('#f_num').val(),
								f_date        : $('#f_date').val(),
								amount        : $('#amount').val(),
								hamount       : $('#hamount').val(),
								payer_name    : $('#payer_name').val(),
								payer_n_code  : $('#payer_n_code').val(),
								
			   },
		 function(data){
			ctrlAct(d_id,'pray_p/bankF');
			 });
		}
}
function searchIncomeReport(){
  			$('#bg').fadeIn(100);
			$('#wait').fadeIn(100);
			$.post("index.php/reports/incomeReport", { 
					  		incomeType:  $('#incomeType').val(),
							wcolumn   :  $('#wcolumn').val(),
							orderBy   :  $('#orderBy').val(),
							verb      :  $('#verb').val(),
							regStart  :  $('#regStart').val(),
							regEnd    :  $('#regEnd').val(),
					   },
				 function(data){
					 $('#searchResult').html(data);
					 $('#bg').fadeOut(100);
			  		 $('#wait').fadeOut(100);});	
}
function searchStat(){
  			$('#bg').fadeIn(100);
			$('#wait').fadeIn(100);
			$.post("index.php/reports/searchStat", { 
							regStart  :  $('#regStart').val(),
							regEnd    :  $('#regEnd').val(),
					   },
				 function(data){
					 $('#searchResult').html(data);
					 $('#bg').fadeOut(100);
			  		 $('#wait').fadeOut(100);});	
}
function searchMisRp(){
  			$('#bg').fadeIn(100);
			$('#wait').fadeIn(100);
			$.post("index.php/reports/searchMis", { 
					  		car_id   :  $('#car_id').val(),
							misStart :  $('#misStart').val(),
							misEnd   :  $('#misEnd').val(),
							dr_id    :  $('#dr_id').val(),
							orderBy  :  $('#orderBy').val(),
							
					   },
				 function(data){
					 $('#searchResult').html(data);
					 $('#bg').fadeOut(100);
			  		 $('#wait').fadeOut(100);});	
}
function regbank_fRent(d_id){
	
		var msg = '';
		
			if ( $('#serial').val() == '' ){
				msg = 'سریال فیش وارد نشده';
			}
			else if ( $('#f_num').val() == '' ){
						msg = 'شماره فیش وارد نشده';
			}
			else if ( $('#f_date').val() == '' ){
						msg = 'تاریخ پرداخت وارد نشده';
			}
			else if ( $('#amount').val() == '' ){
						msg = 'مبلغ فیش وارد نشده';
			}
			else if ( $('#fishOk').val() == '0' ){
						msg = 'شماره فیش وارد شده تکراری و نامعتبر است';
			}
			if ( msg != '' ){
					$('#err_msg').html(msg);
					$('#bg').fadeIn(100,function(){
												$('#alerts').fadeIn(200); 
												 });
					
			}
			else {
				 
			//$('#bg').fadeIn(100);
			$('#wait').fadeIn(100);
		      $.post("index.php/stores/bankFE", { 
								d_id          : d_id,
								pay_type      : 1,
								acc_id        : $('#acc_id').val(),
								serial        : $('#serial').val(),
								f_num         : $('#f_num').val(),
								f_date        : $('#f_date').val(),
								amount        : $('#amount').val(),
								hamount       : $('#hamount').val(),
								payer_name    : $('#payer_name').val(),
								payer_n_code  : $('#payer_n_code').val(),
								
			   },
		 function(data){
			ctrlAct(d_id,'stores/bankF');
			 });
		}
}
function reg_rent_pos(d_id,acc_id,f_num,serial){
	
		var msg = '';
		
			if ( $('#payer_namePos').val() == '' ){
				msg = 'نام پرداخت کننده وارد نشده';
			}
			else if ( $('#payer_n_codePos').val() == '' ){
						msg = 'شماره ملی پرداخت کننده وارد نشده';
			}
			if ( msg != '' ){
					$('#err_msg').html(msg);
					$('#bg').fadeIn(100,function(){
												$('#alerts').fadeIn(200); 
												 });
					
			}
			else {
				 
			//$('#bg').fadeIn(100);
			$('#wait').fadeIn(100);
		      $.post("index.php/stores/bankFE", { 
								d_id          : d_id,
								pay_type      : 0,
								acc_id        : acc_id,
								serial        : serial,
								f_num         : f_num,
								amount        : $('#amountPos').val(),
								hamount       : $('#hamountPos').val(),
								payer_name    : $('#payer_namePos').val(),
								payer_n_code  : $('#payer_n_codePos').val(),
								
			   },
		 function(data){
			ctrlAct(d_id,'stores/bankF');
			 });
		}
}
function reg_rent_cash(d_id){
	
		var msg = '';
		
			if ( $('#payer_nameCash').val() == '' ){
				msg = 'نام پرداخت کننده وارد نشده';
			}
			else if ( $('#payer_n_codeCash').val() == '' ){
						msg = 'شماره ملی پرداخت کننده وارد نشده';
			}
			if ( msg != '' ){
					$('#err_msg').html(msg);
					$('#bg').fadeIn(100,function(){
												$('#alerts').fadeIn(200); 
												 });
					
			}
			else {
				 
			//$('#bg').fadeIn(100);
			$('#wait').fadeIn(100);
		      $.post("index.php/stores/bankFE", { 
								d_id          : d_id,
								pay_type      : 2,
								acc_id        : 0,
								serial        : 0,
								f_num         : 0,
								amount        : $('#amountCash').val(),
								hamount       : $('#hamountCash').val(),
								payer_name    : $('#payer_nameCash').val(),
								payer_n_code  : $('#payer_n_codeCash').val(),
								
			   },
		 function(data){
			ctrlAct(d_id,'stores/bankF');
			 });
		}
}
function searchMonthReport(){
  			$('#bg').fadeIn(100);
			$('#wait').fadeIn(100);
			$.post("index.php/reports/monthReportSearch", { 
					  		year    :  $('#seYear').val(),
							month   :  $('#seMonth').val(),
							yearT   :  $('#seYear option:selected').text(),
							monthT  :  $('#seMonth option:selected').text(),
							
					   },
				 function(data){
					 $('#searchResult').html(data);
					 $('#bg').fadeOut(100);
			  		 $('#wait').fadeOut(100);});	
}
function searchNewBornRp(){
  			$('#bg').fadeIn(100);
			$('#wait').fadeIn(100);
			$.post("index.php/reports/searchNewBorn", { 
				   			from_h   :  $('#from_hS').val(),
							regType  :  $('#regType').val(),
							orderBy  :  $('#orderBy').val(),
							regStart :  $('#regStart').val(),
							regEnd   :  $('#regEnd').val(),
					   },
				 function(data){
					 $('#searchResult').html(data);
					 $('#bg').fadeOut(100);
			  		 $('#wait').fadeOut(100);});	
}
function searchFish(){
  			$('#bg').fadeIn(100);
			$('#wait').fadeIn(100);
			$.post("index.php/reports/searchFish", { 
					  		fish_type :  $('#fish_type').val(),
							fbStart   :  $('#fbStart').val(),
							fbEnd     :  $('#fbEnd').val(),
							orderBy   :  $('#orderBy').val(),
							pay_type  :  $('#pay_type').val(),
					   },
				 function(data){
					 $('#searchResult').html(data);
					 $('#bg').fadeOut(100);
			  		 $('#wait').fadeOut(100);});	
}
function searchmutilationRp(){
  			$('#bg').fadeIn(100);
			$('#wait').fadeIn(100);
			$.post("index.php/reports/searchMutilation", { 
							gender   :  $('#gender').val(),
							wcolumn  :  $('#wcolumn').val(),
							verb     :  $('#verb').val(),
							orderBy  :  $('#orderBy').val(),
							regStart :  $('#regStart').val(),
							regEnd   :  $('#regEnd').val(),
					   },
				 function(data){
					 $('#searchResult').html(data);
					 $('#bg').fadeOut(100);
			  		 $('#wait').fadeOut(100);});	
}
function searchTomb(){
  			$('#bg').fadeIn(100);
			$('#wait').fadeIn(100);
			$.post("index.php/reports/searchTomb", { 
					  		tType     :  $('#tType').val(),
							p_type    :  $('#p_type').val(),
							segment_id:  $('#segment_id').val(),
							orderBy   :  $('#orderBy').val(),
							fbStart   :  $('#fbStart').val(),
							fbEnd     :  $('#fbEnd').val(),
					   },
				 function(data){
					 $('#searchResult').html(data);
					 $('#bg').fadeOut(100);
			  		 $('#wait').fadeOut(100);});	
}
function searchFreeTomb(){
  			$('#bg').fadeIn(100);
			$('#wait').fadeIn(100);
			$.post("index.php/reports/searchFreeTomb", { 
					  		tType     :  $('#tType').val(),
							segment_id:  $('#segment_id').val(),
							orderBy   :  $('#orderBy').val(),
							fbStart   :  $('#fbStart').val(),
							fbEnd     :  $('#fbEnd').val(),
					   },
				 function(data){
					 $('#searchResult').html(data);
					 $('#bg').fadeOut(100);
			  		 $('#wait').fadeOut(100);});	
}
function searchRentConRep(){
  			$('#bg').fadeIn(100);
			$('#wait').fadeIn(100);
			$.post("index.php/reports/searchStoresCon", { 
							shop_id    :  $('#shop_id1').val(),
							conStart   :  $('#conStart').val(),
							conEnd     :  $('#conEnd').val(),
							ConStatus  :  $('#ConStatus').val(),
							regStart   :  $('#regStart').val(),
							regEnd     :  $('#regEnd').val(),
					   },
				 function(data){
					 $('#searchResult').html(data);
					 $('#bg').fadeOut(100);
			  		 $('#wait').fadeOut(100);});	
}
function searchResPrayRep(){
  			$('#bg').fadeIn(100);
			$('#wait').fadeIn(100);
			$.post("index.php/reports/searchPray_time", { 
							pray_p       :  $('#pray_p1').val(),
							p_dateStart  :  $('#p_dateStart').val(),
							p_dateEnd    :  $('#p_dateEnd').val(),
							res_name     :  $('#res_name1').val(),
							res_dateStart:  $('#res_dateStart').val(),
							res_dateEnd  :  $('#res_dateEnd').val(),
							regStart     :  $('#regStart').val(),
							regEnd       :  $('#regEnd').val(),
							orderBy      :  $('#orderBy').val(),
					   },
				 function(data){
					 $('#searchResult').html(data);
					 $('#bg').fadeOut(100);
			  		 $('#wait').fadeOut(100);});	
}
function n_codeRep(n_code){
			$('#wait').fadeIn(100);
			$.post("index.php/reports/n_codeSearch", { 
							n_code    :  n_code,
							regEnd    :  $('#regEnd').val(),
							regStart  :  $('#regStart').val(),

					   },
				 function(data){
					 $('#searchResult').html(data);
			  		 $('#wait').fadeOut(100);});	
}
function editFish(type,controller,id){
			//$('#wait').fadeIn(100);
			$.post("index.php/"+controller+"/editFish", { 
							id    :  id,
							type  :  type,

					   },
				 function(data){
					 $('#editFish').html(data);
			  		 $('#wait').fadeOut(100);});	
}
function editBank_f(type,controller,id,d_id){
	
		var msg = '';
		
			if ( $('#serial1').val() == '' ){
				msg = 'سریال فیش وارد نشده';
			}
			else if ( $('#f_num1').val() == '' ){
						msg = 'شماره فیش وارد نشده';
			}
			else if ( $('#f_dateEdit').val() == '' ){
						msg = 'تاریخ پرداخت وارد نشده';
			}
			else if ( $('#amount1').val() == '' ){
						msg = 'مبلغ فیش وارد نشده';
			}
			if ( msg != '' ){
					$('#err_msg').html(msg);
					$('#bg').fadeIn(100,function(){
												$('#alerts').fadeIn(200); 
												 });
					
			}
			else {
				 
			//$('#bg').fadeIn(100);
			$('#wait').fadeIn(100);
		      $.post("index.php/"+controller+"/editBank_f", { 	
					 			type          : type,
								controller    : controller,
								id            : id,
								d_id          : d_id,
								pay_type      : 1,
								acc_id        : $('#acc_id1').val(),
								serial        : $('#serial1').val(),
								f_num         : $('#f_num1').val(),
								f_date        : $('#f_dateEdit').val(),
								amount        : $('#amount1').val(),
								hamount       : $('#hamount1').val(),
								payer_name    : $('#payer_name1').val(),
								payer_n_code  : $('#payer_n_code1').val(),
								description   : $('#description1').val(),
								
			   },
		 function(data){
			ctrlAct(d_id,controller+'/bankF');
			 });
		}
}
function editPos(type,controller,id,d_id){
	
		var msg = '';
		
			if ( $('#payer_namePos1').val() == '' ){
				msg = 'نام پرداخت کننده وارد نشده';
			}
			else if ( $('#payer_n_codePos1').val() == '' ){
						msg = 'شماره ملی پرداخت کننده وارد نشده';
			}
			else if ( $('#acc_idPos1').val() == '' ){
						msg = 'شماره مرجع وارد نشده';
			}
			else if ( $('#f_numPos1').val() == '' ){
						msg = 'شماره تراکنش وارد نشده';
			}
			else if ( $('#serialPos1').val() == '' ){
						msg = 'شماره فیش وارد نشده';
			}
			if ( msg != '' ){
					$('#err_msg').html(msg);
					$('#bg').fadeIn(100,function(){
												$('#alerts').fadeIn(200); 
												 });
					
			}
			else {
				 
			$('#bg').fadeIn(100);
			$('#wait').fadeIn(100);
		      $.post("index.php/"+controller+"/editBank_f", { 
								type          : type,
								controller    : controller,
								id            : id,
								d_id          : d_id,
								pay_type      : 0,
								acc_id        : $('#acc_idPos1').val(),
								serial        : $('#serialPos1').val(),
								f_num         : $('#f_numPos1').val(),
								amount        : $('#amountPos1').val(),
								hamount       : $('#hamountPos1').val(),
								payer_name    : $('#payer_namePos1').val(),
								payer_n_code  : $('#payer_n_codePos1').val(),
								description   : $('#descriptionPos1').val(),
								
			   },
		 function(data){
			ctrlAct(d_id,controller+'/bankF');
			 });
		}
}
function editCash(type,controller,id,d_id){
	
		var msg = '';
		
			if ( $('#payer_nameCash1').val() == '' ){
				msg = 'نام پرداخت کننده وارد نشده';
			}
			else if ( $('#payer_n_codeCash1').val() == '' ){
						msg = 'شماره ملی پرداخت کننده وارد نشده';
			}
			if ( msg != '' ){
					$('#err_msg').html(msg);
					$('#bg').fadeIn(100,function(){
												$('#alerts').fadeIn(200); 
												 });
					
			}
			else {
				 
			//$('#bg').fadeIn(100);
			$('#wait').fadeIn(100);
		      $.post("index.php/"+controller+"/editBank_f", { 
								type          : type,
								controller    : controller,
								id            : id,
								d_id          : d_id,
								pay_type      : 2,
								acc_id        : 0,
								serial        : 0,
								f_num         : 0,
								amount        : $('#amountCash1').val(),
								hamount       : $('#hamountCash1').val(),
								payer_name    : $('#payer_nameCash1').val(),
								payer_n_code  : $('#payer_n_codeCash1').val(),
								description   : $('#descriptionCash1').val(),
								
			   },
		 function(data){
			ctrlAct(d_id,controller+'/bankF');
			 });
		}
}
function addOthers(count){
	var msg = '';
	
	if ( $('#name').val() == '' ){
				msg = 'نام وارد نشده';
	}
	else if ( $('#family').val() == '' ){
				msg = 'نام خانوادگی وارد نشده';
	}
	if ( msg != '' ){
					$('#err_msg').html(msg);
					$('#bg').fadeIn(100,function(){
												$('#alerts').fadeIn(200); 
												 });
					
			
	}
	else {
		
	$('#bg').fadeIn(100);
			$('#wait').fadeIn(100);
			
			 $.post("index.php/other/regother", { 
								gender     : $('#gender').val(),
								name       : $('#name').val(),
								family     : $('#family').val(),
								n_code     : $('#n_code').val(),
								serv_date  : $('#serv_date').val(),
								tel        : $('#tel').val(),
								addr       : $('#addr').val(),
								
								
						 	  },
					 function(data){
						   if ( data.status ){ 
								$('#err_msg').html('اطلاعات با موفقیت ثبت شد');
								$('#bg').fadeIn(100,function(){
								$('#alerts').fadeIn(200); 
												 });
								
								d_id = data.d_id;
								for (i=0;i<count;i++){
										var cheK = '0';
										if ( $('#check'+i).is( ":checked" ) ){
											cheK = '1';
										}
										t_id     = $('#t_id'+i).val();
										toption  = $('#toption'+i).val();
										op_count = $('#op_count'+i).val();
										amount   = $('#amount'+i).val();
										place    = 'tarr'+i;
										regServiceOther(t_id,cheK,toption,op_count,d_id,place,amount);
								}
					 			postMenus('other/list');

							 }
						 	
					 }, "json");
			
	}
}
function regServiceOther(t_id,cheK,toption,op_count,d_id,place,amount){
	 
				 
			
		      $.post("index.php/other/addServ", { 
					t_id     : t_id,
			  		toption  : toption,
					amount   : amount,
					op_count : op_count,
					d_id     : d_id,
					cheK     : cheK,
			   },
		 function(data){
			// $('#'+place).html(data)
			 });
		
}
function searchOther(){
  			$('#bg').fadeIn(100);
			$('#wait').fadeIn(100);
			$.post("index.php/other/searchOther", { 
							gender   :  $('#gender').val(),
							wcolumn  :  $('#wcolumn').val(),
							verb     :  $('#verb').val(),
							orderBy  :  $('#orderBy').val(),
							regStart :  $('#regStart').val(),
							regEnd   :  $('#regEnd').val(),
					   },
				 function(data){
					 $('#searchResult').html(data);
					 $('#bg').fadeOut(100);
			  		 $('#wait').fadeOut(100);});	
}
function regOtherServices(count,d_id) {
			//$('#bg').fadeIn(100);
			$('#wait').fadeIn(100);
		for (i=0;i<count;i++){
			var cheK = '0';
			if ( $('#check'+i).is( ":checked" ) ){
				cheK = '1';
			}
			t_id     = $('#t_id'+i).val();
			toption  = $('#toption'+i).val();
			op_count = $('#op_count'+i).val();
			amount   = $('#amount'+i).val();
			place    = 'tarr'+i;
			regServiceOther(t_id,cheK,toption,op_count,d_id,place,amount);
		}
		$('#wait').delay(1500).fadeOut(100,function(){
										$('#err_msg').html('خدمات با موفقیت ثبت شد');
										$("body").removeClass("modal-open");
			                            $('.modal-backdrop').fadeOut(100);
										postMenus('other/list');
										$('#alerts').fadeIn(200); 
										});
	
		 
}
function reg_other_pos(d_id,acc_id,f_num,serial){
	
		var msg = '';
		
			if ( $('#payer_namePos').val() == '' ){
				msg = 'نام پرداخت کننده وارد نشده';
			}
			else if ( $('#payer_n_codePos').val() == '' ){
						msg = 'شماره ملی پرداخت کننده وارد نشده';
			}
			if ( msg != '' ){
					$('#err_msg').html(msg);
					$('#bg').fadeIn(100,function(){
												$('#alerts').fadeIn(200); 
												 });
					
			}
			else {
				 
		//	$('#bg').fadeIn(100);
			$('#wait').fadeIn(100);
		      $.post("index.php/other/bankFE", { 
								d_id          : d_id,
								pay_type      : 0,
								acc_id        : acc_id,
								serial        : serial,
								f_num         : f_num,
								amount        : $('#amountPos').val(),
								hamount       : $('#hamountPos').val(),
								payer_name    : $('#payer_namePos').val(),
								payer_n_code  : $('#payer_n_codePos').val(),
								
			   },
		 function(data){
			ctrlAct(d_id,'other/bankF');
			 });
		}
}
function regbank_fInfOther(d_id){
	
		var msg = '';
		
			if ( $('#serial').val() == '' ){
				msg = 'سریال فیش وارد نشده';
			}
			else if ( $('#f_num').val() == '' ){
						msg = 'شماره فیش وارد نشده';
			}
			else if ( $('#f_date').val() == '' ){
						msg = 'تاریخ پرداخت وارد نشده';
			}
			else if ( $('#amount').val() == '' ){
						msg = 'مبلغ فیش وارد نشده';
			}
			else if ( $('#fishOk').val() == '0' ){
						msg = 'شماره فیش وارد شده تکراری و نامعتبر است';
			}
			if ( msg != '' ){
					$('#err_msg').html(msg);
					$('#bg').fadeIn(100,function(){
												$('#alerts').fadeIn(200); 
												 });
					
			}
			else {
				 
			//$('#bg').fadeIn(100);
			$('#wait').fadeIn(100);
		      $.post("index.php/other/bankFE", { 
								d_id          : d_id,
								pay_type      : 1,
								acc_id        : $('#acc_id').val(),
								serial        : $('#serial').val(),
								f_num         : $('#f_num').val(),
								f_date        : $('#f_date').val(),
								amount        : $('#amount').val(),
								hamount       : $('#hamount').val(),
								payer_name    : $('#payer_name').val(),
								payer_n_code  : $('#payer_n_code').val(),
								
			   },
		 function(data){
			ctrlAct(d_id,'other/bankF');
			 });
		}
}
function reg_other_cash(d_id){
	
		var msg = '';
		
			if ( $('#payer_nameCash').val() == '' ){
				msg = 'نام پرداخت کننده وارد نشده';
			}
			else if ( $('#payer_n_codeCash').val() == '' ){
						msg = 'شماره ملی پرداخت کننده وارد نشده';
			}
			if ( msg != '' ){
					$('#err_msg').html(msg);
					$('#bg').fadeIn(100,function(){
												$('#alerts').fadeIn(200); 
												 });
					
			}
			else {
				 
			//$('#bg').fadeIn(100);
			$('#wait').fadeIn(100);
		      $.post("index.php/other/bankFE", { 
								d_id          : d_id,
								pay_type      : 2,
								acc_id        : 0,
								serial        : 0,
								f_num         : 0,
								amount        : $('#amountCash').val(),
								hamount       : $('#hamountCash').val(),
								payer_name    : $('#payer_nameCash').val(),
								payer_n_code  : $('#payer_n_codeCash').val(),
								
			   },
		 function(data){
			ctrlAct(d_id,'other/bankF');
			 });
		}
}
function editOther(id){
	var msg = '';
	if ( $('#name').val() == '' ){
				msg = 'نام وارد نشده';
	}
	else if ( $('#family').val() == '' ){
				msg = 'نام خانوادگی وارد نشده';
	}
	
	
	
	if ( msg != '' ){
					$('#err_msg').html(msg);
					$('#bg').fadeIn(100,function(){
												$('#alerts').fadeIn(200); 
												 });
					
			
	}
	else {
	//$('#bg').fadeIn(100);
			$('#wait').fadeIn(100);
			 $.post("index.php/other/editRev", { 
								gender     : $('#gender1').val(),
								name       : $('#name').val(),
								family     : $('#family').val(),
								n_code     : $('#n_code').val(),
								serv_date  : $('#serv_date').val(),
								tel        : $('#tel').val(),
								addr       : $('#addr').val(),
								id         : id,
								
								
								
								
						 	  },
					 function(data){
						  $("body").removeClass("modal-open");
			             $('.modal-backdrop').fadeOut(100);	
						 
						 	$('#err_msg').html('اطلاعات با موفقیت ثبت شد');
							$('#alerts').fadeIn(200);
					 postMenus('other/list');

					 });
			
	}

	}
function deleteOther(id){
		
				 
		//	$('#bg').fadeIn(100);
			$('#wait').fadeIn(100);
		      $.post("index.php/other/deleteOther", { 
					id    : id,
			   },
		 function(data){postMenus('other/list');
						 $("body").removeClass("modal-open");
			             $('.modal-backdrop').fadeOut(100);	
		 });
		
}
function searchServicesRp(count){ 
  			$('#bg').fadeIn(100);
			$('#wait').fadeIn(100);
			var ser_str = '';
			for (i=0;i<count;i++){
				
				if ( $('#check'+i).is( ":checked" ) ){
					ser_str = ser_str +  $('#check'+i).val() + ',';
				}
			
			}
			
			$.post("index.php/reports/searchServices", { 
							ser_str  :  ser_str,
							orderBy  :  $('#orderBy').val(),
							regStart :  $('#regStart').val(),
							regEnd   :  $('#regEnd').val(),
					   },
				 function(data){
					 $('#searchResult').html(data);
					 $('#bg').fadeOut(100);
			  		 $('#wait').fadeOut(100);});	
}
function addBankF(controller,d_id){
	
		var msg = '';
		
			if ( $('#serial').val() == '' ){
				msg = 'سریال فیش وارد نشده';
			}
			else if ( $('#f_num').val() == '' ){
						msg = 'شماره فیش وارد نشده';
			}
			else if ( $('#f_date').val() == '' ){
						msg = 'تاریخ پرداخت وارد نشده';
			}
			else if ( $('#amount').val() == '' ){
						msg = 'مبلغ فیش وارد نشده';
			}
			else if ( $('#fishOk').val() == '0' ){
						msg = 'شماره فیش وارد شده تکراری و نامعتبر است';
			}	
			if ( msg != '' ){
					$('#err_msg').html(msg);
					$('#bg').fadeIn(100,function(){
												$('#alerts').fadeIn(200); 
												 });
					
			}
			else {
				 
			//$('#bg').fadeIn(100);
			$('#wait').fadeIn(100);
		      $.post("index.php/decedent/bankFE2", { 
								d_id          : d_id,
								pay_type      : 1,
								acc_id        : $('#acc_id').val(),
								serial        : $('#serial').val(),
								f_num         : $('#f_num').val(),
								f_date        : $('#f_date').val(),
								amount        : $('#amount').val(),
								hamount       : $('#hamount').val(),
								payer_name    : $('#payer_name').val(),
								payer_n_code  : $('#payer_n_code').val(),
								controller    : controller,
								
			   },
		 function(data){
			ctrlAct(d_id,controller+'/bankF');
			 });
		}
}
function reg_cash(controller,d_id){
	
		var msg = '';
		
			if ( $('#payer_nameCash').val() == '' ){
				msg = 'نام پرداخت کننده وارد نشده';
			}
			else if ( $('#payer_n_codeCash').val() == '' ){
						msg = 'شماره ملی پرداخت کننده وارد نشده';
			}
			if ( msg != '' ){
					$('#err_msg').html(msg);
					$('#bg').fadeIn(100,function(){
												$('#alerts').fadeIn(200); 
												 });
					
			}
			else {
				 
			//$('#bg').fadeIn(100);
			$('#wait').fadeIn(100);
		      $.post("index.php/decedent/bankFE2", { 
								d_id          : d_id,
								pay_type      : 2,
								acc_id        : 0,
								serial        : 0,
								f_num         : 0,
								amount        : $('#amountCash').val(),
								hamount       : $('#hamountCash').val(),
								payer_name    : $('#payer_nameCash').val(),
								payer_n_code  : $('#payer_n_codeCash').val(),
								controller    : controller
								
			   },
		 function(data){
			ctrlAct(d_id,controller+'/bankF');
			 });
		}
}
function fl1TombUnid(d_id){
		var msg = '';
			if ( $('#segment_id1').val() == '0' ){
				
				msg = ' قطعه انتخاب نشده';
			}
			else if ( $('#cham_row_id1').val() == '0' ){
				
				msg = ' ردیف / حجره انتخاب نشده';
			}
			else if ( $('#tombs_num_id1').val() == '0' ){
				
				msg = ' قبر انتخاب نشده';
			}
			if ( msg != '' ){
				alert(msg);				
			}
			else {
				 
			//$('#bg').fadeIn(100);
			$('#wait').fadeIn(100);
		      $.post("index.php/unidentified/fl1Tomb", { 
					tId          : d_id,
					p_type       : $('#p_type1').val(),
					segment_id   : $('#segment_id1').val(),
					cham_row_id  : $('#cham_row_id1').val(),
					tomb_num_id  : $('#tombs_num_id1').val(),
					fl_num       : $('#tomb_fl_num1').val(),
					t_des        : $('#t_des1').val(),
					t_id         : 0,
			   },
		 function(data){
			 $('#LayerDiv').html(data);
				  		 $('#wait').fadeOut(100,function(){ $('#LayerDiv').fadeIn(100);$('#closeLayer').fadeIn(100);});
			 });
		}
}
function regFreeFl2Unid(tomb_id,d_id){
		var msg = '';
			
				 
			//$('#bg').fadeIn(100);
			$('#wait').fadeIn(100);
		      $.post("index.php/unidentified/regFreeFl2", { 
					tomb_id   : tomb_id,
					tId       : d_id,
					
			   },
		 function(data){
			 $('#LayerDiv').html(data);
				  		 $('#wait').fadeOut(100,function(){ $('#LayerDiv').fadeIn(100);$('#closeLayer').fadeIn(100);});
			 });
		
}
function deleteTombUnid(d_id){
	
			
				 
			//$('#bg').fadeIn(100);
			$('#wait').fadeIn(100);
		      $.post("index.php/unidentified/tombDelete", { 
					id          : d_id,
					
			   },
		 function(data){
			 $('#LayerDiv').html(data);
				  		 $('#wait').fadeOut(100,function(){ $('#LayerDiv').fadeIn(100);$('#closeLayer').fadeIn(100);});
			 });
		
}
function deleteTombMut(d_id){
	
			
				 
			//$('#bg').fadeIn(100);
			$('#wait').fadeIn(100);
		      $.post("index.php/mutilation/tombDelete", { 
					id          : d_id,
					
			   },
		 function(data){
			 $('#LayerDiv').html(data);
				  		 $('#wait').fadeOut(100,function(){ $('#LayerDiv').fadeIn(100);$('#closeLayer').fadeIn(100);});
			 });
		
}
function editContract(id) {
	
		$('#bg').fadeIn(100);
		$('#wait').fadeIn(100);
		var content   = CKEDITOR.instances['contentText'].getData();
	 		var msg = '';
			if ( content == '' ){
				msg = 'قسمت اول قرارداد اشخاص حقیقی وارد نشده';
			}
			if ( msg != '' ){
					$('#err_msg').html(msg);
					$('#bg').fadeIn(100,function(){
												$('#alerts').fadeIn(200); 
												 });
					
			}
			else { 
	
		$.post("index.php/contract/contract", { 
			  		content  : content,
					id       : id,
										
			   },
		 function(data){
			 		
				    postMenus('contract');
					$('#LayerDiv').fadeOut(300);$('#closeLayer').fadeOut(100);$('#bg').fadeOut(100,function(){$('#LayerDiv').html('');});
			 });
											
									
	  
		}	  		
}
function deleteRes(id){
		
				 
			$('#wait').fadeIn(100);
		      $.post("index.php/reservation/deleteRes", { 
					id    : id,
			   },
		 function(data){
			  		$("body").removeClass("modal-open");
			 		$('.modal-backdrop').fadeOut(100);
			 		postMenus('reservation/list')
			 });
		
}
function searchCham(){
		
				 
			$('#bg').fadeIn(100);
			$('#wait').fadeIn(100);
		      $.post("index.php/reservation/searchCham", { 
					c_name    : $('#ch_name').val(),
			   },
		 function(data){
			 		$('#bg').fadeOut(100);
					$('#wait').fadeOut(100);
					$('#chamberLs').html(data)
			 });
		
}
function saleChamb(){
	var msg = '';
	var stat = true;
	if ( $('input[id=ch_id]:checked').val() ){
		stat = false;
	}
	if ( $('#name').val() == '' ){
				msg = ' نام وارد نشده';
	}
	
	else if ( $('#family').val() == '' ){
				msg = 'نام خانوادگی وارد نشده';
	}
	else if ( $('#n_code').val() == '' ){
				msg = 'شماره ملی وارد نشده';
	}
	else if ( $('#t_count').val() == '' ){
				msg = 'تعداد قبرها وارد نشده';
	}
	else if ( $('#chamSe').val() == '0' ){
				msg = 'حجره انتخاب نشده';
	}
	else if ( stat ){
				msg = 'حجره انتخاب نشده';
	}
	
	if ( msg != '' ){
					$('#err_msg').html(msg);
					$('#bg').fadeIn(100,function(){
												$('#alerts').fadeIn(200); 
												 });
					
			
	}
	else {
	$('#bg').fadeIn(100);
			$('#wait').fadeIn(100);
			 $.post("index.php/reservation/saleChamb", { 
								name        : $('#name').val(),
								family      : $('#family').val(),
								f_name      : $('#f_name').val(),
								n_code      : $('#n_code').val(),
								b_num       : $('#b_num').val(),
								b_location  : $('#b_location').val(),
								tel         : $('#tel').val(),
								mobil       : $('#mobil').val()*1,
								t_count     : $('#t_count').val(),
								zipcode     : $('#zipcode').val(),
								req_num     : $('#req_num').val(),
								req_date    : $('#req_date').val(),
								addr        : $('#addr').val(),	
								ch_id       : $('input[id=ch_id]:checked').val(),	
								
								
						 	  },
					 function(data){
						 	$('#err_msg').html('اطلاعات با موفقیت ثبت شد');
						$('#bg').fadeIn(100,function(){
												$('#alerts').fadeIn(200); 
												 });
					 postMenus('reservation/list');

					 });
			
	}
}
function reg_cheque(d_id,controller){
	
		var msg = '';
		
			if ( $('#branch').val() == '' ){
				msg = 'کد شعبه وارد نشده';
			}
			else if ( $('#c_num').val() == '' ){
						msg = 'شماره چک وارد نشده';
			}
			else if ( $('#account').val() == '' ){
						msg = 'شماره حساب وارد نشده';
			}
			else if ( $('#holder').val() == '' ){
						msg = 'نام صاحب وارد نشده';
			}
			else if ( $('#c_date').val() == '' ){
						msg = 'تاریخ چک وارد نشده';
			}
			else if ( $('#c_amount').val() == '' ){
						msg = 'مبلغ چک وارد نشده';
			}
			if ( msg != '' ){
					$('#err_msg').html(msg);
					$('#bg').fadeIn(100,function(){
												$('#alerts').fadeIn(200); 
												 });
					
			}
			else {
				 
			$('#wait').fadeIn(100);
		      $.post("index.php/"+controller+"/reg_cheque", { 
								d_id          : d_id,
								c_bank        : $('#c_bank').val(),
								branch        : $('#branch').val(),
								c_num         : $('#c_num').val(),
								account       : $('#account').val(),
								holder        : $('#holder').val(),
								c_date        : $('#c_date').val(),
								c_amount      : $('#c_amount').val(),
								
			   },
		 function(data){
			ctrlAct(d_id,controller+'/bankF');
			 });
		}
}
function edit_cheque(d_id,c_id,controller){
	
		var msg = '';
		
			if ( $('#branchE').val() == '' ){
				msg = 'کد شعبه وارد نشده';
			}
			else if ( $('#c_numE').val() == '' ){
						msg = 'شماره چک وارد نشده';
			}
			else if ( $('#accountE').val() == '' ){
						msg = 'شماره حساب وارد نشده';
			}
			else if ( $('#holderE').val() == '' ){
						msg = 'نام صاحب وارد نشده';
			}
			else if ( $('#c_dateE').val() == '' ){
						msg = 'تاریخ چک وارد نشده';
			}
			else if ( $('#c_amountE').val() == '' ){
						msg = 'مبلغ چک وارد نشده';
			}
			if ( msg != '' ){
					$('#err_msg').html(msg);
					$('#bg').fadeIn(100,function(){
												$('#alerts').fadeIn(200); 
												 });
					
			}
			else {
				 
			$('#wait').fadeIn(100);
		      $.post("index.php/"+controller+"/edit_cheque", { 
								c_id          : c_id,
								c_bank        : $('#c_bankE').val(),
								branch        : $('#branchE').val(),
								c_num         : $('#c_numE').val(),
								account       : $('#accountE').val(),
								holder        : $('#holderE').val(),
								c_date        : $('#c_dateE').val(),
								c_amount      : $('#c_amountE').val(),
								
			   },
		 function(data){
			ctrlAct(d_id,controller+'/bankF');
			 });
		}
}
function searchChamT(){
		
				 
			$('#bg').fadeIn(100);
			$('#wait').fadeIn(100);
		    $.post("index.php/tombs/searchCham", { 
					c_name    : $('#ch_name').val(),
			   },
		 	function(data){
			 		$('#bg').fadeOut(100);
					$('#wait').fadeOut(100);
					$('#chamberLs').html(data)
			});
		
}
function searchCheques(){

		//usage.length;
		
				 
			$('#wait').fadeIn(100);
		      $.post("index.php/reports/searchCheque", { 
					c_numStart         : $('#c_numStart').val(),
					c_numEnd           : $('#c_numEnd').val(),
					c_amountStart      : $('#c_amountStart').val(),
					c_amountEnd        : $('#c_amountEnd').val(),
					c_dateStart        : $('#c_dateStart').val(),
					c_dateEnd          : $('#c_dateEnd').val(),
	   				c_bank             : $('#c_bank').val(),
					regdateStart       : $('#regdateStart').val(),
					regdateEnd         : $('#regdateEnd').val(),
					account            : $('#account').val(),
					holder             : $('#holder').val(),
					cStatus            : $('#cStatus').val(),
					fish_type          : $('#fish_type').val(),
										
			   },
		 function(data){
			 
					 $('#searchResult').html(data);
					 $('#bg').fadeOut(100);
			  		 $('#wait').fadeOut(100);
			 });
											
									
	  
		
			
}
