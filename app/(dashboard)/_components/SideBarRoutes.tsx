'use client'

import { Compass, Layout, List, BarChart } from 'lucide-react';
import SidebarItem from './SidebarItem';
import { usePathname } from 'next/navigation';

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

const teacherRoutes = [
    {
        icon: List,
        label: 'Courses',
        href: '/teacher/courses',
    },
    {
        icon: BarChart,
        label: 'Analytics',
        href: '/teacher/analytics',
    },  
]

export const SideBarRoutes = () => {
    const pathname = usePathname();

    const isTeacherPage = pathname?.includes("/teacher")

    const routes = isTeacherPage? teacherRoutes : guestRoutes;
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