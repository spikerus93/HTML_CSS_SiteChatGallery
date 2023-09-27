
function hello() {
    let username = document.getElementById('username').value;


    if (username == '') {
        document.getElementById('error_name').innerText = 'Введите Ваше Имя!!!'
    }
    else {
        // document.getElementById('result_name').innerText = username;
        alert(`Привет ${username}`)
        document.getElementById('result_name').innerText = username;
        document.getElementById('result_name').value = username;
        document.getElementById('error_name').innerText = ''
    }
}

function send() {
    //ввод данных из поля ввода html input
    //let x = prompt("Введите х")

    let message = document.getElementById('message').value;

    //логика



    if (message == '') {
        document.getElementById('error').innerText = 'Введите Сообщение!!!'
    }
    else {
        document.getElementById('result').innerText = message;
        document.getElementById('result').value = message;
        document.getElementById('error').innerText = ''
    }
    //Вывод данных в поле 

    // document.getElementById('result').innerText = message;


    //alert(`${x} * 5 = ${resuls}`)

}


