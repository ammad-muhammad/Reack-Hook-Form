import Label from "../ui/Label"
import Error from "../ui/Error"

export default function PictureUpload({ setValue, errors }) {
  return (
    <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
          <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
        <h2 className="text-xl font-bold text-gray-800">Profile Picture</h2>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
        <p className="text-sm text-blue-800">
          <strong>Requirements:</strong> White or blue background • File &lt; 1MB • 
          Types: JPG, JPEG, PNG • Face clearly visible, no glasses
        </p>
      </div>

      <div className="relative">
        <input
          id="picture"
          type="file"
          accept="image/png, image/jpeg"
          className={`
            block w-full text-sm text-gray-700
            file:mr-4 file:py-3 file:px-6
            file:rounded-lg file:border-0
            file:text-sm file:font-semibold
            ${errors.picture 
              ? "file:bg-red-600 file:text-white hover:file:bg-red-700" 
              : "file:bg-indigo-600 file:text-white hover:file:bg-indigo-700"
            }
            file:cursor-pointer file:transition-all
            hover:file:shadow-md
            cursor-pointer
            border-2 border-dashed
            ${errors.picture ? "border-red-300" : "border-gray-300"}
            rounded-lg p-4
            hover:border-indigo-400
            transition-all
          `}
          onChange={(e) => setValue("picture", e.target.files)}
        />
      </div>
      <Error>{errors.picture?.message}</Error>
    </section>
  )
}