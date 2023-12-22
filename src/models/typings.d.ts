declare namespace API {

  /**
   * 
   * @export
   * @interface Action
   */
  export interface Action {
    /**
     * 
     * @type {number}
     * @memberof Action
     */
    id?: number;
    /**
     * Идентификатор проекта
     * @type {number}
     * @memberof Action
     */
    projectId?: number;
    /**
     * Имя
     * @type {string}
     * @memberof Action
     */
    name?: string;
    /**
     * Описание операции
     * @type {string}
     * @memberof Action
     */
    description?: string;
    /**
     * Идентификатор создателя
     * @type {number}
     * @memberof Action
     */
    createBy?: number;
    /**
     * Идентификатор модификатора
     * @type {number}
     * @memberof Action
     */
    updateBy?: number;
    /**
     * 
     * @type {string}
     * @memberof Action
     */
    createdAt?: string;
    /**
     * 
     * @type {string}
     * @memberof Action
     */
    updatedAt?: string;
    /**
     * 
     * @type {string}
     * @memberof Action
     */
    deletedAt?: string;
  }
  /**
  * 
  * @export
  * @interface ActionPagination
  */
  export interface ActionPagination {
    /**
     * json repose code
     * @type {number}
     * @memberof ActionPagination
     */
    code?: number;
    /**
     * total numbers
     * @type {number}
     * @memberof ActionPagination
     */
    total?: number;
    /**
     * offset
     * @type {number}
     * @memberof ActionPagination
     */
    offset?: number;
    /**
     * limit
     * @type {number}
     * @memberof ActionPagination
     */
    limit?: number;
    /**
     * 
     * @type {Array<Action>}
     * @memberof ActionPagination
     */
    list?: Array<Action>;
  }
  /**
  * 
  * @export
  * @interface ApiResponse
  */
  export interface ApiResponse {
    /**
     * 
     * @type {number}
     * @memberof ApiResponse
     */
    code?: number;
    /**
     * 
     * @type {string}
     * @memberof ApiResponse
     */
    msg?: string;
  }
  /**
  * 
  * @export
  * @interface Group
  */
  export interface Group {
    /**
     * 
     * @type {number}
     * @memberof Group
     */
    id?: number;
    /**
     * Имя
     * @type {string}
     * @memberof Group
     */
    name?: string;
    /**
     * Описание
     * @type {string}
     * @memberof Group
     */
    description?: string;
    /**
     * Идентификатор создателя
     * @type {number}
     * @memberof Group
     */
    createBy?: number;
    /**
     * Идентификатор модификатора
     * @type {number}
     * @memberof Group
     */
    updateBy?: number;
    /**
     * 
     * @type {string}
     * @memberof Group
     */
    createdAt?: string;
    /**
     * 
     * @type {string}
     * @memberof Group
     */
    updatedAt?: string;
    /**
     * 
     * @type {string}
     * @memberof Group
     */
    deletedAt?: string;
  }
  /**
  * 
  * @export
  * @interface GroupPagination
  */
  export interface GroupPagination {
    /**
     * json repose code
     * @type {number}
     * @memberof GroupPagination
     */
    code?: number;
    /**
     * total numbers
     * @type {number}
     * @memberof GroupPagination
     */
    total?: number;
    /**
     * offset
     * @type {number}
     * @memberof GroupPagination
     */
    offset?: number;
    /**
     * limit
     * @type {number}
     * @memberof GroupPagination
     */
    limit?: number;
    /**
     * 
     * @type {Array<Group>}
     * @memberof GroupPagination
     */
    list?: Array<Group>;
  }
  /**
  * 
  * @export
  * @interface Menu
  */
  export interface Menu {
    /**
     * 
     * @type {number}
     * @memberof Menu
     */
    id?: number;
    /**
     * Идентификатор проекта
     * @type {number}
     * @memberof Menu
     */
    projectId?: number;
    /**
     * Имя
     * @type {string}
     * @memberof Menu
     */
    name?: string;
    /**
     * Примечание
     * @type {string}
     * @memberof Menu
     */
    desc?: string;
    /**
     * i18n主键
     * @type {string}
     * @memberof Menu
     */
    i18N?: string;
    /**
     * первичный ключ i18n
     * @type {number}
     * @memberof Menu
     */
    sortOrder?: number;
    /**
     * иконка
     * @type {string}
     * @memberof Menu
     */
    icon?: string;
    /**
     * Маршрутизация: выберите ссылку или внешнюю ссылку.
     * @type {string}
     * @memberof Menu
     */
    link?: string;
    /**
     * маршрут доступа
     * @type {string}
     * @memberof Menu
     */
    externalLink?: string;
    /**
     * цель ссылки
     * @type {string}
     * @memberof Menu
     */
    target?: string;
    /**
     * Отключить ли меню, 1: Не отключено 2: Отключено 
     * @type {number}
     * @memberof Menu
     */
    disabled?: number;
    /**
     * 隐藏菜单, 1:不隐藏 2:隐藏 
     * @type {number}
     * @memberof Menu
     */
    hide?: number;
    /**
     * Скрыть меню, 1: не скрыто 2: скрыто
     * @type {number}
     * @memberof Menu
     */
    hideInBreadcrumb?: number;
    /**
     * Идентификатор родителя 
     * @type {number}
     * @memberof Menu
     */
    parentId?: number;
    /**
     * Идентификатор создателя
     * @type {number}
     * @memberof Menu
     */
    createBy?: number;
    /**
     * Идентификатор модификатора
     * @type {number}
     * @memberof Menu
     */
    updateBy?: number;
    /**
     * 
     * @type {string}
     * @memberof Menu
     */
    createdAt?: string;
    /**
     * 
     * @type {string}
     * @memberof Menu
     */
    updatedAt?: string;
    /**
     * 
     * @type {string}
     * @memberof Menu
     */
    deletedAt?: string;
  }
  /**
  * 
  * @export
  * @interface MenuPagination
  */
  export interface MenuPagination {
    /**
     * json repose code
     * @type {number}
     * @memberof MenuPagination
     */
    code?: number;
    /**
     * total numbers
     * @type {number}
     * @memberof MenuPagination
     */
    total?: number;
    /**
     * offset
     * @type {number}
     * @memberof MenuPagination
     */
    offset?: number;
    /**
     * limit
     * @type {number}
     * @memberof MenuPagination
     */
    limit?: number;
    /**
     * 
     * @type {Array<Menu>}
     * @memberof MenuPagination
     */
    list?: Array<Menu>;
  }
  /**
  * 
  * @export
  * @interface Org
  */
  export interface Org {
    /**
     * 
     * @type {number}
     * @memberof Org
     */
    id?: number;
    /**
     * Код организации
     * @type {string}
     * @memberof Org
     */
    code?: string;
    /**
     * имя
     * @type {string}
     * @memberof Org
     */
    name?: string;
    /**
     * Примечание
     * @type {string}
     * @memberof Org
     */
    description?: string;
    /**
     * logo
     * @type {string}
     * @memberof Org
     */
    logo?: string;
    /**
     * Идентификатор создателя
     * @type {number}
     * @memberof Org
     */
    createBy?: number;
    /**
     * Идентификатор модификатора
     * @type {number}
     * @memberof Org
     */
    updateBy?: number;
    /**
     * 
     * @type {string}
     * @memberof Org
     */
    createdAt?: string;
    /**
     * 
     * @type {string}
     * @memberof Org
     */
    updatedAt?: string;
    /**
     * 
     * @type {string}
     * @memberof Org
     */
    deletedAt?: string;
  }
  /**
  * 
  * @export
  * @interface OrgNode
  */
  export interface OrgNode {
    /**
     * 
     * @type {number}
     * @memberof OrgNode
     */
    id?: number;
    /**
     * имя
     * @type {string}
     * @memberof OrgNode
     */
    name?: string;
    /**
     * @type {string}
     * @memberof OrgNode
     */
    description?: string;
    /**
     * @type {number}
     * @memberof OrgNode
     */
    parentId?: number;
    /**
     * Идентификатор организации 
     * @type {number}
     * @memberof OrgNode
     */
    orgId?: number;
    /**
     * Корневой узел 1 да, 2 нет
     * @type {number}
     * @memberof OrgNode
     */
    root?: number;
    /**
     * @type {number}
     * @memberof OrgNode
     */
    depth?: number;
    /**
     * @type {number}
     * @memberof OrgNode
     */
    order?: number;
    /**
     * @type {number}
     * @memberof OrgNode
     */
    createBy?: number;
    /**
     * @type {number}
     * @memberof OrgNode
     */
    updateBy?: number;
    /**
     * 
     * @type {string}
     * @memberof OrgNode
     */
    createdAt?: string;
    /**
     * 
     * @type {string}
     * @memberof OrgNode
     */
    updatedAt?: string;
    /**
     * 
     * @type {string}
     * @memberof OrgNode
     */
    deletedAt?: string;
    /**
     * 
     * @type {any}
     * @memberof OrgNode
     */
    org?: any | null;
  }
  /**
  * 
  * @export
  * @interface OrgNodePagination
  */
  export interface OrgNodePagination {
    /**
     * json repose code
     * @type {number}
     * @memberof OrgNodePagination
     */
    code?: number;
    /**
     * total numbers
     * @type {number}
     * @memberof OrgNodePagination
     */
    total?: number;
    /**
     * offset
     * @type {number}
     * @memberof OrgNodePagination
     */
    offset?: number;
    /**
     * limit
     * @type {number}
     * @memberof OrgNodePagination
     */
    limit?: number;
    /**
     * 
     * @type {Array<OrgNode>}
     * @memberof OrgNodePagination
     */
    list?: Array<OrgNode>;
  }
  /**
  * 
  * @export
  * @interface OrgPagination
  */
  export interface OrgPagination {
    /**
     * json repose code
     * @type {number}
     * @memberof OrgPagination
     */
    code?: number;
    /**
     * total numbers
     * @type {number}
     * @memberof OrgPagination
     */
    total?: number;
    /**
     * offset
     * @type {number}
     * @memberof OrgPagination
     */
    offset?: number;
    /**
     * limit
     * @type {number}
     * @memberof OrgPagination
     */
    limit?: number;
    /**
     * 
     * @type {Array<Org>}
     * @memberof OrgPagination
     */
    list?: Array<Org>;
  }
  /**
  * 
  * @export
  * @interface Project
  */
  export interface Project {
    /**
     * 
     * @type {number}
     * @memberof Project
     */
    id: number;
    /**
     * @type {string}
     * @memberof Project
     */
    name: string;
    /**
     * @type {string}
     * @memberof Project
     */
    description?: string;
    /**
     * @type {number}
     * @memberof Project
     */
    createBy?: number;
    /**
     * @type {number}
     * @memberof Project
     */
    updateBy?: number;
    /**
     * 
     * @type {string}
     * @memberof Project
     */
    createdAt?: string;
    /**
     * 
     * @type {string}
     * @memberof Project
     */
    updatedAt?: string;
    /**
     * 
     * @type {string}
     * @memberof Project
     */
    deletedAt?: string;
  }
  /**
  * 
  * @export
  * @interface ProjectPagination
  */
  export interface ProjectPagination {
    /**
     * json repose code
     * @type {number}
     * @memberof ProjectPagination
     */
    code?: number;
    /**
     * total numbers
     * @type {number}
     * @memberof ProjectPagination
     */
    total?: number;
    /**
     * offset
     * @type {number}
     * @memberof ProjectPagination
     */
    offset?: number;
    /**
     * limit
     * @type {number}
     * @memberof ProjectPagination
     */
    limit?: number;
    /**
     * 
     * @type {Array<Project>}
     * @memberof ProjectPagination
     */
    list?: Array<Project>;
  }
  /**
  * 
  * @export
  * @interface Resource
  */
  export interface Resource {
    /**
     * 
     * @type {number}
     * @memberof Resource
     */
    id?: number;
    /**
     * @type {number}
     * @memberof Resource
     */
    projectId?: number;
    /**
     * @type {string}
     * @memberof Resource
     */
    name?: string;
    /**
     * @type {string}
     * @memberof Resource
     */
    description?: string;
    /**
     * @type {string}
     * @memberof Resource
     */
    type?: string;
    /**
     * Маршрутизация ресурсов, действительна, если тип равен 1.
     * @type {string}
     * @memberof Resource
     */
    route?: string;
    /**
     * Идентификатор меню, действителен, если тип равен 2.
     * @type {number}
     * @memberof Resource
     */
    menuId?: number;
    /**
     * @type {number}
     * @memberof Resource
     */
    createBy?: number;
    /**
     * @type {number}
     * @memberof Resource
     */
    updateBy?: number;
    /**
     * 
     * @type {string}
     * @memberof Resource
     */
    createdAt?: string;
    /**
     * 
     * @type {string}
     * @memberof Resource
     */
    updatedAt?: string;
    /**
     * 
     * @type {string}
     * @memberof Resource
     */
    deletedAt?: string;
  }
  /**
  * 
  * @export
  * @interface ResourcePagination
  */
  export interface ResourcePagination {
    /**
     * json repose code
     * @type {number}
     * @memberof ResourcePagination
     */
    code?: number;
    /**
     * total numbers
     * @type {number}
     * @memberof ResourcePagination
     */
    total?: number;
    /**
     * offset
     * @type {number}
     * @memberof ResourcePagination
     */
    offset?: number;
    /**
     * limit
     * @type {number}
     * @memberof ResourcePagination
     */
    limit?: number;
    /**
     * 
     * @type {Array<Resource>}
     * @memberof ResourcePagination
     */
    list?: Array<Resource>;
  }
  /**
  * 
  * @export
  * @interface User
  */
  export interface User {
    /**
     * 
     * @type {number}
     * @memberof User
     */
    id?: number;
    /**
     * @type {string}
     * @memberof User
     */
    username?: string;
    /**
     * @type {string}
     * @memberof User
     */
    nickname?: string;
    /**
     * @type {string}
     * @memberof User
     */
    password?: string;
    /**
     * @type {string}
     * @memberof User
     */
    mobile?: string;
    /**
     * @type {number}
     * @memberof User
     */
    mobileVerified?: number;
    /**
     * @type {string}
     * @memberof User
     */
    email?: string;
    /**
     * Проверка электронной почты пройдена: 1 пройдена, 2 — неудачно.
     * @type {number}
     * @memberof User
     */
    emailVerified?: number;
    /**
     * 1 включен, 2 отключен, 3 вышли из системы
     * @type {number}
     * @memberof User
     */
    status?: number;
    /**
     * Пол 1 мужской, 2 женщины, 3 неизвестный
     * @type {number}
     * @memberof User
     */
    gender?: number;
    /**
     * @type {string}
     * @memberof User
     */
    address?: string;
    /**
     * IP-адрес последнего входа в систему
     * @type {string}
     * @memberof User
     */
    lastLoginIp?: string;
    /**
     * Время последнего входа в систему
     * @type {string}
     * @memberof User
     */
    lastLoginTime?: string;
    /**
     * Количество входов
     * @type {number}
     * @memberof User
     */
    loginCount?: number;
    /**
     * Картинка аватара
     * @type {string}
     * @memberof User
     */
    avatar?: string;
    /**
     * Идентификатор создателя
     * @type {number}
     * @memberof User
     */
    createBy?: number;
    /**
     * Идентификатор модификатора
     * @type {number}
     * @memberof User
     */
    updateBy?: number;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    createdAt?: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    updatedAt?: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    deletedAt?: string;
    /**
     * 
     * @type {Array<Group>}
     * @memberof User
     */
    groups?: Array<Group>;
    /**
     * 
     * @type {Array<OrgNode>}
     * @memberof User
     */
    orgNodes?: Array<OrgNode>;
  }
  /**
  * 
  * @export
  * @interface UserPagination
  */
  export interface UserPagination {
    /**
     * json repose code
     * @type {number}
     * @memberof UserPagination
     */
    code?: number;
    /**
     * total numbers
     * @type {number}
     * @memberof UserPagination
     */
    total?: number;
    /**
     * offset
     * @type {number}
     * @memberof UserPagination
     */
    offset?: number;
    /**
     * limit
     * @type {number}
     * @memberof UserPagination
     */
    limit?: number;
    /**
     * 
     * @type {Array<User>}
     * @memberof UserPagination
     */
    list?: Array<User>;
  }

}