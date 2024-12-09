import PageHeader from '../../components/shared/PageHeader';

export default function Profile() {
  return (
    <div className="max-w-md mx-auto">
      <PageHeader title="Profile" />
      {/* Add profile settings content here */}
      <form>
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
        </div>
        <div>
          <label htmlFor="avatar">Upload Avatar:</label>
          <input type="file" id="avatar" name="avatar" accept="image/*" />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />
        </div>
        <div>
          <label>
            <input type="checkbox" name="newsletter" />
            Subscribe to newsletter
          </label>
        </div>
        <button type="submit">Save Changes</button>
      </form>
      {/* ... existing code ... */}
    </div>
  );
} 