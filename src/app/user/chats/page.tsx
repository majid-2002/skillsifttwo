import React from "react";

const ChatPage = () => {
	return (
		<div className="flex p-8 flex-col bg-neutral-100 h-full shadow-md">
			{/* Example Content */}

			{/* Table */}
			<div className="mt-8 bg-white p-6 rounded-lg shadow-md">
				{/* Recommended Jobs */}
				<h4 className="text-3xl font-bold">Recommended Jobs</h4>
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
						<button className="btn mt-4 btn-primary">
							Details
						</button>
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

						<button className="btn mt-4 btn-primary">
							Details
						</button>
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

						<button className="btn mt-4 btn-primary">
							Details
						</button>
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

						<button className="btn mt-4 btn-primary">
							Details
						</button>
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

						<button className="btn mt-4 btn-primary">
							Details
						</button>
					</div>

					{/* You can continue adding more job cards */}
				</div>
			</div>
		</div>
	);
};

export default ChatPage;
