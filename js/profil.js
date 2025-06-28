// Butonları al
const btntarif = document.getElementById("btn_tarif");
const btnozgecmis = document.getElementById("ozgecmis");

// Tıklanıldığında önce tüm navbar-item'lardan active'i kaldır, sonra ilgiliye ekle
btntarif.addEventListener("click", () => {
  // Tüm aktif class'ları kaldır
  document.querySelectorAll('.navbar-item').forEach(item => {
    item.classList.remove('active');
        document.getElementById("profil_ozgecmis").style.display="none";
        document.getElementById("profil_tarifler").style.display="flex";
  });

  // Butonun parent'ı olan navbar-item div'ine active class'ı ekle
  btntarif.parentElement.classList.add('active');
});

btnozgecmis.addEventListener("click", () => {
  document.querySelectorAll('.navbar-item').forEach(item => {
    item.classList.remove('active');
        document.getElementById("profil_ozgecmis").style.display="inline";  
        document.getElementById("profil_tarifler").style.display="none";

  });

  btnozgecmis.parentElement.classList.add('active');
});
