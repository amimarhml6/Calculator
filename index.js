document.addEventListener("DOMContentLoaded", function () {
    let result = document.getElementById("result");
    let buttons = document.querySelectorAll("button");
    let resetOnNextInput = false;

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            let value = this.textContent;

            if (value === "C") {
                result.value = "";
                resetOnNextInput = false;
            } else if (value === "=") {
                try {
                    result.value = eval(result.value);
                    resetOnNextInput = true;
                } catch {
                    result.value = "Erreur";
                }
            } else {
                if (resetOnNextInput) {
                    result.value = value;
                    resetOnNextInput = false;
                } else {
                    result.value += value;
                }
            }
        });
    });
});
