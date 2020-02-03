function setCookie()
{
    checkCookie();
    var cname = "username";
    var cvalue = document.getElementById("username").value;
    var exdays = 7;
    var d = new Date();
    d.setTime(d.getTime()+(exdays*24*60*60*1000));
    var expires = "expires="+d.toGMTString();
    document.cookie = cname+"="+cvalue+"; "+expires;
}

function getCookie(cname)
{
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++)
    {
        var c = ca[i].trim();
        if (c.indexOf(name)==0) return c.substring(name.length,c.length);
    }
    return "";
}


function checkCookie()
{
    var user = getCookie("username");
    if (user != "")
    {
        document.getElementById("login").innerHTML = ("Hi, " + user + " below is summary of your order");
    } else {
        document.getElementById("login").innerHTML = ("Order Summary");
    }
}

function checkLp () {
    var Lpage = getCookie("login");
    if (Lpage != "") {
        document.getElementById("conf").innerHTML = ("Thank you for ordering from Pharmacy2U  ");}

    else {
        document.getElementById("conf").innerHTML = (" Thank you for your first order");
    }
}

function GetCookiefirst(name) {
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
    var user = getCookie("username");
    var visit = GetCookiefirst("FirstTimeVisitCookie");
    if (visit == null) {
        var expire = new Date();
        expire = new Date(expire.getTime() + 7776000000);
        document.cookie = "FirstTimeVisitCookie=here; expires=" + expire;
        document.getElementById("h1").innerHTML = "Welcome to Pharmacy2U <first time>!";	// New visitor
    } else {
        document.getElementById("h1").innerHTML = " Hi " + user +  " we’re now  connected <br> to your GP";
        var bgImageChange = document.querySelector(".p2u-main");// Returning visitor
        bgImageChange.classList.add("p2u-returning");
    }
}





