const textNodes = Array.from(document.querySelectorAll('.typing-text'));

textNodes.forEach(node => {
    let index = 0;
    let text = node.textContent
    let textArray = Array.from(text);
    node.textContent = '';

    function type(){
        const typingInterval = setInterval(() => {
            if (index < textArray.length) {
                node.textContent += textArray[index];
                index++;
            }
            else{
                // clearInterval(typingInterval)
                // setTimeout(()=>{
                //     node.textContent = ''
                //     index = 0;
                //     type()
                // },1000)
                if(textArray.length !== 0){
                    textArray.pop()
                    node.textContent = textArray.join('')
                }
                else{
                    textArray = Array.from(text)
                    index = 0
                }

            }
        }, 120);
    }
    type()
});
