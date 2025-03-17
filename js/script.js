const textNodes = Array.from(document.querySelectorAll('.typing-text'));

textNodes.map(node => {
    let index = 0;
    let textArray = Array.from(node.textContent);
    node.textContent = '';

    function type(){
        const typingInterval = setInterval(() => {
            if (index < textArray.length) {
                node.textContent += textArray[index];
                index++;
            }
            else{
                clearInterval(typingInterval)
                setTimeout(()=>{
                    node.textContent = ''
                    index = 0;
                    type()
                },1000)
            }
        }, 100);
    }
    type()
});
