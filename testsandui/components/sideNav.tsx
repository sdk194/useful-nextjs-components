"use client"
import Link from "next/link";
import {usePathname} from "next/navigation";
import clsx from "clsx"

const links = [
    {name: 'Home', href: '/'},
    {name: 'Modal Example', href: '/modalExample'}
]

export default function SideNav() {
    const pathname = usePathname()
    return (
        <div className="flex h-full flex-col px-3 py-4 md:px-2 bg-gray-100">
            {links.map((link) => (
                <Link key={link.name}
                      href={link.href}
                      className={clsx(
                          "flex h-[48px] border-b-4 grow items-center justify-center gap-2 rounded-md p-3 text-sm font-medium hover:bg-gray-200 hover:text-gray-700 md:flex-none md:justify-start w-full",
                          {
                              "bg-gray-200 text-gray-700 font-bold": pathname === link.href,
                          }
                      )}
                >
                    {link.name}
                </Link>
            ))}
        </div>
    )
}