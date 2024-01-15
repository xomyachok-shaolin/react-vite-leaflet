import L from 'leaflet';
import React from 'react';
import ReactDOM from 'react-dom';


import './custom-leaflet-draw.css';

class CustomControl extends L.Control {
  private container: HTMLElement;

  constructor(options?: L.ControlOptions) {
    super(options);
    this.container = L.DomUtil.create('div', 'leaflet-control-custom');
  }

  onAdd(map: L.Map): HTMLElement {
    ReactDOM.render(
      <div onClick={() => {
        this.options.onClick();
        // Перерисовка компонента для обновления иконки
        this.redraw();
      }} style={{ cursor: 'pointer' }}>
        {this.options.icon}
      </div>,
      this.container
    );

    L.DomEvent.disableClickPropagation(this.container);


    return this.container;
  }

  redraw() {
    ReactDOM.render(
      <div onClick={() => {
        this.options.onClick();
        this.redraw();
      }} style={{ cursor: 'pointer' }}>
        {this.options.icon}
      </div>,
      this.container
    );
  }

  onRemove(map: L.Map): void {
    ReactDOM.unmountComponentAtNode(this.container);
  }
}

export default CustomControl;
