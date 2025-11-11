import { forwardRef } from "react"

const Select = forwardRef(({ children, className = "", error, ...props }, ref) => {
  return (
    <select
      ref={ref}
      className={`
        mt-1 block w-full rounded-lg border
        ${error ? "border-red-300 focus:border-red-500 focus:ring-red-500" : "border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"}
        px-4 py-2.5 text-gray-900
        shadow-sm transition-all duration-200
        focus:outline-none focus:ring-2 focus:ring-opacity-50
        disabled:bg-gray-50 disabled:text-gray-500 disabled:cursor-not-allowed
        bg-white
        ${className}
      `}
      {...props}
    >
      {children}
    </select>
  )
})

Select.displayName = "Select"

export default Select