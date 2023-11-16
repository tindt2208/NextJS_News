import { Tablist } from '@/app/lib/definitions';
import Link from 'next/link';


function classNames(...classes: Array<string>) {
    return classes.filter(Boolean).join(' ')
}

interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
    tablist: Array<Tablist>
}

export const Tabs = ({ tablist }: TabsProps) => {
    return <div className="ml-10 flex items-baseline space-x-4">
        {tablist.map((item) => (
            <Link
                href={item.href}
                key={item.name}
                className={classNames(
                    item.current
                        ? 'bg-gray-900 text-white'
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'rounded-md px-3 py-2 text-sm font-medium'
                )}                                                >
                <span aria-current={item.current ? 'page' : undefined}
                >
                    {item.name}
                </span>
            </Link>

        ))}
    </div>
}
