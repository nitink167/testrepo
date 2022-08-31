

function compute() {

    let principal = document.getElementById("principal").value;

    let rate = document.getElementById("rate").value;

    let years = document.getElementById("years").value;

    let interest = principal * years * rate / 100;

    let year = new Date().getFullYear() + parseInt(years);

    if (Math.sign(principal) == "0") {
        if (confirm("Enter a positive number") === true) {
            return document.getElementById("principal").focus()
        } else {
            alert("Principal value is empty")
        }
    }

    if (Math.sign(principal) == "-1") {
        if (confirm("Enter a positive number") === true) {
            return document.getElementById("principal").focus()
        } else {
            alert("Principal value is empty")
        }
    }


    if (Math.sign(principal) == "1") {
        return document.getElementById("result").innerHTML = "If you deposit <mark>" + principal + "</mark>, at an interest rate of <mark>" + rate + "%</mark>. You will receive an amount of <mark>" + interest + "</mark>, in the <mark>" + year + "</mark>";

    }
}

function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval;
}