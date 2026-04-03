// Playlist embed module

// Embed Spotify playlist
function embedSpotify() {
  const raw = document.getElementById("spotify-url").value.trim();
  if (!raw) return;
  let embedUrl = raw;
  try {
    const url = new URL(raw);
    embedUrl = url.pathname.startsWith("/embed")
      ? raw
      : "https://open.spotify.com/embed" + url.pathname;
  } catch (_) {
    alert("Please enter a valid Spotify URL.");
    return;
  }

  document.getElementById("spotify-embed").innerHTML =
    `<iframe src="${embedUrl}?utm_source=generator&theme=0"
      width="100%" height="380"
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy" style="border-radius:6px;"></iframe>`;
  document.getElementById("spotify-playlist-name").textContent =
    "Spotify Playlist";
}

// Embed Apple Music playlist
function embedApple() {
  const raw = document.getElementById("apple-url").value.trim();
  if (!raw) return;
  let embedUrl = raw;
  try {
    const url = new URL(raw);
    if (url.hostname === "music.apple.com") {
      embedUrl =
        "https://embed" + url.href.slice(url.href.indexOf(".apple.com"));
    } else if (url.hostname !== "embed.music.apple.com") {
      alert("Please enter a valid Apple Music URL (music.apple.com/…)");
      return;
    }
  } catch (_) {
    alert("Please enter a valid Apple Music URL.");
    return;
  }

  document.getElementById("apple-embed").innerHTML =
    `<iframe allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
      frameborder="0" height="450"
      style="width:100%;overflow:hidden;border-radius:6px;background:transparent;"
      sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
      src="${embedUrl}"></iframe>`;
  document.getElementById("apple-playlist-name").textContent =
    "Apple Music Playlist";
}

// Setup playlist listeners
function initPlaylistListeners() {
  const spotifyUrlInput = document.getElementById("spotify-url");
  const appleUrlInput = document.getElementById("apple-url");

  if (spotifyUrlInput) {
    spotifyUrlInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") embedSpotify();
    });
  }

  if (appleUrlInput) {
    appleUrlInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") embedApple();
    });
  }
}

// Initialize on page load
document.addEventListener("DOMContentLoaded", initPlaylistListeners);
