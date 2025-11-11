import Error from "../ui/Error"
import { declarations } from "../../constants/formData"

export default function Declarations({ register, errors }) {
  return (
    <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
          <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h2 className="text-xl font-bold text-gray-800">Declarations</h2>
      </div>

      <div className="space-y-3">
        {declarations.map((d) => (
          <div
            key={d.key}
            className="flex items-start gap-3 p-4 rounded-lg border border-gray-200 hover:border-indigo-300 hover:bg-indigo-50 transition-all"
          >
            <input
              type="checkbox"
              id={d.key}
              className="mt-1 w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500 cursor-pointer"
              {...register(`declarations.${d.key}`)}
            />
            <label htmlFor={d.key} className="text-sm text-gray-700 cursor-pointer select-none">
              {d.text}
            </label>
          </div>
        ))}
      </div>

      <Error>
        {errors.declarations?.root?.message ||
          errors.declarations?.d1?.message ||
          errors.declarations?.d2?.message ||
          errors.declarations?.d3?.message ||
          errors.declarations?.d4?.message ||
          errors.declarations?.d5?.message}
      </Error>
    </section>
  )
}