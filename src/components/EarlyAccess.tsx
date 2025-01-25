const EarlyAccess = () => {
  return (
    <section id="earlt-access" className="relative px-6 dark:bg-darkBlue2 md:px-0">
      {/* Early Access Container */}
      <div className="relative -top-40 mx-auto max-w-4xl space-y-6 rounded-lg bg-gray-200 p-10 px-6 text-center dark:bg-darkBlue1 md:px-16">
        <h4 className="text-2xl font-bold">Get early access today</h4>
        <p className="text-sm">
          It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions,
          our support team would be happy to help you.
        </p>
        Input & Button Container
        <div className="flex flex-col items-start space-y-6 md:flex-row md:space-x-6 md:space-y-0">
          <div className="w-full md:flex-1">
            <input
              type="email"
              className="peer w-full rounded-full px-10 py-3 text-black focus:outline-none"
              placeholder="email@example.com"
            />
            <p className="invisible mt-2 text-sm text-red-400 peer-invalid:visible">Error, please check your email</p>
          </div>
          <button className="w-full rounded-full bg-accentCyan bg-gradient-to-l from-accentBlue to-accentCyan p-3 px-6 text-white duration-200 hover:scale-95 md:w-56">
            Get Started For Free
          </button>
        </div>
      </div>
    </section>
  )
}
export default EarlyAccess
