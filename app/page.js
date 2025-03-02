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
          herotext="Napa Valley, California Wine Country Tour"
          heroSubText="Travel with Monica on July 16th - 20th 2025 on an exclusive women's trip to wine country in Napa Valley, California"
          imageUrl="/images/nappa-valley-trip.png"
          buttonText="Call Monica To Learn More"
          textColor="text-white"
        />
      </div>
      <main>
        <div className="container max-w-9xl mx-auto my-10 lg:my-20">
          <section>
            <h2 className="text-3xl lg:text-5xl max-w-4xl text-center mx-auto uppercase mb-10 sm:px-6">
              Join Monica on a Luxurious Wine Tour in Napa Valley, California
            </h2>
            <div className=" max-w-9xl mx-auto px-6">
              <div className="async my-4">
                <ReactPlayer
                  className="rounded-lg"
                  url="https://symphony.cdn.tambourine.com/meritage-hotel/media/tmr-reno-web-reel-66565ae00d291.mp4"
                  playing={true}
                  width="100%"
                  height="auto"
                  loop={true}
                  muted={true}
                  controls
                />
              </div>
              <div className=" max-w-2xl mx-auto mt-10 px-6">
                <p className="lg:text-4xl text-3xl my-4 text-center font-bold">
                  July 16th - 20th 2025
                </p>
                <p className="lg:text-2xl my-4">
                  Indulge in a four-night, five-day journey through the heart of
                  California wine country.
                </p>
                <p className="lg:text-2xl my-4">
                  Our curated itinerary includes luxurious accommodations,
                  gourmet meals, exclusive wine tastings, and unforgettable
                  experiences.
                </p>
                <p className="lg:text-2xl my-4">
                  Let us take care of the details while you relax and savor the
                  beauty of Napa Valley.
                </p>
              </div>
              <p className="text-center text-2xl italic mb-4">
                Book your Napa Wine Tour Getaway Today?
              </p>
              <Button
                buttonText="Call Monica to Book Your Tour"
                bgColor="bg-orange-500"
                textColor="text-white"
                textSize="text-xl"
              />
            </div>
          </section>
        </div>
        <div className="container max-w-9xl px-6 mx-auto">
          <section>
            <div className="grid lg:grid-cols-2 gap-x-4">
              <img
                src="/images/four-black-women-sipping-wine.jpg"
                width="100%"
                height="auto"
              />
              <img
                src="/images/four-black-women-sitting-at-a-winery-sipping-wine.jpg"
                alt="Four black womensipping wine at winery in California."
                width="100%"
                height="auto"
              />
            </div>
          </section>
        </div>
        <div className="my-10 lg:my-20 px-6">
          <div className='bg-[url("/images/background-design.jpeg")] bg-no-repeat bg-center bg-cover py-20'>
            <section id="itinerary">
              <h2 className="text-2xl lg:text-5xl max-w-2xl text-center mx-auto uppercase mb-10">
                Napa Valley, California Wine Tour Itinerary
              </h2>
              <div className=" max-w-2xl mx-auto lg:mb-10">
                <h3 className="text-2xl lg:text-3xl font-bold">
                  Day 1: Arrival
                </h3>
                <ul>
                  <li className="lg:text-2xl my-4">
                    <span className="font-bold">Afternoon:</span> Arrive at San
                    Francisco International Airport and settle into a private
                    transfer to your luxurious boutique hotel in Napa Valley.
                    (Single & Double Occupancy available.)
                  </li>
                  <li className="lg:text-2xl my-4">
                    <span className="font-bold">Evening:</span> Check-in, unwind
                    by the pool or spa, and indulge in a delicious snack.
                  </li>
                  <li className="lg:text-2xl my-4">
                    <span className="font-bold">Late Evening:</span> Gather with
                    your fellow travelers for a fun-filled pajama party. Share
                    stories, laughter, and deep conversations over late-night
                    snacks and drinks.
                  </li>
                </ul>
              </div>
              <div className=" max-w-2xl mx-auto mb-10">
                <h3 className="text-2xl lg:text-3xl font-bold">
                  Day 2: Soaring Skies and Spa Serenity
                </h3>
                <ul>
                  <li className="lg:text-2xl my-4">
                    <span className="font-bold">Morning: </span>Embark on a
                    breathtaking hot air balloon ride over the Napa Valley
                    vineyards. (Optional)
                  </li>
                  <li className="lg:text-2xl my-4">
                    <span className="font-bold">Afternoon:</span> Relax and
                    rejuvenate with a spa day, indulging in massages, facials,
                    or other treatments. Or, explore the charming shops and
                    boutiques in nearby towns.
                  </li>
                  <li className="lg:text-2xl my-4">
                    <span className="font-bold">Late Evening:</span> Savor a
                    dinner at a vineyard restaurant, surrounded by stunning
                    views.
                  </li>
                </ul>
              </div>
              <div className=" max-w-2xl mx-auto mb-10">
                <h3 className="text-2xl lg:text-3xl font-bold">
                  Day 3: Wine Train Adventure and Cozy Firepit Night
                </h3>
                <ul>
                  <li className="lg:text-2xl my-4">
                    <span className="font-bold">Morning: </span>Enjoy a
                    leisurely breakfast at your hotel.
                  </li>
                  <li className="lg:text-2xl my-4">
                    <span className="font-bold">Afternoon:</span> Embark on a
                    luxurious journey through the vineyards aboard the Napa
                    Valley Wine Train, indulging in a gourmet lunch and wine
                    tasting.
                  </li>
                  <li className="lg:text-xl my-4">
                    <span className="font-bold">Late Evening:</span> Gather
                    around the firepit, roast marshmallows, and share stories
                    under the starry sky.
                  </li>
                </ul>
              </div>
              <div className=" max-w-2xl mx-auto mb-10">
                <h3 className="text-2xl lg:text-3xl font-bold">
                  Day 4: Vineyard Serenity and Wine Tasting
                </h3>
                <ul>
                  <li className="lg:text-2xl my-4">
                    <span className="font-bold">Morning: </span>Start your day
                    with a serene yoga session amidst the vineyards.
                  </li>
                  <li className="lg:text-2xl my-4">
                    <span className="font-bold">Afternoon:</span> Indulge in a
                    gourmet picnic lunch, paired with fine wines, surrounded by
                    the beauty of the vineyards. Sightsee and shop around town
                    after lunch.
                  </li>
                  <li className="lg:text-2xl my-4">
                    <span className="font-bold">Late Evening:</span> Conclude
                    the day with a private wine tasting experience at a renowned
                    winery.
                  </li>
                </ul>
              </div>
              <div className=" max-w-2xl mx-auto mb-10">
                <h3 className="text-2xl lg:text-3xl font-bold">
                  Day 5: Farewell Brunch and Departure
                </h3>
                <ul>
                  <li className="lg:text-2xl my-4">
                    <span className="font-bold">Morning: </span>Savor a
                    delicious farewell brunch at a local café.
                  </li>
                  <li className="lg:text-2xl my-4">
                    <span className="font-bold">Afternoon:</span> Check out of
                    your hotel and transfer to the airport.
                  </li>
                </ul>
              </div>
              <p className="text-center text-2xl italic mb-4">
                Ready to book your Napa Wine Tour Getaway?
              </p>
              <Button
                buttonText="Call Monica To Learn More"
                bgColor="bg-orange-500"
                textColor="text-white"
                textSize="text-xl"
              />
            </section>
          </div>
        </div>
        <div className="container max-w-9xl mx-auto my-20 px-6">
          <div className="async my-4">
            <ReactPlayer
              className="rounded-lg"
              url="https://symphony.cdn.tambourine.com/meritage-hotel/media/meritage-gallery-video-04-6127b2038ae13.mp4"
              playing={true}
              width="100%"
              height="auto"
              loop={true}
              muted={true}
              controls
            />
          </div>
        </div>
        <div className="container max-w-9xl mx-auto my-20 px-6">
          <section id="packages">
            <h2 className="text-2xl lg:text-5xl max-w-xl text-center mx-auto uppercase mb-6 lg:mb-10">
              Accommodations
            </h2>
            <div className="max-w-9xl mx-auto my-10 grid lg:grid-cols-2 gap-x-10 items-center">
              <div className="mb-10">
                <img
                  src="https://symphony.cdn.tambourine.com/meritage-hotel/media/meritageresort-gallery-11-610851a542eb9.jpg"
                  alt="Meritage grand reserve premiere king bed suite."
                  width="100%"
                  height="auto"
                  className="mb-2 lg:mb-10"
                />
                <img
                  src="/images/meritage-grand-reserve-deluxe-king.webp"
                  alt="Meritage grand reserve premiere king bed suite."
                  width="100%"
                  height="auto"
                  className="mb-2 lg:mb-10"
                />
                <img
                  src="/images/meritage-grand-reserve-premier-double.webp"
                  alt="Meritage grand reserve premiere double bed suite."
                  width="100%"
                  height="auto"
                />
              </div>
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                  The Meritage Resort and Spa
                </h3>
                <p className="lg:text-2xl mb-4">
                  The Meritage Hotel and Spa is a luxurious hotel located in the
                  heart of Napa Valley.
                </p>
                <p className="lg:text-2xl mb-4">
                  The hotel is surrounded by rolling hills and vineyards,
                  creating a peaceful and relaxing atmosphere.
                </p>
                <p className="lg:text-2xl mb-4">
                  The rooms at the Meritage are spacious and elegant, with
                  modern amenities such as flat-screen TVs, iPod docks, and
                  Wi-Fi.
                </p>
                <p className="lg:text-2xl mb-4">
                  The Meritage Hotel and Spa is the perfect place to relax and
                  escape from the hustle and bustle of everyday life.
                </p>
                <p className="lg:text-2xl mb-4">
                  The hotel offers a variety of amenities and activities, making
                  it the perfect place for a girls getaway.
                </p>
                <p className="lg:text-2xl mb-4">
                  <b>Amenities include:</b>
                </p>
                <ul className="list-disc ml-10">
                  <li className="lg:text-2xl my-4">
                    Olive + Hay – Award-winning Italian-inspired, farm-to-table
                    restaurant.
                  </li>
                  <li className="lg:text-2xl my-4">
                    Ember Steakhouse: Offers a refined dining experience with
                    dry-aged beef, fresh seafood, and an extensive wine list.
                  </li>
                  <li className="lg:text-2xl my-4">
                    Crush Lounge – A stylish lounge with bowling lanes,
                    cocktails, and gourmet snacks.
                  </li>
                  <li className="lg:text-2xl my-4">
                    Sora Lounge – Whimsical new champagne tasting room.
                  </li>
                  <li className="lg:text-2xl my-4">
                    The award-winning Spa Terra, located in an underground
                    Estate Cave, offers a variety of treatments including
                    massages, facials, and body treatments.
                  </li>
                  <li className="lg:text-2xl my-4">
                    Two pools – an adults-only pool with vineyard views and a
                    family pool.
                  </li>
                  <li className="lg:text-2xl my-4">
                    On-site tasting rooms featuring a variety of local wines.
                  </li>
                  <li className="lg:text-2xl my-4">
                    Private nine-acre vineyard with walking trails.
                  </li>
                  <li className="lg:text-2xl my-4">
                    Village Lawn for outdoor events and activities.
                  </li>
                  <li className="lg:text-2xl my-4">
                    Nearby access to Napa Valley wineries.
                  </li>
                  {/* <li className="lg:text-2xl my-4">
                    Click{' '}
                    <a href="https://www.meritageresort.com/" target="_blank">
                      here
                    </a>{' '}
                    to learn more
                  </li> */}
                </ul>
              </div>
            </div>
            <p className="text-center text-2xl italic mb-4">
              Ready to book your Napa Wine Tour Getaway?
            </p>
            <Button
              buttonText="Call Monica to Book Now"
              bgColor="bg-orange-500"
              textColor="text-white"
              textSize="text-xl"
            />
          </section>
        </div>
        <div className='bg-linear-[25deg,red_5%,yellow_60%,lime_90%,teal], bg-[url("/images/four-black-women-at-winery-1.jpeg")] bg-no-repeat bg-center bg-cover'>
          <div className="mx-auto my-10 px-6">
            <section id="packages" className="py-40">
              <div className="border-4 max-w-xl py-20 px-10 mx-auto text-white">
                <h2 className="text-3xl lg:text-5xl max-w-xl font-bold text-center mx-auto uppercase">
                  Well-deserved Escape Cost
                </h2>
                <div className="max-w-2xl mx-auto my-10 text-center">
                  <p className="text-2xl lg:text-3xl font-bold mb-10">
                    $3,500.00 Double Occupancy
                  </p>
                  <p className="text-2xl lg:text-3xl font-bold mb-10">
                    $4,100.00 Single Occupancy
                  </p>
                  <p className="text-xl font-bold mb-10 max-w-xl mx-auto">
                    $400.00 non-refundable deposit to save your space and
                    monthly payments
                  </p>
                </div>
                <Button
                  buttonText="Call Monica to Book Now"
                  bgColor="bg-orange-500"
                  textColor="text-white"
                  textSize="text-xl"
                />
              </div>
            </section>
          </div>
        </div>
        {/* <div className="bg-center bg-cover bg-no-repeat bg-body-img bg-fixed container flex items-center justify-center h-screen mx-auto">
          <blockquote className="bg-gray-300 hover:bg-gray-400 transition duration-300 shadow-xl rounded-xl mx-4 p-4 text-center text-gray-800 md:p-8">
            <p className="font-bold italic text-3xl">
              &ldquo;Parallax effect adds depth by moving layers at different
              speeds during scrolling.&rdquo;
            </p>
          </blockquote>
        </div> */}
        <div className="container max-w-5xl mx-auto my-20 px-6">
          <section>
            <h2 className="text-3xl lg:text-5xl max-w-xl text-center mx-auto uppercase">
              What's Included
            </h2>
            <div className=" max-w-2xl mx-auto my-10">
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold">
                  Luxurious Accommodations
                </h3>
                <p className="lg:text-2xl my-4">
                  Stay in a stylish boutique hotel in the heart of Napa Valley.
                  (Single and double occupancy available.)
                </p>
              </div>
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold">
                  Gourmet Dining
                </h3>
                <p className="lg:text-2xl my-4">
                  Enjoy a welcome gathering, daily continental breakfast, a
                  Michelin-star dining experience, vineyard picnic, a farewell
                  brunch.
                </p>
              </div>
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold">
                  Exclusive Wine Tastings
                </h3>
                <p className="lg:text-2xl my-4">
                  Experience a private wine tasting at a renowned winery.
                </p>
              </div>
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold">
                  {' '}
                  Napa Valley Wine Train
                </h3>
                <p className="lg:text-2xl my-4">
                  Embark on a scenic journey through the vineyards, indulging in
                  a gourmet lunch and wine tasting.
                </p>
              </div>
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold">
                  Round-trip Airport Transfers
                </h3>
                <p className="lg:text-2xl my-4">
                  Seamless transportation from San Francisco International
                  Airport to your hotel. Welcome gift and swag bag.
                </p>
              </div>
            </div>
          </section>
        </div>
        <div className="container max-w-5xl mx-auto my-20 px-6">
          <section>
            <h2 className="text-3xl lg:text-5xl max-w-xl text-center mx-auto uppercase">
              Not Included
            </h2>
            <div className=" max-w-2xl mx-auto my-10">
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold">Airfare</h3>
                <p className="lg:text-2xl my-4">
                  Flights to and from San Francisco International Airport.
                </p>
              </div>
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold">
                  Spa Treatments
                </h3>
                <p className="lg:text-2xl my-4">
                  Book and pay for any treatments on your own.
                </p>
              </div>
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold">
                  Any meals not mentioned as being included above
                </h3>
                <p className="lg:text-2xl my-4">
                  Experience a private wine tasting at a renowned winery.
                </p>
              </div>
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold">
                  Additional Alcoholic Beverages
                </h3>
                <p className="lg:text-2xl my-4">
                  While wine tastings are included, additional alcoholic
                  beverages are at your own expense.
                </p>
              </div>
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold">
                  Personal Shopping
                </h3>
                <p className="lg:text-2xl my-4">
                  Any personal purchases made during your trip.
                </p>
              </div>
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold">Gratuities</h3>
                <p className="lg:text-2xl my-4">
                  Tips for your tour guide, driver, and hotel staff.
                </p>
              </div>
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold">
                  Travel Insurance
                </h3>
                <p className="lg:text-2xl my-4">
                  We recommend purchasing travel insurance to protect your
                  investment.
                </p>
              </div>
            </div>
            <p className="text-center text-2xl italic mb-4">
              Ready to book your Napa Wine Tour Getaway?
            </p>
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
            <h2 className="text-3xl lg:text-5xl max-w-xl text-center mx-auto uppercase">
              About Monica
            </h2>
            <div className=" max-w-5xl mx-auto my-10 grid lg:grid-cols-2 gap-x-10 items-center">
              <div>
                <img
                  src="https://res.cloudinary.com/browne-company/image/upload/q_auto/v1631816208/monica_cqphqb.jpg"
                  alt="Monica Browne"
                  width="100%"
                  height="auto"
                />
              </div>
              <div>
                <p className="lg:text-2xl my-4">
                  Monica, the visionary behind Cultured Travel Group, is a true
                  embodiment of the adventurous spirit.
                </p>
                <p className="lg:text-2xl my-4">
                  Her passion for travel ignited early in life, as she embarked
                  on countless journeys, exploring diverse cultures and
                  landscapes.
                </p>
                <p className="lg:text-2xl my-4">
                  These experiences instilled in her a deep appreciation for the
                  world's beauty and the power of travel to transform lives.
                </p>
                <p className="lg:text-2xl my-4">
                  Monica wants to reach every corner of the globe, from the
                  bustling metropolises of Asia to the serene glaciers in
                  Iceland.
                </p>
                <p className="lg:text-2xl my-4">
                  She has a keen eye for detail and a knack for discovering
                  hidden gems, ensuring that every trip she curates is a unique
                  and unforgettable experience.
                </p>
                <p className="lg:text-2xl my-4">
                  Beyond her love for travel, Monica is a strong advocate for
                  empowering Black women.
                </p>
                <p className="lg:text-2xl my-4">
                  She recognizes the unique challenges and desires of her
                  clientele, and she is committed to creating safe, inclusive,
                  and enriching travel experiences that celebrate Black
                  womanhood.
                </p>
              </div>
            </div>
            <p className="text-center text-2xl italic mb-4">
              Ready to book your Napa Wine Tour Getaway?
            </p>
            <Button
              buttonText="Call Monica Today"
              bgColor="bg-orange-500"
              textColor="text-white"
              textSize="text-xl"
            />
          </section>
        </div>
      </main>
    </>
  )
}
