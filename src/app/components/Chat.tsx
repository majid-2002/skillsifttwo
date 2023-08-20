export default function ChatForm() {
  return (
    <div className="flex flex-col flex-grow w-full max-w-xl bg-white shadow-xl rounded-lg overflow-hidden">
      <div className="flex flex-col flex-grow h-0 p-4 overflow-auto">
        <div className="flex w-full mt-2 space-x-3 max-w-xs">
          <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
          <div>
            <div className="bg-gray-300 p-3 rounded-r-lg rounded-bl-lg">
              <p className="text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <span className="text-xs text-gray-500 leading-none">
              2 min ago
            </span>
          </div>
        </div>

        {/* ... Repeat the above structure for other messages ... */}
      </div>

      <div className="bg-gray-300 p-4 flex-row flex space-x-3">
        <input
          type="text"
          placeholder="Job Title"
          className="input input-bordered w-full"
        />
        <button type="button" className="btn btn-primary">
          Send
        </button>
      </div>
    </div>
  );
}
