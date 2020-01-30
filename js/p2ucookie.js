function GetCookie(name) {
    var arg = name + "=";
    var alen = arg.length;
    var clen = document.cookie.length;
    var i = 0;
    while (i < clen) {
        var j = i + alen;
        if (document.cookie.substring(i, j) == arg)
            return "here";
        i = document.cookie.indexOf(" ", i) + 1;
        if (i == 0) break;
    }
    return null;
}

function p2uFirstCookie() {
    var visit = GetCookie("FirstTimeVisitCookie");
    if (visit == null) {
        var expire = new Date();
        expire = new Date(expire.getTime() + 7776000000);
        document.cookie = "FirstTimeVisitCookie=here; expires=" + expire;
        document.getElementById("h1").innerHTML = "Welcome to Pharmacy2U <first time>!";	// New visitor
    } else {
        document.getElementById("h1").innerHTML = " Hi, <firstname> we’re now connected to your GP";
        var bgImageChange = document.querySelector(".p2u-main");// Returning visitor
        bgImageChange.classList.add("p2u-returning");
    }
}



function p2uFirstCookieSumm() {
    var visit = GetCookie("FirstTimeVisitCookie");
    if (visit == null) {
        var expire = new Date();
        expire = new Date(expire.getTime() + 7776000000);
        document.cookie = "FirstTimeVisitCookie=here; expires=" + expire;
        document.getElementById("summary").innerHTML = "Welcome to Pharmacy2U !";	// New visitor
    } else {
        document.getElementById("summary").innerHTML = " Hi, Jenifer, we’re now connected to your GP";
        var bgImageChange = document.querySelector(".p2u-main");// Returning visitor
        bgImageChange.classList.add("p2u-returning");
    }
}
