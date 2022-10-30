interface ButtonProps {
    text: string
}
export default function Button({text}: ButtonProps) {
  return (
    <div>
        <button className='bg-orange-500 mt-4 font-semibold rounded-md p-2 px-4 text-sm text-white'>
            { text }
        </button>
    </div>
  )
}
