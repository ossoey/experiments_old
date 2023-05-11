
 class HTMLComponent {
  #params;
  constructor(params = {tag:"p", innerHTML:"Ebanga est bonnnn", id:"p_id", classList:["cls1", "cls2", "cls3"]}) {
              
    this.#params = {tag:"p", innerHTML:"Ebanga est bon", id:"p_id", classList:["cls1", "cls2", "cls3"]};
    Object.assign(this.#params,params);
    this.$ = document.createElement(this.#params.tag);
    this.#propertiesAssignment();
  }

  #propertiesAssignment(){
    Object.entries(this.#params).forEach(([key, value]) => {
      if (key in this.$) {
        if (key === "classList" ) {
          value.forEach((elt)=>{              
            this.$[key].add(elt);
          })
        }
        else   this.$[key] = value;
      } 
    });
  }

  _update(params = {tag:"p", innerHTML:"", id:"p_id", classList:["cls1", "cls2", "cls3"]}) {
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
                 children:[new HTMLComponent({tag:"p", innerHTML:"paragraph 1", id:"par1_id", classList:["cls1"]}),
                           new HTMLComponent({tag:"p", innerHTML:"paragraph 2", id:"par2_id", classList:["cls1"]}),   
                           new HTMLComponent({tag:"p", innerHTML:"paragraph 3", id:"par3_id", classList:["cls1"]}),
                           new HTMLComponent({tag:"p", innerHTML:"paragraph 4", id:"par4_id", classList:["cls1"]}),   
                
                ]}) {
              
    this.#params = {
      container:{tag:"div", innerHTML:"", id:"container_id"},
      children:[new HTMLComponent({tag:"p", innerHTML:"paragraph 1", id:"par1_id", classList:["cls1"]}),
                new HTMLComponent({tag:"p", innerHTML:"paragraph 2", id:"par2_id", classList:["cls1"]}),   
                new HTMLComponent({tag:"p", innerHTML:"paragraph 3", id:"par3_id", classList:["cls1"]}),
                new HTMLComponent({tag:"p", innerHTML:"paragraph 4", id:"par4_id", classList:["cls1"]}),   

      ]};

    Object.assign(this.#params,params);
    this.$ = (new HTMLComponent(this.#params.container)).$
    this.children = [];
    this.#buildChildren();
  }

  #buildChildren(){
    this.#params.children.forEach((elt)=>{
       this.$.appendChild(elt.$);
    })
  }

  _update(params = {
    }) {
       Object.assign(this.#params,params);
  }

 
  outParams() {
    return Object.assign({},this.#params);
  }
  
}


class HTMLNav {
  #params;
  
  constructor(params = {
                 nav:{tag:"div", innerHTML:"",  classList:["nav_cls"], id:"cls_id"},
                 list:[ {tag:"li", innerHTML:"",  classList:["li_cls"], id:"li1_id"},
                        {tag:"li", innerHTML:"",  classList:["li_cls"], id:"li2_id"},
                        {tag:"li", innerHTML:"",  classList:["li_cls"], id:"li3_id"},
                        {tag:"li", innerHTML:"",  classList:["li_cls"], id:"li4_id"}],
                 elements:[ {tag:"button", innerHTML:"Segmentation",  classList:["but_cls"], id:"segbut_id"},
                 {tag:"button", innerHTML:"Vecmentation",  classList:["but_cls"], id:"vecbut_id"},
                 {tag:"button", innerHTML:"Indexation",  classList:["but_cls"], id:"indbut_id"},
                 {tag:"button", innerHTML:"Random",  classList:["but_cls"], id:"ranbut_id"},
                 {tag:"button", innerHTML:"Matrix",  classList:["but_cls"], id:"mstbut_id"}
                ]

                }) {
              
    this.#params = {
      nav:{tag:"nav", innerHTML:"",  classList:["nav_cls"], id:"cls_id"},
      list:[ {tag:"li", innerHTML:"",  classList:["li_cls"], id:"li1_id"},
             {tag:"li", innerHTML:"",  classList:["li_cls"], id:"li2_id"},
             {tag:"li", innerHTML:"",  classList:["li_cls"], id:"li3_id"},
             {tag:"li", innerHTML:"",  classList:["li_cls"], id:"li4_id"}],
      elements:[ {tag:"button", innerHTML:"Segmentation",  classList:["but_cls"], id:"segbut_id"},
      {tag:"button", innerHTML:"Vecmentation",  classList:["but_cls"], id:"vecbut_id"},
      {tag:"button", innerHTML:"Indexation",  classList:["but_cls"], id:"indbut_id"},
      {tag:"button", innerHTML:"Random",  classList:["but_cls"], id:"ranbut_id"},
      {tag:"button", innerHTML:"Matrix",  classList:["but_cls"], id:"mstbut_id"}]};

    Object.assign(this.#params,params);

    this.list = [];

    this.#params.list.forEach((elt,index) =>{
      this.list.push(
        new HTMLContainer( {container:elt,
                            children:[new HTMLComponent( this.#params.elements[index])]   
        }))
          
    });

    this.nav = new HTMLContainer( {container: this.#params.nav,
      children:this.list
    });


  }


  _update(params = {
    }) {
       Object.assign(this.#params,params);
  }

 
  outParams() {
    return Object.assign({},this.#params);
  }
  
}


class MenuUi {
  #params;
  
  constructor(params = {   }) {
              
    this.#params = {};

    Object.assign(this.#params,params);
   
    this.loggo = new  HTMLComponent({tag:"div", innerHTML:"<h1>Experiments</h1>",id:"loggo_id" ,classList:[]});
    this.loggoModule  = new  HTMLComponent({tag:"div", innerHTML:"",id:"loggomodule_id" ,classList:[]});
     

    this.loggocontainer = new HTMLContainer({container:{tag:"div",innerHTML:"", id:"loggocontainer_id" ,classList:[]},
                                             children:[this.loggo,this.loggoModule  ] });


    this.button_menu_inside1 = new  HTMLComponent({tag:"div", innerHTML:"-",id:"button_menu_inside1_id",classList:["button_menu_inside"]});
    this.button_menu_inside2 = new  HTMLComponent({tag:"div", innerHTML:"-",id:"button_menu_inside2_id",classList:["button_menu_inside"]});
    this.button_menu_inside3 = new  HTMLComponent({tag:"div", innerHTML:"-",id:"button_menu_inside3_id",classList:["button_menu_inside"]});
    this.button_menu_inside_container = new HTMLContainer({container:{tag:"div", innerHTML:"",id:"button_menu_inside_container_id",classList:["button_menu_inside_container"]},
                                                           children:[this.button_menu_inside1, this.button_menu_inside2, this.button_menu_inside3]    
                                                             });




   this.nav = new        HTMLNav     ( {  nav:{tag:"div", innerHTML:"",  classList:["nav_cls"], id:"cls_id"},
                                                                             list:[ {tag:"li", innerHTML:"",  classList:["li_cls"], id:"li1_id"},
                                                                                    {tag:"li", innerHTML:"",  classList:["li_cls"], id:"li2_id"},
                                                                                    {tag:"li", innerHTML:"",  classList:["li_cls"], id:"li3_id"},
                                                                                    {tag:"li", innerHTML:"",  classList:["li_cls"], id:"li4_id"}],
                                                                             elements:[ {tag:"button", innerHTML:"Segmentation",  classList:["but_cls"], id:"segbut_id"},
                                                                             {tag:"button", innerHTML:"Vecmentation",  classList:["but_cls"], id:"vecbut_id"},
                                                                             {tag:"button", innerHTML:"Indexation",  classList:["but_cls"], id:"indbut_id"},
                                                                             {tag:"button", innerHTML:"Random",  classList:["but_cls"], id:"ranbut_id"},
                                                                             {tag:"button", innerHTML:"Matrix",  classList:["but_cls"], id:"mstbut_id"}
                                                                            ]
                                                            
                                                                            })                                                             


    this.header= new HTMLContainer({container:{tag:"header",innerHTML:"", id:"header_id",classList:[]},
                                                             children:[this.loggocontainer, this.button_menu_inside_container , this.nav.nav] });                                                                







    document.body.appendChild(this.header.$);
                                                               
  }


  _update(params = {
    }) {
       Object.assign(this.#params,params);
  }

 
  outParams() {
    return Object.assign({},this.#params);
  }
  
}





document.addEventListener("DOMContentLoaded", function() {

    let menUI = new MenuUi();

  // let nav = new HTMLNav({
  //   nav:{tag:"div", innerHTML:"",  classList:["nav_cls"], id:"cls_id"},
  //   list:[ 
  //          {tag:"li", innerHTML:"",  classList:["li_cls"], id:"li1_id"},
  //          {tag:"li", innerHTML:"",  classList:["li_cls"], id:"li1_id"},
  //          {tag:"li", innerHTML:"",  classList:["li_cls"], id:"li2_id"},
  //          {tag:"li", innerHTML:"",  classList:["li_cls"], id:"li3_id"},
  //          {tag:"li", innerHTML:"",  classList:["li_cls"], id:"li4_id"}],
  //   elements:[ {tag:"button", innerHTML:"Segmentation",  classList:["but_cls"], id:"segbut_id"},
    
    
  //   {tag:"button", innerHTML:"Vecmentation",  classList:["but_cls"], id:"vecbut_id"},
  //   {tag:"button", innerHTML:"Indexation",  classList:["but_cls"], id:"indbut_id"},
  //   {tag:"button", innerHTML:"Random",  classList:["but_cls"], id:"ranbut_id"},
  //   {tag:"button", innerHTML:"Matrix",  classList:["but_cls"], id:"mstbut_id"}
  //  ]

  //  });

  // console.log(nav.list[0].$.children[0])

  //   nav.list[0].$.children[0].addEventListener('click',()=>{
  //      console.log(nav.list[0].$.children[0].innerHTML)
  //   })

  //  document.body.appendChild(nav.nav.$);

});
