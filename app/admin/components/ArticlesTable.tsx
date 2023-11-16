'use client'
import { ArticlesTable } from '@/app/lib/definitions';

export default async function ArticlesTable({
    articles,
}: {
    articles: ArticlesTable[];
}) {
    return (
        <div className="relative w-full	overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
                <thead className="text-xs text-gray-700 uppercase bg-gray-100">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Title
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Content
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Category
                        </th>
                        <th scope="col" className="px-6 py-3">
                            View
                        </th>
                        <th scope="col" className="px-6 py-3">
                            <span className="sr-only">Edit</span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {articles.map((item) => <tr key={item.id} className="w-2px bg-white border-b hover:bg-gray-50 ">
                        <th
                            scope="row"
                            className="w-3px px-6 py-4 font-medium text-gray-900 whitespace-nowrap truncate text-ellipsis overflow-hidden ..."
                        >
                            {item.title}
                        </th>
                        <td className="px-6 py-4 whitespace-nowrap truncate text-ellipsis overflow-hidden ...">{item.short_content}</td>
                        <td className="px-6 py-4">{item.category}</td>
                        <td className="px-6 py-4">{item.total_viewed}</td>
                        <td className="px-6 py-4 text-right">
                            <a
                                href="#"
                                className="font-medium text-blue-600  hover:underline"
                            >
                                Edit
                            </a>
                        </td>
                    </tr>)}
                </tbody>
            </table>
        </div>
    );
}
