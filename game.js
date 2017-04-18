var rightIntervalW;
var rightIntervalB;
var rightIntervalG;
var rightIntervalY;
var downIntervalW;
var downIntervalB;
var downIntervalG;
var downIntervalY;
var leftIntervalW;
var leftIntervalB;
var leftIntervalG;
var leftIntervalY;
var upIntervalW;
var upIntervalB;
var upIntervalG;
var upIntervalY;
var lapsW;
var lapsG;
var lapsB;
var lapsY;
var lapNum;
var possition;
var winningPos={'horse1':'0','horse2':'0','horse3':'0','horse4':'0'};
var currentAmount;
var betAmount;


function startButton(){
	
	lapNum =parseInt(prompt("Enter Number Of Laps", "1"));
	lapsW = 0;
	lapsB = 0;
	lapsG = 0;
	lapsY = 0;
	
	possition = 0;
	
	
	var speedW=  Math.random() * 900 + 100;
	var speedB=  Math.random() * 900 + 100;
	var speedG=  Math.random() * 900 + 100;
	var speedY=  Math.random() * 900 + 100;
	rightIntervalW = setInterval(runRightW, speedW);
	rightIntervalB = setInterval(runRightB, speedB);
	rightIntervalG = setInterval(runRightG, speedG);
	rightIntervalY = setInterval(runRightY, speedY);
	
	runRightW();
	runRightB();
	runRightG();
	runRightY();
	
	document.getElementById("results").rows[1].cells[0].innerHTML="";
	document.getElementById("results").rows[2].cells[0].innerHTML="";
	document.getElementById("results").rows[3].cells[0].innerHTML="";
	document.getElementById("results").rows[4].cells[0].innerHTML="";
	
	document.getElementById("start").removeEventListener('click', startButton);
	disableText();
	betAmount = document.getElementById('amount').value;
	
	
	
	//alert("hello");
	
}
function myLoadFunction(){
	var element = document.getElementById('start');
	element.addEventListener ('click', startButton);
	
}
function runRightW(){
	
	var element = document.getElementById("horse1");
	var positionLeft = element.offsetLeft;
	element.style.left = positionLeft +50 + 'px';
	element.className= "horse runRight";
	if (positionLeft > 1050)
		
	{
		var speedW=  Math.random() * 900 + 100;
		downIntervalW = setInterval(runDownW, speedW);
		clearInterval(rightIntervalW);
	}
	if (positionLeft > 400 && positionLeft < 450 ){
		
		lapsW++;
		
		if (lapsW > lapNum ){
			
			clearInterval(rightIntervalW);
			element.className= "horse standRight";
			//alert("Game Over");
			possition++;
			document.getElementById("results").rows[1].cells[0].innerHTML=getPossitionStr(possition);
			winningPos['horse1']=possition;
			betting();
			
			
		}
	}
	
}
function runRightB(){
	
	var element = document.getElementById("horse2");
	var positionLeft = element.offsetLeft;
	element.style.left = positionLeft +50 + 'px';
	element.className= "horse runRight";
	if (positionLeft > 1000)
		
	{
		var speedB=  Math.random() * 900 + 100;
		downIntervalB = setInterval(runDownB, speedB);
		clearInterval(rightIntervalB);
	}
	if (positionLeft > 400 && positionLeft < 450 ){
		
		lapsB++;
		
		if (lapsB > lapNum ){
			
			clearInterval(rightIntervalB);
			element.className= "horse standRight";
			//alert("Game Over");
			possition++;
			document.getElementById("results").rows[2].cells[0].innerHTML=getPossitionStr(possition);
			winningPos['horse2']=possition;
			betting();
			
		}
	}
	
}
function runRightG(){
	
	var element = document.getElementById("horse3");
	var positionLeft = element.offsetLeft;
	element.style.left = positionLeft +50 + 'px';
	element.className= "horse runRight";
	if (positionLeft > 950)
		
	{
		var speedG=  Math.random() * 900 + 100;
		downIntervalG = setInterval(runDownG, speedG);
		clearInterval(rightIntervalG);
	}
	if (positionLeft > 400 && positionLeft < 450 ){
		
		lapsG++;
		
		if (lapsG > lapNum ){
			
			clearInterval(rightIntervalG);
			element.className= "horse standRight";
			//alert("Game Over");
			possition++;
			document.getElementById("results").rows[3].cells[0].innerHTML=getPossitionStr(possition);
			winningPos['horse3']=possition;
			betting();
			
		}
	}
}
function runRightY(){
	
	var element = document.getElementById("horse4");
	var positionLeft = element.offsetLeft;
	element.style.left = positionLeft +50 + 'px';
	element.className= "horse runRight";
	if (positionLeft >900)
		
	{
		var speedY=  Math.random() * 900 + 100;
		downIntervalY = setInterval(runDownY, speedY);
		clearInterval(rightIntervalY);
	}
	if (positionLeft > 400 && positionLeft < 450 ){
		
		lapsY++;
		
		if (lapsY > lapNum ){
			
			clearInterval(rightIntervalY);
			element.className= "horse standRight";
			//alert("Game Over");
			possition++;
			document.getElementById("results").rows[4].cells[0].innerHTML=getPossitionStr(possition);
			winningPos['horse4']=possition;
			betting();
			
		}
	}
	
}
//jhjhfvthrsreysvbuhkjljhgfdxszgfhjkl;jhgfdsaedfghjkl;jhgfdsfghjkl;kjhgfdsdfghjklhgfds
function runDownW(){
	
	var element = document.getElementById("horse1");
	var positionTop = element.offsetTop;
	element.style.top = positionTop +50 + 'px';
	element.className= "horse runDown";
	if (positionTop > 430)
		
	{
		var speedW=  Math.random() * 900 + 100;
		leftIntervalW = setInterval(runLeftW, speedW);
		clearInterval(downIntervalW);
	}
	
}
function runDownB(){
	
	var element = document.getElementById("horse2");
	var positionTop = element.offsetTop;
	element.style.top = positionTop +50 + 'px';
	element.className= "horse runDown";
	if (positionTop > 400)
		
	{
		var speedB=  Math.random() * 900 + 100;
		leftIntervalB = setInterval(runLeftB, speedB);
		clearInterval(downIntervalB);
	}
	
}
function runDownG(){
	
	var element = document.getElementById("horse3");
	var positionTop = element.offsetTop;
	element.style.top = positionTop +50 + 'px';
	element.className= "horse runDown";
	if (positionTop > 350)
		
	{
		var speedG=  Math.random() * 900 + 100;
		leftIntervalG = setInterval(runLeftG, speedG);
		clearInterval(downIntervalG);
	}
	
}
function runDownY(){
	
	var element = document.getElementById("horse4");
	var positionTop = element.offsetTop;
	element.style.top = positionTop +50 + 'px';
	element.className= "horse runDown";
	if (positionTop > 340)
		
	{
		var speedY=  Math.random() * 900 + 100;
		leftIntervalY = setInterval(runLeftY, speedY);
		clearInterval(downIntervalY);
	}
	
}
//POIUYTRYUIKOIUYFRDFGHUJIOIUYFRDSGHJUIOPIUYTRESWEDFIJKOIUYTFRDERGFHJUKLOJUHYGTFDFSFGHJKIJUHYGFDSGHJKLJ

function runLeftW(){
	
	var element = document.getElementById("horse1");
	var positionLeft = element.offsetLeft;
	element.style.left = positionLeft -50 + 'px';
	element.className= "horse runLeft";
	if (positionLeft < 150)
		
	{
		var speedW=  Math.random() * 900 + 100;
		upIntervalW = setInterval(runUpW, speedW);
		clearInterval(leftIntervalW);
	}
	
}
function runLeftB(){
	
	var element = document.getElementById("horse2");
	var positionLeft = element.offsetLeft;
	element.style.left = positionLeft -50 + 'px';
	element.className= "horse runLeft";
	if (positionLeft < 100)
		
	{
		var speedB=  Math.random() * 900 + 100;
		upIntervalB = setInterval(runUpB, speedB);
		clearInterval(leftIntervalB);
	}
	
}
function runLeftG(){
	
	var element = document.getElementById("horse3");
	var positionLeft = element.offsetLeft;
	element.style.left = positionLeft -50 + 'px';
	element.className= "horse runLeft";
	if (positionLeft < 90)
		
	{
		var speedG=  Math.random() * 900 + 100;
		upIntervalG = setInterval(runUpG, speedG);
		clearInterval(leftIntervalG);
	}
	
}
function runLeftY(){
	
	var element = document.getElementById("horse4");
	var positionLeft = element.offsetLeft;
	element.style.left = positionLeft -50 + 'px';
	element.className= "horse runLeft";
	if (positionLeft < 80)
		
	{
		var speedY=  Math.random() * 900 + 100;
		upIntervalY = setInterval(runUpY, speedY);
		clearInterval(leftIntervalY);
	}
    }
//jhgdgfhjkljhjkl;kjkhgjdhfsxcjgkhjlhkgfhdgjfshdgfgjkhjl;lyrkdtjgkulh;j'lh;giltsjhd
	function runUpW(){
	
	var element = document.getElementById("horse1");
	var positionTop = element.offsetTop;
	element.style.top = positionTop -50 + 'px';
	element.className= "horse runUp";
	if (positionTop <150)
		
	{
		var speedW=  Math.random() * 900 + 100;
		rightIntervalW = setInterval(runRightW, speedW);
		clearInterval(upIntervalW);
	}
	
}
function runUpB(){
	
	var element = document.getElementById("horse2");
	var positionTop = element.offsetTop;
	element.style.top = positionTop -50 + 'px';
	element.className= "horse runUp";
	if (positionTop < 100)
		
	{
		var speedB=  Math.random() * 900 + 100;
		rightIntervalB = setInterval(runRightB, speedB);
		clearInterval(upIntervalB);
	}
	
}
function runUpG(){
	
	var element = document.getElementById("horse3");
	var positionTop = element.offsetTop;
	element.style.top = positionTop -50 + 'px';
	element.className= "horse runUp";
	if (positionTop < 80)
		
	{
		var speedG=  Math.random() * 900 + 100;
		rightIntervalG = setInterval(runRightG, speedG);
		clearInterval(upIntervalG);
	}
	
}
function runUpY(){
	
	var element = document.getElementById("horse4");
	var positionTop = element.offsetTop;
	element.style.top = positionTop -50 + 'px';
	element.className= "horse runUp";
	if (positionTop < 60)
		
	{
		var speedY=  Math.random() * 900 + 100;
		rightIntervalY = setInterval(runRightY, speedY);
		clearInterval(upIntervalY);
	}
	
}
function getPossitionStr(val){
	
	var pos;
	
	switch (val) {
    case 1:
        pos = "1st";
        break;
    case 2:
        pos = "2nd";
        break;
    case 3:
        pos = "3rd";
        break;
	case 4:
        pos = "4th";
	break; }
	
	return pos;
	
	
}
function betting()
{
	var element = document.getElementById('funds');
	var funds = parseInt(element.innerHTML);
	var currentAmount = document.getElementById('funds').innerHTML;
	
	
	
	var horseWon = document.getElementById('bethorse').value;	
	alert("bet"+betAmount+horseWon);
		if (winningPos[horseWon] == 1)
	{
		alert("WON");
		
		currentAmount = parseInt(currentAmount) + parseInt(betAmount);
		document.getElementById('funds').innerHTML = currentAmount;
		winningPos[horseWon] = 5;
		
	}
	
	else 
	{
		alert("lost");
		currentAmount = parseInt(currentAmount) - parseInt(betAmount);
		document.getElementById('funds').innerHTML = currentAmount;
		winningPos[horseWon] = 5;
		
	}
	
	betAmount = 0;
	
	alert("OKAY" + currentAmount + "  " + betAmount + "  " + horseWon); 
	var amount = document.getElementById('amount');
	var loan = parseInt(amount.value); 
	
	
	if (possition==4){
		
	var element = document.getElementById('start');
	element.addEventListener ('click', startButton);
	enableText();
	
	alert("finish");
	}
}
	
	function disableText() 
{
    document.getElementById("amount").disabled = true;
	document.getElementById("bethorse").disabled = true;
}

function enableText() 
{
	document.getElementById("amount").disabled = false;
	document.getElementById("bethorse").disabled = false;
}
	
	



document.addEventListener('DOMContentLoaded', myLoadFunction);