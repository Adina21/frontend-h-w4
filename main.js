let users = [
    {id: 1, name: "Вася"},
    {id: 2, name: "Петя"},
    {id: 3, name: "Маша"}
  ]; 

function add_admin(users){
    users.forEach(element => {
        element.admin = false
        if(element.name === "Маша"){
            element.admin = true
        }
    });
    return users

}

console.log(add_admin(users));