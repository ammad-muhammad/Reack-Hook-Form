import { forwardRef } from "react"

const Textarea = forwardRef(({ className = "", error, ...props }, ref) => {
  return (
    <textarea
      ref={ref}
      className={`
        mt-1 block w-full rounded-lg border
        ${error ? "border-red-300 focus:border-red-500 focus:ring-red-500" : "border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"}
        px-4 py-2.5 text-gray-900 placeholder-gray-400
        shadow-sm transition-all duration-200
        focus:outline-none focus:ring-2 focus:ring-opacity-50
        disabled:bg-gray-50 disabled:text-gray-500 disabled:cursor-not-allowed
        resize-none
        ${className}
      `}
      {...props}
    />
  )
})

Textarea.displayName = "Textarea"

export default Textarea