import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "@/pages/Index";
import Downloads from "@/pages/Downloads";
import AdminAccess from "@/pages/AdminAccess";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import TermsOfUse from "@/pages/TermsOfUse";
import BetaTestingAgreement from "@/pages/BetaTestingAgreement";
import OwnerRoutes from "@/OwnerRoutes";
import NotFound from "@/pages/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/downloads" element={<Downloads />} />
        <Route path="/admin" element={<AdminAccess />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfUse />} />
        <Route path="/terms-of-service" element={<TermsOfUse />} />
        <Route path="/beta-program" element={<BetaTestingAgreement />} />
        <Route path="/owner/*" element={<OwnerRoutes />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

