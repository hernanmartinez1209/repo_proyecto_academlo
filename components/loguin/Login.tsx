// import styleHome from "../styles/stylesHome.css";
// import '../styles/login.module.css';

export const Login = () => {
  return (
    <div className="login_principal">
      <picture className="img_bg">
        <img src="../Rectangle 133.jpg" alt="" width={'500px'} />
      </picture>
      <div className="from_login">
        <picture className="logo">
          <img src="../logo_para_cuando.jpg" alt="" />
        </picture>
        <h1 className="title_principal">Login</h1>
        <p className="p_from">
          Login with the data you entered during your registration.
        </p>
        <form action="">
          <label htmlFor="email" className="label_email">
            Email
          </label>
          <input className="input_email" type="text" />
          <label htmlFor="password" className="label_password">
            Password
          </label>
          <input className="input_password" type="password" />
          <button className="btn_Login">Login</button>
        </form>
        <p className="p2_login">Did you forget your password?</p>
      </div>
    </div>
  );
};
