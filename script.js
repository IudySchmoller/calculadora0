function calculadora()
    const a = parseFloat(document.getElementById("val_a").value);
    const b = parseFloat(document.getElementById("val_b").value);
    const c = parseFloat(document.getElementById("val_c").value);

    const delta = (b*b) - (4 * a * c);
    const raiz_delta = Math.sqrt(delta);
    let x1;
    let x2;

    if(delta < 0){
        document.getElementById('res_1')innertext = não há raizes reais;
    }else if(delta > 0){
        x1 = (-b + raiz_delta)/(2*a);
        x2 = (-b - raiz_delta)/(2*a);
        document.getElementById('res_1')innertext = "valor de x1" = + x1;
        document.getElementById('res_2')innertext = "valor de x2" = + x2;
    }else{
        x1 = (-b)/(2*a);
        document.getElementById('res_1')innertext = "o valor da única raiz é" = + x1;
    }