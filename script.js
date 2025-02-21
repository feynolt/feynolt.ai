const frames = [
  {
    id: 1,
    video: "https://static.cdn-luma.com/files/981e483f71aa764b/Company%20Thing%20Exported.mp4",
    corner: "https://static.cdn-luma.com/files/bcf576df9c38b05f/1_corner_update.png",
    edgeHorizontal: "https://static.cdn-luma.com/files/bcf576df9c38b05f/1_vert_update.png",
    edgeVertical: "https://static.cdn-luma.com/files/bcf576df9c38b05f/1_hori_update.png",
  },
  {
    id: 2,
    video: "https://static.cdn-luma.com/files/58ab7363888153e3/WebGL%20Exported%20(1).mp4",
    corner: "https://static.cdn-luma.com/files/bcf576df9c38b05f/2_corner_update.png",
    edgeHorizontal: "https://static.cdn-luma.com/files/bcf576df9c38b05f/2_vert_update.png",
    edgeVertical: "https://static.cdn-luma.com/files/bcf576df9c38b05f/2_hori_update.png",
  },
  {
    id: 3,
    video: "https://static.cdn-luma.com/files/58ab7363888153e3/Jitter%20Exported%20Poster.mp4",
    corner: "https://static.cdn-luma.com/files/3d36d1e0dba2476c/3_Corner_update.png",
    edgeHorizontal: "https://static.cdn-luma.com/files/3d36d1e0dba2476c/3_hori_update.png",
    edgeVertical: "https://static.cdn-luma.com/files/3d36d1e0dba2476c/3_Vert_update.png",
  },
  {
    id: 4,
    video: "https://static.cdn-luma.com/files/58ab7363888153e3/Exported%20Web%20Video.mp4",
    corner: "https://static.cdn-luma.com/files/9e67e05f37e52522/4_corner_update.png",
    edgeHorizontal: "https://static.cdn-luma.com/files/9e67e05f37e52522/4_hori_update.png",
    edgeVertical: "https://static.cdn-luma.com/files/9e67e05f37e52522/4_vert_update.png",
  },
  {
    id: 5,
    video: "https://static.cdn-luma.com/files/58ab7363888153e3/Logo%20Exported.mp4",
    corner: "https://static.cdn-luma.com/files/9e67e05f37e52522/5_corner_update.png",
    edgeHorizontal: "https://static.cdn-luma.com/files/9e67e05f37e52522/5_hori_update.png",
    edgeVertical: "https://static.cdn-luma.com/files/9e67e05f37e52522/5_verti_update.png",
  },
  {
    id: 6,
    video: "https://static.cdn-luma.com/files/58ab7363888153e3/Animation%20Exported%20(4).mp4",
    corner: "https://static.cdn-luma.com/files/1199340587e8da1d/6_corner.png",
    edgeHorizontal: "https://static.cdn-luma.com/files/1199340587e8da1d/6_corner-1.png",
    edgeVertical: "https://static.cdn-luma.com/files/1199340587e8da1d/6_vert.png",
  },
  {
    id: 7,
    video: "https://static.cdn-luma.com/files/58ab7363888153e3/Illustration%20Exported%20(1).mp4",
    corner: "https://static.cdn-luma.com/files/b80b5aa00ccc33bd/7_corner.png",
    edgeHorizontal: "https://static.cdn-luma.com/files/b80b5aa00ccc33bd/7_hori.png",
    edgeVertical: "https://static.cdn-luma.com/files/b80b5aa00ccc33bd/7_vert.png",
  },
  {
    id: 8,
    video: "https://static.cdn-luma.com/files/58ab7363888153e3/Art%20Direction%20Exported.mp4",
    corner: "https://static.cdn-luma.com/files/981e483f71aa764b/8_corner.png",
    edgeHorizontal: "https://static.cdn-luma.com/files/981e483f71aa764b/8_hori.png",
    edgeVertical: "https://static.cdn-luma.com/files/981e483f71aa764b/8_verticle.png",
  },
  {
    id: 9,
    video: "https://static.cdn-luma.com/files/58ab7363888153e3/Product%20Video.mp4",
    corner: "https://static.cdn-luma.com/files/981e483f71aa764b/9_corner.png",
    edgeHorizontal: "https://static.cdn-luma.com/files/981e483f71aa764b/9_hori.png",
    edgeVertical: "https://static.cdn-luma.com/files/981e483f71aa764b/9_vert.png",
  },
]

const grid = document.getElementById("grid")
const showFramesCheckbox = document.getElementById("showFrames")
const autoplayAllCheckbox = document.getElementById("autoplayAll")

function createFrame(frame) {
  const frameElement = document.createElement("div")
  frameElement.className = "frame"
  frameElement.innerHTML = `
        <video src="${frame.video}" loop muted ${autoplayAllCheckbox.checked ? "autoplay" : ""}>
        <div class="frame-border">
            <img src="${frame.corner}" class="corner-tl">
            <img src="${frame.corner}" class="corner-tr">
            <img src="${frame.corner}" class="corner-bl">
            <img src="${frame.corner}" class="corner-br">
            <div class="edge-top" style="background-image: url(${frame.edgeHorizontal})"></div>
            <div class="edge-bottom" style="background-image: url(${frame.edgeHorizontal})"></div>
            <div class="edge-left" style="background-image: url(${frame.edgeVertical})"></div>
            <div class="edge-right" style="background-image: url(${frame.edgeVertical})"></div>
        </div>
    `

  const video = frameElement.querySelector("video")
  const frameBorder = frameElement.querySelector(".frame-border")

  frameElement.addEventListener("mouseenter", () => {
    frameElement.style.transform = "scale(1.1)"
    if (!autoplayAllCheckbox.checked) {
      video.play()
    }
    if (showFramesCheckbox.checked) {
      frameBorder.style.opacity = "1"
    }
  })

  frameElement.addEventListener("mouseleave", () => {
    frameElement.style.transform = "scale(1)"
    if (!autoplayAllCheckbox.checked) {
      video.pause()
    }
    frameBorder.style.opacity = "0"
  })

  return frameElement
}

function initializeGrid() {
  grid.innerHTML = ""
  frames.forEach((frame) => {
    const frameElement = createFrame(frame)
    grid.appendChild(frameElement)
  })
}

showFramesCheckbox.addEventListener("change", () => {
  const frameBorders = document.querySelectorAll(".frame-border")
  frameBorders.forEach((border) => {
    border.style.opacity = showFramesCheckbox.checked ? "1" : "0"
  })
})

autoplayAllCheckbox.addEventListener("change", () => {
  const videos = document.querySelectorAll("video")
  videos.forEach((video) => {
    if (autoplayAllCheckbox.checked) {
      video.play()
    } else {
      video.pause()
    }
  })
})

initializeGrid()

