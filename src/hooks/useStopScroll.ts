import { useEffect } from "react";

const useStopScroll = () => {
  useEffect(() => {
    const scrollbarWidth = getScrollbarWidth();
    
    // Сохраняем текущие стили
    const originalOverflow = document.body.style.overflow;
    const originalPaddingRight = document.body.style.paddingRight;

    // Применяем новые стили
    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = `${scrollbarWidth}px`;

    // Восстанавливаем исходные стили при размонтировании
    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.style.paddingRight = originalPaddingRight;
    };
  }, []);
};
