document.addEventListener("click", async (e) => {
  const logoutBtn = e.target.closest(".logout-btn");
  if (!logoutBtn) return;

  e.preventDefault();
  console.log("🔥 Logout clicked");

  try {
    await fetch("/api/admin/logout", {
      method: "POST",
      credentials: "include",
    });
  } catch (err) {
    console.error("Logout error:", err);
  }

  window.location.replace("/admin/login.html");
});
