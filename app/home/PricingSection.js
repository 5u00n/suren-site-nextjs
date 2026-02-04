import React from 'react'

function PricingSection() {
  return (
    <section id="pricing-section" className="w-full h-full md:px-16 sm:px-5 xs:px-5 bg-[#FFFFFF] dark:bg-transparent py-16">
        <div className="mx-auto max-w-7xl  lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="font-bold font-gloock text-4xl mb-4">
              Simple, transparent pricing
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Choose the perfect plan for your project needs
            </p>
          </div>
          
          <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <div className="rounded-3xl p-8 ring-1 ring-gray-200 dark:ring-gray-700 xl:p-10">
              <h3 className="text-lg font-semibold leading-8 text-gray-900 dark:text-white">Basic</h3>
              <p className="mt-4 text-sm leading-6 text-gray-600 dark:text-gray-300">Perfect for small projects and quick tasks</p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">₹1,499</span>
                <span className="text-sm font-semibold leading-6 text-gray-600 dark:text-gray-300">/hour</span>
              </p>
              <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600 dark:text-gray-300">
                <li className="flex gap-x-3">✓ Basic web development</li>
                <li className="flex gap-x-3">✓ Single page applications</li>
                <li className="flex gap-x-3">✓ Basic UI/UX design</li>
                <li className="flex gap-x-3">✓ 2 revisions</li>
                <li className="flex gap-x-3">✓ 48 hour support response time</li>
              </ul>
            </div>

            <div className="rounded-3xl p-8 ring-2 ring-indigo-600 xl:p-10 bg-gray-50 dark:bg-gray-800">
              <h3 className="text-lg font-semibold leading-8 text-indigo-600 dark:text-indigo-400">Professional</h3>
              <p className="mt-4 text-sm leading-6 text-gray-600 dark:text-gray-300">For medium-sized projects and businesses</p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">₹2,499</span>
                <span className="text-sm font-semibold leading-6 text-gray-600 dark:text-gray-300">/hour</span>
              </p>
              <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600 dark:text-gray-300">
                <li className="flex gap-x-3">✓ Advanced web development</li>
                <li className="flex gap-x-3">✓ Full-stack applications</li>
                <li className="flex gap-x-3">✓ Professional UI/UX design</li>
                <li className="flex gap-x-3">✓ 5 revisions</li>
                <li className="flex gap-x-3">✓ 24 hour support response time</li>
                <li className="flex gap-x-3">✓ API integration</li>
                <li className="flex gap-x-3">✓ Database design</li>
              </ul>
            </div>

            <div className="rounded-3xl p-8 ring-1 ring-gray-200 dark:ring-gray-700 xl:p-10">
              <h3 className="text-lg font-semibold leading-8 text-gray-900 dark:text-white">Enterprise</h3>
              <p className="mt-4 text-sm leading-6 text-gray-600 dark:text-gray-300">For large-scale enterprise solutions</p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">₹4,499</span>
                <span className="text-sm font-semibold leading-6 text-gray-600 dark:text-gray-300">/hour</span>
              </p>
              <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600 dark:text-gray-300">
                <li className="flex gap-x-3">✓ Enterprise-level development</li>
                <li className="flex gap-x-3">✓ Microservices architecture</li>
                <li className="flex gap-x-3">✓ Custom UI/UX design systems</li>
                <li className="flex gap-x-3">✓ Unlimited revisions</li>
                <li className="flex gap-x-3">✓ Priority 24/7 support</li>
                <li className="flex gap-x-3">✓ Advanced security features</li>
                <li className="flex gap-x-3">✓ Performance optimization</li>
                <li className="flex gap-x-3">✓ Scalability planning</li>
              </ul>
            </div>
          </div>

          <div className="mt-16">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr>
                  <th className="py-4 px-4 text-left font-medium text-gray-900 dark:text-white">Features</th>
                  <th className="py-4 px-4 text-center font-medium text-gray-900 dark:text-white">Basic</th>
                  <th className="py-4 px-4 text-center font-medium text-gray-900 dark:text-white">Professional</th>
                  <th className="py-4 px-4 text-center font-medium text-gray-900 dark:text-white">Enterprise</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                <tr>
                  <td className="py-4 px-4 text-gray-600 dark:text-gray-300">Minimum Project Duration</td>
                  <td className="py-4 px-4 text-center text-gray-600 dark:text-gray-300">20 hours</td>
                  <td className="py-4 px-4 text-center text-gray-600 dark:text-gray-300">40 hours</td>
                  <td className="py-4 px-4 text-center text-gray-600 dark:text-gray-300">100 hours</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 text-gray-600 dark:text-gray-300">Source Code Access</td>
                  <td className="py-4 px-4 text-center">✓</td>
                  <td className="py-4 px-4 text-center">✓</td>
                  <td className="py-4 px-4 text-center">✓</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 text-gray-600 dark:text-gray-300">Deployment Support</td>
                  <td className="py-4 px-4 text-center">-</td>
                  <td className="py-4 px-4 text-center">✓</td>
                  <td className="py-4 px-4 text-center">✓</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
  )
}

export default PricingSection