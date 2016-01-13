var aInput=document.getElementsByTagName('input'),
				My_bank_card=aInput[0],
				User_name=aInput[1],
				ID_number=aInput[2],
				Open_an_account=aInput[3], 
				OPen_city=aInput[4],
				Recharge=aInput[5],
				regNumber=/^\D/g,
				pop_text=document.getElementById("pop_text"),
				pop=document.getElementById("pop"),
				know=document.getElementById("know");
				
				
				My_bank_card.onblur=function(){
					
					if(this.value==""){
						pop.style.display="block";
						pop_text.innerHTML="银行卡卡号不能为空";
						this.focus();
					}else if(regNumber.test(this.value)){
						pop.style.display="block";
						pop_text.innerHTML=" 请输入数字";
					}else if(this.value.length>19){
						pop.style.display="block";
						pop_text.innerHTML="请输入正确卡号" ;
					}else if(this.value.length<16){
						pop.style.display="block";
						pop_text.innerHTML="请输入正确卡号";
					}else{
						pop.style.display="none"
					}
				}
				
				User_name.onblur=function(){
					var regUser=/[^\w]/g;
					if(User_name.value==""){
						pop.style.display="block";
						pop_text.innerHTML="姓名不能为空";
						this.focus();
					}else if(!regUser.test(this.value)){
						pop.style.display="block";
						pop_text.innerHTML="请输入汉字";
					}else if(this.value.length>5){
						pop.style.display="block";
						pop_text.innerHTML="请输入正确的姓名";
					}else if(this.value.length<2){
						pop.style.display="block";
						pop_text.innerHTML="请输入正确的姓名";
					}
				}
					
				ID_number.onblur=function(){
					var regNumber=/^\D/g;
					if(this.value==""){
						pop.style.display="block";
						pop_text.innerHTML="身份证号不能为空";
						this.focus();
					}else if(regNumber.test(this.value)){
						pop.style.display="block";
						pop_text.innerHTML=" 请输入正确的身份证号";
					}else if(this.value.length>19){
						pop.style.display="block";
						pop_text.innerHTML="请输入正确的身份证号" ;
					}else if(this.value.length<16){
						pop.style.display="block";
						pop_text.innerHTML="请输入正确的身份证号";
					}else{
						pop.style.display="none"
					}
				}	
				
				Open_an_account.onblur=function(){
					 City(Open_an_account);
				}
				OPen_city.onblur=function(){
					 City(OPen_city);
				}
				function City(city){
					var Chinese=/^[\u3400-\u9FFF]+$/g
					 if(!Chinese.test(city.value)){
						pop.style.display="block";
						pop_text.innerHTML="请输入汉字";
						this.focus();	
					}else if(city.value==""){
						pop.style.display="block";
						pop_text.innerHTML="开户省不能为空";
						this.focus();
					}
				}
				Recharge.onblur=function(){
					if(this.value==""){
						pop.style.display="block";
						pop_text.innerHTML="请输入充值金额";
						this.focus();
					}else if(regNumber.test(this.value)){
						pop.style.display="block";
						pop_text.innerHTML="请输入数字";
						this.focus();
					}
				}
				know.onclick=function(){
					pop.style.display="none"
				}
					