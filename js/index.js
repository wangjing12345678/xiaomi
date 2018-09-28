        window.onload=function(){
        //上面购物车下拉列表
		let cart=document.querySelector(".topbar-cart");
		let a=document.querySelector(".topbar-cart a")
		let loading=document.querySelector(".loading");
		console.log(loading);
		console.log(a);
		console.log(cart);
		let cartmenu=document.querySelector(".cart-menu");
		console.log(cartmenu);
		cart.onmouseover=function () {
			a.style.background="#fff";
			a.style.color="#ff6700";
			// cartmenu.style.display="block";
			// loading.style.height="100px";
			cartmenu.style.height="100px";


			// cartmenu.style.boxshadow="0,0,10px,#ccc"
		}
		cart.onmouseout=function(){
			a.style.background="#424242";
			a.style.color="#b0b0b0";
			cartmenu.style.height="0";

		}




		// 搜索框
		let searchtext=document.querySelector(".search-text");
		console.log(searchtext);
		let searchbtn=document.querySelector(".search-btn");
		console.log(searchbtn);
		let hotword=document.querySelector(".search-hot-words");
		console.log(hotword);
		let keywordlist=document.querySelector(".keywordlist");
		console.log(keywordlist);
		searchtext.onfocus=function(){
			searchtext.style.borderColor="#ff6700";
			searchbtn.style.borderColor="#ff6700";
			hotword.style.display="none";
			keywordlist.style.display="block";
			keywordlist.style.borderColor="#ff6700";

		}
		searchtext.onblur=function(){
			searchtext.style.borderColor="#e0e0e0";
			searchbtn.style.borderColor="#e0e0e0";
			hotword.style.display="block";
			keywordlist.style.display="none";
			

		}



		// inputs.onfocus=function(){
		// 	inputs.style.borderColor="red";
		// }
		// inputs.onblur=function(){
		// 	inputs.style.borderColor="#333";
		// }





		// 导航栏下拉菜单 红米 小米
		let zong3=document.querySelectorAll(".zong3");
		let font=document.querySelectorAll(".font")
		console.log(font);
		console.log(zong3);
		let navmenu=document.querySelectorAll(".header-nav-menu");
		console.log(navmenu);
		for(let i=0;i<zong3.length;i++){
			// console.log(li[i]);
			//鼠标移入子元素出现
			zong3[i].onmouseover=function () {
				navmenu[i].style.borderColor="#e0e0e0";
				navmenu[i].style.height="227px";
				navmenu[i].style.boxShadow="0 3px 4px rgba(0,0,0,0.18)"
				//重要的一步就是如果没有这个循环的话 移入到下一个的时候不消失就会被盖住
                for(let j=0;j<navmenu.length;j++){
                	navmenu[j].style.display="none";
                }
                //出现下拉list
				navmenu[i].style.display="block";
				// navmenu[i].style.height="227px";
			}
			//鼠标移走。子元素消失
			zong3[i].onmouseout=function(){
				// navmenu[i].style.display="none";
				navmenu[i].style.borderColor="rgba(0,0,0,0)";
				navmenu[i].style.height="0";
				navmenu[i].style.boxShadow="0 0 0 0";
			}
		}
		for(let k=0;k<font.length;k++){
			font[k].onmouseover=function(){
				font[k].style.color="#ff6700";
			}
			font[k].onmouseout=function(){
				font[k].style.color="#333";
			}
		}




        // 下面家电部分选项卡
		let li=document.querySelectorAll(".tab-list li");
		// console.log(li);
		let list=document.querySelectorAll(".rowright");
		console.log(list);
		for(let i=0;i<li.length;i++){
			// console.log(li[i]);
			//鼠标移入子元素出现
			li[i].onmouseover=function () {
				//重要的一步就是如果没有这个循环的话 移入到下一个的时候不消失就会被盖住
                for(let j=0;j<list.length;j++){
                	li[j].style.borderColor="#f5f5f5";
                	li[j].style.color="#424242";
                	list[j].style.display="none";
                }
                //出现下拉list
                li[i].style.color="#ff6700";
                li[i].style.borderColor="#ff6700";
				        list[i].style.display="block";
			}
			//鼠标移走。子元素不消失
			li[i].onmouseout=function(){
				list[i].style.display="block";
			}
		}
		let bricklist=document.querySelectorAll(".zong2");
		console.log(bricklist);
		let  wrapper=document.querySelectorAll(".review-wrapper");
		console.log(wrapper);
		for(let i=0;i<bricklist.length;i++){
			bricklist[i].onmouseover=function(){
				// for(let j=0;j<bricklist.length;j++){
    //             	wrapper[j].style.display="none";
    //             }
                 // wrapper[i].style.display="block";
                 wrapper[i].style.height="76px";
		      }
		      bricklist[i].onmouseout=function(){
		      	// wrapper[i].style.display="none"; 
		      	wrapper[i].style.height="0";
		      	// wrapper[i].style.display="none";
		      }

		}
		




        // 导航栏左边
        let site=document.querySelectorAll(".zong");
        console.log(site);
        let children=document.querySelectorAll(".children");
        console.log(children);
         let num=0;
        for(let i=0;i<site.length;i++){
        	site[i].onmouseover=function(){
        		for(let j=0;j<children.length;j++){
        			children[j].style.display="none";
        		}
        		site[i].style.background="#ff6700";
        		children[i].style.display="block";
        		children[i].style.boxShadow="0 8px 16px rgba(0,0,0,0.18)";
        	}
        	site[i].onmouseout=function(){
        		site[i].style.background="rgba(0,0,0,0)";
				children[i].style.display="none";
			}
        }


         // 上面大banner图
         let dots=document.querySelectorAll(".ui-paper-link");
         console.log(dots);
         let banner=document.querySelectorAll(".home-hero-slider>a>img");
         console.log(banner);
         let home=document.querySelector(".home-hero-slider")
         console.log(home);
         let prev=document.querySelector(".ui-prev");
         console.log(prev);
         let next=document.querySelector(".ui-next");
         console.log(next);
         change(banner,dots,home,next,prev,3000);
        
         // 小米闪购左右轮播

      
         let itemlist=document.querySelector(".content-list>.content-item:nth-child(1) .item-list");
         console.log(itemlist);
         let dot=document.querySelectorAll(".content-list>.content-item:nth-child(1) .dot");
         console.log(dot);
         let controlleft=document.querySelector(".content-list>.content-item:nth-child(1) .xm-controlleft");
         console.log(controlleft);
         let controlright=document.querySelector(".content-list>.content-item:nth-child(1) .xm-controlright");
         console.log(controlright);
         let carousel=document.querySelector(".xm-carousel-wrapper");
         console.log(carousel);
         let widths=parseInt(getComputedStyle(carousel,null).width);
         console.log(widths);
         
         

         click(dot,itemlist,controlright,controlleft,widths);

        


         let itemlist1=document.querySelector(".content-list>.content-item:nth-child(2) .item-list");
         console.log(itemlist1);
         let dot1=document.querySelectorAll(".content-list>.content-item:nth-child(2) .dot");
         console.log(dot1);
         let controlleft1=document.querySelector(".content-list>.content-item:nth-child(2) .xm-controlleft");
         console.log(controlleft1);
         let controlright1=document.querySelector(".content-list>.content-item:nth-child(2) .xm-controlright");
         console.log(controlright1);
         click(dot1,itemlist1,controlright1,controlleft1,widths);

         let itemlist2=document.querySelector(".content-list>.content-item:nth-child(3) .item-list");
         console.log(itemlist2);
         let dot2=document.querySelectorAll(".content-list>.content-item:nth-child(3) .dot");
         console.log(dot2);
         let controlleft2=document.querySelector(".content-list>.content-item:nth-child(3) .xm-controlleft");
         console.log(controlleft2);
         let controlright2=document.querySelector(".content-list>.content-item:nth-child(3) .xm-controlright");
         console.log(controlright2);
         click(dot2,itemlist2,controlright2,controlleft2,widths);

         let itemlist3=document.querySelector(".content-list>.content-item:nth-child(4) .item-list");
         console.log(itemlist3);
         let dot3=document.querySelectorAll(".content-list>.content-item:nth-child(4) .dot");
         console.log(dot3);
         let controlleft3=document.querySelector(".content-list>.content-item:nth-child(4) .xm-controlleft");
         console.log(controlleft3);
         let controlright3=document.querySelector(".content-list>.content-item:nth-child(4) .xm-controlright");
         console.log(controlright3);
         click(dot3,itemlist3,controlright3,controlleft3,widths);



           // 小米闪购右面点击
       let purchase=document.querySelector(".xm-flashPurchase-list");
       console.log(purchase);
       let lefti=document.querySelector(".more>div:nth-child(1) i");
       console.log(lefti);
       let righti=document.querySelector(".more>div:nth-child(2) i");
       console.log(righti);
       let left=document.querySelector(".more>div:nth-child(1)");
       console.log(left);
       let more=document.querySelector(".more>div:nth-child(2)");
       console.log(more);
       let xmwrapper=document.querySelector(".xm-wrapper");
       console.log(xmwrapper);
       let widths2=parseInt(getComputedStyle(xmwrapper,null).width);
       console.log(widths2);
       let num2=0;
       purchase.style.left=0;
        lefti.style.color="#e0e0e0";
         righti.style.color="#000";


       more.onclick=function(){
           num2++;
       	   if(num2>1){
       	   	num2=1;
       	   }
       	   
       	   purchase.style.left=-widths2*num2+"px";
           lefti.style.color="#000";
           righti.style.color="#e0e0e0";
          

       }
        left.onclick=function(){
           num2--;
       	   if(num2<0){
       	   	num2=0;
       	   }
       	   
       	   purchase.style.left=-widths2*num2+"px";
       	   lefti.style.color="#e0e0e0";
           righti.style.color="#000";

       }
       // if(num2==1){
       //    lefti.style.color="#b0b0b0";
       //    righti.style.color="#e0e0e0";
       // }
       // if(num2==0){
       // 	  lefti.style.color="#e0e0e0";
       //    righti.style.color="#b0b0b0";
       // }

       

       //滚动条
       let top=document.querySelector(".top");
       console.log(top);
       let bodytop;
       console.log(bodytop);
       window.onscroll=function(){
        bodytop=document.body.scrollTop||document.documentElement.scrollTop;
            if(bodytop<2200){
              top.style.display="none";
            }
            if(bodytop>2200){
              top.style.display="block";
            }
       }
       top.onclick=function () {
      // let res=document.body.scrollTop||document.documentElement.scrollTop;
        animate(document.body,{scrollTop:0});
        animate(document.documentElement,{scrollTop:0});

    }


}

        



      
