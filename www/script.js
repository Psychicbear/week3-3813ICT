$(()=> {
    $('#login').on("submit", e => {
        e.preventDefault()
        login()
    })
})

function login(){
    let formData = {
        email: $("#email").val(),
        password: $("#pwd").val()
    }
    $.post("api/login", formData, (res) => {
        if(res.valid){//Redirect to account page
            document.location.href += 'account'
        } else {
            $("#err").toggleClass("hidemessage showmessage")
        }
    },)
        
    
}