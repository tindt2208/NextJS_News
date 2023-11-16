import clsx from 'clsx';

interface ButtonProps extends React.HTMLAttributes<HTMLDivElement> {
    title: string;
}

export function Header({ title = "", className, ...rest }: ButtonProps) {


    return (
        <header {...rest} className={clsx("bg-white shadow", className)}>
            <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold tracking-tight text-gray-900">{title}</h1>
            </div>
        </header>
    );
}
