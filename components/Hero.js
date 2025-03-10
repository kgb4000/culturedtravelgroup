const calendly = 'Hello'

export default function Hero({
  herotext,
  heroSubText,
  buttonText,
  imageUrl,
  textColor,
  borcerColor,
}) {
  return (
    <div className="container max-w-full">
      <div
        className="w-full min-h-vh bg-cover bg-center
                       flex justify-center items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.42), rgba(0, 0, 0, 0.35)), url(${imageUrl})`,
        }}
      >
        <div className="text-center px-6 py-32 sm:py-48 lg:py-56">
          <h1 className="text-4xl md:text-7xl font-semibold text-white sm:text-7xl leading-normal max-w-4xl mx-auto drop-shadow-xl">
            {herotext}
          </h1>
          {heroSubText && (
            <p className="my-8 text-pretty text-lg font-medium text-white sm:text-xl/8 max-w-xl  mx-auto">
              {heroSubText}
            </p>
          )}
          {buttonText && (
            <a href="tel:240-665-3350">
              <button
                className={`mt-10 lg:text-2xl ${textColor} ${borcerColor} border-2 py-6 px-8 rounded-2xl font-bold uppercase`}
              >
                {buttonText}
              </button>
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
