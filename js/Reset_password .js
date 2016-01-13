var aInput=document.getElementsByTagName('input'),
			New_password=aInput[0],
			Reset_password=aInput[1],
			pop_text=document.getElementById("pop_text"),
			pop=document.getElementById("pop"),
			know=document.getElementById("know");
			
			New_password.onblur=function(){
				var regNumber=/[^\w]/g ;
				if(regNumber.test(this.value)){
					pop.style.display="block"
					pop_text.innerHTML="请输入字母数字下划线"
				}else if(this.value==""){
					pop.style.display="block"
					pop_text.innerHTML="内容不能为空"
				}else if(this.value.length<6){
					pop.style.display="block"
					pop_text.innerHTML="密码长度不能小于六位"
				}else{
					pop.style.display="none";
				}
			}
			Reset_password.onblur= function()
		    {
		        if(this.value!=New_password.value){
		        	pop.style.display="block"
		            pop_text.innerHTML='密码不一致，请重新输入';
		        }else{
		            pop.style.display="none";				
		        }
		    }
			know.onclick=function(){
				pop.style.display="none"
			}