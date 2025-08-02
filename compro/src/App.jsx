"use client"

import { useState } from "react"

// Custom Button Component
const Button = ({ children, className = "", onClick, ...props }) => {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center justify-center px-4 py-2 rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

// Custom Card Components
const Card = ({ children, className = "" }) => {
  return <div className={`rounded-lg border bg-card text-card-foreground shadow-sm ${className}`}>{children}</div>
}

const CardContent = ({ children, className = "" }) => {
  return <div className={`p-6 ${className}`}>{children}</div>
}

// Custom Icons (SVG)
const Play = ({ className = "" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <polygon points="5,3 19,12 5,21 5,3"></polygon>
  </svg>
)

const ArrowRight = ({ className = "" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12,5 19,12 12,19"></polyline>
  </svg>
)

const Clock = ({ className = "" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10"></circle>
    <polyline points="12,6 12,12 16,14"></polyline>
  </svg>
)

const Type = ({ className = "" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <polyline points="4,7 4,4 20,4 20,7"></polyline>
    <line x1="9" y1="20" x2="15" y2="20"></line>
    <line x1="12" y1="4" x2="12" y2="20"></line>
  </svg>
)

const Zap = ({ className = "" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <polygon points="13,2 3,14 12,14 11,22 21,10 12,10 13,2"></polygon>
  </svg>
)

const CheckCircle = ({ className = "" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path d="m9 12 2 2 4-4"></path>
    <circle cx="12" cy="12" r="10"></circle>
  </svg>
)

export default function App() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-900 via-purple-900 to-purple-800 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-pink-500/10 to-purple-900/30"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-400/20 via-transparent to-transparent"></div>

      {/* Header */}
      <header className="relative z-10 container mx-auto px-6 py-8">
        <nav className="flex justify-between items-center">
          <div className="text-white font-bold text-xl">LOGO</div>
          <div className="hidden md:flex space-x-12">
            <a href="#" className="text-white/90 hover:text-white transition-colors text-sm font-medium">
              About
            </a>
            <a href="#" className="text-white/90 hover:text-white transition-colors text-sm font-medium">
              Service
            </a>
            <a href="#" className="text-white/90 hover:text-white transition-colors text-sm font-medium">
              How it work
            </a>
            <a href="#" className="text-white/90 hover:text-white transition-colors text-sm font-medium">
              Our blog
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 container mx-auto px-6 py-16 text-center">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-[0.9] tracking-tight">
          CREATIVE DIGITAL
          <br />
          <span className="bg-gradient-to-r from-purple-300 via-pink-300 to-purple-200 bg-clip-text text-transparent">
            BRANDING AGENCY
          </span>
        </h1>
        <p className="text-purple-100/80 text-base md:text-lg max-w-2xl mx-auto mb-12 leading-relaxed font-light">
          We help ambitious businesses like yours generate more profits by building awareness, driving web traffic,
          connecting with customers, and growing overall sales. Give us a call.
        </p>
        <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-10 py-4 rounded-full text-base font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
          Get Started
        </Button>
      </section>

      {/* Client Logos */}
      <section className="relative z-10 container mx-auto px-6 py-12">
        <div className="flex flex-wrap justify-center items-center gap-12 opacity-40">
          <div className="text-white text-lg font-medium">Curabitur</div>
          <div className="text-white text-lg font-medium">Donec</div>
          <div className="text-white text-lg font-medium">Aliquam</div>
          <div className="text-white text-lg font-medium">Vestibulum</div>
          <div className="text-white text-lg font-medium">Maecenas</div>
        </div>
        <p className="text-center text-purple-200/60 text-sm mt-6">
          Curabitur blandit tempus porttitor. Nullam quis risus eget urna mollis ornare vel eu leo.
        </p>
      </section>

      {/* First Content Section */}
      <section className="relative z-10 container mx-auto px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">
                You don't want turn visitors into customers.
                <br />
                <span className="text-purple-300">You don't want Web Design or SEO.</span>
              </h2>
              <p className="text-purple-100/70 mb-8 leading-relaxed">
                Curabitur blandit tempus porttitor. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis
                natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              </p>
              <p className="text-purple-100/70 mb-8 leading-relaxed">
                Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper.
              </p>
            </div>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <CheckCircle className="w-5 h-5 text-purple-300 flex-shrink-0" />
                <span className="text-white">Cras mattis consectetur purus sit amet fermentum</span>
              </div>
              <div className="flex items-center space-x-4">
                <CheckCircle className="w-5 h-5 text-purple-300 flex-shrink-0" />
                <span className="text-white">Aenean lacinia bibendum nulla sed consectetur</span>
              </div>
              <div className="flex items-center space-x-4">
                <CheckCircle className="w-5 h-5 text-purple-300 flex-shrink-0" />
                <span className="text-white">Cum sociis natoque penatibus et magnis dis</span>
              </div>
            </div>
          </div>

          {/* Video Player */}
          <div className="relative bg-gray-200 rounded-2xl overflow-hidden aspect-video shadow-2xl">
            {!isVideoPlaying ? (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-300">
                <Button
                  onClick={() => setIsVideoPlaying(true)}
                  className="bg-white/90 hover:bg-white backdrop-blur-sm rounded-full p-8 shadow-lg"
                >
                  <Play className="w-12 h-12 text-gray-700 ml-1" />
                </Button>
              </div>
            ) : (
              <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                <span className="text-gray-600 text-lg">Video Content</span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* We Are Section */}
      <section className="relative z-10 container mx-auto px-6 py-20">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 text-left">We are:</h2>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="bg-gradient-to-br from-purple-600/40 to-purple-800/60 border-purple-400/30 backdrop-blur-sm">
            <CardContent className="p-8">
              <Clock className="w-12 h-12 text-purple-200 mb-6" />
              <h3 className="text-xl font-bold text-white mb-4">Curabitur pretium</h3>
              <p className="text-purple-100/70 mb-6 text-sm leading-relaxed">
                Cras mattis consectetur purus sit amet fermentum. Donec sed odio dui. Aenean lacinia bibendum nulla sed
                consectetur.
              </p>
              <Button className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black text-sm font-semibold px-6 py-2 rounded-full">
                Learn More
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-gray-600/40 to-gray-800/60 border-gray-400/30 backdrop-blur-sm">
            <CardContent className="p-8">
              <Type className="w-12 h-12 text-gray-200 mb-6" />
              <h3 className="text-xl font-bold text-white mb-4">Nulla gravida orci</h3>
              <p className="text-gray-100/70 mb-6 text-sm leading-relaxed">
                Cras mattis consectetur purus sit amet fermentum. Donec sed odio dui. Aenean lacinia bibendum nulla sed
                consectetur.
              </p>
              <Button className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black text-sm font-semibold px-6 py-2 rounded-full">
                Learn More
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-gray-700/40 to-gray-900/60 border-gray-500/30 backdrop-blur-sm">
            <CardContent className="p-8">
              <Zap className="w-12 h-12 text-gray-200 mb-6" />
              <h3 className="text-xl font-bold text-white mb-4">Luctus magna elit</h3>
              <p className="text-gray-100/70 mb-6 text-sm leading-relaxed">
                Cras mattis consectetur purus sit amet fermentum. Donec sed odio dui. Aenean lacinia bibendum nulla sed
                consectetur.
              </p>
              <Button className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black text-sm font-semibold px-6 py-2 rounded-full">
                Learn More
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Two Column Cards */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          <Card className="bg-white">
            <CardContent className="p-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Curabitur pretium</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Cras mattis consectetur purus sit amet fermentum. Donec sed odio dui. Aenean lacinia bibendum nulla sed
                consectetur. Sed posuere consectetur est at lobortis. Fusce dapibus, tellus ac cursus commodo, tortor
                mauris condimentum nibh.
              </p>
              <Button className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-medium">
                Read More
              </Button>
            </CardContent>
          </Card>
          <div className="bg-gray-200 rounded-2xl aspect-square flex items-center justify-center">
            <span className="text-gray-500 text-lg">Image Placeholder</span>
          </div>
        </div>
      </section>

      {/* Second Content Section */}
      <section className="relative z-10 container mx-auto px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">
                You don't want turn visitors into customers.
                <br />
                <span className="text-purple-300">You don't want Web Design or SEO.</span>
              </h2>
              <p className="text-purple-100/70 mb-12 leading-relaxed">
                Curabitur blandit tempus porttitor. Nullam quis risus eget urna mollis ornare vel eu leo.
              </p>

              <div className="space-y-4">
                {["Maecenas fermentum", "Donec fermentum", "Pellentesque malesuada", "Duis sapien sem"].map(
                  (item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between bg-purple-800/30 backdrop-blur-sm rounded-xl p-5 border border-purple-600/20"
                    >
                      <span className="text-white font-medium">{item}</span>
                      <ArrowRight className="w-5 h-5 text-purple-300" />
                    </div>
                  ),
                )}
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <CheckCircle className="w-5 h-5 text-purple-300 flex-shrink-0" />
                <span className="text-white">Cras mattis consectetur purus sit amet fermentum</span>
              </div>
              <div className="flex items-center space-x-4">
                <CheckCircle className="w-5 h-5 text-purple-300 flex-shrink-0" />
                <span className="text-white">Aenean lacinia bibendum nulla sed consectetur</span>
              </div>
            </div>
          </div>

          {/* Large Content Area */}
          <div className="bg-gray-200 rounded-2xl p-16 text-center">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Large Content Area</h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra,
                est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod
                gravida.
              </p>
              <p className="text-gray-500 text-sm">
                Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 container mx-auto px-6 py-20 text-center">
        <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">
          CREATIVE DIGITAL
          <br />
          <span className="bg-gradient-to-r from-purple-300 via-pink-300 to-purple-200 bg-clip-text text-transparent">
            BRANDING AGENCY
          </span>
        </h2>

        <div className="flex justify-center space-x-4 mt-12 mb-8">
          <div className="w-12 h-12 bg-purple-600 hover:bg-purple-500 rounded-full flex items-center justify-center transition-colors cursor-pointer">
            <span className="text-white font-bold">f</span>
          </div>
          <div className="w-12 h-12 bg-purple-600 hover:bg-purple-500 rounded-full flex items-center justify-center transition-colors cursor-pointer">
            <span className="text-white font-bold">@</span>
          </div>
          <div className="w-12 h-12 bg-purple-600 hover:bg-purple-500 rounded-full flex items-center justify-center transition-colors cursor-pointer">
            <span className="text-white font-bold">in</span>
          </div>
        </div>

        <div className="flex justify-center space-x-8 text-purple-200/60 text-sm mb-8">
          <a href="#" className="hover:text-purple-200 transition-colors">
            About
          </a>
          <a href="#" className="hover:text-purple-200 transition-colors">
            Service
          </a>
          <a href="#" className="hover:text-purple-200 transition-colors">
            Contact
          </a>
          <a href="#" className="hover:text-purple-200 transition-colors">
            Privacy
          </a>
        </div>

        <div className="border-t border-purple-800/50 pt-8">
          <p className="text-purple-300/60 text-sm">© 2024 Your Brand. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
