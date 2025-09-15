import { Button } from "@/components/ui/shadcn-io/button "
import { Github, Instagram, Linkedin, X, Youtube } from "lucide-react"




const FrontPageFooter = () => {
    return (
      <footer className="bg-[#FFFFFF]">
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-4 text-gray-800">Our Research</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="text-gray-800 hover:text-gray-400">
                    Research Index
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-800 hover:text-gray-400">
                    Research Overview
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-800 hover:text-gray-400">
                    Research Residency
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-gray-800">ChatGPT</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="text-gray-800 hover:text-gray-400">
                    Explore ChatGPT
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-800 hover:text-gray-400">
                    Team
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-800 hover:text-gray-400">
                    Enterprise
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-800 hover:text-gray-400">
                    Pricing
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-gray-800">Company</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="text-gray-800 hover:text-gray-400">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-800 hover:text-gray-400">
                    Our Charter
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-800 hover:text-gray-400">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-800 hover:text-gray-400">
                    Brand
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-gray-800">Support</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="text-gray-800 hover:text-gray-400">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-800 hover:text-gray-400">
                    Terms of Use
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-800 hover:text-gray-400">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between mt-12 pt-8 border-t border-gray-700">
            <div className="flex items-center gap-4 mb-4 md:mb-0">
              <a href="#" className="text-gray-800 hover:text-gray-400">
                <X className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-800 hover:text-gray-400">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-800 hover:text-gray-400">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-800 hover:text-gray-400">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-800 hover:text-gray-400">
                <Instagram className="w-5 h-5" />
              </a>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-800">OpenAI © 2015–2025</span>
              <Button variant="ghost" size="sm" className="text-gray-800 hover:text-gray-400">
                English (United States)
              </Button>
            </div>
          </div>
        </div>
      </footer>
    )
}


export default FrontPageFooter