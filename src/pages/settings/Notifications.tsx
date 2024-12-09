import PageHeader from '../../components/shared/PageHeader';

export default function Notifications() {
  return (
    <div className="max-w-md mx-auto">
      <PageHeader title="Notifications" />
      <form className="p-4 space-y-4">
        <div>
          <label className="flex items-center">
            <input type="checkbox" name="email-notifications" className="mr-2" />
            Email Notifications
          </label>
        </div>
        <div>
          <label className="flex items-center">
            <input type="checkbox" name="sms-notifications" className="mr-2" />
            SMS Notifications
          </label>
        </div>
        <button type="submit" className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700">Save Changes</button>
      </form>
    </div>
  );
} 