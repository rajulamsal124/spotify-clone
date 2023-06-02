"use client";

import AuthModal from "@/components/auth/AuthModal";
import UploadModal from "@/components/libraryUpload/UploadModal";
import { useEffect, useState } from "react";

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) {
    return null;
  }
  return (
    <>
      <AuthModal />
      <UploadModal />
    </>
  );
};

export default ModalProvider;
