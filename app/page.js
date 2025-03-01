'use client'

import Image from 'next/image'
import Hero from '@/components/Hero'
import ReactPlayer from 'react-player'
import Button from '@/components/Button'

export default function Home() {
  return (
    <>
      <div className="container max-w-full">
        <Hero
          herotext="Napa Valley"
          heroSubText="Travel with Monica on July 16th - 20th 2025 on an exclusive trip to wine countyr in Napa Valley, California"
          imageUrl="/images/nappa-valley-trip.png"
          buttonText="Call Monica To Learn More &rarr;"
          textColor="text-white"
        />
      </div>
      <main>
        <div className="container max-w-5xl mx-auto my-10">
          <section>
            <h2 className="text-3xl max-w-xl text-center mx-auto uppercase mb-6">
              Join Monica on a Luxurious Escape to Napa Valley, California
            </h2>

            <div className=" max-w-5xl mx-auto">
              <div className="async my-4">
                <ReactPlayer
                  className="rounded-lg"
                  url="https://symphony.cdn.tambourine.com/meritage-hotel/media/tmr-reno-web-reel-66565ae00d291.mp4"
                  muted={true}
                  playing={true}
                  width="100%"
                  height="auto"
                  loop={true}
                />
              </div>
              <div className=" max-w-2xl mx-auto mt-10">
                <p className="lg:text-xl my-4">
                  Indulge in a four-night, five-day journey through the heart of
                  California wine country.
                </p>
                <p className="lg:text-xl my-4">
                  Our curated itinerary includes luxurious accommodations,
                  gourmet meals, exclusive wine tastings, and unforgettable
                  experiences.
                </p>
                <p className="lg:text-xl my-4">
                  Let us take care of the details while you relax and savor the
                  beauty of Napa Valley.
                </p>
              </div>
              <Button
                buttonText="Call Monica Today"
                bgColor="bg-orange-500"
                textColor="text-white"
                textSize="text-xl"
              />
            </div>
          </section>
        </div>
        <div className="container max-w-5xl mx-auto my-20 px-6">
          <section id="itinerary">
            <h2 className="text-3xl max-w-xl text-center mx-auto uppercase mb-6">
              Trip Itinerary
            </h2>
            <div className=" max-w-2xl mx-auto mb-10">
              <h3 className="text-2xl font-bold">Day 1: Arrival</h3>
              <ul>
                <li className="lg:text-xl my-4">
                  <span className="font-bold">Afternoon:</span> Arrive at San
                  Francisco International Airport and settle into a private
                  transfer to your luxurious boutique hotel in Napa Valley.
                  (Single & Double Occupancy available.)
                </li>
                <li className="lg:text-xl my-4">
                  <span className="font-bold">Evening:</span> Check-in, unwind
                  by the pool or spa, and indulge in a delicious snack.
                </li>
                <li className="lg:text-xl my-4">
                  <span className="font-bold">Late Evening:</span> Gather with
                  your fellow travelers for a fun-filled pajama party. Share
                  stories, laughter, and deep conversations over late-night
                  snacks and drinks.
                </li>
              </ul>
            </div>
            <div className=" max-w-2xl mx-auto mb-10">
              <h3 className="text-2xl font-bold">
                Day 2: Soaring Skies and Spa Serenity
              </h3>
              <ul>
                <li className="lg:text-xl my-4">
                  <span className="font-bold">Morning: </span>Embark on a
                  breathtaking hot air balloon ride over the Napa Valley
                  vineyards. (Optional)
                </li>
                <li className="lg:text-xl my-4">
                  <span className="font-bold">Afternoon:</span> Relax and
                  rejuvenate with a spa day, indulging in massages, facials, or
                  other treatments. Or, explore the charming shops and boutiques
                  in nearby towns.
                </li>
                <li className="lg:text-xl my-4">
                  <span className="font-bold">Late Evening:</span> Savor a
                  dinner at a vineyard restaurant, surrounded by stunning views.
                </li>
              </ul>
            </div>
            <div className=" max-w-2xl mx-auto mb-10">
              <h3 className="text-2xl font-bold">
                Day 3: Wine Train Adventure and Bonfire Night
              </h3>
              <ul>
                <li className="lg:text-xl my-4">
                  <span className="font-bold">Morning: </span>Enjoy a leisurely
                  breakfast at your hotel.
                </li>
                <li className="lg:text-xl my-4">
                  <span className="font-bold">Afternoon:</span> Embark on a
                  luxurious journey through the vineyards aboard the Napa Valley
                  Wine Train, indulging in a gourmet lunch and wine tasting.
                </li>
                <li className="lg:text-xl my-4">
                  <span className="font-bold">Late Evening:</span> Gather around
                  the bonfire, roast marshmallows, and share stories under the
                  starry sky.
                </li>
              </ul>
            </div>
            <div className=" max-w-2xl mx-auto mb-10">
              <h3 className="text-2xl font-bold">
                Day 4: Vineyard Serenity and Wine Tasting
              </h3>
              <ul>
                <li className="lg:text-xl my-4">
                  <span className="font-bold">Morning: </span>Start your day
                  with a serene yoga session amidst the vineyards.
                </li>
                <li className="lg:text-xl my-4">
                  <span className="font-bold">Afternoon:</span> Indulge in a
                  gourmet picnic lunch, paired with fine wines, surrounded by
                  the beauty of the vineyards. Sightsee and shop around town
                  after lunch.
                </li>
                <li className="lg:text-xl my-4">
                  <span className="font-bold">Late Evening:</span> Conclude the
                  day with a private wine tasting experience at a renowned
                  winery.
                </li>
              </ul>
            </div>
            <div className=" max-w-2xl mx-auto mb-10">
              <h3 className="text-2xl font-bold">
                Day 5: Farewell Brunch and Departure
              </h3>
              <ul>
                <li className="lg:text-xl my-4">
                  <span className="font-bold">Morning: </span>Savor a delicious
                  farewell brunch at a local café.
                </li>
                <li className="lg:text-xl my-4">
                  <span className="font-bold">Afternoon:</span> Check out of
                  your hotel and transfer to the airport.
                </li>
              </ul>
            </div>
            <Button
              buttonText="Call Monica Today"
              bgColor="bg-orange-500"
              textColor="text-white"
              textSize="text-xl"
            />
          </section>
        </div>
        <div className="mx-auto my-10 px-6 bg-blue-50">
          <section id="packages" className="py-40">
            <h2 className="text-3xl max-w-xl font-bold text-center mx-auto uppercase">
              Investment
            </h2>
            <div className=" max-w-2xl mx-auto my-10">
              <p className="text-2xl font-bold mb-10">
                • $3500.00 Double Occupancy
              </p>
              <p className="text-2xl font-bold mb-10">
                • $4100.00 Single Occupancy
              </p>
              <p className="text-xl font-bold mb-10">
                • $400.00 non-refundable deposit to save your space and monthly
              </p>
            </div>
            <Button
              buttonText="Call Monica Today"
              bgColor="bg-orange-500"
              textColor="text-white"
              textSize="text-xl"
            />
          </section>
        </div>
        <div className="container max-w-5xl mx-auto my-20 px-6">
          <section>
            <h2 className="text-3xl max-w-xl text-center mx-auto uppercase">
              Your Nappa Valley Trip Includes
            </h2>
            <div className=" max-w-2xl mx-auto my-10">
              <div>
                <h3 className="text-2xl font-bold">
                  • Luxurious Accommodations:
                </h3>
                <p className="lg:text-xl my-4 pl-4">
                  Stay in a stylish boutique hotel in the heart of Napa Valley.
                  (Single and double occupancy available.)
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold"> • Gourmet Dining:</h3>
                <p className="lg:text-xl my-4 pl-4">
                  Enjoy a welcome gathering, daily continental breakfast, a
                  Michelin-star dining experience, vineyard picnic, a farewell
                  brunch.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold">
                  • Exclusive Wine Tastings:
                </h3>
                <p className="lg:text-xl my-4 pl-4">
                  Experience a private wine tasting at a renowned winery.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold">
                  {' '}
                  • Napa Valley Wine Train:
                </h3>
                <p className="lg:text-xl my-4 pl-4">
                  Embark on a scenic journey through the vineyards, indulging in
                  a gourmet lunch and wine tasting.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold">
                  • Round-trip Airport Transfers:
                </h3>
                <p className="lg:text-xl my-4 pl-4">
                  Seamless transportation from San Francisco International
                  Airport to your hotel. Welcome gift and swag bag.
                </p>
              </div>
            </div>
          </section>
        </div>
        <div className="container max-w-5xl mx-auto my-20 px-6">
          <section>
            <h2 className="text-3xl max-w-xl text-center mx-auto uppercase">
              What's Not Included
            </h2>
            <div className=" max-w-2xl mx-auto my-10">
              <div>
                <h3 className="text-2xl font-bold">• Airfaire</h3>
                <p className="lg:text-xl my-4 pl-4">
                  Flights to and from San Francisco International Airport.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold"> • Spa Treatments:</h3>
                <p className="lg:text-xl my-4 pl-4">
                  Book and pay for any treatments on your own.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold">
                  • Any meals not mentioned as being included above:
                </h3>
                <p className="lg:text-xl my-4 pl-4">
                  Experience a private wine tasting at a renowned winery.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold">
                  • Additional Alcoholic Beverages:
                </h3>
                <p className="lg:text-xl my-4 pl-4">
                  While wine tastings are included, additional alcoholic
                  beverages are at your own expense.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold">• Personal Shopping:</h3>
                <p className="lg:text-xl my-4 pl-4">
                  Any personal purchases made during your trip.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold">• Gratuities:</h3>
                <p className="lg:text-xl my-4 pl-4">
                  Tips for your tour guide, driver, and hotel staff.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold">• Travel Insurance:</h3>
                <p className="lg:text-xl my-4 pl-4">
                  We recommend purchasing travel insurance to protect your
                  investment.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  )
}
