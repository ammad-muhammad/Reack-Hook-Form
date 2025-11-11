import Label from "../ui/Label"
import Error from "../ui/Error"
import Input from "../ui/Input"
import Select from "../ui/Select"
import Textarea from "../ui/Textarea"
import { countries, cities, courses, qualifications } from "../../constants/formData"  

export default function PersonalDetails({ register, errors }) {
  return (
    <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <div className="flex items-center gap-2 mb-6">
        <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
          <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </div>
        <h2 className="text-xl font-bold text-gray-800">Personal Details</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="country" required>Select Country</Label>
          <Select id="country" error={errors.country} {...register("country")}>
            <option value="">Select country</option>
            {countries.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </Select>
          <Error>{errors.country?.message}</Error>
        </div>

        <div>
          <Label htmlFor="classPreference" required>Class Preference</Label>
          <Select id="classPreference" error={errors.classPreference} {...register("classPreference")}>
            <option value="">Select</option>
            <option value="Online">Online</option>
            <option value="Onsite">Onsite</option>
          </Select>
          <Error>{errors.classPreference?.message}</Error>
        </div>

        <div>
          <Label htmlFor="gender" required>Gender</Label>
          <Select id="gender" error={errors.gender} {...register("gender")}>
            <option value="">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </Select>
          <Error>{errors.gender?.message}</Error>
        </div>

        <div>
          <Label htmlFor="city" required>City</Label>
          <Select id="city" error={errors.city} {...register("city")}>
            <option value="">Select city</option>
            {cities.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </Select>
          <Error>{errors.city?.message}</Error>
        </div>

        <div>
          <Label htmlFor="course" required>Course or Event</Label>
          <Select id="course" error={errors.course} {...register("course")}>
            <option value="">Select course or event</option>
            {courses.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </Select>
          <Error>{errors.course?.message}</Error>
        </div>

        <div>
          <Label htmlFor="fullName" required>Full Name</Label>
          <Input
            id="fullName"
            type="text"
            placeholder="Enter your full name"
            error={errors.fullName}
            {...register("fullName")}
          />
          <Error>{errors.fullName?.message}</Error>
        </div>

        <div>
          <Label htmlFor="fatherName" required>Father's Name</Label>
          <Input
            id="fatherName"
            type="text"
            placeholder="Enter father's name"
            error={errors.fatherName}
            {...register("fatherName")}
          />
          <Error>{errors.fatherName?.message}</Error>
        </div>

        <div>
          <Label htmlFor="email" required>Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="example@email.com"
            error={errors.email}
            {...register("email")}
          />
          <Error>{errors.email?.message}</Error>
        </div>

        <div>
          <Label htmlFor="phone" required>Phone Number</Label>
          <Input
            id="phone"
            type="tel"
            placeholder="03XXXXXXXXX"
            error={errors.phone}
            {...register("phone")}
          />
          <Error>{errors.phone?.message}</Error>
        </div>

        <div>
          <Label htmlFor="cnic" required>CNIC</Label>
          <Input
            id="cnic"
            type="text"
            placeholder="12345-1234567-1"
            error={errors.cnic}
            {...register("cnic")}
          />
          <Error>{errors.cnic?.message}</Error>
        </div>

        <div>
          <Label htmlFor="fatherCnic">Father's CNIC (Optional)</Label>
          <Input
            id="fatherCnic"
            type="text"
            placeholder="12345-1234567-1"
            error={errors.fatherCnic}
            {...register("fatherCnic")}
          />
          <Error>{errors.fatherCnic?.message}</Error>
        </div>

        <div>
          <Label htmlFor="dob" required>Date of Birth</Label>
          <Input
            id="dob"
            type="date"
            error={errors.dob}
            {...register("dob")}
          />
          <Error>{errors.dob?.message}</Error>
        </div>

        <div>
          <Label htmlFor="proficiency" required>Computer Proficiency</Label>
          <Select id="proficiency" error={errors.proficiency} {...register("proficiency")}>
            <option value="">Select</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </Select>
          <Error>{errors.proficiency?.message}</Error>
        </div>

        <div>
          <Label htmlFor="hasLaptop" required>Do you have a Laptop?</Label>
          <Select id="hasLaptop" error={errors.hasLaptop} {...register("hasLaptop")}>
            <option value="">Select</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </Select>
          <Error>{errors.hasLaptop?.message}</Error>
        </div>

        
        <div className="md:col-span-2">
          <Label htmlFor="qualification" required>Last Qualification</Label>
          <Select id="qualification" error={errors.qualification} {...register("qualification")}>
            <option value="">Select your qualification</option>
            {qualifications.map((qual) => (
              <option key={qual} value={qual}>
                {qual}
              </option>
            ))}
          </Select>
          <Error>{errors.qualification?.message}</Error>
        </div>

        <div className="md:col-span-2">
          <Label htmlFor="address" required>Address</Label>
          <Textarea
            id="address"
            rows="3"
            placeholder="Enter your complete address"
            error={errors.address}
            {...register("address")}
          />
          <Error>{errors.address?.message}</Error>
        </div>
      </div>
    </section>
  )
}