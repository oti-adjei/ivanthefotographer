import { mockBookings } from '../../../mocks/adminData';

export default function CalendarView() {
  // Get current month data
  const today = new Date();
  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();
  const firstDay = new Date(currentYear, currentMonth, 1);
  const lastDay = new Date(currentYear, currentMonth + 1, 0);
  const daysInMonth = lastDay.getDate();
  const startingDayOfWeek = firstDay.getDay();

  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  // Create calendar grid
  const calendarDays = [];
  
  // Add empty cells for days before month starts
  for (let i = 0; i < startingDayOfWeek; i++) {
    calendarDays.push(null);
  }
  
  // Add days of the month
  for (let day = 1; day <= daysInMonth; day++) {
    calendarDays.push(day);
  }

  // Get bookings for a specific day
  const getBookingsForDay = (day: number) => {
    const dateStr = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    return mockBookings.filter(booking => booking.date.startsWith(dateStr));
  };

  return (
    <div className="bg-[#0F0F0F] border border-gray-800 rounded-xl overflow-hidden">
      {/* Calendar Header */}
      <div className="bg-[#1A1A1A] border-b border-gray-800 p-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-serif text-gray-100">
            {monthNames[currentMonth]} {currentYear}
          </h2>
          <div className="flex items-center gap-2">
            <button className="w-9 h-9 rounded-lg bg-[#0F0F0F] hover:bg-[#252525] flex items-center justify-center transition-colors cursor-pointer">
              <i className="ri-arrow-left-s-line text-gray-400"></i>
            </button>
            <button className="px-4 py-2 rounded-lg bg-[#0F0F0F] hover:bg-[#252525] text-sm text-gray-300 transition-colors cursor-pointer whitespace-nowrap">
              Today
            </button>
            <button className="w-9 h-9 rounded-lg bg-[#0F0F0F] hover:bg-[#252525] flex items-center justify-center transition-colors cursor-pointer">
              <i className="ri-arrow-right-s-line text-gray-400"></i>
            </button>
          </div>
        </div>
      </div>

      {/* Calendar Grid */}
      <div className="p-6">
        {/* Day Names */}
        <div className="grid grid-cols-7 gap-2 mb-2">
          {dayNames.map((day) => (
            <div key={day} className="text-center py-2">
              <span className="text-xs font-medium text-gray-500 uppercase">{day}</span>
            </div>
          ))}
        </div>

        {/* Calendar Days */}
        <div className="grid grid-cols-7 gap-2">
          {calendarDays.map((day, index) => {
            if (day === null) {
              return <div key={`empty-${index}`} className="aspect-square" />;
            }

            const bookings = getBookingsForDay(day);
            const isToday = day === today.getDate() && currentMonth === today.getMonth() && currentYear === today.getFullYear();

            return (
              <div
                key={day}
                className={`aspect-square border rounded-lg p-2 transition-colors cursor-pointer ${
                  isToday
                    ? 'border-teal bg-teal/5'
                    : 'border-gray-800 hover:border-gray-700 bg-[#1A1A1A]'
                }`}
              >
                <div className="flex flex-col h-full">
                  <span className={`text-sm font-medium mb-1 ${
                    isToday ? 'text-teal' : 'text-gray-300'
                  }`}>
                    {day}
                  </span>
                  <div className="flex-1 space-y-1 overflow-y-auto">
                    {bookings.slice(0, 3).map((booking) => (
                      <div
                        key={booking.id}
                        className={`text-xs px-1.5 py-0.5 rounded truncate ${
                          booking.status === 'confirmed'
                            ? 'bg-green-500/10 text-green-500'
                            : booking.status === 'pending'
                            ? 'bg-orange-500/10 text-orange-500'
                            : booking.status === 'inquiry'
                            ? 'bg-blue-500/10 text-blue-500'
                            : 'bg-gray-500/10 text-gray-500'
                        }`}
                        title={`${booking.time} - ${booking.clientName}`}
                      >
                        {booking.time}
                      </div>
                    ))}
                    {bookings.length > 3 && (
                      <div className="text-xs text-gray-500 px-1.5">
                        +{bookings.length - 3} more
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Legend */}
      <div className="border-t border-gray-800 p-6">
        <div className="flex items-center gap-6 text-xs">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded bg-green-500/20 border border-green-500/50"></div>
            <span className="text-gray-400">Confirmed</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded bg-orange-500/20 border border-orange-500/50"></div>
            <span className="text-gray-400">Pending</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded bg-blue-500/20 border border-blue-500/50"></div>
            <span className="text-gray-400">Inquiry</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded bg-gray-500/20 border border-gray-500/50"></div>
            <span className="text-gray-400">Completed</span>
          </div>
        </div>
      </div>
    </div>
  );
}
