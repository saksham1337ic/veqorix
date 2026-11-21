import "@/App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import { Layout } from "@/components/Layout";
import Home from "@/pages/Home";
import ServicePage from "@/pages/ServicePage";
import IndustryPage from "@/pages/IndustryPage";
import PackagesPage from "@/pages/PackagesPage";
import SamplesPage from "@/pages/SamplesPage";
import AboutPage from "@/pages/AboutPage";
import QuotePage from "@/pages/QuotePage";
import { PrivacyPage, TermsPage } from "@/pages/LegalPages";
import NotFound from "@/pages/NotFound";
import { SERVICES } from "@/data/services";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          {SERVICES.map((s) => <Route key={s.slug} path={s.slug} element={<ServicePage slug={s.slug} />} />)}
          <Route path="industries/:slug" element={<IndustryPage />} />
          <Route path="packages" element={<PackagesPage />} />
          <Route path="samples" element={<SamplesPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="quote" element={<QuotePage />} />
          <Route path="contact" element={<Navigate to="/quote" replace />} />
          <Route path="privacy" element={<PrivacyPage />} />
          <Route path="terms" element={<TermsPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <Toaster position="top-center" />
    </BrowserRouter>
  );
}

export default App;
