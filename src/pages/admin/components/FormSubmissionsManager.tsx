import { useState } from 'react';

interface FormSubmission {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  date: string;
  status: 'new' | 'read' | 'replied';
}

export default function FormSubmissionsManager() {
  const [submissions, setSubmissions] = useState<FormSubmission[]>([
    {
      id: '1',
      name: 'Sarah Johnson',
      email: 'sarah.j@email.com',
      subject: 'Wedding Photography Inquiry',
      message: 'Hi! I\'m getting married next June and would love to discuss your wedding photography packages. Do you have availability for June 15th, 2025?',
      date: '2024-01-15T10:30:00',
      status: 'new'
    },
    {
      id: '2',
      name: 'Michael Chen',
      email: 'mchen@company.com',
      subject: 'Corporate Event Coverage',
      message: 'We\'re hosting a corporate conference in March and need professional photography coverage for 2 days. Can you provide a quote?',
      date: '2024-01-14T14:20:00',
      status: 'read'
    },
    {
      id: '3',
      name: 'Emma Rodriguez',
      email: 'emma.r@email.com',
      subject: 'Portrait Session',
      message: 'I\'m interested in booking a professional portrait session for my LinkedIn profile. What are your rates and availability?',
      date: '2024-01-13T09:15:00',
      status: 'replied'
    },
    {
      id: '4',
      name: 'David Thompson',
      email: 'david.t@email.com',
      subject: 'Fashion Editorial Collaboration',
      message: 'I\'m a fashion designer looking to collaborate on an editorial shoot. Would you be interested in discussing this opportunity?',
      date: '2024-01-12T16:45:00',
      status: 'read'
    },
    {
      id: '5',
      name: 'Lisa Anderson',
      email: 'lisa.anderson@email.com',
      subject: 'Family Photo Session',
      message: 'We\'d like to book a family photo session for our family of 5. Do you offer outdoor sessions? What\'s your pricing?',
      date: '2024-01-11T11:30:00',
      status: 'new'
    }
  ]);

  const [selectedSubmission, setSelectedSubmission] = useState<FormSubmission | null>(null);
  const [filterStatus, setFilterStatus] = useState<'all' | 'new' | 'read' | 'replied'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredSubmissions = submissions.filter(sub => {
    const matchesStatus = filterStatus === 'all' || sub.status === filterStatus;
    const matchesSearch = 
      sub.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sub.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sub.subject.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  const handleMarkAsRead = (id: string) => {
    setSubmissions(submissions.map(sub => 
      sub.id === id && sub.status === 'new' ? { ...sub, status: 'read' } : sub
    ));
  };

  const handleMarkAsReplied = (id: string) => {
    setSubmissions(submissions.map(sub => 
      sub.id === id ? { ...sub, status: 'replied' } : sub
    ));
  };

  const handleDelete = (id: string) => {
    setSubmissions(submissions.filter(sub => sub.id !== id));
    if (selectedSubmission?.id === id) {
      setSelectedSubmission(null);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new': return 'bg-teal/20 text-teal';
      case 'read': return 'bg-yellow-500/20 text-yellow-400';
      case 'replied': return 'bg-green-500/20 text-green-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'new': return 'ri-mail-line';
      case 'read': return 'ri-mail-open-line';
      case 'replied': return 'ri-mail-check-line';
      default: return 'ri-mail-line';
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
    
    if (diffInHours < 24) {
      return `${diffInHours}h ago`;
    } else if (diffInHours < 48) {
      return 'Yesterday';
    } else {
      return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    }
  };

  const newCount = submissions.filter(s => s.status === 'new').length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">Form Submissions</h2>
          <p className="text-gray-400">Manage messages from your contact form</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="px-4 py-2 bg-teal/20 rounded-lg">
            <span className="text-teal font-semibold">{newCount} New</span>
          </div>
          <button className="px-6 py-3 bg-teal hover:bg-teal-light text-white rounded-lg transition-colors cursor-pointer whitespace-nowrap">
            <i className="ri-refresh-line mr-2"></i>Refresh
          </button>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="bg-[#1A1A1A] border border-white/10 rounded-xl p-4">
        <div className="flex items-center gap-4">
          {/* Status Filter */}
          <div className="flex gap-2">
            {['all', 'new', 'read', 'replied'].map((status) => (
              <button
                key={status}
                onClick={() => setFilterStatus(status as any)}
                className={`px-4 py-2 rounded-lg transition-all cursor-pointer whitespace-nowrap text-sm ${
                  filterStatus === status
                    ? 'bg-teal text-white'
                    : 'bg-[#2B2B2B] text-gray-400 hover:text-white hover:bg-[#333]'
                }`}
              >
                {status.charAt(0).toUpperCase() + status.slice(1)}
                {status !== 'all' && (
                  <span className="ml-2 text-xs opacity-70">
                    ({submissions.filter(s => s.status === status).length})
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="flex-1 relative">
            <i className="ri-search-line absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by name, email, or subject..."
              className="w-full bg-[#2B2B2B] border border-white/10 rounded-lg pl-11 pr-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-teal text-sm"
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Submissions List */}
        <div className="lg:col-span-1 space-y-3">
          {filteredSubmissions.length === 0 ? (
            <div className="bg-[#1A1A1A] border border-white/10 rounded-xl p-8 text-center">
              <i className="ri-inbox-line text-4xl text-gray-600 mb-3"></i>
              <p className="text-gray-400">No submissions found</p>
            </div>
          ) : (
            filteredSubmissions.map((submission) => (
              <div
                key={submission.id}
                onClick={() => {
                  setSelectedSubmission(submission);
                  handleMarkAsRead(submission.id);
                }}
                className={`bg-[#1A1A1A] border rounded-xl p-4 cursor-pointer transition-all hover:border-teal/50 ${
                  selectedSubmission?.id === submission.id
                    ? 'border-teal'
                    : 'border-white/10'
                }`}
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1 min-w-0">
                    <h4 className="text-white font-medium truncate">{submission.name}</h4>
                    <p className="text-gray-400 text-xs truncate">{submission.email}</p>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs whitespace-nowrap ml-2 ${getStatusColor(submission.status)}`}>
                    <i className={`${getStatusIcon(submission.status)} mr-1`}></i>
                    {submission.status}
                  </span>
                </div>
                <p className="text-white text-sm font-medium mb-1 line-clamp-1">{submission.subject}</p>
                <p className="text-gray-400 text-xs line-clamp-2 mb-2">{submission.message}</p>
                <p className="text-gray-500 text-xs">{formatDate(submission.date)}</p>
              </div>
            ))
          )}
        </div>

        {/* Submission Detail */}
        <div className="lg:col-span-2">
          {selectedSubmission ? (
            <div className="bg-[#1A1A1A] border border-white/10 rounded-xl overflow-hidden">
              {/* Header */}
              <div className="border-b border-white/10 p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">{selectedSubmission.subject}</h3>
                    <div className="flex items-center gap-4 text-sm">
                      <span className="text-gray-400">
                        <i className="ri-user-line mr-2"></i>
                        {selectedSubmission.name}
                      </span>
                      <span className="text-gray-400">
                        <i className="ri-mail-line mr-2"></i>
                        {selectedSubmission.email}
                      </span>
                      <span className="text-gray-400">
                        <i className="ri-time-line mr-2"></i>
                        {new Date(selectedSubmission.date).toLocaleString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit'
                        })}
                      </span>
                    </div>
                  </div>
                  <span className={`px-3 py-1.5 rounded-full text-sm whitespace-nowrap ${getStatusColor(selectedSubmission.status)}`}>
                    <i className={`${getStatusIcon(selectedSubmission.status)} mr-1`}></i>
                    {selectedSubmission.status}
                  </span>
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <button
                    onClick={() => window.location.href = `mailto:${selectedSubmission.email}?subject=Re: ${selectedSubmission.subject}`}
                    className="flex-1 bg-teal hover:bg-teal-light text-white px-4 py-2 rounded-lg transition-colors cursor-pointer whitespace-nowrap text-sm"
                  >
                    <i className="ri-reply-line mr-2"></i>Reply via Email
                  </button>
                  {selectedSubmission.status !== 'replied' && (
                    <button
                      onClick={() => handleMarkAsReplied(selectedSubmission.id)}
                      className="bg-[#2B2B2B] hover:bg-[#333] text-white px-4 py-2 rounded-lg transition-colors cursor-pointer whitespace-nowrap text-sm"
                    >
                      <i className="ri-check-line mr-2"></i>Mark as Replied
                    </button>
                  )}
                  <button
                    onClick={() => handleDelete(selectedSubmission.id)}
                    className="bg-red-500/20 hover:bg-red-500/30 text-red-400 px-4 py-2 rounded-lg transition-colors cursor-pointer whitespace-nowrap text-sm"
                  >
                    <i className="ri-delete-bin-line mr-2"></i>Delete
                  </button>
                </div>
              </div>

              {/* Message Content */}
              <div className="p-6">
                <h4 className="text-white font-medium mb-3">Message</h4>
                <div className="bg-[#2B2B2B] border border-white/10 rounded-lg p-4">
                  <p className="text-gray-300 leading-relaxed whitespace-pre-wrap">{selectedSubmission.message}</p>
                </div>
              </div>

              {/* Quick Reply */}
              <div className="border-t border-white/10 p-6">
                <h4 className="text-white font-medium mb-3">Quick Reply</h4>
                <textarea
                  placeholder="Type your reply here..."
                  className="w-full bg-[#2B2B2B] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-teal resize-none"
                  rows={4}
                />
                <div className="flex gap-3 mt-3">
                  <button className="flex-1 bg-teal hover:bg-teal-light text-white px-4 py-2 rounded-lg transition-colors cursor-pointer whitespace-nowrap text-sm">
                    <i className="ri-send-plane-line mr-2"></i>Send Reply
                  </button>
                  <button className="bg-[#2B2B2B] hover:bg-[#333] text-white px-4 py-2 rounded-lg transition-colors cursor-pointer whitespace-nowrap text-sm">
                    <i className="ri-save-line mr-2"></i>Save Draft
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-[#1A1A1A] border border-white/10 rounded-xl p-12 text-center">
              <i className="ri-mail-line text-6xl text-gray-600 mb-4"></i>
              <h3 className="text-xl font-semibold text-white mb-2">No Submission Selected</h3>
              <p className="text-gray-400">Select a submission from the list to view details</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
