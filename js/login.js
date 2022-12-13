let emailInpLogin = document.getElementById('emailInpLogin');
let passwordInpLogin = document.getElementById('passwordInpLogin');
let signIn = document.getElementById('login');
let validation =document.getElementById('validation')
console.log(emailInpLogin,passwordInpLogin,signIn);
let loginContainer =[];
let permission=[];
let isLogin = false;
  // let loginPermission = {
  //   isLogin:isLogin,
  // }
  // permission.push(loginPermission)
  localStorage.setItem('isLogin',JSON.stringify(isLogin));
  isLogin =JSON.parse(localStorage.getItem('isLogin'));
  console.log(isLogin)
  function loginForm() {
  let loginObj= {
    emailLogin:emailInpLogin.value,
    passwordLogin:passwordInpLogin.value,
  }


  // for (let j = 0; j < permission.length; j++) {
  //   console.log(permission[j].isLogin);
    
  // }
 // console.log(permission.isLogin);
// loginContainer.map((usersEmail)=>{
  if (loginObj.emailLogin == "" || loginObj.passwordLogin == "") {
    document.getElementById('alert').classList.remove('d-none')
    document.getElementById('alert').classList.add('d-flex')
    validation.innerHTML = "<b>Attention!</b> All inputs are required";
    return false;
  }

  else{
    if (localStorage.getItem("UserAccounts") != null) {
      loginContainer =  JSON.parse(localStorage.getItem('UserAccounts'));

      for (let i = 0; i < loginContainer.length; i++) {

      //  console.log('hhhhhhhh'+loginObj.emailLogin +loginObj.passwordLogin )
        if (loginObj.emailLogin == loginContainer[i].email && loginObj.passwordLogin == loginContainer[i].password) {
        // for (let j = 0; j < array.length; j++) {
        //   isLogin=true;
        // let loginPermission = {
        //     isLogin:isLogin,
        //   }
        //   permission.push(loginPermission)
        //   localStorage.setItem('permission',JSON.stringify(permission));
        //   permission =JSON.parse(localStorage.getItem('permission'));
        // permissions = new Map(Object.entries(permission));
       
        // }
       // permission.isLogin=true;
        console.log( loginContainer[i].name  ,loginContainer[i].email ,loginContainer[i].password)
        // isLogin =true;
        // console.log(isLogin)
        // localStorage.setItem('isLogin',JSON.stringify(isLogin));
        // isLogin =JSON.parse(localStorage.getItem('isLogin'));
        // if (isLogin == true) {
          window.location = "welcome.html";
          document.getElementById('alert').classList.remove('d-flex')
          document.getElementById('alert').classList.add('d-none')
          validation.innerHTML = " ";
        // }
       

// document.getElementById('anchor').setAttribute('href','welcome.html')
  // for (let j = 0; j < permission.length; j++) {
  //   permission[j].isLogin = true;
  //   console.log(isLogin)
  // }
         
        return true;
 }else{
  document.getElementById('alert').classList.remove('d-none')
  document.getElementById('alert').classList.add('d-flex')
  validation.innerHTML = "<b>Attention!</b> incorrectss email or password";
  //return false;
 }
}}else{
  document.getElementById('alert').classList.remove('d-none')
  document.getElementById('alert').classList.add('d-flex')
  validation.innerHTML = "<b>Attention!</b> incorrect email or password";

  }

}
// }
// )

}
signIn.addEventListener('click',loginForm)

