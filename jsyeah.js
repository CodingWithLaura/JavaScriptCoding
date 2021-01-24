var b = 'donut';
console.log(b);
var a = 'doughnut';
console.log('no its ' + a);
//document.getElementById('someid').innerHTML = 'What';
//document.getElementById('anotherid').innerHTML = 'The Fuck';

/*
var mood = prompt('How do you feel today Dr. Falken?');
console.log(mood);
var game = prompt('Would you like to play a game?');
console.log(game);
var whichgame = prompt('How about global thermonuclear war?');
console.log(whichgame);


document.getElementById('someid').innerHTML = mood;
*/
//Create a function

function fun() {
    output('This is a function you stupid!');
}

//Call the function

//fun();

function hello() {
    var name = prompt('What is your name?');
    output('Konichiwa ' + name + 'san');
}

//hello();

function output(text){
    var para = document.createElement("p");
    var node = document.createTextNode(text);
    para.appendChild(node);
    document.getElementById("console").appendChild(para);
    para.scrollIntoView();
}

output("hell yeah!")
// fun()
// hello()

function rest_send(username_, password_){
    let data = {user: username_, password:password_};
    var xhr = new XMLHttpRequest();

    // url anpassen
    xhr.open("POST", "http://192.168.234.14:5000/user_accounts" , true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    json_data = JSON.stringify(data);
    xhr.send(json_data);
}   

function input()
{
    input_tag = document.getElementById("input_id");

    tag_value = input_tag.value;
    
    
    output(tag_value);
    rest_send(tag_value,"123");
}

function get_users_async_handler(text){
    output(text);
}

function get_users(){
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200)
	    get_users_async_handler(xhr.responseText);
    }
    
    xhr.open("GET", "http://192.168.234.14:5000/user_accounts" , true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(null);

//    output(xhr.responseText);
}
