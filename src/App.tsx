import React, { useState, useEffect } from 'react';
import { 
  Glasses, 
  Brain, 
  Gamepad2, 
  Building2, 
  ArrowRight,
  Play,
  Users,
  Sparkles,
  ChevronRight
} from 'lucide-react';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/90 backdrop-blur-md py-4' : 'bg-transparent py-6'
      }`}>
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Glasses className="w-8 h-8 text-blue-500" />
            <span className="text-xl font-bold">Hologlass</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="hover:text-blue-500 transition-colors">Features</a>
            <a href="#applications" className="hover:text-blue-500 transition-colors">Applications</a>
            <a href="#testimonials" className="hover:text-blue-500 transition-colors">Testimonials</a>
            <button className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-full transition-colors">
              Pre-order Now
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?auto=format&fit=crop&w=1920"
            alt="Abstract Technology"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              See the world in a
              <span className="text-blue-500"> new dimension</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Experience real-time holograms in your daily life. Transform how you work, play, and connect with Hologlass.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-500 hover:bg-blue-600 px-8 py-4 rounded-full flex items-center justify-center space-x-2 transition-colors">
                <span>Pre-order Now</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border border-white/30 hover:bg-white/10 px-8 py-4 rounded-full flex items-center justify-center space-x-2 transition-all">
                <Play className="w-5 h-5" />
                <span>Watch Demo</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-16 text-center">
            Revolutionary Features
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: <Sparkles className="w-8 h-8 text-blue-500" />,
                title: "Real-time Holograms",
                description: "Experience crystal-clear holographic projections with zero latency."
              },
              {
                icon: <Brain className="w-8 h-8 text-blue-500" />,
                title: "AI-Powered",
                description: "Advanced AI technology that learns and adapts to your usage patterns."
              },
              {
                icon: <Users className="w-8 h-8 text-blue-500" />,
                title: "Social Integration",
                description: "Connect with others through immersive holographic experiences."
              }
            ].map((feature, index) => (
              <div key={index} className="bg-gray-800/50 p-8 rounded-2xl hover:bg-gray-800/70 transition-colors">
                {feature.icon}
                <h3 className="text-xl font-bold mt-4 mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section id="applications" className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-16 text-center">
            Endless Applications
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Building2 className="w-6 h-6" />,
                title: "Professional",
                image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600"
              },
              {
                icon: <Gamepad2 className="w-6 h-6" />,
                title: "Gaming",
                image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&w=600"
              },
              {
                icon: <Users className="w-6 h-6" />,
                title: "Social",
                image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=600"
              }
            ].map((app, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl">
                <img 
                  src={app.image}
                  alt={app.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                  <div className="flex items-center space-x-2">
                    {app.icon}
                    <h3 className="text-xl font-bold">{app.title}</h3>
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to step into the future?
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Join the revolution in holographic technology. Pre-order your Hologlass today and be among the first to experience the future.
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 px-8 py-4 rounded-full inline-flex items-center space-x-2 transition-colors">
            <span>Pre-order Now</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-black border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Glasses className="w-6 h-6 text-blue-500" />
              <span className="font-bold">Hologlass</span>
            </div>
            <div className="text-sm text-gray-500">
              © 2024 Hologlass. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;