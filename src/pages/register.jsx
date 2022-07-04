import React, { useState } from "react";
import Input from "../components/Input";
import Select from "../components/Select";

export default function Register() {
  const [value, setValue] = useState({});
  const [error, setError] = useState({});
  const onSubmit = (ev) => {
    ev.preventDefault();
    const errorObj = {};
    if (!value?.name?.trim()) {
      errorObj.name = "Họ và tên không được để trống";
    }
    if (!value?.phone?.trim()) {
      errorObj.phone = "Số điện thoại không được để trống";
    } else if (!/(84|0[3|5|7|8|9])+([0-9]{8})\b/g.test(value.phone)) {
      errorObj.phone = "Số điện thoại không đúng định dạng";
    }
    if (!value?.email?.trim()) {
      errorObj.email = "Email không được để trống";
    } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(value.email)) {
      errorObj.email = "Email không đúng định dạng";
    }
    if (!value?.fb?.trim()) {
      errorObj.fb = "URL facebook không được để trống";
    } else if (
      !/[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g.test(
        value.fb
      )
    ) {
      errorObj.fb = "URL facebook không đúng định dạng";
    }
    if (!value?.payment) {
      errorObj.payment = "Vui lòng chọn hình thức thanh toán";
    }
    setError(errorObj);
    if ( !Object.keys(errorObj).length ) {
      alert("Validate thành công")
    }
  };
  return (
    <main className="register-course" id="main">
      <section>
        <div className="container">
          <div className="wrap container">
            <div className="main-sub-title">ĐĂNG KÝ</div>
            <h1 className="main-title">Thực chiến front-end căn bản </h1>
            <div className="main-info">
              <div className="date">
                <strong>Khai giảng:</strong> 15/11/2020
              </div>
              <div className="time">
                <strong>Thời lượng:</strong> 18 buổi
              </div>
              <div className="time">
                <strong>Học phí:</strong> 6.000.000 VND
              </div>
            </div>
            <form className="form" onSubmit={onSubmit}>
              {/* <label>
                <p>
                  Họ và tên<span>*</span>
                </p>
                <input type="text" placeholder="Họ và tên bạn" />
              </label> */}
              <Input
                label="Họ và tên"
                required
                placeholder="Họ và tên bạn"
                onChange={(ev) => (value.name = ev.target.value)}
                error={error.name}
              />
              <Input
                label="Số điện thoại"
                required
                placeholder="Số điện thoại"
                onChange={(ev) => (value.phone = ev.target.value)}
                error={error.phone}
              />
              <Input
                label="Email"
                required
                placeholder="Email của bạn"
                onChange={(ev) => (value.email = ev.target.value)}
                error={error.email}
              />
              <Input
                label="URL Facebook"
                required
                placeholder="https://facebook.com"
                onChange={(ev) => (value.fb = ev.target.value)}
                error={error.fb}
              />

              <label className="disable">
                <p>Sử dụng COIN</p>
                <div className="checkcontainer">
                  Hiện có <strong>300 COIN</strong>
                  {/* Giảm giá còn <span><strong>5.800.000 VND</strong>, còn lại 100 COIN</span> */}
                  {/* Cần ít nhất 200 COIN để giảm giá */}
                  <input type="checkbox" defaultChecked="checked" />
                  <span className="checkmark" />
                </div>
              </label>
              {/* <label>
                <p>Hình thức thanh toán</p>
                <div className="select">
                  <div className="head">Chuyển khoản</div>
                  <div className="sub">
                    <a href="#">Chuyển khoản</a>
                    <a href="#">Thanh toán tiền mặt</a>
                  </div>
                </div>
              </label> */}
              <Select
                label="Hình thức thanh toán"
                options={["Chuyển khoản", "Thanh toán tiền mặt", "Momo"]}
                onChange={(val) => {
                  value.payment = val;
                }}
                error = {error.payment}
                placeholder="-- Hình thức thanh toán --"
              />

              <Input
                label="Ý kiến cá nhân"
                placeholder="Mong muốn cá nhân và lịch học bạn có thể học"
                onChange={(ev) => (value.note = ev.target.value)}
              />
              <button type="submit" className="btn main rect">
                đăng ký
              </button>
            </form>
          </div>
        </div>
      </section>
      {/* <div class="register-success">
            <div class="contain">
                <div class="main-title">đăng ký thành công</div>
                <p>
                    <strong>Chào mừng Trần Nghĩa đã trở thành thành viên mới của CFD Team.</strong> <br>
                    Cảm ơn bạn đã đăng ký khóa học tại <strong>CFD</strong>, chúng tôi sẽ chủ động liên lạc với bạn thông qua facebook
                    hoặc số điện thoại của bạn.
                </p>
            </div>
            <a href="/" class="btn main rect">về trang chủ</a>
        </div> */}
    </main>
  );
}
