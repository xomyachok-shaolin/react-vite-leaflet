import L from 'leaflet';
import React from 'react';
import { createRoot } from 'react-dom/client';


import './custom-leaflet-draw.css';

class CustomControl extends L.Control {
    private container: HTMLElement;
    private root: any;
  
    constructor(options?: L.ControlOptions) {
      super(options);
      this.container = L.DomUtil.create('div', 'leaflet-control-custom');
    }
  
    onAdd(map: L.Map): HTMLElement {
      this.root = createRoot(this.container); // Создание корня
      this.root.render(this.renderButton()); // Рендеринг компонента
  
      L.DomEvent.disableClickPropagation(this.container);
  
      return this.container;
    }
  
    renderButton() {
      return (
        <div onClick={() => {
            this.options.onClick();
            this.redraw();
          }} style={{ cursor: 'pointer' }}>
          {this.options.icon}
        </div>
      );
    }
  
    redraw() {
      this.root.render(this.renderButton()); // Обновление рендеринга
    }
  
    onRemove(map: L.Map): void {
        // Запускаем асинхронное действие для размонтирования компонента
        setTimeout(() => {
          if (this.root) {
            this.root.unmount(); // Асинхронное размонтирование корневого элемента
          }
        }, 0);
      }
  }
  
export default CustomControl;
