const greetings = [
    "שנה טובה ומתוקה!",
    "מאחל/ת לך שנה מלאה בשמחות והצלחות.",
    "שתזכה/י לשנה מלאה בבריאות ואושר.",
    "שנה של צמיחה והגשמה עצמית."
];

const images = [
    "https://26-65.com/wp-content/uploads/gallery-upload/157xldei15pxmsdxmdep16jxknec/16jxknepineu16nxoneu/16hxmdee16dxmsdxqneq16kg15txqdeg15q/15dxnnee16dxmcdxqtek15xxlydxkdet15hxqq/img2665-30000-04252019-72dpi-700x900.jpg",
    "https://www.srugim.co.il/wp-content/uploads/2023/08/shutterstock_1539556520-640x427.jpg",
    "https://meshiv.co.il/wp-content/uploads/2024/09/%D7%AA%D7%A4%D7%95%D7%97-%D7%91%D7%93%D7%91%D7%A9.jpg",
    "https://acheinu.co.il/wp-content/uploads/2018/05/tapuhach.jpg"
];
function changeGreetingBtn() { 
const changeGreetingBtn = document.getElementById('changeGreeting');
const greetingElement = document.querySelector('#greeting h1');
const greetingImage = document.getElementById('greetingImage');


    const randomIndex = Math.floor(Math.random() * greetings.length);
    greetingElement.textContent = greetings[randomIndex];
    greetingImage.src = images[randomIndex];
    
    // שינוי צבעים באופן דינמי
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
}