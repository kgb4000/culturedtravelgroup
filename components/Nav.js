'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Trip Details', href: '#itinerary' },
  { name: 'Packages', href: '#packages' },
  { name: 'Contact', href: '#contact' },
]

export default function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-white">
      <header className="">
        <nav className="flex items-center justify-between p-4 lg:px-8">
          <div className="flex lg:flex-1">
            <a
              href="/"
              className="text-black font-semibold hover:no-underline text-md"
            >
              Cultured Travel Group
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-black font-extrabold"
            >
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm/6 font-semibold text-gray-900 no-underline"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a
              href="tel:240-665-3350"
              className="text-sm/6 font-semibold text-black no-underline"
            >
              <button className="py-2 px-6 rounded-xl bg-orange-500 text-white border-0">
                Call Monica
              </button>
            </a>
          </div>
        </nav>
        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
        >
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="text-black hover:no-underline font-bold">
                <p>Cultured Travel Group</p>
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6">
                {/* <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 no-underline"
                    >
                      {item.name}
                    </a>
                  ))}
                </div> */}
                <p className="my-6">
                  Indulge in a four-night, five-day journey through the heart of
                  California wine country. Our curated itinerary includes
                  luxurious accommodations, gourmet meals, exclusive wine
                  tastings, and unforgettable experiences. Let us take care of
                  the details while you relax and savor the beauty of Napa
                  Valley.
                </p>
                <div>
                  <a
                    href="tel:240-665-3350"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900"
                  >
                    <button className="py-4 px-8 rounded-xl bg-orange-500 text-white border-0">
                      Call Monica
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
    </div>
  )
}
