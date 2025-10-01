const videos = [
  { title: "Sample Video 1", url: "https://my-videos-bucket1.s3.us-east-1.amazonaws.com/WIN_20210829_00_21_05_Pro.jpg" },
  { title: "Sample Video 2", url: "https://my-videos-bucket1.s3.us-east-1.amazonaws.com/WIN_20210910_22_31_06_Pro.jpg" }
];

function loadVideos() {
  const container = document.getElementById("videos");

  videos.forEach(video => {
    const card = document.createElement("div");
    card.className = "card";

    const title = document.createElement("h3");
    title.textContent = video.title;

    const button = document.createElement("button");
    button.textContent = "Play";
    button.onclick = () => {
      const vid = document.createElement("video");
      vid.controls = true;
      vid.src = video.url;
      card.appendChild(vid);
      button.remove();
    };

    card.appendChild(title);
    card.appendChild(button);
    container.appendChild(card);
  });
}

loadVideos();
