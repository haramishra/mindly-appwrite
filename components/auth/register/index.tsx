import { RegisterForm } from "./form"
import RightSection from "./rightSection"

export function Register() {
  return (
    <div className="item-center flex  justify-between">
      <div className="container mt-32 w-full self-center md:w-[80%] lg:mt-0 lg:w-[35%] ">
        <RegisterForm />
      </div>
      <div className="hidden w-[50%]  p-0 lg:block">
        <RightSection />
      </div>
    </div>
  )
}
