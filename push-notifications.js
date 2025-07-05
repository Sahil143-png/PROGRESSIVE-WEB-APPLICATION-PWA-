if ("Notification" in window && navigator.serviceWorker) {
  Notification.requestPermission().then(permission => {
    if (permission === "granted") {
      navigator.serviceWorker.ready.then(reg => {
        reg.showNotification("Welcome to PWA Shop!", {
          body: "Enjoy offline shopping experience!",
          icon: "icons/icon-192x192.png"
        });
      });
    }
  });
}
