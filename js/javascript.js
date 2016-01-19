var btn=document.getElementById("identifying_code"),		
		timer=null;
		Number=5;
		function time(){
	        Number=Number-1;
	      if(Number<=0){
			  window.clearInterval(ss);
			  btn.onclick=function(){
				  Number=5;
				  ss=setInterval(time,1000)
			  };
	      }
			btn.innerHTML = " ( " + Number + "秒 后 )";
	    }
	    btn.onclick=function(){
	         ss=setInterval(time,1000)
	    };
	    
	var aInput=document.getElementsByTagName('input'),
		Phone_number=aInput[0],
//		console.log(Phone_number.val());
		Submit2=aInput[2],
		pop_text=document.getElementById("pop_text"),
		pop=document.getElementById("pop"),
		know=document.getElementById("know"),
		model_bg=document.getElementById("model_bg");
		
		Phone_number.onblur=function(){
				var regNumber=/^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;
				 if(this.value==""){
					pop.style.display="block";
					pop_text.innerHTML="内容不能为空";
				}else if(!regNumber.test(this.value)){
					pop.style.display="block";
					pop_text.innerHTML="请输入正确的手机号";
				}
				else{
					pop.style.display="none";
				}
			};
		
		function Submit(){
			if(Phone_number.value==""||Phone_number.value==null){
				pop_text.innerHTML="请输入手机号";
				pop.style.display="block";
				return false;
			}
		}
		
		know.onclick=function(){
			pop.style.display="none";
		};




















