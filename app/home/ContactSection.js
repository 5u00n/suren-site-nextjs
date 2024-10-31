import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';
import Link from 'next/link';


function ContactSection() {
  return (
    <section id="contact-section" className="w-full h-full md:px-16 sm:px-5 xs:px-5 bg-[#FFFFFF] dark:bg-transparent py-16 lg:rounded">
        <div className="w-full h-full flex flex-col gap-8">
          <h2 className="font-bold font-gloock text-heading1">
            Get in Touch
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="rounded-lg border bg-white dark:bg-gray-800/40 shadow-md transition-all hover:shadow-lg">
                <div className="flex flex-col space-y-1.5 p-6">
                  <h3 className="text-2xl font-semibold leading-none tracking-tight">Contact Information</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Feel free to reach out through any of these channels</p>
                </div>
                <div className="p-6 pt-0 space-y-4">
                  <div className="flex items-center gap-3 group">
                    <div className="p-2 rounded-full bg-blue-100 dark:bg-blue-900/20">
                      <Mail className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <a href="mailto:surenhembram97@gmail.com" className="text-sm hover:underline">surenhembram97@gmail.com</a>
                  </div>
                  <div className="flex items-center gap-3 group">
                    <div className="p-2 rounded-full bg-blue-100 dark:bg-blue-900/20">
                      <Linkedin className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <Link href="https://linkedin.com/in/surenhembram" className="text-sm hover:underline">
                      linkedin.com/in/surenhembram
                    </Link>
                  </div>
                  <div className="flex items-center gap-3 group">
                    <div className="p-2 rounded-full bg-blue-100 dark:bg-blue-900/20">
                      <Github className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <Link href="https://github.com/5u00n" className="text-sm hover:underline">
                      github.com/5u00n
                    </Link>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border bg-white dark:bg-gray-800/40 shadow-md transition-all hover:shadow-lg mt-6">
                <div className="flex flex-col space-y-1.5 p-6 border-b border-gray-100 dark:border-gray-700">
                  <h3 className="text-2xl font-semibold leading-none tracking-tight">Business Hours</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">When you can reach us</p>
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-700 last:border-0">
                    <span className="font-medium">Monday - Friday</span>
                    <span className="text-gray-600 dark:text-gray-300">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-700 last:border-0">
                    <span className="font-medium">Saturday and Sunday</span>
                    <span className="text-gray-600 dark:text-gray-300">Closed</span>
                  </div>
                </div>
              </div>

             
            </div>

            <form className="rounded-lg border bg-white dark:bg-gray-800/40 shadow-md transition-all hover:shadow-lg p-6">
              <div className="grid gap-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium leading-none">Name</label>
                    <input
                      type="text"
                      id="name"
                      className="flex h-10 w-full rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium leading-none">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="flex h-10 w-full rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium leading-none">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    className="flex h-10 w-full rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="What's this about?"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium leading-none">Message</label>
                  <textarea
                    id="message"
                    rows="4"
                    className="flex w-full rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium bg-blue-600 hover:bg-blue-700 text-white h-10 px-4 py-2 transition-colors"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
  )
}

export default ContactSection