const videoContainer = document.getElementById("videoContainer");
const container = document.querySelector(".container");

// قائمة الفيديوهات حسب التصنيف
const videos = {
  boy: [
    { url: "https://www.w3schools.com/html/mov_bbb.mp4", description: "Boy Video 1" }
  ],
  girls: [
    { url: "https://www.w3schools.com/html/movie.mp4", description: "Girls Video 1" }
  ],
  love: [
    { url: "https://samplelib.com/lib/preview/mp4/sample-5s.mp4", description: "Love Video 1" }
  ],
  funny: [
    { url: "https://www.w3schools.com/html/mov_bbb.mp4", description: "Funny Video 1" }
  ],
  respect: [
    { url: "https://www.w3schools.com/html/movie.mp4", description: "Respect Video 1" }
  ],
  bankai: [
    { url: "https://samplelib.com/lib/preview/mp4/sample-5s.mp4", description: "Bankai Video 1" }
  ]
};

// عرض الفيديوهات بناءً على التصنيف
function showVideos(category) {
  const selectedVideos = videos[category];
  videoContainer.innerHTML = ""; // مسح المحتوى السابق

  if (selectedVideos) {
    selectedVideos.forEach(video => {
      const videoElement = `
        <div>
          <h3>${video.description}</h3>
          <video controls>
            <source src="${video.url}" type="video/mp4">
            Your browser does not support the video tag.
          </video>
        </div>
      `;
      videoContainer.innerHTML += videoElement;
    });
  } else {
    videoContainer.innerHTML = "<p>لا توجد فيديوهات متاحة لهذا التصنيف.</p>";
  }
}

// إخفاء الفيديوهات عند الضغط على الزر
function hideVideos() {
  videoContainer.innerHTML = "<p>اضغط على أي تصنيف لعرض الفيديوهات</p>";
}

// زر الإغلاق لإخفاء القائمة
function hideMenu() {
  const container = document.querySelector(".container");
  container.style.display = "none"; // إخفاء القائمة
}

// عرض القائمة مجددًا (يمكنك استخدام هذا حسب حاجتك)
function showMenu() {
  const container = document.querySelector(".container");
  container.style.display = "block"; // إظهار القائمة
}

// تعديل زر الإغلاق ليخفي القائمة
document.getElementById("close").addEventListener("click", hideMenu);


// إخفاء القائمة عند الضغط على زر "Close"
function hideMenu() {
  const container = document.querySelector(".container");
  container.style.display = "none"; // إخفاء القائمة
  document.getElementById("show").style.display = "block"; // إظهار زر "Show Menu"
}

// إظهار القائمة عند الضغط على زر "Show Menu"
function showMenu() {
  const container = document.querySelector(".container");
  container.style.display = "block"; // إظهار القائمة
  document.getElementById("show").style.display = "none"; // إخفاء زر "Show Menu"
}

// ربط الأزرار بوظائفها
document.getElementById("close").addEventListener("click", hideMenu);
document.getElementById("show").addEventListener("click", showMenu);
