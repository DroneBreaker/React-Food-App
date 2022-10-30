interface HeroProps {
    heroText: string
    spanText: string
}

export default function HeroText({heroText, spanText}: HeroProps) {
  return (
    <div className="md:w-[22rem] md:h-[12rem]">
        <h1 className="md:text-6xl font-bold my-16">{ heroText }<span className="text-orange-500 text-6xl font-bold">{ spanText }</span></h1>
    </div>
  )
}
