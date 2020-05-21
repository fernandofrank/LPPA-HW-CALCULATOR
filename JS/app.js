var operation_a;
var operation_b;
var operation;
var verification = new Boolean(false);

var getElements = function () {
    //values
    var result = document.getElementById('result');
    var operation_scren = document.getElementById('operation');
    var n1 = document.getElementById('N1');
    var n2 = document.getElementById('N2');
    var n3 = document.getElementById('N3');
    var n4 = document.getElementById('N4');
    var n5 = document.getElementById('N5');
    var n6 = document.getElementById('N6');
    var n7 = document.getElementById('N7');
    var n8 = document.getElementById('N8');
    var n9 = document.getElementById('N9');
    var n0 = document.getElementById('N0');
    var equal = document.getElementById('equal');
    var point = document.getElementById('point');
    var C = document.getElementById('clear');
    var sum = document.getElementById('sum');
    var sub = document.getElementById('subtraction');
    var mul = document.getElementById('multiplication');
    var div = document.getElementById('division');

    //funtions
    n1.onclick = function (e) {
        result.textContent = result.textContent + "1";
    }
    n2.onclick = function (e) {
        result.textContent = result.textContent + "2";
    }
    n3.onclick = function (e) {
        result.textContent = result.textContent + "3";
    }
    n4.onclick = function (e) {
        result.textContent = result.textContent + "4";
    }
    n5.onclick = function (e) {
        result.textContent = result.textContent + "5";
    }
    n6.onclick = function (e) {
        result.textContent = result.textContent + "6";
    }
    n7.onclick = function (e) {
        result.textContent = result.textContent + "7";
    }
    n8.onclick = function (e) {
        result.textContent = result.textContent + "8";
    }
    n9.onclick = function (e) {
        result.textContent = result.textContent + "9";
    }
    n0.onclick = function (e) {
        result.textContent = result.textContent + "0";
    }
    point.onclick = function (e) {
        result.textContent = result.textContent + ".";
    }
    C.onclick = function (e) {
        c_screen();
    }
    sum.onclick = function (e) {
        operation_a = result.textContent;
        operation = "+";
        operation_scren.textContent = operation_a + " +"
        clean();
    }
    sub.onclick = function (e) {
        operation_a = result.textContent;
        operation = "-";
        operation_scren.textContent = operation_a + " -"
        clean();
    }
    mul.onclick = function (e) {
        operation_a = result.textContent;
        operation = "*";
        operation_scren.textContent = operation_a + " X"
        clean();
    }
    div.onclick = function (e) {
        operation_a = result.textContent;
        operation = "/";
        operation_scren.textContent = operation_a + " ÷"
        clean();
    }
    equal.onclick = function (e) {
        operation_b = result.textContent;
        solve();

    }

    function solve(e) {
        var result_op = 0;
        switch (operation) {
            case "+":
                result_op = parseFloat(operation_a) + parseFloat(operation_b);
                operation_scren.textContent = operation_a + " + " + operation_b + " ="
                break;
            case "-":
                result_op = parseFloat(operation_a) - parseFloat(operation_b);
                operation_scren.textContent = operation_a + " - " + operation_b + " ="
                break;
            case "*":
                result_op = parseFloat(operation_a) * parseFloat(operation_b);
                operation_scren.textContent = operation_a + " X " + operation_b + " ="
                break;
            case "/":
                result_op = parseFloat(operation_a) / parseFloat(operation_b);
                operation_scren.textContent = operation_a + " ÷ " + operation_b + " ="
                break;
        }
        reset();
        result.textContent = result_op;
        verfication = (true)
    }

    function clean() {
        result.textContent = "";
    }
    function c_screen() {
        result.textContent = "";
        operation_scren.textContent = "";
        operation_a = 0;
        operation_b = 0;
        operation = "";
    }

    function reset() {
        if (verification = true) {
            result.textContent = "";
            operation_a = 0;
            operation_b = 0;
            operation = "";
            verfication = false;
        }

    }

}

var init = function () {
    getElements();
}

window.onload = init