//gallery05/java01 
	/*
		function gallery(img){
			document.getElementById('movie').src=img;
			//document.getElementById('movie').style.border='3px solid #F00';//style도 바꾸기그중에서 border
			//document.getElementsByClassName('title')[0].style.border='3px solid #F00';//calss는 여러군데 쓰이므로 's'추가해서 getElementsByClassName로 class들을 다가주고오니까 배열을씀 첫번째[0] 가주고와라~
			//document.getElementsByClassName('title')[0].innerHTML='HTML';
			// innerHTML안에 html글짜로바꿔서 찍어내라~~~뜻/ li에 글씨가 같다면 이걸로~첫번째것(배열)가주고 오기
		}
		
	*/

//gallery 05 06/java02  image slide
/*
		function gallery(img,txt){
		document.getElementById('movie2').src=img;
		document.getElementsByClassName('title')[0].innerHTML=txt; 	//서로 li에 다른 문자 나오게하기
		}
			*/
/*이미지슬라이드*/
		var photos=new Array()
		var which=0

		photos[0]="./img/g01.jpg"
		photos[1]="./img/g02.jpg"
		photos[2]="./img/g03.jpg"
		photos[3]="./img/g04.jpg"
		photos[4]="./img/g05.jpg"
		photos[5]="./img/g06.jpg"
		photos[6]="./img/g07.jpg"
		
		function backward(){ //이전
			if (which>0){
				which--
			} else {
				which=photos.length-1;//0>0일떄 계속 0에서 헛바퀴돌지말고 6번그림으로 돌아가라
			}
			document.getElementById('movie2').src=photos[which];
		}

		function forward(){ //다음
			if (which<photos.length-1){//photos.length 배열의갯수7에서 -1뺴기
				which++;
			}else{
				which=0;
			}	
			document.getElementById('movie2').src=photos[which];
		}

		
/*gallery07/ image slide
var p_left= 0; //밖으로 빼놓으면 한번갔다온 값을 기억함 

function pNext(){
	if (p_left>-950){
			p_left= p_left-190;
		} else{
		p_left=0;
		}
		document.getElementById('pList').style.marginLeft= p_left+'px';//숫자랑 문자 더하기안되어서 그냥 190px됨/function말고 한줄 직접실행은 HTML 순서뒤에오면 놓으면 됨
		var p_left= 0; //밖으로 빼놓으면 한번갔다온 값을 기억함 
}
function pPrev(){
	if (p_left<0){
			p_left= p_left+190;
		} else{
		p_left=-950;
		}
		document.getElementById('pList').style.marginLeft= p_left+'px';//숫자랑 문자 더하기안되어서 그냥 190px됨/function말고 한줄 직접실행은 HTML 순서뒤에오면 놓으면 됨
}
*/


//gallery07 image slide
var p_left = 0;
function pNext() {
	if(p_left > -950){
		p_left = p_left - 190;
	} else {
		p_left = 0;
	}
	document.getElementById('pList').style.marginLeft=p_left+'px';
}

function pPrev() {
	if(p_left < 0){
		p_left = p_left + 190;
	} else {
		p_left = -950;
	}
	document.getElementById('pList').style.marginLeft=p_left+'px';
}