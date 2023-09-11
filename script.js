    arrastrarElemento(document.getElementById('plaza1'));
    arrastrarElemento(document.getElementById('plaza2'));
    arrastrarElemento(document.getElementById('plaza3'));
    arrastrarElemento(document.getElementById('plaza4'));
    arrastrarElemento(document.getElementById('plaza5'));
    arrastrarElemento(document.getElementById('plaza6'));
    arrastrarElemento(document.getElementById('plaza7'));
    arrastrarElemento(document.getElementById('plaza8'));
    arrastrarElemento(document.getElementById('plaza9'));
    arrastrarElemento(document.getElementById('plaza10'));
    arrastrarElemento(document.getElementById('plaza11'));
    arrastrarElemento(document.getElementById('plaza12'));
    arrastrarElemento(document.getElementById('plaza13'));
    arrastrarElemento(document.getElementById('plaza14'));
    arrastrarElemento(document.getElementById('plaza15'));
    arrastrarElemento(document.getElementById('plaza16'));
    arrastrarElemento(document.getElementById('plaza17'));
    arrastrarElemento(document.getElementById('plaza18'));
    
    function arrastrarElemento(elementoLosLau) {
        let fin_X = 0
            fin_Y = 0
            ori_X = 0 
            ori_Y = 0
        elementoLosLau.onpointerdown = arrastrarPuntero;

        function arrastrarPuntero(e) {
            e.preventDefault();
            ori_X = e.clientX;
            ori_Y = e.clientY;
            document.onpointermove = arrastrarElemento;
            document.onpointerup = detenerArrastreElemento;
            
        }

        function arrastrarElemento(e) {
            fin_X = ori_X - e.clientX;
            fin_Y = ori_Y - e.clientY;
            ori_X = e.clientX;
            ori_Y = e.clientY;
            console.log(ori_X, ori_Y, fin_X, fin_Y)
            elementoLosLau.style.top = elementoLosLau.offsetTop - fin_Y + 'px';
            elementoLosLau.style.left = elementoLosLau.offsetLeft - fin_X + 'px';
        }

        function detenerArrastreElemento() {
            document.onpointermove = null;
            document.onpointerup = null;
        }

    }

    

