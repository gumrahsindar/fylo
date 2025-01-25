const Productive = () => {
  return (
    <section id="productive" className="bg-white dark:bg-darkBlue">
      {/* Productive Container */}
      <div className="container mx-auto flex flex-col items-center px-6 pb-32 pt-24 md:flex-row md:space-x-16">
        {/* Image */}
        <div className="md:w-1/2">
          <img src="/illustration-stay-productive.png" alt="stay productive" className="mb-10" />
        </div>

        {/* Content */}
        <div className="flex flex-col items-start md:w-1/2">
          <div className="flex flex-col space-y-5">
            <h3 className="max-w-md text-xl font-bold md:text-4xl">Stay productive, wherever you are</h3>
            <p className="md:text-lg">
              Never let location be an issue when accessing your files. Fylo has you covered for all of your file
              storage needs
            </p>
            <p className="md:text-lg">
              Securely share files and folders with friends, family and colleagues for live collaboration. No email
              attachments required.
            </p>
          </div>

          {/* Link */}
          <div className="mt-4">
            <a href="#" className="border-b border-accentCyan text-[#18817A] dark:text-[#24C2B7] ">
              See how Fylo works <img src="/icon-arrow.svg" alt="arrow" className="ml-2 inline-block" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Productive
