document.addEventListener("DOMContentLoaded", function () {
    var button = document.querySelector("button");
    var buttonReset = document.querySelector(".btn-reset");
    var input = document.querySelector("input");
    var taskList = document.queryCommandEnabled("li")
    buttonReset.addEventListener("click", function () {
        location.reload()
    })
    button.addEventListener("click", function () {

        var inputValue = input.value;
        if (inputValue.length > 50 || inputValue == "") {
            alert("Zadanie jest za długie, lub nie zawiera zawartości. Zmień to !")
        } else {
            var ul = document.querySelector("ul");
            var li = document.createElement("li");
            ul.appendChild(li).innerHTML = "&#9733;" + "&nbsp;" + inputValue;
            ul.appendChild(li).addEventListener("click", function () {
                this.classList.add("deleted");
            })
        }
    });
})
