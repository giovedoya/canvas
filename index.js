const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const snowFlake =  {
        x: 50,
        y: 50,
        width: 20,
        height: 20
    }


const santa = {
    x: 600,
    y: 300,
    width: 300,
    height: 300
}

const snow = {
    x: 0,
    y: 300,
    width: 1000,
    height: 300
}

const clouds =[
    {
        x: 650,
        y: 40,
        width: 300,
        height: 300
    },
    {
        x: 300,
        y: 40,
        width: 200,
        height: 200
    },
    {
        x: 10,
        y: 30,
        width: 300,
        height: 300
    },
    {
        x: 400,
        y: 0,
        width: 200,
        height: 200
    }
]
const cloudTwo = {
    x: 220,
    y: 30,
    width: 500,
    height: 300
}

const cloudThree = {
    x: 0,
    y: 20,
    width: 600,
    height: 400
}

const snowFlakeImg = new Image();
snowFlakeImg.src = './imagen/copo.png'

const santaImg = new Image();
santaImg.src = './imagen/santa.png'

const cloudTwoImg = new Image();
cloudTwoImg.src = './imagen/cloud2.png';

const cloudThreeImg = new Image();
cloudThreeImg.src = './imagen/cloud2.png';

const cloudImg = new Image();
cloudImg.src = './imagen/cloud1.png';

const snowImg = new Image();
snowImg.src = './imagen/nieve.png';


function drawElements (){   
    ctx.drawImage(cloudThreeImg, cloudThree.x, cloudThree.y, cloudThree.width, cloudThree.height); 
    ctx.drawImage(cloudTwoImg, cloudTwo.x, cloudTwo.y, cloudTwo.width, cloudTwo.height);
    clouds.forEach(cloud => {
        ctx.drawImage(cloudImg, cloud.x, cloud.y, cloud.width, cloud.height);
        });
        ctx.drawImage(snowImg, snow.x, snow.y, snow.width, snow.height);
        ctx.drawImage(snowFlakeImg, snowFlake.x, snowFlake.y, snowFlake.width, snowFlake.height);
        ctx.drawImage(santaImg, santa.x, santa.y, santa.width, santa.height);       
}
window.onload = drawElements;

function moveCloud(){
    ctx.clearRect(0, 0, 1000, 600)
    cloudTwo.x = cloudTwo.x + 10;
    if(cloudTwo.x > 1000){
        cloudTwo.x = 50 - cloudTwo.width;
    }
    drawElements();
}
function moveCloud2(){
    ctx.clearRect(0, 0, 1000, 600)
    cloudThree.x = cloudThree.x - 10;
    if(cloudThree.x < -600){
        cloudThree.x = 500 + cloudThree.width;
    }
    drawElements();
}


 setInterval(moveCloud, 120);
 setInterval(moveCloud2, 120);