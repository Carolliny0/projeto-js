var el = document.querySelector('.menu-mobile-icon');
    el.addEventListener('click', ()=> {
    var menuItens = document.querySelector('.menu-itens')
       if (menuItens.classList.contains('show')) {
         menuItens.classList.add('hide')
         menuItens.classList.remove('show')
       } else{ 
         menuItens.classList.add('show')
         menuItens.classList.remove('hide')
       }
     })

var answers = document.querySelectorAll('.accordion');
    answers.forEach((event)=>{
        event.addEventListener('click',()=>{
            if(event.classList.contains("active")){
                event.classList.remove("active");
            }
            else{
                event.classList.add("active");
            }
        })
    })

  const imgs = document.getElementById('img')
  const img = document.querySelectorAll('#img img')

  let idx = 0

  function carrossel(){
    idx++;

    if(idx > img.length - 1){
    idx = 0;
  }
  imgs.style.transform= `translateX(${-idx * 500}px)`;

  }

  setInterval(carrossel, 1800)
