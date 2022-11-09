import { API } from "../config"

export const registerUser = (user_name, email, password)=>{
    const user_obj = {
        user_name,
        email,
        password
    }
    console.log(user_obj)

    return fetch(`${API}/register`,{
        method:"POST",
        headers:{
            Aceept:"application/json",
            "Content-Type":"application/json"
        },
        body: JSON.stringify(user_obj)
    })
    .then(response=>response.json())
    .catch(error=>console.log(error))

}

//confirm email/user

export const confirmUser = (token) =>{
    return fetch(`${API}/confirmuser/${token}`,{
        method:"GET",
    })
    .then(response=>response.json())
    .catch(error=>console.log(error))
}

//resend verification

export const resendEmail = (email)=>{
    return fetch (`${API}/resendverification`,{
        method:"POST",
        headers:{
            Accept:"application/json",
            "Content-Type":"application/json"
        },
        body:JSON.stringify({email})
    })
    .then(response=>response.json())
    .catch(error=>console.log(error))
}


//forget password

export const forgetPassword =(email)=>{
    return fetch(`${API}/forgetpassword`,{
        method:'POST',
        headers:{
            Accept:"application/json",
            "Content-type":"application/json"
        },
        body: JSON.stringify({email})
    })
    .then(response=>response.json())
    .catch(error=>console.log(error))
}

//reset password

export const resetPassword =(token,password)=>{
    return fetch(`${API}/resetpassword/${token}`,{
        method:'POST',
        headers:{
            Accept:"application/json",
            "Content-type":"application/json"
        },
        body: JSON.stringify({password})

    })
    .then(response=>response.json())
    .catch(error=>console.log(error))
}


//SIGN IN

export const signIn = (email,password)=>{
    const user = {email,password}
    return fetch(`${API}/signin`,{
        method:'POST',
        headers:{
            Accept:"application/json",
            "Content-type":"application/json"
        },
        body: JSON.stringify(user)
    })	
    .then(response=>response.json())
    .catch(error=>console.log(error))
}

//authenticate

export const authenticate =(data)=>{
    localStorage.setItem('jwt',JSON.stringify(data))
}

//tp check logon or not

export const isAuthenticated =()=>{
    return localStorage.getItem('jwt') ?  JSON.parse(localStorage.getItem('jwt')):false
}

// sign out

export const signOut =()=>{
    localStorage.removeItem('jwt');
}