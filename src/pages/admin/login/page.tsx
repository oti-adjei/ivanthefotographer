import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const getAdminPassword = () =>
  import.meta.env.VITE_ADMIN_PASSWORD || 'admin';

export default function AdminLoginPage() {
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const adminPassword = useMemo(() => getAdminPassword(), []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (password.trim() === adminPassword) {
      localStorage.setItem('admin_authenticated', 'true');
      navigate('/admin', { replace: true });
      return;
    }
    setError('Incorrect password');
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white flex items-center justify-center px-6">
      <div className="w-full max-w-md bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-8">
        <h1 className="text-2xl font-serif mb-2">Admin Login</h1>
        <p className="text-sm text-white/60 mb-6">
          Enter the admin password to continue.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm text-white/70 mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="w-full rounded-lg bg-white/10 border border-white/20 px-4 py-3 focus:outline-none focus:border-teal"
              placeholder="••••••••"
            />
          </div>
          {error && (
            <div className="text-sm text-red-300">{error}</div>
          )}
          <button
            type="submit"
            className="w-full bg-teal text-white rounded-lg py-3 text-sm font-medium hover:bg-teal/90 transition-colors"
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
}
