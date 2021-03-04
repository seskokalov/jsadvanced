let existingUser = document.getElementById('existingUser');
let existingPass = document.getElementById('existingPass');
let existingSubmit = document.getElementById('existingSubmit');
let registerUser = document.getElementById('registerUser');
let registerPass = document.getElementById('registerPass');
let registerSubmit = document.getElementById('registerSubmit');
let currentUser = document.getElementById('currentUser');
let printUsers = document.getElementById('printUsers');
let logOut = document.getElementById('logOut');
let userCheckIndex = "";
let userCheckPass = "";
let adminPrint = "";
let userVar = ""

logOut.style.display = "none";

function User (username, password, isAdmin) {
    this.username = username;
    this.password = password;
    this.isAdmin = isAdmin;
};

let admin = new User ("Nikola", "nikola321", true);
let users = [admin];
console.log(users);

function userCheck(username, password){
    userCheckIndex = users.findIndex(i => i.username === username);
    userCheckPass = users.findIndex(i => i.password === password);
}

function newUser(username, password){
    userCheck(registerUser.value, registerPass.value);
    if(username === "" || password === ""){
        alert(`Username and password can't be empty!`);
    }
    else if(username.length < 4){
        alert(`Username must contain at least 4 characters!`);
    }
    // else if(username === parseFloat(users[userCheckIndex].username)){
    //     alert(`User exists, please log in!`)
    // }
    else if(password.length < 6){
        alert(`Password must contain at least 6 characters!`);
    }
    else {
        users.push(new User(username, password, false));
        alert(`Welcome ${username}! Go ahead and login with the username and password you created!`)
        for(let i = 0; i < users.length; i++){
            adminPrint = "";
            printUsers.innerHTML += `<li>${users[i].username}</li>`;
            // adminPrint += `<li>Username: ${users[i].username} Password: ${users[i].password} </li>`
        }       
    }
}

logOut.addEventListener('click', function(){
    currentUser.innerHTML = "";
    printUsers.innerHTML = "";
    logOut.style.display = "none";
    alert(`Thanks for using our app!`)
})

registerSubmit.addEventListener("click", function(){
    userCheck(existingUser.value, existingPass.value);
    event.preventDefault();
    printUsers.innerHTML = "";
    newUser(registerUser.value, registerPass.value);
    registerUser.value = "";
    registerPass.value = "";
    console.log(users)
});

existingSubmit.addEventListener("click", function(){
    userCheck(existingUser.value, existingPass.value);
    event.preventDefault();
    if(existingUser.value === users[userCheckIndex].username.value && existingPass.value === users[userCheckIndex].password && users[userCheckIndex].isAdmin === false){
        alert(`Welcome ${users[userCheckIndex].username}`);
        currentUser.innerHTML = `Current user is: ${users[userCheckIndex].username}`
        logOut.style.display = "initial";
    }
    else if(existingUser.value === users[userCheckIndex].username && existingPass.value === users[userCheckIndex].password && users[userCheckIndex].isAdmin === true){
        alert(`Welcome admin ${users[userCheckIndex].username}`);
        printUsers.innerHTML = "";
        for(let i = 0; i < users.length; i++){
            adminPrint += `<li>Username: ${users[i].username} Password: ${users[i].password} </li>`
        }     
        currentUser.innerHTML = `<p>Current user is: Administrator</p>
        </br>
        </br>
        <p>User database is:
            <ol>
            ${adminPrint}
            </ol>
        </p>
        `
        logOut.style.display = "initial";
    }
    else{
        alert(`No such user, please register or check your credentials!`)
    }
    existingUser.value = "";
    existingPass.value = "";
})



// Login / Register app
// Write a simple register program that will take new user's username and password and save it. Display the usernames of all existing users in a list.
// Users should be stored in array of User objects
// Array need to have one admin user by default when the application is started
// User need to have at least 3 properties: Username, Password and isAdmin
// Write a simple login program that will require user's username and password to be entered. Display a message for the user that is logged in (ex. "Welcome Bob to our awesome app").

// Add an option for logging out.

// Add some further validation to all input fields for the usernames and passwords

// The user has to enter both username and password
// Register or login should not proceed with empty inputs
// Username needs to include more than 3 characters
// Password has to be longer than 6 characters
// Add an admin panel that will check if the user is admin and display a message (ex. Welcome SuperAdmin). Display all usernames and passwords in a list or table.


// Flow


// HTML!!! (Login form, Register form, Logout, Admin panel (unordered list or table))
// Global variables array of users and currentUser object of user
// Function constructor User(username, password, isAdmin)
// Events and other function (don't forget the checks)