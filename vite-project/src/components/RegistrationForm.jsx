import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { registrationSchema } from "../validation/schema"
import PersonalDetails from "./FormSections/PersonalDetails"
import PictureUpload from "./FormSections/PictureUpload"
import Declarations from "./FormSections/Declarations"
import Verification from "./FormSections/Verification"
import Button from "./ui/Button"
import Swal from "sweetalert2"  // ✨ SweetAlert import kiya

export default function RegistrationForm() {
  const {
    register,
    handleSubmit,
    setValue,
    reset,  // ✨ Form reset karne ke liye
    formState: { errors, isSubmitting }
  } = useForm({
    resolver: zodResolver(registrationSchema),
    defaultValues: {
      country: "",
      classPreference: undefined,
      gender: undefined,
      city: "",
      course: "",
      fullName: "",
      fatherName: "",
      email: "",
      phone: "",
      cnic: "",
      fatherCnic: "",
      dob: "",
      proficiency: undefined,
      hasLaptop: undefined,
      qualification: "",
      address: "",
      declarations: { d1: false, d2: false, d3: false, d4: false, d5: false },
      captcha: false,
    },
  })

  const onSubmit = async (data) => {
    try {
      // Simulate API call
      await new Promise((res) => setTimeout(res, 800))

      // ✨ SweetAlert Success Message
      await Swal.fire({
        icon: "success",
        title: "Registration Successful! 🎉",
        text: "Your application has been submitted successfully. We will contact you soon!",
        confirmButtonText: "OK",
        confirmButtonColor: "#4F46E5",
        background: "#fff",
        customClass: {
          popup: "rounded-xl shadow-2xl",
          title: "text-2xl font-bold text-gray-800",
          confirmButton: "px-6 py-2.5 rounded-lg font-semibold"
        }
      })

      // ✨ Form reset karo submission ke baad
      reset()
      
    } catch (error) {
      // ✨ Error Alert
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong! Please try again.",
        confirmButtonColor: "#EF4444"
      })
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <PersonalDetails register={register} errors={errors} />
      <PictureUpload setValue={setValue} errors={errors} />
      <Declarations register={register} errors={errors} />
      <Verification setValue={setValue} errors={errors} />

      <div className="pt-6 border-t-2 border-gray-200 flex justify-end">
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "SUBMIT APPLICATION"}
        </Button>
      </div>
    </form>
  )
}