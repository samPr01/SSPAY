import { Shield, Users, Globe, Award, CheckCircle, Target } from "lucide-react";

export default function About() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-6 leading-tight">
              About Samaysagarpay
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We're revolutionizing digital payments with innovative solutions
              that make financial transactions simple, secure, and accessible to
              everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="text-center max-w-2xl">
              <div className="w-16 h-16 bg-gradient-to-r from-brand-500 to-brand-600 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-brand-600 via-brand-500 to-blue-600 bg-clip-text text-transparent mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                To democratize financial services by providing secure, fast, and
                affordable digital payment solutions that empower individuals
                and businesses to thrive in the digital economy.
              </p>
              <ul className="space-y-3 text-center">
                <li className="flex items-center justify-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Secure and reliable transactions
                </li>
                <li className="flex items-center justify-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Accessible to everyone
                </li>
                <li className="flex items-center justify-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Innovation-driven solutions
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-6 text-center">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-brand-500 to-brand-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-brand-600 via-brand-500 to-blue-600 bg-clip-text text-transparent mb-4">
                Security First
              </h3>
              <p className="text-gray-600">
                We prioritize the security of your data and transactions with
                bank-level encryption and advanced fraud protection.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-brand-500 to-brand-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-brand-600 via-brand-500 to-blue-600 bg-clip-text text-transparent mb-4">
                Customer Centric
              </h3>
              <p className="text-gray-600">
                Our customers are at the heart of everything we do. We listen,
                learn, and continuously improve our services.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-brand-500 to-brand-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-brand-600 via-brand-500 to-blue-600 bg-clip-text text-transparent mb-4">
                Global Impact
              </h3>
              <p className="text-gray-600">
                We're building solutions that connect people across borders and
                enable financial inclusion worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
