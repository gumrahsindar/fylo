const Footer = () => {
  return (
    <footer id="footer" className="bg-darkBlue2 text-white">
      <div className="container  mx-auto px-5 pb-10 pt-12">
        {/* Flex Container For All Items */}
        <div className="flex flex-col justify-between space-y-24 md:flex-row md:space-y-0">
          {/* Email & Phone */}
          <div className="mt-10 space-y-6">
            <div className="flex items-center space-x-3 md:-mt-10">
              <div className="w-6">
                <img src="/icon-phone.svg" alt="phone icon" className="scale-10" />
              </div>
              <div>+1-543-123-4567</div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-6">
                <img src="/icon-email.svg" alt="phone icon" className="scale-10" />
              </div>
              <div>example@fylo.com</div>
            </div>
          </div>

          {/* Menus */}
          <div className="flex flex-col space-y-10 text-xl md:flex-row md:space-x-20 md:space-y-0 md:text-base">
            <div className="flex flex-col space-y-3 ">
              <a href="#" className="link-hover">
                About
              </a>
              <a href="#" className="link-hover">
                Jobs
              </a>
              <a href="#" className="link-hover">
                Press
              </a>
              <a href="#" className="link-hover">
                Blog
              </a>
            </div>
            <div className="flex flex-col space-y-3">
              <a href="#" className="link-hover">
                Contact Us
              </a>
              <a href="#" className="link-hover">
                Terms
              </a>
              <a href="#" className="link-hover">
                Privacy
              </a>
            </div>
          </div>

          {/* Social Media */}
          <div className=" flex justify-center space-x-3 pb-10 ">
            <div>
              <a href="#" aria-label="Facebook" title="Facebook">
                <svg
                  className="duration-200 hover:fill-accentCyan hover:stroke-accentCyan"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="0.5"
                  stroke="#ffffff"
                  fill="#ffffff"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                </svg>
              </a>
            </div>
            <div>
              <a href="#" aria-label="Twitter" title="Twitter">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="duration-200 hover:fill-accentCyan hover:stroke-accentCyan"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="0.5"
                  stroke="#ffffff"
                  fill="#ffffff"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z" />
                </svg>
              </a>
            </div>
            <div>
              <a href="#" aria-label="Instagram" title="Instagram">
                <svg
                  className="duration-200 hover:stroke-accentCyan"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#ffffff"
                  fill="transparent"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <rect x="4" y="4" width="16" height="16" rx="4" />
                  <circle cx="12" cy="12" r="3" />
                  <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
export default Footer
