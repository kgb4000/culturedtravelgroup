export default function Button({
  buttonText,
  bgColor,
  textColor,
  borderWidth,
  textSize,
}) {
  return (
    <>
      <div className="inlineblock text-center">
        <a href="tel:240-665-3350">
          <button
            className={`${bgColor} ${textColor} ${borderWidth} ${textSize} py-6 px-10 my-4 rounded-2xl font-bold cursor-pointer uppercase`}
          >
            {buttonText}
          </button>
        </a>
      </div>
    </>
  )
}
