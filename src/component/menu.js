import { Link } from "react-router-dom";

export default function MenuComponent() {

    return (
        <>

            <nav className="bg-gray-800">
                <div className="max-w-7xl mx-auto ">
                    <div className="relative flex items-center justify-between h-16">
                        <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-around">
                            <div className="flex-shrink-0">
                                <a href="/" className="text-3xl text-white">🔧Gerenciador de Frases</a>
                            </div>
                            {/* <div className="hidden sm:block sm:ml-6">
                                <div className="flex space-x-8">
                                    <Link to="/" className="text-gray-300 bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">🏠 Inicio</Link>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </nav>

        </>
    )
}