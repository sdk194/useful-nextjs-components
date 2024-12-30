/*
EXAMPLE MODAL
 */

import {ReactNode} from "react";
import Link from "next/link";

export default async function Modal(props: {isVisible: boolean, prevLink: string, children: ReactNode}) {

    /*
    const outsideClick = (e: any) => {
        if (e.target.id === 'modal-background') {
            //TODO
        }
    }

     */

    return (
        <div id="modal-background"
             className="fixed backdrop-blur-sm inset-0 bg-opacity-25 bg-black flex justify-center items-center"
        >
            <div className="flex flex-col">
                <Link href={props.prevLink} className="text-white text-xl place-self-end">X</Link>
                <div className="bg-white p-2 rounded w-[100vh] h-[90vh] overflow-auto px-20 py-15">{props.children}</div> {/*(To make modal reusable, need to pass children to prop)*/}
            </div>
        </div>
    )
}