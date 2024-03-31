import "./bootstrap";

Echo.channel("user-notifications").listen("UserSessionChanged", e => {
  Push.create("TABANTAJ", {
    body: e.message,
    icon:
      "https://media.licdn.com/dms/image/C560BAQEAAuwsMNj7PQ/company-logo_200_200/0/1648073467411/tabantaj_logo?e=2147483647&v=beta&t=_qmqbkyFGaUr6pZAW9UXk7NE6zowZLlgSyNs-YSf_QI",
    timeout: 4000, // Notification will close after 4 seconds
    onClick: function() {
      // Handle notification click event if needed
      window.focus();
      this.close();
    }
  });
});
