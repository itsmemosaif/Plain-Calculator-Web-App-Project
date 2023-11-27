function display(btvalue) 
{
    document.getElementById('inputarea').value+=btvalue
}

function calculate() 
{
    var valx = document.getElementById('inputarea').value
    var yansr = eval(valx)
    document.getElementById('inputarea').value=yansr
}

function clr()
{
    document.getElementById('inputarea').value=''
}