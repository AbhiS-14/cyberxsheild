function check(){
    let pas=document.getElementById("password").value;
    let s=0
    console.log(pas)
    if(pas.length>=8)
    {
        document.getElementById("len").textContent="✅ Minimum 8 characters"
        s++
    }
    else
    {
      document.getElementById("len").textContent="❌ Minimum 8 characters"   
    }
    if(/[a-z]/.test(pas))
    {
        document.getElementById("low").textContent="✅ At least 1 lowercase letter"
        s++
    }
    else
    {
         document.getElementById("low").textContent = "❌ At least 1 lowercase letter";
    }
     if(/[!@#$%&*^]/.test(pas))
    {
        document.getElementById("spe").textContent="✅ At least 1 special symbol"
        s++
    }
    else
    {
         document.getElementById("spe").textContent = "❌ At least 1 special symbol";
    }
     if(/[0-9]/.test(pas))
    {
        document.getElementById("no").textContent="✅ At least 1 number"
        s++
    }
    else
    {
         document.getElementById("no").textContent = "❌ At least 1 number";
    }
     if(/[A-Z]/.test(pas))
    {
        document.getElementById("upp").textContent="✅ At least 1 uppercase letter"
        s++
    }
    else
    {
         document.getElementById("upp").textContent = "❌ At least 1 uppercase letter";
    }
    document.getElementById("score").textContent=s;
}
