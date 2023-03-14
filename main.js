function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true})
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/ScrUyYUwH/',modelReady)
}

function modelReady(){
    classifier.classify(gotResults)
}

        cat=document.getElementById("cat");
        dog=document.getElementById("dog");
        cow=document.getElementById("cow");
        lion=document.getElementById("lion");
        ear=document.getElementById("ear");


        document.getElementById("result_label").innerHTML=" I can hear - " + results[0].label;
        document.getElementById("result_label").style.color='rgb('+r+','+g+','+b+')'
        document.getElementById("result_confidence").innerHTML=" Accuracy - " + (results[0].confidence*100).toFixed(2)+"%";
        document.getElementById("result_confidence").style.color='rgb('+r+','+g+','+b+')'


        function gotResults(error,results){
            if (error) {
                console.error(error)
                
            } else {
                console.log(results)
        
               r=Math.round(Math.random()*255)+1;
               g=Math.round(Math.random()*255)+1;
               b=Math.round(Math.random()*255)+1;
            }



            if (results[0].label=='bark') {
               dog.src="dog.png"; 
            }
    
            else if(results[0].label=='mewing'){
              cat.src="cat.png";
    
            }
    
            else if(results[0].label=='roar'){
               lion.src="lion.webp" ;
            }
    
            else if(results[0].label=='mooing'){
              cow.src="cow.jpg"  ;
    
            }


        else{
            ear.src="ear.jpg"
        }
    
            
        }
    
