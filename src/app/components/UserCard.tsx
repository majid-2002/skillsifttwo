export default function UserCard() {
  return (
    <div>
      <div className="flex flex-row items-center justify-between p-4 border-b border-gray-200">
        <div className="flex flex-row items-center">
          <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
          <div className="flex flex-col ml-4">
            <p className="text-sm font-bold">John Doe</p>
          </div>
        </div>
      </div>
    </div>
  );
}
