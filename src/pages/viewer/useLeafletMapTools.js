import { useEffect } from 'react';

const useLeafletMapTools = (map, mapRef) => {
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

  useEffect(() => {
    if (map) {
      // Add a keydown event listener to the document
      const handleKeyPress = (e) => {
        // Переключение полноэкранного режима
        if ((e.key === 'f' || e.key === 'F' || e.key === 'а' || e.key === 'А') && e.target.tagName !== 'INPUT') {
          mapRef.current.toggleFullscreen();
        }
        // Активация инструментов рисования
        if ((e.key === 'r' || e.key === 'R' || e.key === 'к' || e.key === 'К') && e.target.tagName !== 'INPUT') {
          // Активация рисования прямоугольника
          document.querySelector('.leaflet-draw-draw-rectangle')?.click();
        } if ((e.key === 'l' || e.key === 'L' || e.key === 'д' || e.key === 'Д') && e.target.tagName !== 'INPUT') {
          // Активация рисования линии
          document.querySelector('.leaflet-draw-draw-polyline')?.click();
        } else if (e.key === 'Delete' && e.target.tagName !== 'INPUT') {
          // Активация рисования линии
          document.querySelector('.leaflet-draw-edit-remove')?.click();
        }
      };

      document.addEventListener('keydown', handleKeyPress);

      // Remove the event listener when the component unmounts
      return () => {
        document.removeEventListener('keydown', handleKeyPress);
      };
    }
  }, [map]);
};

export default useLeafletMapTools;
