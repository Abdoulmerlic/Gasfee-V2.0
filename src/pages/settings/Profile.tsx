import PageHeader from '../../components/shared/PageHeader';

export default function Profile() {
  return (
    <div className="max-w-md mx-auto">
      <PageHeader title="Profile" />
      <form className="p-4 space-y-4">
        <div>
          <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username:</label>
          <input type="text" id="username" name="username" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
          <input type="email" id="email" name="email" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
        </div>
        <div>
          <label htmlFor="avatar" className="block text-sm font-medium text-gray-700">Upload Avatar:</label>
          <input type="file" id="avatar" name="avatar" accept="image/*" className="mt-1 block w-full" />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password:</label>
          <input type="password" id="password" name="password" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
        </div>
        <div>
          <label className="flex items-center">
            <input type="checkbox" name="newsletter" className="mr-2" />
            Subscribe to newsletter
          </label>
        </div>
        <button type="submit" className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700">Save Changes</button>
      </form>
    </div>
  );
} 