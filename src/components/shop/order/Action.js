
import { createOrder } from "./FetchApi";
import { createVNPayQR } from "./FetchApi";

export const fetchData = async (cartListProduct, dispatch) => {
  dispatch({ type: "loading", payload: true });
  try {
    let responseData = await cartListProduct();
    if (responseData && responseData.Products) {
      setTimeout(function () {
        dispatch({ type: "cartProduct", payload: responseData.Products });
        dispatch({ type: "loading", payload: false });
      }, 1000);
    }
  } catch (error) {
    console.log(error);
  }
};

// Validate số điện thoại Việt Nam
const validatePhone = (phone) => {
  // Loại bỏ khoảng trắng và dấu gạch ngang
  const cleanPhone = phone.replace(/[\s-]/g, "");
  // Regex cho số điện thoại VN: 10 số, bắt đầu bằng 0
  const vnPhoneRegex = /^(0[3|5|7|8|9])+([0-9]{8})$/;
  return vnPhoneRegex.test(cleanPhone);
};


export const pay = async (
  data,
  dispatch,
  state,
  setState,
  totalCost,
  history,
  paymentMethod = "COD" // Thêm tham số chọn phương thức thanh toán
) => {
  if (!state.address) {
    setState({ ...state, error: "Vui lòng nhập địa chỉ giao hàng" });
  } else if (!state.phone) {
    setState({ ...state, error: "Vui lòng nhập số điện thoại" });
  } else if (!validatePhone(state.phone)) {
    setState({ ...state, error: "Số điện thoại không hợp lệ (VD: 0912345678)" });
  } else {
    dispatch({ type: "loading", payload: true });
    let orderData = {
      allProduct: JSON.parse(localStorage.getItem("cart")),
      user: JSON.parse(localStorage.getItem("jwt")).user._id,
      amount: totalCost(),
      transactionId: Date.now(),
      address: state.address,
      phone: state.phone,
      paymentMethod: paymentMethod,
    };
    try {
      if (paymentMethod === "VNPay") {
        // Gọi API tạo QR VNPay
        let vnpayRes = await createVNPayQR({
          totalPrice: orderData.amount,
          orderId: orderData.transactionId,
        });
        if (vnpayRes && vnpayRes.success && vnpayRes.paymentUrl) {
          // Xóa giỏ hàng local trước khi chuyển hướng
          localStorage.setItem("cart", JSON.stringify([]));
          dispatch({ type: "cartProduct", payload: null });
          dispatch({ type: "cartTotalCost", payload: null });
          dispatch({ type: "orderSuccess", payload: true });
          dispatch({ type: "loading", payload: false });
          // Chuyển hướng sang trang thanh toán VNPay
          window.location.href = vnpayRes.paymentUrl;
          return;
        } else {
          setState({ ...state, error: vnpayRes?.message || "Không tạo được link thanh toán VNPay" });
        }
      } else {
        // Thanh toán COD như cũ
        let responseData = await createOrder(orderData);
        if (responseData.success) {
          localStorage.setItem("cart", JSON.stringify([]));
          dispatch({ type: "cartProduct", payload: null });
          dispatch({ type: "cartTotalCost", payload: null });
          dispatch({ type: "orderSuccess", payload: true });
          dispatch({ type: "loading", payload: false });
          return history.push("/");
        } else if (responseData.error) {
          setState({ ...state, error: responseData.error });
        }
      }
    } catch (error) {
      setState({ ...state, error: "Đã xảy ra lỗi khi đặt hàng" });
    }
    dispatch({ type: "loading", payload: false });
  }
};
