const quizData=[
{ 

   question: "Q1: What is HTML?",
   a:"HTML describes the structure of a webpage",
   b:"HTML is the standard markup language mainly used to create web pages",
   c:"HTML consists of a set of elements that helps the browser how to view the content",
   d:" All of the mentioned",
   ans:"ans4"

},
{ 

   question: "Q2: Which HTML tag is used to insert an image?",
   a:"<img url=”htmllogo.jpg” />",
   b:"<img alt=”htmllogo.jpg” />",
   c:"<img src=”htmllogo.jpg” />",
   d:"<img link=”htmllogo.jpg” />",
   ans:"ans3"

},
{ 

   question: "Q3: Which character is used to represent when a tag is closed in HTML?",
   a:"#",
   b:"!",
   c:"/",
   d:"-",
   ans:"ans3"

},
{ 

   question: "Q4: Which tag is used to create a numbered list in HTML?",
   a:" <ol>",
   b:"<ul>",
   c:"<li>",
   d:"<ll>",
   ans:"ans1"

},
{ 

   question: "Q5: Which tag is used to a paragraph in HTML?",
   a:" <par>",
   b:"<paragraph>",
   c:"<p>",
   d:"<para>",
   ans:"ans3"

},







];

const question= document.querySelector('.question');
const option1= document.querySelector('#option1');
const option2= document.querySelector('#option2');
const option3= document.querySelector('#option3');
const option4= document.querySelector('#option4');
const submit= document.querySelector('#submit');
const answers= document.querySelectorAll('.answer');
let questioncount=0;
let status=0;

const questionload = () =>
{
	questionlist=quizData[questioncount]
	question.innerText=questionlist.question;
	option1.innerText=questionlist.a;
	option2.innerText=questionlist.b;
	option3.innerText=questionlist.c;
	option4.innerText=questionlist.d;
   
	 
	 	

}

questionload();

const getcheckAnswer =() =>{
	let answer;

	answers.forEach((curAnsElem)=>{
		if(curAnsElem.checked){
			answer=curAnsElem.id;
		}
	});
     return answer
}

const deselect=()=>{

   answers.forEach((curAnsElem) => curAnsElem.checked=false);

}

const arr=[];
 const arrans=[];
  
 
 next.addEventListener('click', () =>{
   
      const checkedAnswer=getcheckAnswer();
      if(checkedAnswer==quizData[questioncount].ans)
      { arr[questioncount]=1;
        arrans[questioncount]=checkedAnswer;
        
      }
      else{
      	arr[questioncount]=0;
      	arrans[questioncount]=checkedAnswer;
      }
      questioncount++

      deselect();  


      let prog=questioncount/quizData.length;
      progress.innerText=prog;

      document.getElementById("bar").innerHTML = `
        <div ><progress value =${prog} max=1></progress></div>`;

      if(questioncount< (1)){
      	questionload();
         

      }

      else if(questioncount<(quizData.length-1)){
      	previous.classList.remove("prev");
      	questionload();



      }

      else if(questioncount=(quizData.length-1)){
      	
  submit.classList.remove("sub");
  next.classList.add("sub");
      	
      	questionload();

      }

 });

 previous.addEventListener('click', () =>{
 	questioncount--
   let prog=questioncount/quizData.length;
      progress.innerText=prog;
      document.getElementById("bar").innerHTML = `
        <div ><progress value =${prog} max=1></progress></div>`;


 	if (questioncount<(quizData.length)&&(questioncount>0)){
 		next.classList.remove("sub");
      submit.classList.add("sub");

      score.classList.add("score_div");
 	}

   else  {
      
      previous.classList.add("prev");
   }
    
 	questionload();
   deselect();

  

 });
 submit.addEventListener('click', () =>{

   const checkedAnswer=getcheckAnswer();
      if(checkedAnswer==quizData[questioncount].ans)
      { arr[questioncount]=1;
        arrans[questioncount]=checkedAnswer;
        
      }
      else{
         arr[questioncount]=0;
         arrans[questioncount]=checkedAnswer;
      }
      previous.classList.add("prev");
        score.classList.remove("score_div"); 
        re.classList.remove("try");
        questioncount++
        let prog=questioncount/quizData.length;
      progress.innerText=prog;

      document.getElementById("bar").innerHTML = `
        <div ><progress value =${prog} max=1></progress></div>`;

        points=arr[0]+arr[1]+arr[2]+arr[3]+arr[4];
        
        document.getElementById("score").innerHTML = `
        <div class="scorecard"><h3> your</h3> <h3>score</h3> <h4>  is</h4><h1> ${points}/${quizData.length}</h1></div>
      

        `;



          
        
        

 });
 