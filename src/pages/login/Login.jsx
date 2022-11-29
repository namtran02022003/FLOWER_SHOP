import { useForm } from "react-hook-form";
import "./login.css";
import { useNavigate } from 'react-router-dom'
import Url_face from './../../images/face.png'
import Url_gg from "../../images/gg.png"
import Url_ins from "../../images/ins.jpeg"

export default function Login() {
  const Navigation = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (datas) => {
    Navigation('/')
  };
  return (
    <div className="bg-form">
      <div className=" container form-content">
        <div className="text-center">
          <h2 className="title_page">Đăng nhập tài khoản</h2>
        </div>
        <div className="row px-3">
          <div className="col-6">
            <div className="p-3">
              <img className="login-left-img" src="https://hoatuoi360.vn/uploads/file/hoa-hong-trang-mon-qua-dac-bi%E1%BA%B9t.jpg" alt="img" />
            </div>
          </div>

          <div className="col-6">
            <div className="p-3">
              <form className="p-3" id="login" onSubmit={handleSubmit(onSubmit)}>
                <div>
                  <label>Tên đăng nhập:</label>
                  <input
                    type="text"
                    placeholder="tên đăng nhập"
                    {...register("user_name", {
                      required: true,
                      minLength: 8,
                    })}
                  />
                  {errors.user_name?.type === "minLength" && (
                    <p className="m-0">vui long nhap toi thieu 8 ki tu</p>
                  )}
                  {errors.user_name?.type === "required" && (
                    <p className="m-0">vui long nhap ten dang nhap</p>
                  )}
                </div>
                <div>
                  <label>Mật khẩu:</label>
                  <input
                    type="password"
                    placeholder="mật khẩu"
                    {...register("password", {
                      required: true,
                      minLength: 8,
                    })}
                  />
                  {errors.password?.type === "minLength" && (
                    <p className="m-0">vui long nhap toi thieu 8 ki tu</p>
                  )}
                  {errors.password?.type === "required" && (
                    <p className="m-0">vui long nhap mat khau</p>
                  )}
                </div>
                <div className="text_a">
                  <a href="#">Quên mật khẩu</a>
                </div>
                <div className="text-center">

                  <button type="submit" className="btn_form btn_login">
                    Đăng nhập
                  </button>
                  <h5 className="my-3">hoặc đăng nhập bằng:</h5>
                  <p className="list_icons">
                    <img src={Url_gg} alt="gg" width="50px" title="google" />
                    <img src={Url_face} alt="gg" width="50px" title="facebook" />
                    <img src={Url_ins} alt="gg" width="50px" title="facebook" />
                  </p>
                </div>
                <p>bạn chưa có tài khoản? đăng ký ngay</p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
