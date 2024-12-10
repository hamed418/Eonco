import { useState } from "react"

export const FaqCard = ({ Question, Answer }) => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleVisibility = () => {
        setIsOpen(!isOpen)
    }
    return (
        <div className="border border-gray-300 py-4 rounded-lg h-auto my-5">
            <button onClick={toggleVisibility}
                className="flex w-full items-center justify-between text-left px-4 font-bold text-[#e5e6e0] text-[22px] max-sm:text-lg">
                <h1>{Question}</h1>
                <i className={`ri-arrow-${isOpen ? 'up' : 'down'}-s-line`}></i>
            </button>
            <p className={`px-4 mt-5 text-xl max-sm:text-sm text-[#9c9c9c] ${isOpen ? '' : 'hidden'}`}>{Answer}</p>
        </div>
    )
}
