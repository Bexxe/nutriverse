 let secim = "";

  const erkekbtn = document.getElementById("erkek");
  const kadinbtn = document.getElementById("kadin");
  const kilotext = document.getElementById("kilo");
  const boytext = document.getElementById("boy");
  const hesaplabtn = document.getElementById("hesapla");
  const modal = new bootstrap.Modal(document.getElementById('exampleModal'));

  // Nokta ve virgül girilirse otomatik siler (örn. 1.75 → 175)
  boytext.addEventListener("input", () => {
    boytext.value = boytext.value.replace(/[.,]/g, "");
  });

  erkekbtn.addEventListener("click", () => {
    erkekbtn.style.background = "white";
    erkekbtn.style.color = "#09332f";
    kadinbtn.style.background = "#09332f";
    kadinbtn.style.color = "white";
    secim = "erkek";
  });

  kadinbtn.addEventListener("click", () => {
    kadinbtn.style.background = "white";
    kadinbtn.style.color = "#09332f";
    erkekbtn.style.background = "#09332f";
    erkekbtn.style.color = "white";
    secim = "kadın";
  });

hesaplabtn.addEventListener("click", () => {
    const kilo = parseFloat(kilotext.value);
  const boyCm = parseFloat(boytext.value);
  if (!kilo || !boyCm || secim === "") {
    modal.show(); // bootstrap modal'ı aç
    return;
  }
  else{
      document.getElementById("image_null").style.display = "none";
  document.getElementById("image_null2").style.display = "none";
  document.getElementById("sonuc").style.display = "block";

      const boyMetre = boyCm / 100;
  const vki = kilo / (boyMetre * boyMetre);
  const vkiYuvarlanmis = vki.toFixed(1);
  let yorum = "";

  if (vki < 18.5) {
    yorum = "Zayıf";
    document.getElementById("image").src = "images/kurumsal/zayif.png";
  } else if (vki >= 18.5 && vki < 25) {
    yorum = "İdeal Kilo";
    document.getElementById("image").src = "images/kurumsal/ideal.png";
  } else if (vki >= 25 && vki < 30) {
    yorum = "Fazla Kilo";
    document.getElementById("image").src = "images/kurumsal/hafifobez.png";
  } else if (vki >= 30 && vki < 35) {
    yorum = "Obez";
    document.getElementById("image").src = "images/kurumsal/obez.png";
  } else if (vki >= 35 && vki < 40) {
    yorum = "2. Derece Obez";
    document.getElementById("image").src = "images/kurumsal/asiriobez.png";
  } else {
    yorum = "3. Derece (morbid) Obez";
    document.getElementById("image").src = "images/kurumsal/asiriobez.png";
  }

  document.getElementById("sonuc_text").innerText = yorum;
  document.getElementById("number").innerText = "Vücut Kitle İndeksiniz: " + vkiYuvarlanmis;
  }


});