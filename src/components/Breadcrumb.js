import { ChevronRight } from "lucide-react"
import Link from "next/link"
const Breadcrumb = () => {
    return (
        <nav className="bg-bg-main p-4 rounded-xl text-sm text-main mb-6">
            <ol className="flex items-center gap-1 flex-wrap">
                <li>
                    <Link
                        href="#"
                        className="hover:text-primary transition cursor-pointer"
                    >
                        Home
                    </Link>
                </li>

                <ChevronRight size={20} />

                <li>
                    <Link
                        href="#"
                        className="hover:text-primary transition cursor-pointer"
                    >
                        Our Category
                    </Link>
                </li>

                <ChevronRight size={20} />

                <li className="text-muted">
                    Product Details
                </li>
            </ol>
        </nav>
    )
}

export default Breadcrumb