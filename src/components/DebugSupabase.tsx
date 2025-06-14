import React from 'react';
import { supabase } from '@/lib/supabase';

const DebugSupabase = () => {
  const [connectionStatus, setConnectionStatus] = React.useState<string>('Testing...');
  const [envStatus, setEnvStatus] = React.useState<string>('Checking...');

  React.useEffect(() => {
    // Check environment variables
    const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
    const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
    
    if (!supabaseUrl || supabaseUrl === 'YOUR_SUPABASE_URL') {
      setEnvStatus('❌ VITE_SUPABASE_URL not set or using placeholder');
    } else if (!supabaseKey || supabaseKey === 'YOUR_SUPABASE_ANON_KEY') {
      setEnvStatus('❌ VITE_SUPABASE_ANON_KEY not set or using placeholder');
    } else {
      setEnvStatus('✅ Environment variables look good');
    }

    // Test database connection
    const testConnection = async () => {
      try {
        // Test a simple query
        const { data, error } = await supabase.from('profiles').select('count', { count: 'exact' });
        
        if (error) {
          setConnectionStatus(`❌ Database error: ${error.message}`);
        } else {
          setConnectionStatus('✅ Database connection successful');
        }
      } catch (err) {
        setConnectionStatus(`❌ Connection failed: ${err instanceof Error ? err.message : 'Unknown error'}`);
      }
    };

    testConnection();
  }, []);

  return (
    <div className="fixed top-4 right-4 bg-gray-900 text-white p-4 rounded-lg shadow-lg z-50 max-w-sm">
      <h3 className="font-bold mb-2">🔍 Supabase Debug</h3>
      <div className="space-y-2 text-sm">
        <div>
          <strong>Environment:</strong>
          <div className="text-xs">{envStatus}</div>
        </div>
        <div>
          <strong>Database:</strong>
          <div className="text-xs">{connectionStatus}</div>
        </div>
        <div className="text-xs text-gray-400 pt-2">
          Remove this component after debugging
        </div>
      </div>
    </div>
  );
};

export default DebugSupabase; 