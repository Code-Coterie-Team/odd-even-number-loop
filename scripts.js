function checkOddEven() {
    let input = document.getElementById("user-input").value;
    for (let i = 0; i <= input; i++) {
        if (i % 2 === 0) {
            console.log(i + " EVEN");
        } else {
            console.log(i + " ODD");
        }
    }
}
