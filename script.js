function validFunc() {
    const reName = /^.+\s.+\s?.*$/i;
    const name = document.getElementById("name").value;
    const validName =  reName.test(name);
    if(validName) {
        document.getElementById("name").style.border='solid green'
        document.getElementById('nameValid').innerHTML =`ПІБ: ${name}`;
    } else {
        document.getElementById("name").style.border='solid red'
        document.getElementById('nameValid').innerHTML = "Невірне ПІБ"
    }

    const rePhone = /(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
    const phone = document.getElementById('phone').value;
    const validPhone =  rePhone.test(phone);
    if (validPhone){
        document.getElementById("phone").style.border='solid green'
        document.getElementById('phoneValid').innerHTML =`Номер телефону: ${phone}`;
    }
    else {
        document.getElementById("phone").style.border='solid red'
        document.getElementById('phoneValid').innerHTML = "Невірний телефон"
    }

    const reFaculty = /[а-яА-ЯЁё]{4}$/;
    const faculty = document.getElementById("faculty").value;
    const validFaculty =  reFaculty.test(faculty);
    if(validFaculty) {
        document.getElementById("faculty").style.border='solid green'
        document.getElementById('facultyValid').innerHTML = `Факультет: ${faculty}`;
    }else{
        document.getElementById("faculty").style.border='solid red'
        document.getElementById('facultyValid').innerHTML = "Невірна назва"
    }

    const reDate = /(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d/;
    const date = document.getElementById("date").value;
    const validDate =  reDate .test(date);
    if(validDate) {
        document.getElementById("date").style.border='solid green'
        document.getElementById('dateValid').innerHTML = `Дата народження: ${date}`;
    }else{
        document.getElementById("date").style.border='solid red'
        document.getElementById('dateValid').innerHTML = "Невірна дата народження"
    }
    const reEmail = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
    const email = document.getElementById('email').value;
    const validEmail = reEmail.test(email);
    if (validEmail){
        document.getElementById("email").style.border='solid green'
        document.getElementById('emailValid').innerHTML = `Пошта: ${email}`;
    }else {
        document.getElementById("email").style.border='solid red'
        document.getElementById('emailValid').innerHTML = "Невірна адреса пошти";
    }
}

const first = document.getElementById('four');

const row1 = document.getElementById('row2');
const colorInput = document.getElementById('colorInput');

function getRandom(min, max){
  return Math.ceil(Math.random() * (max - min) + min);
};
 
first.addEventListener("mouseover", function() {
    four.style.backgroundColor = `rgb(${getRandom(0, 255)}, ${getRandom(0, 255)}, ${getRandom(0, 255)})`;
});

first.addEventListener("click", function() {
    four.style.backgroundColor= colorInput.value;
});

first.addEventListener("dblclick", function() {
    cell6.style.backgroundColor = colorInput.value;
    cell11.style.backgroundColor = colorInput.value;
    cell16.style.backgroundColor = colorInput.value;
    cell21.style.backgroundColor = colorInput.value;
    cell26.style.backgroundColor = colorInput.value;
    cell31.style.backgroundColor = colorInput.value;
});