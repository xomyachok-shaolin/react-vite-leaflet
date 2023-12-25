import { useEffect } from 'react';

const useLeafletMapTools = (map) => {
useEffect(() => {
    if (map) {
      // Создаем наблюдатель за мутациями
      const observer = new MutationObserver(() => {
        // Функция для объединения панелей инструментов
        const combineToolbars = () => {
          const drawToolbar = document.querySelector('.leaflet-draw-toolbar-top');
          const editToolbar = document.querySelector('.leaflet-draw-toolbar:not(.leaflet-draw-toolbar-top)');
  
          if (drawToolbar && editToolbar) {
            const editButtons = editToolbar.querySelectorAll('a');
            Array.from(drawToolbar.children).forEach((child) => {
              editToolbar.insertBefore(child, editButtons[0]);
            });
            drawToolbar.remove();
          }
        };
  
        // Вызываем функцию combineToolbars
        combineToolbars();
      });
  
      // Настройка наблюдателя
      observer.observe(document.querySelector('.leaflet-control-container'), { childList: true, subtree: true });
  
      // Отключаем наблюдатель при размонтировании компонента
      return () => observer.disconnect();
    }
  }, [map]);
  
  useEffect(() => {
    if (map) {
      // Изменение подсказок для кнопок масштабирования
      const zoomInButton = document.querySelector('.leaflet-control-zoom-in');
      const zoomOutButton = document.querySelector('.leaflet-control-zoom-out');
  
      if (zoomInButton) zoomInButton.title = 'Увеличить';
      if (zoomOutButton) zoomOutButton.title = 'Уменьшить';
    }
  }, [map]);

  useEffect(() => {
    if (map) {
      // Функция для обновления подсказок
      const updateFullscreenButtonTooltip = () => {
        const fullscreenButton = document.querySelector('.leaflet-control-zoom-fullscreen');
        if (fullscreenButton) {
          if (fullscreenButton.classList.contains('leaflet-fullscreen-on')) {
            fullscreenButton.title = 'Выйти из полноэкранного режима';
          } else {
            fullscreenButton.title = 'На весь экран';
          }
        }
      };
  
      // Начальное обновление подсказок
      updateFullscreenButtonTooltip();
  
      // Обновление подсказок после любых изменений
      const interval = setInterval(updateFullscreenButtonTooltip, 1000);
  
      // Очистка интервала
      return () => {
        clearInterval(interval);
      };
    }
  }, [map]);
};

export default useLeafletMapTools;
