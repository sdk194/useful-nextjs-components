"use client"

import {usePathname, useSearchParams, useRouter} from "next/navigation";
import {useDebouncedCallback} from "use-debounce";
import React from "react";

export const OpenModal = () => {
    "use client"
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const {replace} = useRouter();

    const handleButton = useDebouncedCallback(() => {
        const params = new URLSearchParams();

        params.set("modal", "true");
        replace(`${pathname}?${params.toString()}`);
    }, 300)

    return (
        <button className="bg-blue-700 rounded-lg hover:bg-green-700 text-white text-center px-5 py-2"
                onClick={handleButton}>Open modal</button>
    )
}