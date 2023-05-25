import { RegisterForm } from "./form"
import RightSection from "./rightSection"

export function Register() {
  return (
    <div className="flex justify-between  item-center">
      <div className="w-full md:w-[80%] mt-32 lg:mt-0 lg:w-[35%] container self-center ">
        <RegisterForm />
      </div>
      <div className="hidden lg:block  p-0 w-[50%]">
        <RightSection />
      </div>
    </div>
  )
}
