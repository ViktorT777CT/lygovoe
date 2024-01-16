window.addEventListener("DOMContentLoaded", function() {
    [].forEach.call( document.querySelectorAll('.tel'), function(input) {
        let keyCode;
        function mask(event) {
            event.keyCode && (keyCode = event.keyCode);
            let pos = this.selectionStart;
            if (pos < 3) event.preventDefault();
            let matrix = "+7 (___) ___ ____",
                i = 0,
                def = matrix.replace(/\D/g, ""),
                val = this.value.replace(/\D/g, ""),
                new_value = matrix.replace(/[_\d]/g, function(a) {
                    return i < val.length ? val.charAt(i++) || def.charAt(i) : a
                });
            i = new_value.indexOf("_");
            if (i != -1) {
                i < 5 && (i = 3);
                new_value = new_value.slice(0, i)
            }
            let reg = matrix.substr(0, this.value.length).replace(/_+/g,
                function(a) {
                    return "\\d{1," + a.length + "}"
                }).replace(/[+()]/g, "\\$&");
            reg = new RegExp("^" + reg + "$");
            if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
            if (event.type == "blur" && this.value.length < 5)  this.value = ""
        }

        input.addEventListener("input", mask, false);
        input.addEventListener("focus", mask, false);
        input.addEventListener("blur", mask, false);
        input.addEventListener("keydown", mask, false)

    });

});
let header = document.querySelector('#fixed_menu-bg')
document.addEventListener('scroll', function() {
    if (window.pageYOffset >= 1) {
        header.classList.add('fixed_menu-bg')
    }
    else {
        header.classList.remove('fixed_menu-bg')
    }
});
function success1() {
    let id1 = document.getElementById('tel1');
    let id2 = document.getElementById("name1");
    let id3 = document.getElementById("button1");
    let id4 = document.getElementById("check1");
    if( id1.value === "") {
        id1.classList.add("border_red");
    } else {
        id1.classList.remove("border_red");
    };
    if(id2.value==="") {
        id2.classList.add("border_red");
    } else {
        id2.classList.remove("border_red");
    };
    if(id1.value==="" || id2.value==="" || !id4.checked) {
        id3.disabled = true;
    } else {
        id3.disabled = false;
    };
};
function success3() {
    let id1 = document.getElementById('tel3');
    let id2 = document.getElementById("name3");
    let id3 = document.getElementById("button3");
    let id4 = document.getElementById("check3");
    if( id1.value==="") {
        id1.classList.add("border_red");
    } else {
        id1.classList.remove("border_red");
    };
    if(id2.value==="") {
        id2.classList.add("border_red");
    } else {
        id2.classList.remove("border_red");
    };
    if(id1.value==="" || id2.value==="" || !id4.checked) {
        id3.disabled = true;
    } else {
        id3.disabled = false;
    };
};