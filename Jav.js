function allowlogin(usermail)
{
    var a = document.getElementById("usermail").value;
    if (a == 'rvinny@gainsight.com' || a == 'lkchittajallu@gainsight.com' || a == 'dpraj@gainsight.com')
    { 
    
        alert('valid user');
        location.href = "Home page.html";
    }
    else if(a == '')
    {
        alert('invalid User. Enter demouser@gmail.com as username');
    }
}

function addtocart()
{
    alert("Added to cart");
}