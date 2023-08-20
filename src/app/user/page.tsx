import React from "react";

const DashboardPage = () => {
	return (
		<div className="flex p-8 flex-col bg-neutral-100 h-full shadow-md">
			{/* Example Content */}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{/* Job Applications */}
				<div className="bg-white p-6 rounded-lg shadow-md">
					<h2 className="text-xl font-semibold mb-2">
						Job Applications
					</h2>
					<p className="text-gray-600">
						You have 5 pending applications.
					</p>
					<p className="text-sm text-gray-600">
						View and manage your applications.
					</p>
				</div>

				{/* Profile */}
				<div className="bg-white p-6 rounded-lg shadow-md">
					<h2 className="text-xl font-semibold mb-2">Your Profile</h2>
					<p className="text-gray-600">
						Complete your profile to stand out to employers.
					</p>
					<p className="text-sm text-gray-600">
						Update your skills and experience.
					</p>
				</div>

				{/* Notifications */}
				<div className="bg-white p-6 rounded-lg shadow-md">
					<h2 className="text-xl font-semibold mb-2">
						Notifications
					</h2>
					<p className="text-gray-600">
						You have 3 new notifications.
					</p>
					<p className="text-sm text-gray-600">
						Stay updated on your applications.
					</p>
				</div>

				{/* You can add more user-specific cards */}
			</div>

			{/* Table */}
			<div className="mt-8 bg-white p-6 rounded-lg shadow-md">
				{/* Recommended Jobs */}
				<h4 className="text-4xl font-bold">Recommended Jobs</h4>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{/* Job Card 1 */}
					<div className="bg-white p-6 rounded-lg shadow-md">
						<h2 className="text-xl font-semibold mb-2">
							Software Engineer (Remote)
						</h2>
						<p className="text-gray-600">Google</p>
						<p className="text-sm text-gray-600">
							Skills: React, Node, Express
						</p>
						<p className="text-sm text-gray-600">Salary: $50,000</p>
					</div>

					{/* Job Card 2 */}
					<div className="bg-white p-6 rounded-lg shadow-md">
						<h2 className="text-xl font-semibold mb-2">
							UX Designer
						</h2>
						<p className="text-gray-600">Apple</p>
						<p className="text-sm text-gray-600">
							Skills: UI/UX Design, Adobe XD
						</p>
						<p className="text-sm text-gray-600">Salary: $60,000</p>
					</div>

					{/* Job Card 3 */}
					<div className="bg-white p-6 rounded-lg shadow-md">
						<h2 className="text-xl font-semibold mb-2">
							Data Scientist
						</h2>
						<p className="text-gray-600">Amazon</p>
						<p className="text-sm text-gray-600">
							Skills: Python, Machine Learning
						</p>
						<p className="text-sm text-gray-600">Salary: $70,000</p>
					</div>

					{/* Job Card 4 */}
					<div className="bg-white p-6 rounded-lg shadow-md">
						<h2 className="text-xl font-semibold mb-2">
							Product Manager
						</h2>
						<p className="text-gray-600">Microsoft</p>
						<p className="text-sm text-gray-600">
							Skills: Product Strategy, Agile
						</p>
						<p className="text-sm text-gray-600">Salary: $90,000</p>
					</div>

					{/* Job Card 5 */}
					<div className="bg-white p-6 rounded-lg shadow-md">
						<h2 className="text-xl font-semibold mb-2">
							Frontend Developer
						</h2>
						<p className="text-gray-600">Netflix</p>
						<p className="text-sm text-gray-600">
							Skills: HTML, CSS, JavaScript
						</p>
						<p className="text-sm text-gray-600">Salary: $65,000</p>
					</div>

					{/* You can continue adding more job cards */}
				</div>
			</div>
		</div>
	);
};

export default DashboardPage;
