const showShare = (toggleId, cardFooterId) => {
    const toggle = document.getElementById(toggleId),
          cardFooter = document.getElementById(cardFooterId);
    if( toggle && cardFooter){
        toggle.addEventListener('click', () => {
            cardFooter.classList.toggle('close');
        })
    }      
}
console.log('hola');
showShare('icon-share', 'card_footer__absolute');