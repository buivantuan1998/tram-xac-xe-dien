import React, { FC } from "react";
import { Route, Routes } from "react-router";
import { Box } from "zmp-ui";
import { Navigation } from "./navigation";
import HomePage from "pages/index";
import CategoryPage from "pages/category";
import CartPage from "pages/cart";
import NotificationPage from "pages/notification/index";
import ProfilePage from "pages/profile/index";
import SearchPage from "pages/search";
import CheckoutResultPage from "pages/result";
import { getSystemInfo } from "zmp-sdk";
import { ScrollRestoration } from "./scroll-restoration";
import { useHandlePayment } from "hooks";

import HistoryPage from "pages/histories/index";
import QRCodePage from "pages/qrcode/index";
import PaymentPage from "pages/payment/index";
import ChargingStation from "pages/charging-station/index";
import ChargingStationDetail from "pages/charging-station/detail";
import Services from "pages/services/index";
import ChargingBattery from "pages/payment/charging-battery/index";
import PrepaidInvoice from "pages/payment/prepaid-invoice/index";
import PostpaidInvoice from "pages/payment/postpaid-invoice/index";

if (getSystemInfo().platform === "android") {
  const androidSafeTop = Math.round(
    (window as any).ZaloJavaScriptInterface.getStatusBarHeight() /
      window.devicePixelRatio,
  );
  document.body.style.setProperty(
    "--zaui-safe-area-inset-top",
    `${androidSafeTop}px`,
  );
}

export const Layout: FC = () => {
  useHandlePayment();

  return (
    <Box flex flexDirection="column" className="h-screen">
      <ScrollRestoration />
      <Box className="flex-1 flex flex-col overflow-hidden">
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/search" element={<SearchPage />}></Route>
          <Route path="/category" element={<CategoryPage />}></Route>
          <Route path="/notification" element={<NotificationPage />}></Route>
          <Route path="/cart" element={<CartPage />}></Route>
          <Route path="/profile" element={<ProfilePage />}></Route>
          <Route path="/result" element={<CheckoutResultPage />}></Route>
          <Route path="/charging-history" element={<HistoryPage />}></Route>
          <Route path="/qr-code" element={<QRCodePage />}></Route>

          <Route path="/charging-station" element={<ChargingStation />}></Route>
          <Route path="/charging-station/detail" element={<ChargingStationDetail />}></Route>

          <Route path="/services" element={<Services />}></Route>

          <Route path="/payment" element={<PaymentPage />}></Route>
          <Route path="/payment/charging-battery" element={<ChargingBattery />}></Route>
          <Route path="/payment/prepaid-invoice" element={<PrepaidInvoice />}></Route>
          <Route path="/payment/postpaid-invoice" element={<PostpaidInvoice />}></Route>
        </Routes>
      </Box>
      <Navigation />
    </Box>
  );
};
