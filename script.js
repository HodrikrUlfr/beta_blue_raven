{window.addEventListener("scroll",function(){
    const header = document.querySelector('#header')                  //codigo de efeito no header
    header.classList.toggle('roll',window.scrollY > 100)
})}


{window.addEventListener("scroll", () => {
    const header = document.querySelector('#header');
    const section3 = document.querySelector('#banner02'); 
    const sectiontop = section3.getBoundingClientRect().top;          //Código que esconde o header ao chegar na ultima section 
    
    if (sectiontop <= 150) {
        header.classList.add('hidden');
    } else {
        header.classList.remove('hidden');
    }
});}
{window.addEventListener("scroll", function () {
    const cards = document.querySelectorAll('.card'); // Selecionar todos os cards
    const triggerHeight = window.innerHeight / 1.2; // Ajustar o ponto de ativação
    const exitheight = window.innerHeight

    cards.forEach((card) => {
        const cardTop = card.getBoundingClientRect().top;             //codigo de efeito dos cards ou uma div em especifico
        if (cardTop < triggerHeight) {
            card.classList.add('discard'); // Adiciona a classe se o card estiver no viewport
        } else if (cardTop > exitheight) {
            card.classList.remove('discard') // Remove a classe caso contrário
        }
    });
});}
{window.addEventListener("load", () => {                 //RESET PADRÃO DE UM SITE
    window.scrollTo(0, 0);
})}