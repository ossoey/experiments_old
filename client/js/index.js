
 class HTMLComponent {
  #params;
  constructor(params = {tag:"p", innerHTML:"Ebanga est bonnnn", id:"p_id"}) {
              
    this.#params = {tag:"p", innerHTML:"Ebanga est bonnn", id:"p_id"};
    Object.assign(this.#params,params);
    this.$ = document.createElement(this.#params.tag);
    this.#propertiesAssignment();
  }

  #propertiesAssignment(){
    Object.entries(this.#params).forEach(([key, value]) => {
      if (key in this.$) {
        this.$[key] = value;
      } 

    });
  }

  _update(params = {tag:"p", innerHTML:"Ebanga est bon", id:"p_id"}) {
       Object.assign(this.#params,params);
       this.#propertiesAssignment();
  }

  outParams() {
    return Object.assign({},this.#params);
  }
  
}


class HTMLContainer {
  #params;
  
  constructor(params = {
                 container:{tag:"div", innerHTML:"", id:"container_id"},
                 children:[{tag:"p", innerHTML:"paragraph 1", id:"par1_id", class:"classmodel"},
                           {tag:"p", innerHTML:"paragraph 2", id:"par2_id", class:"classmodel"},   
                           {tag:"p", innerHTML:"paragraph 3", id:"par3_id", class:"classmodel"},
                           {tag:"p", innerHTML:"paragraph 4", id:"par4_id", class:"classmodel"},   
                
                ]}) {
              
    this.#params = {
      container:{tag:"div", innerHTML:"", id:"container_id"},
      children:[{tag:"p", innerHTML:"paragraph 1", id:"par1_id", class:"classmodel"},
                {tag:"p", innerHTML:"paragraph 2", id:"par2_id", class:"classmodel"},   
                {tag:"p", innerHTML:"paragraph 3", id:"par3_id", class:"classmodel"},
                {tag:"p", innerHTML:"paragraph 4", id:"par4_id", class:"classmodel"},   
     
      ]};

    Object.assign(this.#params,params);
    this.$ = (new HTMLComponent(this.#params.container)).$
    this.children = [];
    this.#buildChildren();
  }

  #buildChildren(){
    this.#params.children.forEach((elt)=>{
      let tagElt =  new HTMLComponent(elt);
      this.children.push(tagElt);
      this.$.appendChild(tagElt.$);
    })
  }

  _update(params = {
    container:{tag:"div", innerHTML:"", id:"container_id"},
    children:[{tag:"p", innerHTML:"paragraph 1", id:"par1_id", class:"classmodel"},
              {tag:"p", innerHTML:"paragraph 2", id:"par2_id", class:"classmodel"},   
              {tag:"p", innerHTML:"paragraph 3", id:"par3_id", class:"classmodel"},
              {tag:"p", innerHTML:"paragraph 4", id:"par4_id", class:"classmodel"},   
   
   ]}) {
       Object.assign(this.#params,params);
       this.#updateChildren();
  }

  #updateChildren(){
    this.#params.children.forEach((elt)=>{
      this.children._update(elt)
    })
  }

  outParams() {
    return Object.assign({},this.#params);
  }
  
}




document.addEventListener("DOMContentLoaded", function() {


  let comp = (new HTMLComponent( {tag:"p", innerHTML:"Ebanga est bonnnn", id:"p_id"}));
  let comp1 = new HTMLComponent( {tag:"p", innerHTML:"Ebanga est bonnnn1", id:"p_id1"});
  let comp2 = new HTMLComponent( {tag:"p", innerHTML:"Ebanga est bonnnn2", id:"p_id2"});
  document.body.appendChild(comp.$);
  document.body.appendChild(comp1.$);
  document.body.appendChild(comp2.$);
  comp2.$.innerHTML="locko"

  let container = new HTMLContainer({
    container:{tag:"nav", innerHTML:"", id:"container_id"},
    children:[{tag:"li", innerHTML:'<button id="segmentation-btn">Segmentation</button>', id:"par1_id", class:"classmodel"},
              {tag:"li", innerHTML:"paragraph 2", id:"par2_id", class:"classmodel"},   
              {tag:"li", innerHTML:"paragraph 3", id:"par3_id", class:"classmodel"},
              {tag:"li", innerHTML:"paragraph 4", id:"par4_id", class:"classmodel"},   
   
   ]});
  document.body.appendChild(container.$);

});

// Load the header HTML file and insert it into the "header" div element
// fetch('/client/header.html')
//   .then(response => response.text())
//   .then(html => {
//     document.getElementById('header').innerHTML = html;
//   });

// // Load the footer HTML file and insert it into the "footer" div element
// fetch('/client/footer.html')
//   .then(response => response.text())
//   .then(html => {
//     document.getElementById('footer').innerHTML = html;
//   });


//   fetch('/client/js/functiontest.js')
//   .then(response => response.text())
//   .then(scriptText => {
//     const script = document.createElement('script');
//     script.text = scriptText;
//     document.head.appendChild(script);

//     const result = multiplyByTwo(5);
//     console.log(result); // Output: 10
//   });



  
 
  // const segmentationBtn = document.getElementById('segmentation-btn');
  // segmentationBtn.addEventListener('click', function() {
 
  //   window.location.href = '/client/segmentation.html';

  // });

  // const vecmentationBtn = document.getElementById('vecmentation-btn');
  // vecmentationBtn.addEventListener('click', function() {
  //   window.location.href = 'vecmentation.html';
  // });

  // const matrixBtn = document.getElementById('matrix-btn');
  // matrixBtn.addEventListener('click', function() {
  //   window.location.href = 'matrix.html';
  // });

  // const indexationBtn = document.getElementById('indexation-btn');
  // indexationBtn.addEventListener('click', function() {
  //   window.location.href = 'indexation.html';
  // });

  // const randomBtn = document.getElementById('random-btn');
  // randomBtn.addEventListener('click', function() {
  //   window.location.href = 'random.html';
  // });
 

