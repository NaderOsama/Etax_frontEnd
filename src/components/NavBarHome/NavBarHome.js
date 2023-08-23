import logo from "../../assets/logo/eTaxNewLogo.svg";
import ButtonHome from "../ButtonHome/ButtonHome";
const NavBarHome = () => {
  const handleLogout = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch("http://127.0.0.1:8000/api/logout", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`, // Include the token in the headers
        },
      });

      if (response.ok) {
        localStorage.removeItem("token");

        // Logout successful
        window.location.href = "/"; // Redirect to the home page or login page
      } else {
        // Handle logout error
        console.error("Error logging out");
      }
    } catch (error) {
      console.error("An error occurred during logout", error);
    }
  };

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="row justify-content-center">
        <div className="col-2">
          <img className="logo" src={logo} alt="" />
        </div>
        <div className="col-lg-10">
          <ul className="navbar-nav ms-auto mb-lg-0">
            <li className="nav-item ">
              <a className="nav-link active" aria-current="page" href="/">
                الرئيسية
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                خدماتنا
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                من نحن
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                مرحبا , يوسف حسين
              </a>
            </li>
            <form>
              <ButtonHome title={"تسجيل الخروج"} action={handleLogout} />
            </form>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBarHome;
