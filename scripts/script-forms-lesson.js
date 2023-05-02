function show() {
    let day = new Date();
    let inputInfo = document.querySelector("#idName");
    let name = inputInfo.value;

    document.body.innerHTML = `
        <h1> Congratulations ${name} by your first JS script! </h1>
        <p> Manaus, ${day.toLocaleDateString()}, to ${day.getHours()}h:${day.getMinutes()}m:${day.getSeconds()}s </p>
    `
}
