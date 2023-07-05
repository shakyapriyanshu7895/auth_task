const fetch_token = (async () => {
    const email = $('#email').val();
    const pass = $('#pass').val();
    if (email.length===0 || pass.length===0 ) {
        $("#err").html(`fill all fields`);

    }else{
    fetch('/login', {
        method: 'Post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: email, password: pass })
    }).then(response => {
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        return response.json();
    })
        .then(data => {
            // Handle successful response

            const jwtToken = data.accessToken;
            if (data.accessToken) {
                window.location.replace("/dashboard");
            }


            // Set the JWT token as a cookie
            document.cookie = `jwtToken=${jwtToken}; expires=Thu, 1 Jan 2026 12:00:00 UTC; path=/`;
            //  }
        })
        .catch(error => {
            // Handle error
            $("#err").html(`Enter correct credentials`);
        });

    }




});

const register_user = (async () => {
    const email = $('#email').val();
    const pass = $('#pass').val();
    const username = $('#username').val();
    
    if (email.length===0 || pass.length===0 || username.length===0) {
        $("#err").html(`fill all fields`);

    }
    else{
    fetch('/register', {
        method: 'Post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: email, password: pass, username: username })
    }).then(response => {
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        return response.json();
    })
        .then(data => {
            // Handle successful response

            window.location.replace("/");
            //  }
        })
        .catch(error => {
            // Handle error
            $("#err").html(`Already have account`);
        });


    }

});
const logout = (async () => {

    //  Delete the cookie
    document.cookie = "jwtToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

    window.location.replace("/");

});