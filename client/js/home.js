
const homeIniModulesButtons = (homeObj)=>{

    // <li><a href="#"> <i class="fas fa-ellipsis-h"></i> &#32; Segment </a></li>
    // <li><a href="#"><i class="fas fa-bullseye"></i> &#32; Target</span> </a></li>
    // <li><a href="#">  <i class="fas fa-wave-square"></i> &#32; Function </li>
    // <li><a href="#"> <i class="fas fa-cube"></i> &#32;Single</a></li>
    // <li><a href="#"><i class="fas fa-cubes"></i>  &#32;List</a></li>
    // <li><a href="#"><i class="fas fa-table"></i>&#32;Output</a></li>

    homeObj.moduleButtomIcon = new HTMLComponent ( 
     {tag:"div", innerHTML:``, id:"moduleButtomIcon_id", classList:["fas", "fa-ellipsis-h"]})                 
     
     homeObj.moduleButtomtitletext = new HTMLComponent ( 
     {tag:"div", innerHTML:`Random`, id:"moduleButtomtitletext_id", classList:["moduleButtomtitletext"]})                 


     homeObj.moduleButtomtitle = new HTMLContainer ( 
     {
       container:{tag:"div", innerHTML:"", id:"footertextainer_id", classList:["footertextainer"]},
       children:[ homeObj.moduleButtomIcon, homeObj.moduleButtomtitletext ]});

  
    homeObj.moduleButtomimage = new HTMLComponent ( 
      {tag:"div", innerHTML:``, id:"moduleButtomimage_id", classList:["moduleButtomimage"]});                
   

     homeObj.moduleButtomImageFrame = new HTMLContainer ( 
        {
         container:{tag:"div", innerHTML:"", id:"moduleButtomImageFrame_id", classList:["moduleButtomImageFrame"]},
         children:[  homeObj.moduleButtomimage ]});


    homeObj.moduleButtomDescription = new HTMLComponent ( 
        {tag:"p", innerHTML:`Here's the module random that decribe the following function`, 
        id:"moduleButtomDescription_id", classList:["moduleButtomDescription"]});                
         
           

     homeObj.moduleButtomDescriptionFrame = new HTMLContainer ( 
        {
            container:{tag:"div", innerHTML:"", id:"moduleButtomDescriptionFrame_id", classList:["moduleButtomDescriptionFrame"]},
            children:[ homeObj.moduleButtomDescription ]});
         


     homeObj.moduleButtomFrame = new HTMLContainer ( 
     {
        container:{tag:"div", innerHTML:"", id:"moduleButtomFrame_id", classList:["moduleButtomFrame"]},
        children:[ homeObj.moduleButtomtitle,  homeObj.moduleButtomImageFrame, homeObj.moduleButtomDescriptionFrame   ]});


 }

 const homeEventsIni = (homeObj)=>{
    homeObj.moduleButtomFrame.$.addEventListener('click',()=>{
        document.querySelector('#main').innerHTML ="";
    })

 };


const homeIni = (homeObj)=>{
   
    homeIniModulesButtons(homeObj);
     document.querySelector('#main').appendChild(  homeObj.moduleButtomFrame.$);

     homeEventsIni(homeObj)
    
}

