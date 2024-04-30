document.addEventListener("DOMContentLoaded", function() {
    var intro = document.querySelector("#intro");
    var ranMliSeconds = Math.floor(Math.random() * (1000 , 3000));

    intro.style.opacity = 1;
    setTimeout(() => {
        intro.style.opacity = 0;
    }, ranMliSeconds);

    setTimeout(() => {
        intro.style.display = "none"
    }, ranMliSeconds + 500);
});

var cnBtn = document.querySelector("#cn-btn button");
var createNotes = document.querySelector(".create-notes");
var notesCon = document.querySelector("#notes-con");
var cnHeading = document.querySelector(".cn-heading");
var cnCont = document.querySelector(".cn-cont");
var emptyContErr = document.querySelector("#emptyContErr");
var menu = document.querySelector("#menu");
var main = document.querySelector("#main");

var flag = 1;
var flag2 = true;
var flag3 = true;

document.querySelector("#cn-btn").addEventListener("click", function () {
    createNotes.style.transform = `translate(-50%, -50%) scale(1)`;
});

add.addEventListener("click", function () {
    if (cnHeading.value == "" || cnCont.value == "") {
        emptyContErr.style.transform = `translate(-50%, -50%) scale(1)`;
        setTimeout(() => {
            emptyContErr.style.transform = `translate(-50%, -50%) scale(0)`;
        }, 3000);
    }
    else {
        var inputHeading = cnHeading.value;
        var inputCont = cnCont.value;
        cnHeading.value = "";
        cnCont.value = "";

        var note = document.createElement("div");
        var noteHeading = document.createElement("h4");
        var noteCont = document.createElement("p");
        var noteOpt = document.createElement("img");
        var delNote = document.createElement("img");
        var shareNote = document.createElement("img");
        var copyNote = document.createElement("img");
        var colorNote = document.createElement("img");


        note.classList.add("note");
        noteHeading.classList.add("note-heading");
        noteCont.classList.add("note-cont");
        noteOpt.classList.add("noteOpt")
        delNote.classList.add("delNote");
        shareNote.classList.add("shareNote");
        copyNote.classList.add("copyNote");
        colorNote.classList.add("colorNote");

        noteHeading.innerHTML = inputHeading;
        noteCont.innerHTML = inputCont;
        noteOpt.src =
          "https://www.freeiconspng.com/thumbs/options-icon/options-icon-30.png";
        delNote.src =
          "https://static-00.iconduck.com/assets.00/delete-icon-1864x2048-bp2i0gor.png";
        shareNote.src =
          "https://cdn3.iconfinder.com/data/icons/virtual-notebook/16/button_share-512.png";
        copyNote.src =
          "https://cdn-icons-png.flaticon.com/512/1621/1621635.png";
        colorNote.src =
          "https://cdn.icon-icons.com/icons2/1674/PNG/512/colorpalette_111062.png";

        note.appendChild(noteHeading);
        note.appendChild(noteCont);
        note.appendChild(noteOpt);
        note.appendChild(delNote);
        note.appendChild(shareNote);
        note.appendChild(copyNote);
        note.appendChild(colorNote);
        notesCon.appendChild(note);
        createNotes.style.transform = `translate(-50%, -50%) scale(0)`;
         delNote.style.opacity = "0";
         shareNote.style.opacity = "0";
         copyNote.style.opacity = "0";
         colorNote.style.opacity = "0";

        var colors = document.createElement("div")
        var red = document.createElement("div")
        var green = document.createElement("div")
        var blue = document.createElement("div")

        colors.classList.add("colors")
        red.classList.add("red")
        green.classList.add("green")
        blue.classList.add("blue")

        colors.appendChild(red)
        colors.appendChild(green)
        colors.appendChild(blue)
        note.appendChild(colors)

        noteOpt.addEventListener("click", function () {
            console.log("note option pe click hua", flag2);
            if (flag2 == true) {
                delNote.style.right = "24%";
                shareNote.style.right = "44%";
                copyNote.style.right = "64%";
                colorNote.style.right = "83%";
                          delNote.style.opacity = "1";
                          shareNote.style.opacity = "1";
                          copyNote.style.opacity = "1";
                          colorNote.style.opacity = "1";
                flag2 = false
            }
            else {
                delNote.style.right = "1vw";
                shareNote.style.right = "1vw";
                copyNote.style.right = "1vw";
                colorNote.style.right = "1vw";
                delNote.style.opacity = "0";
                shareNote.style.opacity = "0";
                copyNote.style.opacity = "0";
                colorNote.style.opacity = "0";

                colors.querySelectorAll("div").forEach(val => {
                    val.style.transform = "translateY(0%)"
                    val.style.opacity = "0"
                });
                flag2 = true;
            };
        });

        delNote.addEventListener("click", function () {
            notesCon.removeChild(note);
        });

        shareNote.addEventListener("click", function () {
            var headCopy = noteHeading.innerText;
            var paraCopy = noteCont.innerText;
            var copyText = `${headCopy}\n\n${paraCopy}`

            console.log(navigator.share);

            if (navigator.share) {
                navigator.share({
                    title: "This is my note, craeted on G-Notes",
                    text: copyText
                })
                    .then(() => {
                        console.log("successfull");
                    })
                    .catch((error) => {
                        console.error("unsuccessfull", error)
                    })
            }
            else {
                console.log("failed");
            }
        })

        copyNote.addEventListener("click", function () {
            var headCopy = noteHeading.innerText;
            var paraCopy = noteCont.innerText;
            var copyText = `${headCopy}\n\n${paraCopy}`

            navigator.clipboard.writeText(copyText)
            copySuccess.style.display = `block`
            setTimeout(() => {
            copySuccess.style.display = `none`
            }, 1000);
        });

        colorNote.addEventListener("click", function () {
            if (flag3 == true) {
                colors.querySelectorAll("div").forEach(function (val) {
                    val.style.opacity = "1"
                })
                red.style.transform = "translateY(-160%)"
                green.style.transform = "translateY(-275%)"
                blue.style.transform = "translateY(-400%)"
                flag3 = false
                console.log("x");
            }
            else {
                colors.querySelectorAll("div").forEach(val => {
                    val.style.transform = "translateY(0%)"
                    val.style.opacity = "0"
                });
                flag3 = true
            }
        })
        red.addEventListener("click", function() {
            noteHeading.style.backgroundColor = "#ffc9d3"
            noteCont.style.backgroundColor = "#ffc9d3"
        })
        green.addEventListener("click", function() {
            noteHeading.style.backgroundColor = "rgb(120 215 120)"
            noteCont.style.backgroundColor = "rgb(120 215 120)"
        })
        blue.addEventListener("click", function() {
            noteHeading.style.backgroundColor = "#778ed3"
            noteCont.style.backgroundColor = "#778ed3"
        })
    };
});

document.querySelector("#cancel").addEventListener("click", function () {
    createNotes.style.transform = `translate(-50%, -50%) scale(0)`;
    emptyContErr.style.transform = `translate(-50%, -50%) scale(0)`

})

document.querySelector("#flex").addEventListener("click", function () {
    if (flag > 3) {
        notesCon.style.justifyContent = "space-evenly"
        flag = 1
    }
    else if (flag == "1") {
        notesCon.style.justifyContent = "start"
        flag++
    }
    else if (flag == "2") {
        notesCon.style.justifyContent = "center"
        flag++
    }
    else {
        notesCon.style.justifyContent = "space-between"
        flag++
    }
})

document.querySelector("#more").addEventListener("click", function () {
    menu.style.transform = `translateX(0%)`
    main.style.filter = `brightness(0.3)`
    cnBtn.style.filter = `brightness(0.3)`
    document.querySelector("#bth").addEventListener("click", function () {
        menu.style.transform = `translateX(-100%)`
        main.style.filter = `brightness(1)`
        cnBtn.style.filter = `brightness(1)`
    })
})

