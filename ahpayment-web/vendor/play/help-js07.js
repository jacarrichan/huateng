(function(A){var b,z,g;var L="";var B=0;var m=0,k=0;var x="&#x652F;&#x4ED8;&#x5B66;&#x5802;";var n="http://www.sutongpay.com";var C=0;var o=function(){if(A(window).height()+A(window).scrollTop()-49>boxArr.height+A("#J-BookCon").offset().top+49){A("#J-DowNav").removeClass("s_dovNavFixed");A("#J-DowNav").addClass("s_dovNavRela")}else{A("#J-DowNav").removeClass("s_dovNavRela");A("#J-DowNav").addClass("s_dovNavFixed")}};var N=function(){A("#J-Book").css({background:"url("+boxArr.bookBg+") no-repeat",height:boxArr.height+12});A("#J-BookCon").css({"margin-top":"2px",height:boxArr.height+"px"});A("#J-BookDowIcon").empty();if(boxArr.dowImg!==""){var P=boxArr.dowImg+"?rnd="+Math.random();A("<img />").attr("src",P).load(function(){A("#J-BookBoxMask").css({height:A("#J-BookCon").height()+A("#J-BookDowIcon").height()+22});G()}).appendTo("#J-BookDowIcon");A("#J-BookDowIcon").attr("seed","abc_cool_"+boxArr.seed+"_dowIconLiks")}else{A("#J-BookBoxMask").css({height:boxArr.height+32});G()}if(A(window).height()+A("#J-BookCon").offset().top<boxArr.height+A("#J-BookCon").offset().top+22){A("#J-DowNav").removeClass("s_dovNavRela");A("#J-DowNav").addClass("s_dovNavFixed")}if(A.browser.version!=="6.0"){A(window).bind("scroll",function(Q){o()});A(window).bind("resize",function(Q){o()})}if(bookArr.length<8){A("#J-DowCataPage").addClass("fn-hide");v(0,bookArr.length)}else{A("#J-DowCataPage").removeClass("fn-hide");s();v(0,8);A("#J-DowCataPageLeft").bind("click",function(){if(C>0){C--;s();var Q=C*8+8;if(Q>bookArr.length){Q=bookArr.length}v(C*8,Q);c()}});A("#J-DowCataPageRig").bind("click",function(){if(C<Math.ceil(bookArr.length/8)-1){C++;s();var Q=C*8+8;if(Q>bookArr.length){Q=bookArr.length}v(C*8,Q);c()}})}A("#J-DowCataTitel").html("&#x300A;"+boxArr.name+"&#x300B;");c();TweenMax.delayedCall(1,p)};var s=function(){if(C<=0){A("#J-DowCataPageLeft").removeClass("fn_bnt")}else{A("#J-DowCataPageLeft").addClass("fn_bnt")}if(C>=Math.ceil(bookArr.length/8)-1){A("#J-DowCataPageRig").removeClass("fn_bnt")}else{A("#J-DowCataPageRig").addClass("fn_bnt")}A("#J-DowCataPageTxt").html((C+1)+"/"+Math.ceil(bookArr.length/8))};var v=function(P,Q){A("#J-BackShelf").attr("seed","abc_cool_abibar_"+boxArr.seed+"_backShelf");A("#J-Catalog").attr("seed","abc_cool_abibar_"+boxArr.seed+"_ml");A("#J-DowNavLeftJt").attr("seed","abc_cool_abibar_"+boxArr.seed+"_DowNavLeftJt");A("#J-DowNavRigJt").attr("seed","abc_cool_abibar_"+boxArr.seed+"_DowNavRigJt");A("#J-Share").attr("seed","abc_cool_abibar_"+boxArr.seed+"_Share");A("#qqZ").attr("seed","abc_cool_share_"+boxArr.seed+"_qqZ");A("#sina").attr("seed","abc_cool_share_"+boxArr.seed+"_sina");A("#qq").attr("seed","abc_cool_share_"+boxArr.seed+"_qq");A("#renren").attr("seed","abc_cool_share_"+boxArr.seed+"_renren");A("#kaixing").attr("seed","abc_cool_share_"+boxArr.seed+"_kaixing");A("#J-DowCataContent ul").empty();for(var R=P;R<Q;R++){A("<li cid="+R+' ><a  style="color:#fff" class="fn_bnt" seed="abc_cool_ml_'+boxArr.seed+"_ml"+R+'">&#x7B2C;'+(R+1)+"&#x9875;:"+bookArr[R]["titel"]+"</a></li>").appendTo("#J-DowCataContent ul")}};A.BunClickfun=function(){u();A("#J-BookDowIcon").bind("click",function(U){if(boxArr.dowLiks[0]=="url"){window.open(boxArr.dowLiks[1])}else{if(boxArr.dowLiks[0]=="PopUpSwf"){r(boxArr.dowLiks[5],"domflash",boxArr.dowLiks[3],boxArr.dowLiks[4]);A("#J-flashbox").dialog({width:boxArr.dowLiks[3]+35,height:boxArr.dowLiks[4]+70,modal:true,draggable:false,resizable:false,title:boxArr.dowLiks[2],close:function(V,W){A(".ui-dialog-titlebar").css({display:""})}});A(".ui-dialog-titlebar").css({display:"none"})}}});A("#J-BackShelf a").bind("click",function(U){U.preventDefault();location.href="start"});A("#J-Catalog a").bind("click",function(U){U.preventDefault();A("#J-DowCatalog").slideDown(500,"easeInOutCirc");TweenMax.to(A("#J-DowCatalog"),0.5,{css:{top:"-354px",opacity:1},ease:Circ.easeInOut})});A("#J-DowCataClose").bind("click",function(U){U.preventDefault();A("#J-DowCatalog").slideUp(500,"easeInOutCirc");TweenMax.to(A("#J-DowCatalog"),0.5,{css:{top:0,opacity:0},ease:Circ.easeInOut})});A("#J-Share").bind("click",function(U){U.preventDefault();A("#J-DowShare").slideDown(500,"easeInOutCirc");TweenMax.to(A("#J-DowShare"),0.5,{css:{top:"-45px",opacity:1},ease:Circ.easeInOut})});A("#J-shareClose").bind("click",function(U){U.preventDefault();A("#J-DowShare").slideUp(500,"easeInOutCirc");TweenMax.to(A("#J-DowShare"),0.5,{css:{top:"0px",opacity:0},ease:Circ.easeInOut})});A("#J-DowShare li").bind("click",function(X){var U=A(this).attr("id");var Y=location.href;var V=document.title;var W="--"+boxArr.name;switch(U){case"qqZ":T(Y,boxArr.IconImg,W,V);break;case"sina":S(Y,boxArr.IconImg,W,V);break;case"qq":R(Y,boxArr.IconImg,W,V);break;case"renren":P(Y,boxArr.IconImg,W,V);break;case"kaixing":Q(Y,boxArr.IconImg,W,V);break;default:break}});function T(V,U,W,X){window.open("http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url="+encodeURIComponent(V)+"&fromid=qzone&title="+encodeURIComponent(X)+encodeURIComponent(W)+"&pics="+U+"&summary="+encodeURIComponent(W),"shareWindow","toolbar=0,status=0,resizable=1,width=510,height=420,top="+(screen.height-498)/2+",left="+(screen.width-605)/2)}function S(V,U,W,X){window.open("http://v.t.sina.com.cn/share/share.php?url="+encodeURIComponent(V)+"&fromid=sina&title="+encodeURIComponent(X)+encodeURIComponent(W)+"&pic="+U+"&content=utf-8","shareWindow","toolbar=0,status=0,resizable=1,width=510,height=420,top="+(screen.height-498)/2+",left="+(screen.width-605)/2)}function P(V,U,W,X){window.open("http://www.connect.renren.com/share/sharer?url="+encodeURIComponent(V)+"&fromid=renren&title="+encodeURIComponent(X)+encodeURIComponent(W),"shareWindow","toolbar=0,status=0,resizable=1,width=510,height=420,top="+(screen.height-498)/2+",left="+(screen.width-605)/2)}function R(V,U,W,X){window.open("http://v.t.qq.com/share/share.php?url="+encodeURIComponent(V)+"&fromid=qq&title="+encodeURIComponent(X)+encodeURIComponent(W)+"&pic="+U+"&summary="+encodeURIComponent(W),"shareWindow","toolbar=0,status=0,resizable=1,width=510,height=420,top="+(screen.height-498)/2+",left="+(screen.width-605)/2)}function Q(V,U,W,X){window.open("http://www.kaixin001.com/~repaste/repaste.php?rurl="+encodeURIComponent(V)+"&fromid=qq&rtitle="+encodeURIComponent(X)+encodeURIComponent(W),"shareWindow","toolbar=0,status=0,resizable=1,width=510,height=420,top="+(screen.height-498)/2+",left="+(screen.width-605)/2)}};var c=function(){A("#J-DowCataContent li a").addClass("fn_bnt");A("#J-DowCataContent li").bind("click",function(P){var Q=Number(A(this).attr("cid"));if(Q!==k){m=Q;M();I();A.LeftRigTween()}})};var u=function(){A("#J-DowNavLeftJt").addClass("fn_bnt");A("#J-DowNavRigJt").addClass("fn_bnt");if(m==0){A("#J-DowNavLeftJt").removeClass("fn_bnt")}else{if(m==Number(bookArr.length)-1){A("#J-DowNavRigJt").removeClass("fn_bnt")}}A("#J-DowNavLeftJt").bind("click",function(P){if(m>0){m--;M();I();A.LeftRigTween()}});A("#J-DowNavRigJt").bind("click",function(P){if(m<Number(bookArr.length)-1){m++;M();I();A.LeftRigTween()}})};var M=function(){A("#J-DowNavLeftJt").removeClass("fn_bnt");A("#J-DowNavRigJt").removeClass("fn_bnt");A("#J-DowNavLeftJt").unbind("click");A("#J-DowNavRigJt").unbind("click");A("#LeftFan"+m).unbind("click");A("#RigFan"+m).unbind("click");A("#J-DowCataContent li").unbind("click");A("#J-DowCataContent li a").removeClass("fn_bnt")};var I=function(){location.href="#page="+m};var e=function(){A("#LeftFan"+m).bind("click",function(P){if(m>0){m--;M();I();A.LeftRigTween()}});A("#RigFan"+m).bind("click",function(P){if(m<Number(bookArr.length)-1){m++;M();I();A.LeftRigTween()}else{if(m==Number(bookArr.length)-1){location.href="cool.htm"}}})};var G=function(){A('<div id="Page'+m+'" class="s_Single fn-left s_Single'+m+'"></div<').appendTo("#J-BookCon");A(".s_Single"+m).css({"background-image":"url("+bookArr[m]["bookImg"]+")",height:boxArr.height});A("#J-NavTitel").html("&#x300A;"+boxArr.name+"&#x300B;--&#x7B2C;"+(m+1)+"&#x9875;:"+bookArr[m]["titel"]);var R=bookArr[m];if(bookArr.length!==0){A("#Page"+m).append("<span id='LeftFan"+m+"' cid='"+m+"'class='bookBnt' style='float:left;bottom:5px;width:70px;height:40px;left:0px' seed='"+R.seedLeft+"'></span>");A("#Page"+m).append("<span id='RigFan"+m+"' cid='"+m+"' class='bookBnt' style='float:right;bottom:5px;width:70px;height:40px;right:5px' ></span>")}if(m==0){A("#LeftFan"+m).addClass("fn-hide")}else{if(m==Number(bookArr.length)-1){}}if(R.htmltxt!=""){var Q=R.htmltxt.length;for(var T=0;T<Q;T++){var V=R.htmltxt[T];A(".s_Single"+m).append("<div class='ibar-content' id='htmltxt"+T+"' style='color:#868686'>"+V.txt+"</div>");A(".s_Single"+m+" #htmltxt"+T).css({top:V.tTop+"px",left:V.tLeft+"px"})}}if(R.swfBox!==""){var U=R.swfBox.length;for(var T=0;T<U;T++){var S=R.swfBox[T];if(S.img1!==""){A("#Page"+m).append("<div class='ibar-content' id='BookSwf"+T+"' cid='"+T+"' style='cursor:pointer' seed='"+S.seed+"'><div id='swf"+T+"'></div><img src='"+S.img1+"'></img></div>");D("#Page"+m+" #BookSwf"+T,S,S.sw,S.sh)}else{A("#Page"+m).append("<div class='ibar-content' id='BookSwf"+T+"' cid='"+T+"' seed='"+S.seed+"'><div id='swf"+T+"'></div></div>");r(S.swf,"BookSwf"+T,S.sw,S.sh)}A("#Page"+m+" #BookSwf"+T).css({top:S.sTop+"px",left:S.sLeft+"px"})}}if(R.PopUp!==""){var P=R.PopUp.length;for(var T=0;T<P;T++){A("#Page"+m+" #"+R.PopUp[T][1]).bind("click",function(Z){Z.preventDefault();var ab=Number(A(this).attr("cid"));if(R.PopUp[ab][5]){var Y=A(this).attr("swf");var aa=R.PopUp[ab][0];var W=A(this).attr("sw");var X=A(this).attr("sh");r(Y,"domflash",W,X)}A("#"+R.PopUp[ab][0]).dialog({width:R.PopUp[ab][3],height:R.PopUp[ab][4],modal:true,draggable:false,resizable:false,title:R.PopUp[ab][2],close:function(ac,ad){A(".ui-dialog-titlebar").css({display:""})}});if(R.PopUp[ab][5]){A(".ui-dialog-titlebar").css({display:"none"})}a=R.PopUp[ab][0];y();A(".tab_nav li").unbind("mousemove");A(".tab_nav2 li").unbind("mousemove");A(".tab_nav li").bind("mousemove",function(ac){var ad=A(this).attr("cid");A(".tab_nav li").removeClass("tab_cur");A(this).addClass("tab_cur");A(".tab_list li").css({display:"none"});A("#tab"+ad).css({display:"inline-table"})});A(".tab_nav2 li").bind("mousemove",function(ac){var ad=A(this).attr("cid");A(".tab_nav2 li").removeClass("tab_cur2");A(this).addClass("tab_cur2");A("#J-banklistTb li").addClass("fn-hide");A("#J-XYK"+ad).removeClass("fn-hide")})})}}e()};var p=function(){A("#Left"+m).addClass("fn-hide");A("#Rig"+m).addClass("fn-hide");A("#Page"+m).removeClass("fn-hide")};A.LeftRigTween=function(){tobj=K();if(typeof(tobj.page)=="undefined"){m=0}else{m=Number(tobj.page)}if(m!==k){q()}};function q(){A("#Page"+k).remove();G();f()}function d(){A("#Left"+m+" .c_BookMask").css({opacity:"1"})}function t(){A("#Rig"+k).remove()}function J(){A("#Left"+k).remove()}function f(){k=m;p();u();c()}function r(R,T,P,Q){var S={};S.wmode="transparent";S.allowScriptAccess="always";S.allowfullscreen=true;swfobject.embedSWF("https://i.sutongpayobjects.com/e/"+R+".swf?rnd="+Math.random(),T,P,Q,"9.0.0","expressInstall.swf",null,S)}var F=0;function D(S,Q,P,R){A(S).bind("click",function(T){var U=A(this).attr("cid");F=U;r(Q.swf,"swf"+U,P,R)});A(S).bind("mouseover",function(T){var U=A(this).attr("cid");A("#BookSwf"+U+" img").attr("src",bookArr[m].swfBox[U].img2)});A(S).bind("mouseout",function(T){var U=A(this).attr("cid");A("#BookSwf"+U+" img").attr("src",bookArr[m].swfBox[U].img1)})}A.closeflash=function(){A("#BookSwf"+F).empty();A("#BookSwf"+F).append("<div id='swf"+F+"'></div><img src='"+bookArr[m].swfBox[F].img1+"'></img>")};
var top;
A.goToBook=function(){A("html,body").animate({scrollTop:A("#J-Bmain").offset().top},500);jq("#J-BookCon").empty();g=K();if(typeof(g.page)=="undefined"){m=k=0}else{m=k=Number(g.page)}N()};var K=function(){b=location.href;if(contains(b,"?")){}z=b.substring(b.indexOf("#")+1,b.length).split("&");g=new Object();for(i=0;j=z[i];i++){g[j.substring(0,j.indexOf("=")).toLowerCase()]=j.substring(j.indexOf("=")+1,j.length)}return g};var H=0;var h=0;var w="Bank-A";var a="J-KJZF2";var y=function(){h=0;H=0;E();l();A("#"+a+" .content-top ul li:eq("+H+")").addClass("tab-top-over");A("#"+a+" .content-top li").bind("click",function(Q){var R=Number(A(this).attr("id").replace("J-TopTab",""));var P=A(this).attr("cname");h=0;w=P;H=R;E();A("#"+a+" #J-banklist div").addClass("fn-hide");A("#"+a+" div:eq(1) #TK-"+w+"-tab"+H).removeClass("fn-hide");l();A("#"+a+" div:eq(1) #TK-"+w+"-tab"+H+" ul").addClass("fn-hide");A("#"+a+" div:eq(1) #TK-"+w+"-tab"+H+" #"+w+"-tab"+h).removeClass("fn-hide");A("#"+a+" .content-top li").removeClass("tab-top-over");A(this).addClass("tab-top-over")})};function O(){A("#"+a+" #J-TKpageNav .TK-leftJt").unbind("click");A("#"+a+" #J-TKpageNav .TK-rigJt").unbind("click")}function E(){O();if(A("#"+a+" #TK-"+w+"-tab"+H+" ul").length>1){A("#"+a+" div:eq(1) #J-TKpageNav").removeClass("fn-hide");l();A("#"+a+" #J-TKpageNav .TK-leftJt").bind("click",function(P){if(h>0){h--;A("#"+a+" div:eq(1) #TK-"+w+"-tab"+H+" ul").addClass("fn-hide");A("#"+a+" div:eq(1) #TK-"+w+"-tab"+H+" #"+w+"-tab"+h).removeClass("fn-hide");l()}});A("#"+a+" #J-TKpageNav .TK-rigJt").bind("click",function(P){if(h<A("#"+a+" #TK-"+w+"-tab"+H+" ul").length-1){h++;A("#"+a+" div:eq(1) #TK-"+w+"-tab"+H+" ul").addClass("fn-hide");A("#"+a+" div:eq(1) #TK-"+w+"-tab"+H+" #"+w+"-tab"+h).removeClass("fn-hide");l()}})}else{A("#"+a+" div:eq(1) #J-TKpageNav").addClass("fn-hide")}}function l(){if(h==0){A("#"+a+" div:eq(1) #J-TKpageNav .TK-leftJt").removeClass("fn_bnt")}else{A("#"+a+" div:eq(1) #J-TKpageNav .TK-leftJt").addClass("fn_bnt")}if(h>=A("#TK-"+w+"-tab"+H+" ul").length-1){A("#"+a+" div:eq(1) #J-TKpageNav .TK-rigJt").removeClass("fn_bnt")}else{A("#"+a+" div:eq(1) #J-TKpageNav .TK-rigJt").addClass("fn_bnt")}A("#"+a+" div:eq(1) #J-TKpageNav #J-TKDowTxt").text((h+1)+"/"+A("#"+a+" #TK-"+w+"-tab"+H+" ul").length)}A(document).ready(function(Q){jq(window).hashchange(function(){A.goToBook()});var P=location.href.split("#");if(P.length<=1){A.goToBook()}A.BunClickfun()})})(jQuery);