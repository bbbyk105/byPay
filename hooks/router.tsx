"use client";

import { useRouter } from "next/navigation";

interface UseNavigate {
  goTo: (path: string) => void;
  back: () => void;
}

const useNavigate = (): UseNavigate => {
  const router = useRouter();

  return {
    goTo: (path: string) => {
      router.push(path);
    },
    back: () => {
      router.back();
    },
  };
};

export default useNavigate;
