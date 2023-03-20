import React from 'react';

function AboutPage () {
    
return (
    <div className="min-h-screen bg-gray-100">
      <div className="px-4 py-16 mx-auto space-y-16 max-w-7xl sm:py-24 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">About ReSet</h2>
        <div className="space-y-4 text-xl text-gray-500">
          <p>
            At ReSet, we believe that everyone deserves a safe, stable place to call home. Our mission is to provide comprehensive support services that empower individuals and families experiencing homelessness to transition into permanent housing and rebuild their lives.
          </p>
          <p>
            Our values are the cornerstone of everything we do at reSet. We believe in treating everyone with dignity and respect, providing compassionate care and support, fostering a sense of community, and advocating for social justice and equality.
          </p>
          <p>
            Since our founding, we have helped hundreds of individuals and families find stable housing and rebuild their lives. Our programs and services include emergency shelter, case management, job training, education, and access to healthcare.
          </p>
          <p>
            But we couldn't do it without the support of our community. We rely on volunteers, donors, and partners to help us achieve our mission and continue making a difference in the lives of those experiencing homelessness.
          </p>
          <p>
            Join us in our mission to end homelessness, one person at a time.
          </p>
        </div>
        <div className="p-8 space-y-6 bg-white rounded-lg">
          <h3 className="mb-4 text-2xl font-bold">Get Involved</h3>
          <p>
            Are you interested in joining our mission to end homelessness? There are several ways you can contribute, whether it's through volunteering, donating, or partnering with us.
          </p>
          <div className="flex space-x-4">
            <button className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700">Volunteer</button>
            <button className="px-4 py-2 text-white bg-green-600 rounded hover:bg-green-700">Donate</button>
            <button className="px-4 py-2 text-white bg-purple-600 rounded hover:bg-purple-700">Become a Partner</button>
          </div>
        </div>
        <div className="p-8 space-y-6 bg-white rounded-lg">
          <h3 className="mb-4 text-2xl font-bold">Our Team</h3>
          <p>
            Meet the dedicated professionals behind reSet's success. Our team members are passionate about making a difference in the lives of those experiencing homelessness and work tirelessly to create lasting change.
          </p>
          {/* Add team member cards here */}
        </div>
      </div>
    </div>
  );
};


export default AboutPage;