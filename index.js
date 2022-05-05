getTimer();
setInterval(getTimer, 1000);

function getTimer(){ // date - 'month day year'    
    let date = new Date('05 06 2022 00:00:00');
    let now = new Date();

    let timer = date - now;

    let days = Math.floor(timer / 1000 / 60 / 60 / 24);
    let hours = Math.floor(timer / 1000 / 60 / 60) % 24;
    let minutes = Math.floor(timer / 1000 / 60) % 60;
    let seconds = Math.floor(timer / 1000) % 60;

    function addZero(num){
        return num <= 9 ? '0' + num : num
    }

    document.querySelector('.days-value').textContent = addZero(days);
    document.querySelector('.hours-value').textContent = addZero(hours);
    document.querySelector('.minutes-value').textContent = addZero(minutes);
    dgiocument.querySelector('.seconds-value').textContent = addZero(seconds);

    // function declOfNum(number, words) {  
    //     return words[(number % 100 > 4 && number % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(number % 10 < 5) ? Math.abs(number) % 10 : 5]];
    // }
    // console.log(declOfNum(seconds, ['секунда', 'секунды', 'секунд']))
};







