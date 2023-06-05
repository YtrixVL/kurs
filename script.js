const fname = document.getElementById('fname');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const slass = document.getElementById('slass');
const anim = document.getElementById('anim');
const db = document.getElementById('db');
const rec = document.getElementById('rec');
const foto = document.getElementById('foto');
const totalField = document.getElementById("itogo");
const submit = document.getElementById('submit');
submit.addEventListener('submit',(e)=>{
    e.preventDefault();
    let ebody = `
    <div style="justify-content: center;">
      <p><strong>Контактные данные</strong></p>
      <p><strong>ФИО:</strong> ${fname.value}</p>
      <p><strong>Почта:</strong> ${email.value}</p>
      <p><strong>Телефон:</strong> ${phone.value}</p>
      <br>
      <p><strong>Заказ</strong></p>
      <p><strong>Классификация:</strong> ${slass.value}</p>
      <p><strong>Анимации:</strong> ${anim.value}</p>
      <p><strong>Наличие базы данных:</strong> ${db.value}</p>
      <p><strong>Наличие рекламы на сайте:</strong> ${rec.value}</p>
      <p><strong>Дизайн для вёрстки:</strong> ${foto.value}</p>
      <p><strong>Примерная стоимость:</strong> ${totalField.innerText}</p>
    </div>
    `;
    Email.send({
        SecureToken : "67cfc793-957e-430e-90ff-788b1a4a81b0",
        To : 'yockbro2021@gmail.com', 
        From : "yockbro2021@gmail.com",
        Subject : "PROWEB",
        Body : ebody
    }).then(
      message => alert(message)
    );
});
const calcBtn = document.getElementById("calc");
const siteType = document.getElementById("slass");
const pageCount = document.getElementById("kol");
const animation = document.getElementById("anim");
const database = document.getElementById("db");
const advertising = document.getElementById("rec");
const rub = " ₽"


function calculateSiteCost() {
  const siteTypeCost = siteType.value !== "" ? 10000 * pageCount.value : 0;
  const additionalServicesCost = (animation.value === "Да" ? 500 : 0) + 
                                  (database.value === "Да" ? 500 : 0) + 
                                  (advertising.value === "Да" ? 500 : 0);
  return siteTypeCost + additionalServicesCost + rub;
}
calcBtn.addEventListener("click", (event) => {
  event.preventDefault();
  const totalCost = calculateSiteCost().replace(/.+?(?=\D|$)/, function(f) {
    return f.replace(/(\d)(?=(?:\d\d\d)+$)/g, "1.");
  });
  totalField.innerText = totalCost.toString();
});