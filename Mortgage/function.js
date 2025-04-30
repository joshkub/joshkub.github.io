
function calculate() {
    let pr = document.getElementById('pr').value;
    let ir = document.getElementById('ir').value;
    let ti = document.getElementById('ti').value;
    let mp = document.getElementById('mp').value;

    pr = Number(pr)
    ir = Number(ir)/100
    ti = Number(ti)
    mp = Number(mp)

    b = 0;
    b = (pr*(1 + ir/12)**(12*ti)) - mp*(Math.abs((1 + ir/12)**(12*ti) -1)/(ir/12))
    b = b.toFixed(2)
    document.getElementById('ba').value = "$" + b
    
}
function reset() {

    let pr = document.getElementById('pr').value;
    let ir = document.getElementById('ir').value;
    let ti = document.getElementById('ti').value;
    let mp = document.getElementById('mp').value;
    let ba = document.getElementById('ba').value;

    document.getElementById('pr').value = ""
    document.getElementById('ir').value = ""
    document.getElementById('ti').value = ""
    document.getElementById('mp').value = ""
    document.getElementById('ba').value = ""

}