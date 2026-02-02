export function adminAuth(req, res, next) {
  if (!req.session || !req.session.admin) {
    return res.redirect("/admin/login.html");
  }
  next();
}
