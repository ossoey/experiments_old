// Load the header HTML file and insert it into the "header" div element
fetch('/client/header.html')
  .then(response => response.text())
  .then(html => {
    document.getElementById('header').innerHTML = html;
  });

// Load the footer HTML file and insert it into the "footer" div element
fetch('/client/footer.html')
  .then(response => response.text())
  .then(html => {
    document.getElementById('footer').innerHTML = html;
  });


  fetch('/client/js/functiontest.js')
  .then(response => response.text())
  .then(scriptText => {
    const script = document.createElement('script');
    script.text = scriptText;
    document.head.appendChild(script);

    const result = multiplyByTwo(5);
    console.log(result); // Output: 10
  });



  
 
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
 

