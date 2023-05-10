function sayHello() {
    console.log("hello world!");
}

sayHello();
sayHello();

function getSum(a, b) {
    return a + b;
}

let sum = getSum(7, 8);

console.log(sum);

const menuToggler = function () {
    this.toggled = !this.toggled;
    console.log("toggled", this.toggled);
}

menuToggler.toggled = false;

menuToggler();
menuToggler();
menuToggler();

console.log(document);


document.addEventListener("DOMContentLoaded", () => {

    const button = document.getElementById("clicker");

    let count = 0;

    const onHandleCliked = function () {
        // if (count > 10) {
        //     return;
        // }
        count = count + 1;
        if (count > 10) {
            button.style.backgroundColor = "red";
            button.removeEventListener("click", onHandleCliked);
        }

        console.log("clicked", count);
    }

    button.addEventListener("click", onHandleCliked);

    console.log(button);

    const paragraph = document.querySelector('.english');

    document.body.classList.add(window.innerWidth > 900 ? "desktop" : "mobile");

    window.addEventListener("resize", function (event) {
        const width = event.target.innerWidth;

        if (width > 900) {
            paragraph.style.display = "none";
            document.body.classList.remove("mobile");
            document.body.classList.add("desktop");

        } else {
            paragraph.style.display = "block";
            document.body.classList.add("mobile");
            document.body.classList.remove("desktop");
        }
    });
    const move = document.querySelector(".move");
    move.style.position = "absolute";
    move.style.transition = "all 10ms ease"

    document.addEventListener("mousemove", function (event) {

        move.style.top = event.offsetY + "px";
        move.style.left = event.offsetX + "px";
        console.log(event.offsetX, event.offsetY);
    });
});
