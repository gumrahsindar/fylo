const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-gray-50 dark:bg-darkBlue">
      {/* Testimonials Container */}
      <div className="container mx-auto px-6 pb-80 pt-12 md:pb-96">
        {/* Boxes Contaniner */}
        <div className="relative flex w-full flex-col space-y-6 md:flex-row md:space-x-12 md:space-y-0">
          {/* Quotes Image */}
          <img src="/bg-quotes.png" alt="" className="absolute -top-2 left-1 w-10 md:-top-16 md:w-20" />

          {/* Box 1 */}
          <div className="flex flex-col space-y-6 rounded-lg p-10 dark:bg-darkBlue3 md:w-1/3 md:bg-gray-100">
            <p className="text-sm leading-5 md:text-lg">
              Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has
              become a well-oiled collaboration machine.
            </p>
            {/* Customer Info */}
            <div className="flex space-x-4">
              <img src="/profile-1.jpg" alt="avatar" className="h-10 w-10 rounded-full" />
              <div>
                <h4 className="text-sm font-semibold">Satish Patel</h4>
                <p className="text-xs font-extralight">Founder & CEO Huddle</p>
              </div>
            </div>
          </div>
          {/* Box 2 */}
          <div className="flex flex-col space-y-6 rounded-lg p-10 dark:bg-darkBlue3 md:w-1/3 md:bg-gray-100">
            <p className="text-sm leading-5 md:text-lg">
              Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has
              become a well-oiled collaboration machine.
            </p>
            {/* Customer Info */}
            <div className="flex space-x-4">
              <img src="/profile-2.jpg" alt="avatar" className="h-10 w-10 rounded-full" />
              <div>
                <h4 className="text-sm font-semibold">Bruce Mckenzie</h4>
                <p className="text-xs font-extralight">Founder & CEO Huddle</p>
              </div>
            </div>
          </div>
          {/* Box 3 */}
          <div className="flex flex-col space-y-6 rounded-lg p-10 dark:bg-darkBlue3 md:w-1/3 md:bg-gray-100">
            <p className="text-sm leading-5 md:text-lg">
              Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has
              become a well-oiled collaboration machine.
            </p>
            {/* Customer Info */}
            <div className="flex space-x-4">
              <img src="/profile-3.jpg" alt="avatar" className="h-10 w-10 rounded-full" />
              <div>
                <h4 className="text-sm font-semibold">Iva Boyd</h4>
                <p className="text-xs font-extralight">Founder & CEO Huddle</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Testimonials
