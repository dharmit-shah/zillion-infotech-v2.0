// Custom Cursor
var cursor = document.querySelector('.cursor');
var cursorinner = document.querySelector('.cursor2');
var a = document.querySelectorAll('a');
document.addEventListener('mousemove', function (e) { var x = e.clientX; var y = e.clientY; cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)` });
document.addEventListener('mousemove', function (e) { var x = e.clientX; var y = e.clientY; cursorinner.style.left = x + 'px'; cursorinner.style.top = y + 'px'; });
document.addEventListener('mousedown', function () { cursor.classList.add('click'); cursorinner.classList.add('cursorinnerhover') });
document.addEventListener('mouseup', function () { cursor.classList.remove('click'); cursorinner.classList.remove('cursorinnerhover') });
a.forEach(item => { item.addEventListener('mouseover', () => { cursor.classList.add('hover'); }); item.addEventListener('mouseleave', () => { cursor.classList.remove('hover'); }); });

// Numbers Counter
$(".counter").each(function () {
    var $this = $(this),
        countTo = $this.attr("data-countto");
    countDuration = parseInt($this.attr("data-duration"));
    $({ counter: $this.text() }).animate(
        { counter: countTo },
        { duration: countDuration, easing: "linear", step: function () { $this.text(Math.floor(this.counter)); }, complete: function () { $this.text(this.counter); } }
    );
});

// Progress Bar
$(document).ready(function () { progress_bar(); });
function progress_bar() {
    var speed = 30;
    var items = $('.progress_bar').find('.progress_bar_item');
    items.each(function () {
        var item = $(this).find('.progress');
        var itemValue = item.data('progress');
        var i = 0;
        var value = $(this);
        var count = setInterval(function () {
            if (i <= itemValue) { var iStr = i.toString(); item.css({ 'width': iStr + '%' }); value.find('.item_value').html(iStr + '%'); }
            else { clearInterval(count); }
            i++;
        }, speed);
    });
}

// phone number
function getIp(callback) {
    fetch('ipinfo.io/140.82.183.34?token=66e2f39b20a2bd', { headers: { 'Accept': 'application/json' } })
        .then((resp) => resp.json())
        .catch(() => { return { country: 'us', }; })
        .then((resp) => callback(resp.country));
}
const phoneInputField = document.querySelector("#phone");
const phoneInput = window.intlTelInput(phoneInputField, { utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js", });
function process(event) {
    event.preventDefault();
    const phoneNumber = phoneInput.getNumber();
    info.style.display = "";
    info.innerHTML = `Phone number in E.164 format: <strong>${phoneNumber}</strong>`;
}