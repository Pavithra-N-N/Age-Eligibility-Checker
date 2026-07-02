function checkAge() {

    let age = document.getElementById("age").value;
    let result = document.getElementById("result");

    if (age === "") {
        result.innerText = "⚠️ Please enter your age";
        return;
    }

    age = Number(age);

    if (age < 0) {
        result.innerText = "⚠️ Invalid age";
    }
    else if (age < 5) {
        result.innerText = "👶 Too young for school";
    }
    else if (age < 18) {
        result.innerText = "🎓 School student (Not eligible to vote/drive)";
    }
    else if (age < 60) {
        result.innerText = "✅ Eligible to vote and drive";
    }
    else {
        result.innerText = "👴 Senior citizen";
    }
}

// DARK MODE TOGGLE
function toggleMode() {
    document.body.classList.toggle("dark-mode");
}