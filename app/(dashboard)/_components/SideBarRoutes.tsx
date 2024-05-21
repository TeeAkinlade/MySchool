'use client'

import { Compass, Layout } from 'lucide-react';
import SidebarItem from './SidebarItem';

const guestRoutes = [
    {
        icon: Layout,
        label: 'Dasboard',
        href: '/',
    },
    {
        icon: Compass,
        label: 'Browse',
        href: '/search',
    },  
]

export const SideBarRoutes = () => {
    const routes= guestRoutes
    return (
        <div className="flex flex-col w-full">
            {routes.map((route) => (
                <SidebarItem
                    key={route.href}
                    icon={route.icon}
                    href={route.href}
                    label={route.label}
                />
            ))}
        </div>
    )
}