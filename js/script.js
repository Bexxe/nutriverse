document.addEventListener("DOMContentLoaded", function() {
    const track = document.querySelector(".tarifler");
    const prevButton = document.getElementById("prev-slide");
    const nextButton = document.getElementById("next-slide");
    const cards = document.querySelectorAll(".tarif-item");

    if (!track || !prevButton || !nextButton || cards.length === 0) {
        console.error("Slider elemanları bulunamadı!");
        return;
    }

    let currentIndex = 0;
    let slideWidth = 0; // Metrikleri hesaplamak için başlangıç değeri
    let maxIndex = 0;   // Ulaşılabilecek maksimum index

    // Slider'ın boyutlarını hesaplayan fonksiyon
    function updateSliderMetrics() {
        // Kartın genişliğini ve aradaki boşluğu (gap) hesapla
        const cardWidth = cards[0].offsetWidth;
        const gap = parseInt(window.getComputedStyle(track).getPropertyValue('gap')) || 0;
        slideWidth = cardWidth + gap;

        // Ekranda kaç tane tam kartın göründüğünü hesapla
        // `track.parentElement` slider'ın görünebilir alanıdır (.tarifler-viewport).
        const viewportWidth = track.parentElement.offsetWidth;
        const visibleCards = Math.floor(viewportWidth / slideWidth);

        // Ulaşılabilecek en son indeksi belirle. Bu, slider'ın sonunda boşluk kalmasını engeller.
        // Eğer her zaman tek tek sona kadar gitmesi isteniyorsa bu satır: maxIndex = cards.length - 1; olabilir.
        maxIndex = cards.length - visibleCards;
        
        // Eğer kart sayısı ekrana sığandan azsa, butonları tamamen gizle veya devre dışı bırak
        if (cards.length <= visibleCards) {
            maxIndex = 0; // Kaydırma olmayacak
            prevButton.style.display = 'none';
            nextButton.style.display = 'none';
        } else {
            prevButton.style.display = 'block';
            nextButton.style.display = 'block';
        }

        // Mevcut index maxIndex'ten büyükse, başa dönmesini engellemek için düzelt
        if (currentIndex > maxIndex) {
            currentIndex = maxIndex;
        }

        slide(); // Yeni hesaplamalarla slider'ı güncelle
    }

    // Butonların durumunu (aktif/pasif) güncelleyen fonksiyon
    function updateButtons() {
        prevButton.disabled = currentIndex === 0;
        nextButton.disabled = currentIndex >= maxIndex;
    }

    // Slider'ı kaydıran ana fonksiyon
    function slide() {
        // translateX ile track elementini kaydır
        const newTransform = -currentIndex * slideWidth;
        track.style.transform = `translateX(${newTransform}px)`;
        updateButtons();
    }

    // Sonraki butona tıklandığında
    nextButton.addEventListener("click", () => {
        if (currentIndex < maxIndex) {
            currentIndex++;
            slide();
        }
    });

    // Önceki butona tıklandığında
    prevButton.addEventListener("click", () => {
        if (currentIndex > 0) {
            currentIndex--;
            slide();
        }
    });

    // Pencere yeniden boyutlandırıldığında tüm hesaplamaları baştan yap
    window.addEventListener('resize', updateSliderMetrics);
    
    // Sayfa ilk yüklendiğinde hesaplamaları yap
    updateSliderMetrics();
}); 


document.addEventListener("DOMContentLoaded", function() {
    const track3 = document.querySelector(".diyetisyenler");
    const prevButton3 = document.getElementById("prev-diyetisyen");
    const nextButton3 = document.getElementById("next-diyetisyen");
    const cards3 = document.querySelectorAll(".diyet-item");

    if (!track3 || !prevButton3 || !nextButton3 || cards3.length === 0) {
        console.error("Slider elemanları bulunamadı!");
        return;
    }

    let currentIndex3 = 0;
    let slideWidth3 = 0; // Metrikleri hesaplamak için başlangıç değeri
    let maxIndex3 = 0;   // Ulaşılabilecek maksimum index

    // Slider'ın boyutlarını hesaplayan fonksiyon
    function updateSliderMetrics3() {
        // Kartın genişliğini ve aradaki boşluğu (gap) hesapla
        const cardWidth3 = cards3[0].offsetWidth;
        const gap3 = parseInt(window.getComputedStyle(track3).getPropertyValue('gap')) || 0;
        slideWidth3 = cardWidth3 + gap3;

        // Ekranda kaç tane tam kartın göründüğünü hesapla
        // `track.parentElement` slider'ın görünebilir alanıdır (.tarifler-viewport).
        const viewportWidth3 = track3.parentElement.offsetWidth;
        const visibleCards3 = Math.floor(viewportWidth3 / slideWidth3);

        // Ulaşılabilecek en son indeksi belirle. Bu, slider'ın sonunda boşluk kalmasını engeller.
        // Eğer her zaman tek tek sona kadar gitmesi isteniyorsa bu satır: maxIndex = cards.length - 1; olabilir.
        maxIndex3 = cards3.length - visibleCards3;
        
        // Eğer kart sayısı ekrana sığandan azsa, butonları tamamen gizle veya devre dışı bırak
        if (cards3.length <= visibleCards3) {
            maxIndex3 = 0; // Kaydırma olmayacak
            prevButton3.style.display = 'none';
            nextButton3.style.display = 'none';
        } else {
            prevButton3.style.display = 'block';
            nextButton3.style.display = 'block';
        }

        // Mevcut index maxIndex'ten büyükse, başa dönmesini engellemek için düzelt
        if (currentIndex3 > maxIndex3) {
            currentIndex3 = maxIndex3;
        }

        slide3(); // Yeni hesaplamalarla slider'ı güncelle
    }

    // Butonların durumunu (aktif/pasif) güncelleyen fonksiyon
    function updateButtons3() {
        prevButton3.disabled = currentIndex3 === 0;
        nextButton3.disabled = currentIndex3 >= maxIndex3;
    }

    // Slider'ı kaydıran ana fonksiyon
    function slide3() {
        // translateX ile track elementini kaydır
        const newTransform3 = -currentIndex3 * slideWidth3;
        track3.style.transform = `translateX(${newTransform3}px)`;
        updateButtons3();
    }

    // Sonraki butona tıklandığında
    nextButton3.addEventListener("click", () => {
        if (currentIndex3 < maxIndex3) {
            currentIndex3++;
            slide3();
        }
    });

    // Önceki butona tıklandığında
    prevButton3.addEventListener("click", () => {
        if (currentIndex3 > 0) {
            currentIndex3--;
            slide3();
        }
    });

    // Pencere yeniden boyutlandırıldığında tüm hesaplamaları baştan yap
    window.addEventListener('resize', updateSliderMetrics3);
    
    // Sayfa ilk yüklendiğinde hesaplamaları yap
    updateSliderMetrics3();
}); 



document.addEventListener("DOMContentLoaded", function() {
    const track3 = document.querySelector(".sefler");
    const prevButton3 = document.getElementById("prev-sef");
    const nextButton3 = document.getElementById("next-sef");
    const cards3 = document.querySelectorAll(".sef-item");

    if (!track3 || !prevButton3 || !nextButton3 || cards3.length === 0) {
        console.error("Slider elemanları bulunamadı!");
        return;
    }

    let currentIndex3 = 0;
    let slideWidth3 = 0; // Metrikleri hesaplamak için başlangıç değeri
    let maxIndex3 = 0;   // Ulaşılabilecek maksimum index

    // Slider'ın boyutlarını hesaplayan fonksiyon
    function updateSliderMetrics3() {
        // Kartın genişliğini ve aradaki boşluğu (gap) hesapla
        const cardWidth3 = cards3[0].offsetWidth;
        const gap3 = parseInt(window.getComputedStyle(track3).getPropertyValue('gap')) || 0;
        slideWidth3 = cardWidth3 + gap3;

        // Ekranda kaç tane tam kartın göründüğünü hesapla
        // `track.parentElement` slider'ın görünebilir alanıdır (.tarifler-viewport).
        const viewportWidth3 = track3.parentElement.offsetWidth;
        const visibleCards3 = Math.floor(viewportWidth3 / slideWidth3);

        // Ulaşılabilecek en son indeksi belirle. Bu, slider'ın sonunda boşluk kalmasını engeller.
        // Eğer her zaman tek tek sona kadar gitmesi isteniyorsa bu satır: maxIndex = cards.length - 1; olabilir.
        maxIndex3 = cards3.length - visibleCards3;
        
        // Eğer kart sayısı ekrana sığandan azsa, butonları tamamen gizle veya devre dışı bırak
        if (cards3.length <= visibleCards3) {
            maxIndex3 = 0; // Kaydırma olmayacak
            prevButton3.style.display = 'none';
            nextButton3.style.display = 'none';
        } else {
            prevButton3.style.display = 'block';
            nextButton3.style.display = 'block';
        }

        // Mevcut index maxIndex'ten büyükse, başa dönmesini engellemek için düzelt
        if (currentIndex3 > maxIndex3) {
            currentIndex3 = maxIndex3;
        }

        slide3(); // Yeni hesaplamalarla slider'ı güncelle
    }

    // Butonların durumunu (aktif/pasif) güncelleyen fonksiyon
    function updateButtons3() {
        prevButton3.disabled = currentIndex3 === 0;
        nextButton3.disabled = currentIndex3 >= maxIndex3;
    }

    // Slider'ı kaydıran ana fonksiyon
    function slide3() {
        // translateX ile track elementini kaydır
        const newTransform3 = -currentIndex3 * slideWidth3;
        track3.style.transform = `translateX(${newTransform3}px)`;
        updateButtons3();
    }

    // Sonraki butona tıklandığında
    nextButton3.addEventListener("click", () => {
        if (currentIndex3 < maxIndex3) {
            currentIndex3++;
            slide3();
        }
    });

    // Önceki butona tıklandığında
    prevButton3.addEventListener("click", () => {
        if (currentIndex3 > 0) {
            currentIndex3--;
            slide3();
        }
    });

    // Pencere yeniden boyutlandırıldığında tüm hesaplamaları baştan yap
    window.addEventListener('resize', updateSliderMetrics3);
    
    // Sayfa ilk yüklendiğinde hesaplamaları yap
    updateSliderMetrics3();
}); 