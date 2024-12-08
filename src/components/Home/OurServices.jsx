const WhyUs = () => {
  return (
    <div>
      <section className="py-12 bg-gray-100">
        <div className="max-w-screen-xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-center mb-8">
            Why Choose Advocate
          </h1>

          {/* Mission Statement */}
          <div className="mb-12">
            <h2 className="text-3xl font-semibold mb-4">Mission Statement</h2>
            <p className="text-lg">
              At Advocate, we are committed to your wellbeing. Our mission is to
              provide care that prioritizes your health, comfort, and
              independence.
            </p>
          </div>

          {/* Our Values */}
          <div className="mb-12">
            <h2 className="text-3xl font-semibold mb-4">Our Values</h2>
            <ul className="space-y-4">
              <li>
                <strong>Quality:</strong> Delivering the highest standard of
                care for every client.
              </li>
              <li>
                <strong>Honesty:</strong> Building trust through transparency
                and integrity.
              </li>
              <li>
                <strong>Continuous Improvement:</strong> Constantly evolving to
                meet the needs of our clients.
              </li>
              <li>
                <strong>Kindness:</strong> Treating every individual with
                empathy and compassion.
              </li>
              <li>
                <strong>Respect:</strong> Valuing the dignity, preferences, and
                diversity of every client.
              </li>
            </ul>
          </div>

          {/* Meet the Team */}
          <div className="mb-12">
            <h2 className="text-3xl font-semibold mb-4">Meet the Team</h2>
            <p className="text-lg">
              Our team is made up of highly qualified and experienced
              professionals dedicated to providing exceptional care. From our
              management staff to our caregivers, every team member is carefully
              selected for their expertise and commitment to client wellbeing.
            </p>
          </div>

          {/* Quality Assurance Commitment */}
          <div className="mb-12">
            <h2 className="text-3xl font-semibold mb-4">
              Quality Assurance Commitment
            </h2>
            <h3 className="text-2xl font-semibold mb-2">
              Professional Standards
            </h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Fully CQC registered and regulated</li>
              <li>Rigorous staff selection process</li>
              <li>Mandatory enhanced DBS checks for all caregivers</li>
              <li>Minimum qualification requirements</li>
              <li>Continuous professional development</li>
            </ul>
          </div>

          {/* Client-Centered Care */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-2">
              Client-Centered Care
            </h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Personalized care plans</li>
              <li>Monthly comprehensive care reviews</li>
              <li>24/7 support and communication</li>
              <li>Transparent reporting</li>
              <li>Family involvement guaranteed</li>
            </ul>
          </div>

          {/* Safety and Protection */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-2">
              Safety and Protection
            </h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Comprehensive risk assessments</li>
              <li>Regular safeguarding training</li>
              <li>Strict confidentiality protocols</li>
              <li>Advanced care monitoring systems</li>
              <li>Immediate incident response procedures</li>
            </ul>
          </div>

          {/* Continuous Improvement */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-2">
              Continuous Improvement
            </h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Annual external quality audits</li>
              <li>Staff performance evaluations</li>
              <li>Client satisfaction surveys</li>
              <li>Innovative care technology integration</li>
              <li>Responsive feedback mechanisms</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyUs;
