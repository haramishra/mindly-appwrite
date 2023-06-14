import { LoginForm } from "./form"
import RightSection from "./rightSection"

export function Login() {
  return (
    <div className="item-center flex  justify-between">
      <div className="container mt-32 w-full self-center md:w-[80%] lg:mt-0 lg:w-[35%] ">
        <LoginForm />
      </div>
      <div className="hidden w-[50%]  p-0 lg:block">
        <RightSection />
      </div>
    </div>
  )
}
