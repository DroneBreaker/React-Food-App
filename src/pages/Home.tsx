import Button from "../components/Button"
import HeroText from "../components/HeroText"
import HomeLayout from "../layouts/HomeLayout"

function HomeContent() {
    return (
        <div>
            <div className="grid md:grid-cols-2 grid-cols-1">
                <div className="md:mx-16 mx-8">
                    <HeroText heroText="The Fastest Delivery in" spanText=" Your City"/>

                    <p className="text-sm mt-4 md:w-[20rem] text-gray-500  mb-2">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam
                        ut, quae repellat quasi odit iste dolorem nam error debitis quis tempora 
                        dicta temporibus voluptatum aut quo, animi et, qui veritatis.
                    </p>

                    <Button text="Order Now"/>
                </div>

                <div></div>
            </div>
        </div>
    )
}


export default function Home() {
  return (
    <HomeLayout><HomeContent/></HomeLayout>
  )
}
