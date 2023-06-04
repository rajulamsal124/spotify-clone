"use client";

import { useEffect, useState } from "react";
import { ProductWithPrice } from "@/types";
import AuthModal from "@/components/auth/AuthModal";
import SubscribeModal from "@/components/subscribe/SubscribeModal";
import UploadModal from "@/components/libraryUpload/UploadModal";

interface ModalProviderProps {
  products: ProductWithPrice[];
}

const ModalProvider: React.FC<ModalProviderProps> = ({ products }) => {
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
      <SubscribeModal products={products} />
      <UploadModal />
    </>
  );
};

export default ModalProvider;
