import { useEffect } from "react";

const useBeforeUnload = (cartItems: any[]) => {
  useEffect(() => {
    console.log("Cart items in hook:", cartItems);

    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      if (cartItems.length > 0) {
        event.preventDefault();
        event.returnValue = "";
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [cartItems]);
};

export default useBeforeUnload;
