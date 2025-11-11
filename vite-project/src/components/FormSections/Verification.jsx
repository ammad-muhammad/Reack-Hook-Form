import { useState } from "react"
import Error from "../ui/Error"

export default function Verification({ setValue, errors }) {
  const [captchaChecked, setCaptchaChecked] = useState(false)

  return (
    <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
          <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        </div>
        <h2 className="text-xl font-bold text-gray-800">Verification</h2>
      </div>

      <div className="border-2 border-gray-300 rounded-lg p-4 inline-flex items-center gap-3 bg-gray-50">
        <input
          id="captcha"
          type="checkbox"
          checked={captchaChecked}
          className="w-5 h-5 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500 cursor-pointer"
          onChange={(e) => {
            setCaptchaChecked(e.target.checked)
            setValue("captcha", e.target.checked, { shouldValidate: true })
          }}
        />
        <label htmlFor="captcha" className="text-base font-medium text-gray-700 cursor-pointer select-none">
          I'm not a robot
        </label>
        <div className="ml-4">
          <svg className="w-8 h-8 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          </svg>
        </div>
      </div>

      <Error>{errors.captcha?.message}</Error>

      <div className="mt-3 bg-yellow-50 border border-yellow-200 rounded-lg p-3">
        <p className="text-xs text-yellow-800">
          <strong>Note:</strong> For production, integrate Google reCAPTCHA with server-side verification.
        </p>
      </div>
    </section>
  )
}