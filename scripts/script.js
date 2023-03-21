function clearDisplay() {
    let expression = document.getElementById('result');
    expression.value = '';
}
function display(value) {
    let expression = document.getElementById('result');
    expression.value += value;
}
function changeSign() {
    let expression = document.getElementById('result');
    let str = expression.value
    // alert(Number(str));
    // alert(str)
    let pos = str.length-1;
    while (Number(str.charAt(pos))) {
        //  alert(`${str.charAt(pos)}`); 
        //  alert(pos);
         pos--;
         if (pos == -1) break;
    }
    // alert(pos);
    let newstr;
    if (pos == -1) {
        newstr = '-' + str;
       // alert (newstr)
    }   else {
        switch (str.charAt(pos)) {
            case '-':
                if (pos==0) {
                    newstr = str.slice(pos+1);
                } else {
                    newstr = str.slice(0,pos) + '+' + str.slice(pos+1);
                }
            break;
            case '+':
                newstr = str.slice(0,pos) + '-' + str.slice(pos+1);
                break;
            default:
                newstr = str.slice(0,pos+1) + '-' + str.slice(pos+1);
            break;
        }
    }
    document.getElementById("result").value = newstr;        
}
function calculate() {
    let expression = document.getElementById("result");
    let str = expression.value;
    for (let pos = 0; pos < str.length; pos++) {
        if (str.charAt(pos)== '%') str = str.slice(0,pos) + '/100' + str.slice(pos+1);
    }
    let answer = eval(str);
    document.getElementById("result").value = answer;
}