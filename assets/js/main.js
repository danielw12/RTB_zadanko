let requestURL = 'assets/js/banner.json';

let request = new XMLHttpRequest();

request.open('GET', requestURL);

request.responseType = 'text';
request.send();

request.onload = function () {
    const bannerText = request.response;
    const banner = JSON.parse(bannerText);

    showOffer(banner);

    showSecondOffer(banner);
}


function showOffer(jsonObj) {
    const oferta = jsonObj['offers'];

    const firstBox = document.getElementById('box1');
    const secondBox = document.getElementById('box2');
    const thirdBox = document.getElementById('box3');
    const fourthBox = document.getElementById('box4');

    const price1 = document.createElement('p');
    const price2 = document.createElement('p');
    const price3 = document.createElement('p');
    const price4 = document.createElement('p');

    const img1 = document.createElement('img')
    const img2 = document.createElement('img')
    const img3 = document.createElement('img')
    const img4 = document.createElement('img')


    img1.src = oferta[0].imgURL;
    img2.src = oferta[1].imgURL;
    img3.src = oferta[2].imgURL;
    img4.src = oferta[3].imgURL;

    firstBox.appendChild(img1);
    secondBox.appendChild(img2);
    thirdBox.appendChild(img3);
    fourthBox.appendChild(img4);

    price1.textContent = oferta[0].price + ",00 " + oferta[0].currency;
    price2.textContent = oferta[1].price + ",00 " + oferta[1].currency;
    price3.textContent = oferta[2].price + ",00 " + oferta[2].currency;
    price4.textContent = oferta[3].price + ",00 " + oferta[3].currency;


    firstBox.appendChild(price1);
    secondBox.appendChild(price2);
    thirdBox.appendChild(price3);
    fourthBox.appendChild(price4);
}


/*skaczący border*/
setInterval(function borderek() {

    setTimeout(function () {
        $('#box1').addClass('border-jump');
    }, 0000);

    setTimeout(function () {
        $('#box1').removeClass('border-jump');
    }, 1000);

    setTimeout(function () {
        $('#box2').addClass('border-jump');
    }, 1000);

    setTimeout(function () {
        $('#box2').removeClass('border-jump');
    }, 2000);

    setTimeout(function () {
        $('#box3').addClass('border-jump');
    }, 2000);

    setTimeout(function () {
        $('#box3').removeClass('border-jump');
    }, 3000);

    setTimeout(function () {
        $('#box4').addClass('border-jump');
    }, 3000);

    setTimeout(function () {
        $('#box4').removeClass('border-jump');
    }, 4000);

}, 4000);





/*slider*/

function showSecondOffer(jsonObj) {
    const oferta = jsonObj['offers'];

    const slideImg1 = document.getElementById('firstSlide');
    const slideImg2 = document.getElementById('secondSlide');
    const slideImg3 = document.getElementById('thirdSlide');

    slideImg1.src = oferta[0].imgURL;
    slideImg2.src = oferta[1].imgURL;
    slideImg3.src = oferta[2].imgURL;
    
    const slideName1 = document.getElementById('firstName');
    const slideName2 = document.getElementById('secondName');
    const slideName3 = document.getElementById('thirdName');
    
    slideName1.textContent = oferta[0].name;
    slideName2.textContent = oferta[1].name;
    slideName3.textContent = oferta[2].name;
    
    const price1 = document.getElementById('firstPrice');
    const price2 = document.getElementById('secondPrice');
    const price3 = document.getElementById('thirdPrice');
    
    price1.textContent = oferta[0].price + ",00 " + oferta[0].currency;
    price2.textContent = oferta[1].price + ",00 " + oferta[1].currency;
    price3.textContent = oferta[2].price + ",00 " + oferta[2].currency;
}


/* countdown */ 
let end = new Date('04/14/2020 09:10 PM');

let _second = 1000;
let _minute = _second * 60;
let _hour = _minute * 60;
let _day = _hour * 24;
let timer;

function showRemaining() {
    let now = new Date();
    let distance = end - now;
    if (distance < 0) {

        clearInterval(timer);
        document.getElementById('countdown').innerHTML = 'KONIEC PROMOCJI!';

        return;
    }


    let days = Math.floor(distance / _day);

    if (days < 10) {
        days = "0" + days;

    };

    let fullDays = days + 'days - ';

    if (days == '00') {
        fullDays = '';
    };



    let hours = Math.floor((distance % _day) / _hour);

    if (hours < 10) {
        hours = "0" + hours;

    };

    let fullHours = hours + 'hours - ';
    if ((days == '00') && (hours == '00')) {
        fullHours = '';
    };



    let minutes = Math.floor((distance % _hour) / _minute);
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    document.getElementById('countdown').innerHTML = 'Do końca pozostało: ' + fullDays + fullHours + minutes + 'min';

}

timer = setInterval(showRemaining, 1000);