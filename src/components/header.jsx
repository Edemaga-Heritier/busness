import { useState } from "react"
import {Menu,X, Building2, Phone, Mail} from "lucide-react"

export default function Header() {

    const[ isMenuOpen, setisMenuOpen]=useState(false)
    return(
<header className="bg-white  shadow-md fixed w-full top-0 -z-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" >
        <div className=" hidden md:flex justify-end space-x-6 py-2 text-sm bg-gray-600 border-b">
<a href="+243906720200" className="flex items-center gap-2">
<Phone  size={16}/>
<span>+243 90 672 0200</span>
</a>
<a href="mailto:info@masangi.com" className="flex items-center gap-2">
<Mail size={16}/>
<span>info@masangi.com</span>
</a>
        </div>

    </div>
</header>

    )
}