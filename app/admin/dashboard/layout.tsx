'use client'
import { Navbar } from '@/app/admin/components/Navbar';
import { Header } from '@/app/admin/components/Header';

interface DashboardLayoutProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;

}
const user = {
    id: '1231231',
    name: 'Tom Cook',
    email: 'tom@example.com',
    imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
const navigation = [
    { name: 'Dashboard', href: '#', current: true },
    { name: 'Team', href: '#', current: false },
    { name: 'Projects', href: '#', current: false },
    { name: 'Calendar', href: '#', current: false },
    { name: 'Reports', href: '#', current: false },
]
const userNavigation = [
    { name: 'Your Profile', href: '#' },
    { name: 'Settings', href: '#' },
    { name: 'Sign out', href: '#' },
]

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
    return (
        <>
            <Navbar user={user} tablist={navigation} userNavigation={userNavigation} />
            <Header title='Dashboard' />
            <main>
                {children}
            </main>
        </>
    );
};

export default DashboardLayout;
