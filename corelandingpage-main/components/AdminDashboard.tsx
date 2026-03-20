import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { Database } from '../../supabase/types';

type PricingInquiry = Database['public']['Tables']['pricing_inquiries']['Row'];
type ContactSubmission = Database['public']['Tables']['contact_submissions']['Row'];
type DemoUsage = Database['public']['Tables']['demo_usage']['Row'] & {
  profile?: { full_name: string | null; email: string | null };
};

interface AdminDashboardProps {
  onLogout: () => void;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({ onLogout }) => {
  const [activeTab, setActiveTab] = useState<'pricing' | 'contact' | 'usage'>('pricing');
  const [pricingInquiries, setPricingInquiries] = useState<PricingInquiry[]>([]);
  const [contactSubmissions, setContactSubmissions] = useState<ContactSubmission[]>([]);
  const [demoUsage, setDemoUsage] = useState<DemoUsage[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, [activeTab]);

  const fetchData = async () => {
    setLoading(true);
    try {
      if (activeTab === 'pricing') {
        const { data } = await supabase
          .from('pricing_inquiries')
          .select('*')
          .order('created_at', { ascending: false });
        setPricingInquiries(data || []);
      } else if (activeTab === 'contact') {
        const { data } = await supabase
          .from('contact_submissions')
          .select('*')
          .order('created_at', { ascending: false });
        setContactSubmissions(data || []);
      } else {
        const { data } = await supabase
          .from('demo_usage')
          .select(`
            *,
            profiles:user_id (full_name, email)
          `)
          .order('session_start', { ascending: false });
        setDemoUsage(data as any || []);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (table: string, id: string, status: string) => {
    try {
      await supabase.from(table).update({ status }).eq('id', id);
      fetchData();
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  const formatDate = (date: string | null) => {
    if (!date) return 'N/A';
    return new Date(date).toLocaleString();
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-slate-900">Admin Dashboard</h1>
            <button
              onClick={onLogout}
              className="px-4 py-2 text-sm font-bold text-slate-600 hover:text-slate-900 transition-colors"
            >
              Logout
            </button>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-4 overflow-x-auto">
            <button
              onClick={() => setActiveTab('pricing')}
              className={`py-4 px-6 font-bold text-sm whitespace-nowrap border-b-2 transition-colors ${
                activeTab === 'pricing'
                  ? 'border-[#34A853] text-[#34A853]'
                  : 'border-transparent text-slate-500 hover:text-slate-700'
              }`}
            >
              Pricing Inquiries ({pricingInquiries.length})
            </button>
            <button
              onClick={() => setActiveTab('contact')}
              className={`py-4 px-6 font-bold text-sm whitespace-nowrap border-b-2 transition-colors ${
                activeTab === 'contact'
                  ? 'border-[#34A853] text-[#34A853]'
                  : 'border-transparent text-slate-500 hover:text-slate-700'
              }`}
            >
              Contact Messages ({contactSubmissions.length})
            </button>
            <button
              onClick={() => setActiveTab('usage')}
              className={`py-4 px-6 font-bold text-sm whitespace-nowrap border-b-2 transition-colors ${
                activeTab === 'usage'
                  ? 'border-[#34A853] text-[#34A853]'
                  : 'border-transparent text-slate-500 hover:text-slate-700'
              }`}
            >
              Demo Usage ({demoUsage.length})
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-slate-300 border-t-[#34A853]"></div>
          </div>
        ) : (
          <>
            {/* Pricing Inquiries */}
            {activeTab === 'pricing' && (
              <div className="space-y-4">
                {pricingInquiries.length === 0 ? (
                  <div className="text-center py-12 text-slate-500">No pricing inquiries yet</div>
                ) : (
                  pricingInquiries.map((inquiry) => (
                    <div key={inquiry.id} className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-lg font-bold text-slate-900">{inquiry.name}</h3>
                            <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                              inquiry.inquiry_type === 'enterprise'
                                ? 'bg-purple-100 text-purple-700'
                                : 'bg-blue-100 text-blue-700'
                            }`}>
                              {inquiry.inquiry_type}
                            </span>
                          </div>
                          <p className="text-sm text-slate-600">{inquiry.email}</p>
                          {inquiry.company && <p className="text-sm text-slate-600">Company: {inquiry.company}</p>}
                          {inquiry.phone && <p className="text-sm text-slate-600">Phone: {inquiry.phone}</p>}
                        </div>
                        <select
                          value={inquiry.status || 'pending'}
                          onChange={(e) => updateStatus('pricing_inquiries', inquiry.id, e.target.value)}
                          className="px-3 py-2 rounded-lg border border-slate-200 text-sm font-bold focus:outline-none focus:ring-2 focus:ring-[#34A853]/20"
                        >
                          <option value="pending">Pending</option>
                          <option value="contacted">Contacted</option>
                          <option value="closed">Closed</option>
                        </select>
                      </div>
                      {inquiry.message && (
                        <div className="bg-slate-50 rounded-lg p-4 mb-3">
                          <p className="text-sm text-slate-700">{inquiry.message}</p>
                        </div>
                      )}
                      <p className="text-xs text-slate-400">Submitted: {formatDate(inquiry.created_at)}</p>
                    </div>
                  ))
                )}
              </div>
            )}

            {/* Contact Submissions */}
            {activeTab === 'contact' && (
              <div className="space-y-4">
                {contactSubmissions.length === 0 ? (
                  <div className="text-center py-12 text-slate-500">No contact messages yet</div>
                ) : (
                  contactSubmissions.map((contact) => (
                    <div key={contact.id} className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-slate-900 mb-2">{contact.name}</h3>
                          <p className="text-sm text-slate-600">{contact.email}</p>
                          {contact.subject && (
                            <p className="text-sm font-bold text-slate-700 mt-2">Subject: {contact.subject}</p>
                          )}
                        </div>
                        <select
                          value={contact.status || 'pending'}
                          onChange={(e) => updateStatus('contact_submissions', contact.id, e.target.value)}
                          className="px-3 py-2 rounded-lg border border-slate-200 text-sm font-bold focus:outline-none focus:ring-2 focus:ring-[#34A853]/20"
                        >
                          <option value="pending">Pending</option>
                          <option value="responded">Responded</option>
                          <option value="closed">Closed</option>
                        </select>
                      </div>
                      <div className="bg-slate-50 rounded-lg p-4 mb-3">
                        <p className="text-sm text-slate-700 whitespace-pre-wrap">{contact.message}</p>
                      </div>
                      <p className="text-xs text-slate-400">Submitted: {formatDate(contact.created_at)}</p>
                    </div>
                  ))
                )}
              </div>
            )}

            {/* Demo Usage */}
            {activeTab === 'usage' && (
              <div className="space-y-4">
                {demoUsage.length === 0 ? (
                  <div className="text-center py-12 text-slate-500">No demo usage data yet</div>
                ) : (
                  <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead className="bg-slate-50 border-b border-slate-200">
                          <tr>
                            <th className="px-6 py-3 text-left text-xs font-bold text-slate-600 uppercase tracking-wider">User</th>
                            <th className="px-6 py-3 text-left text-xs font-bold text-slate-600 uppercase tracking-wider">Email</th>
                            <th className="px-6 py-3 text-left text-xs font-bold text-slate-600 uppercase tracking-wider">Session Start</th>
                            <th className="px-6 py-3 text-left text-xs font-bold text-slate-600 uppercase tracking-wider">Duration</th>
                            <th className="px-6 py-3 text-left text-xs font-bold text-slate-600 uppercase tracking-wider">Page Views</th>
                            <th className="px-6 py-3 text-left text-xs font-bold text-slate-600 uppercase tracking-wider">Interactions</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-200">
                          {demoUsage.map((usage) => {
                            const duration = usage.session_end && usage.session_start
                              ? Math.round((new Date(usage.session_end).getTime() - new Date(usage.session_start).getTime()) / 60000)
                              : null;
                            
                            return (
                              <tr key={usage.id} className="hover:bg-slate-50">
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">
                                  {(usage as any).profiles?.full_name || 'Unknown'}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">
                                  {(usage as any).profiles?.email || 'N/A'}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">
                                  {formatDate(usage.session_start)}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">
                                  {duration ? `${duration} min` : 'Active'}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">
                                  {usage.page_views || 0}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">
                                  {usage.interactions || 0}
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};
