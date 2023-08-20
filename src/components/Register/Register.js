import React from 'react'
import './Register.css'
import logo from "../../assets/logo/eTaxNewLogo.svg";
import { Link } from 'react-router-dom';
import InputLogin from '../InputLogin/InputLogin';

const Register = () => {
  return (
    <>
      <div className="login">
        <div className="d-flex">
          <div className="col-lg-4">
            <div className="content-section">
              <div className="logo text-center">
                <img src={logo} alt="Logo" />
              </div>
              <h2>إنشاء حساب جديد</h2>
              <p>للدى حساب على المنظومة ؟</p>
              <Link to="/login" class="create-account">
                تسجيل الدخول
              </Link>
              <InputLogin type="Name" placeholder="أسم المستخدم" />
              <InputLogin type="text" placeholder="البريد الإلكتروني" />
              <InputLogin type="password" placeholder="كلمة المرور" />
              <InputLogin type="password" placeholder="تأكيد كلمة المرور" />
              <InputLogin type="Phone" placeholder="رقم الهاتف" />
              <button className="submit-button">إنشاء حساب جديد</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;