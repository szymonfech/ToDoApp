document.addEventListener("DOMContentLoaded", function () {
    //zmienne
    var button = document.querySelector("button");
    var buttonReset = document.querySelector(".btn-reset");
    var input = document.querySelector("input");
    //odswieżenie strony
    buttonReset.addEventListener("click", function () {
        location.reload()
    })
    //Po kliknieciu sprawdzenie czy jest wiecej niz 50 znakow lub czy nic nie zostalo wpisane i alert
    button.addEventListener("click", function () {

        var inputValue = input.value;
        if (inputValue.length > 50 || inputValue == "") {
            alert("Zadanie jest za długie, lub nie zawiera zawartości. Zmień to !")
        }
        // jedno klikniecie podkreslenie
        else {
            var ul = document.querySelector("ul");
            var li = document.createElement("li");
            ul.appendChild(li).innerHTML = "&#9733;" + "&nbsp;" + inputValue;
            ul.appendChild(li).addEventListener("click", function () {
                this.classList.add("deleted");
            })
            // dwa klikniecia usunięcie
            ul.appendChild(li).addEventListener("dblclick", function () {
                ul.removeChild(this)
            })

        }
    });
})
