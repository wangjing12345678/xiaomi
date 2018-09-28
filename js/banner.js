
         function change(banner,dots,home,next,prev,second){
				let num=0;
	      		dots[0].classList.add("active");
	      		// banner[0].style.zIndex=10;
	      		banner[0].style.opacity=1;
	      		for(let i=0;i<dots.length;i++){
	      		     dots[i].onclick=function () {
	      				for(let j=0;j<banner.length;j++){
	      					banner[j].style.opacity=0;
	      					dots[j].classList.remove("active");
      
	      				}
	      				banner[i].style.opacity=1;
	      				dots[i].classList.add("active");
	      				num=i;
	      			}
	      		}
      
	      		let t=setInterval(move,second);
	      		function move(){
	      			num++;
	      			if(num==banner.length){
	      				num=0;
	      			}
	      			for(let j=0;j<banner.length;j++){
	      					banner[j].style.opacity=0;
	      					dots[j].classList.remove("active");
      
	      				}
	      			banner[num].style.opacity=1;
	      			dots[num].classList.add("active");
	      		}
	      		home.onmouseover=function(){
	      			clearInterval(t);
	      		}
	      		home.onmouseout=function(){
	      			t=setInterval(move,second);
	      		}
      
	      		next.onclick=function(){
	      			move();
	      		}
	      		function movel(){
	      			num--;
	      			if(num<0){
	      				num=banner.length-1;
	      			}
	      			for(let j=0;j<banner.length;j++){
	      					banner[j].style.opacity=0;
	      					dots[j].classList.remove("active");
      
	      				}
	      			banner[num].style.opacity=1;
	      			dots[num].classList.add("active");
	      		}
	      		prev.onclick=function(){
	      			movel();
	      		}
	      		  window.onblur=function(){
               	clearInterval(t);
               }
               window.onfocus=function() {
               	t=setInterval(move,second);
               }
			}


             // 内容
			 function click(dot,itemlist,controlright,controlleft,widths){
            let num1=0
            itemlist.style.left=0;
         	controlright.onclick=function(){
         		// if(num1<=dot.length-2){
         			 num1++
         			 if(num1>dot.length-1){
         			 	num1=dot.length-1
         			 }
         		     itemlist.style.left=-widths*num1+"px";
         		     for(let j=0;j<dot.length;j++){
         			    dot[j].classList.remove("hot1");
         		     }
         		    dot[num1].classList.add("hot1");

         		}
         		// }
         		controlleft.onclick=function(){
         		// if(num1>=1){
         			 num1--
         			 if(num1<0){
         			 	num1=0;
         			 }
         		     itemlist.style.left=-widths*num1+"px";
         		     for(let j=0;j<dot.length;j++){
         			    dot[j].classList.remove("hot1");
         		     }
         		    dot[num1].classList.add("hot1");

         		}
         		// }

         		for(let i=0;i<dot.length;i++){
         			dot[i].onclick=function(){
         				num1=i;
         				for(let j=0;j<dot.length;j++){
         					dot[j].classList.remove("hot1");
         				}
         				itemlist.style.left=-widths*num1+"px";
         				dot[num1].classList.add("hot1");
         			}
         		}

         		}