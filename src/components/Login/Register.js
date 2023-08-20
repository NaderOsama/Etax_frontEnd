import React from 'react'
import '../../components/Login/Login.css'
import logo from '../../assets/logo/eTaxNewLogo.svg'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <>
      <div className="container">
        <div className="content-section">
          <div className="logo">
            <img src={logo} alt="Logo" />
          </div>
          <h2>إنشاء حساب جديد</h2>
          <p>للدى حساب على المنظومة ؟</p>
          <Link to='/login' class="create-account">تسجيل الدخول</Link>
          <input type="Name" placeholder="أسم المستخدم"/>
          <input type="Email" placeholder="البريد الإلكترونى" />
          <input type="Password" placeholder="كلمة المرور" />
          <input type="password" placeholder="تأكيد كلمة المرور"/>
          <input type="Phone" placeholder="رقم الهاتف" />
          <button className="submit-button">إنشاء حساب جديد</button>
        </div>
      </div>
    </>
  )
}

export default Register