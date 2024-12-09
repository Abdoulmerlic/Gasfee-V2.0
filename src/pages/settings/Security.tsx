import PageHeader from '../../components/shared/PageHeader';

export default function Security() {
  return (
    <div className="max-w-md mx-auto">
      <PageHeader title="Security" />
      <form className="p-4 space-y-4">
        <div>
          <label htmlFor="current-password" className="block text-sm font-medium text-gray-700">Current Password:</label>
          <input type="password" id="current-password" name="current-password" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
        </div>
        <div>
          <label htmlFor="new-password" className="block text-sm font-medium text-gray-700">New Password:</label>
          <input type="password" id="new-password" name="new-password" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
        </div>
        <div>
          <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">Confirm New Password:</label>
          <input type="password" id="confirm-password" name="confirm-password" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
        </div>
        <button type="submit" className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700">Update Password</button>
      </form>
    </div>
  );
} 