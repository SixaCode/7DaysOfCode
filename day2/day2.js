userName = prompt("¿Cuál es tu nombre?");
userAge = prompt("¿Cuántos años tienes?");
userProgLang = prompt("¿Qué lenguaje de programación estás estudiando?");

alert(`Hola ${userName}, tienes ${userAge} años y ya estás aprendiendo ${userProgLang}!`);

userLikesProgLang = prompt(`¿Te gusta estudiar ${userProgLang}? Responde con el número 1 para SÍ o 2 para NO.`);

if (userLikesProgLang == 1) {
    alert("¡Muy bien! Sigue estudiando y tendrás mucho éxito.");
} else {
    alert("Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?");
}