interface MenuItem {
  /** menu item name */
  name: string;
  /** menu labels */
  label: {
    zh_CN: string;
    en_US: string;
  };
  /** Название значка
   *
   * Подподменю не требуют значков
   */
  icon?: string;
  /** меню id */
  key: string;
  /** маршрутизация меню */
  path: string;
  /** подменю */
  children?: MenuItem[];
}

export type MenuChild = Omit<MenuItem, 'children'>;

export type MenuList = MenuItem[];
