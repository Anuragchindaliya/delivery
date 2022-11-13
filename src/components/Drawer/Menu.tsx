import React, { useCallback, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { toggleDrawer } from '../../redux/features/theme/themeSlice'
import { useAppDispatch } from '../../redux/hooks'
import { menuList, MenuItemChildrenI, MenuItemI, menuList2 } from './menuData'

const Menu = () => {
    return (
        <div className="c-scrollbar overflow-y-auto py-5 px-3 h-full w-full bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700 pb-20">
            <ul className="space-y-2">
                {
                    menuList?.map((menu: any, i: number) => {
                        if (menu.hasChildren) {
                            return <MenuItemChildren {...menu} key={i} />
                        } else {
                            return <MenuItem {...menu} key={i} />
                        }
                    })
                }
            </ul>
            <ul className="pt-5 mt-5 space-y-2 border-t border-gray-200 dark:border-gray-700">
                {
                    menuList2?.map((menu: any, i: number) => {
                        if (menu.hasChildren) {
                            return <MenuItemChildren {...menu} key={i} />
                        } else {
                            return <MenuItem {...menu} key={i} />
                        }
                    })
                }
            </ul>
        </div>
    )
}
const MenuItemChildren = (menu: MenuItemChildrenI) => {
    const [menuShow, setMenuShow] = useState(false);
    const toggleMenu = useCallback(() => {
        setMenuShow((b) => !b)
    }, [])
    return <li>
        <button
            type="button"
            className="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
            aria-controls="dropdown-pages"
            onClick={toggleMenu}
        >
            {menu.icon}
            <span className="flex-1 ml-3 text-left whitespace-nowrap">{menu.title}</span>
            {menu.children && <svg
                aria-hidden="true"
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                />
            </svg>
            }
        </button>
        {<ul className={`${menuShow ? "h-auto py-2" : "h-0 p-0"}` + " transition-all overflow-hidden  space-y-2"}>
            {menu.children.map((menu, i) => {
                if (menu.hasChildren) {
                    return <MenuItemChildren {...menu} key={i} />
                } else {
                    return <MenuItem {...menu} key={i} />
                }
            })}
        </ul>}
    </li>
}
const MenuItem = (menu: MenuItemI) => {
    const { badge } = menu;
    const dispatch = useAppDispatch();
    return <li >
        <NavLink
            to={menu.link}
            onClick={() => dispatch(toggleDrawer())}
            type="button"
            className="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
            aria-controls="dropdown-pages"
            data-collapse-toggle="dropdown-pages"
        >
            {menu.icon}
            <span className="flex-1 ml-3 text-left whitespace-nowrap">{menu.title}</span>
            {badge && <span className="inline-flex justify-center items-center w-5 h-5 text-xs font-semibold rounded-full text-primary-800 bg-primary-100 dark:bg-primary-200 dark:text-primary-800">
                {badge}
            </span>}
        </NavLink>
    </li>
}

export default Menu