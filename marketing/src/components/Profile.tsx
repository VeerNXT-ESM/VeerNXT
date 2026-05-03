import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { 
  BarChart3, 
  User, 
  BookOpen, 
  ClipboardList, 
  FileText, 
  Settings, 
  CreditCard, 
  LogOut,
  ArrowRight,
  Target,
  Download,
  MoreVertical,
  Plus,
  Pencil,
  Search,
  CheckCircle2,
  XCircle,
  RefreshCw,
  Check
} from 'lucide-react';

type TabType = 'dashboard' | 'profile' | 'courses' | 'quizzes' | 'notes' | 'settings' | 'subscription';
type CourseFilter = 'All Courses' | 'In Progress' | 'Completed' | 'Upcoming';

export const Profile = () => {
  const [activeTab, setActiveTab] = useState<TabType>('dashboard');
  const [courseFilter, setCourseFilter] = useState<CourseFilter>('All Courses');
  const navigate = useNavigate();

  const handleLogout = () => {
    // In a real app, clear tokens/session here
    navigate('/');
  };

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
    { id: 'profile', label: 'My Profile', icon: User },
    { id: 'courses', label: 'Courses', icon: BookOpen },
    { id: 'quizzes', label: 'My Quiz Attempts', icon: ClipboardList },
    { id: 'notes', label: 'Notes', icon: FileText },
    { id: 'settings', label: 'Settings', icon: Settings },
    { id: 'subscription', label: 'My Subscription', icon: CreditCard },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-12"
          >
            <div className="space-y-4">
              <h2 className="text-3xl font-black tracking-tighter text-gray-800">
                Master Every Exam With Military Precision
              </h2>
              <p className="text-lg text-gray-500 leading-relaxed max-w-3xl">
                Your personalized exam HQ: syllabus, lessons, tests, progress, and readiness in one command console.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { label: 'Enrolled Courses', value: '64%', color: 'ios-gold' },
                { label: 'Active Courses', value: '3', color: 'ios-olive' },
                { label: 'Complete Courses', value: '32', color: 'ios-olive' },
                { label: 'Mock Tests Attempted', value: '14', color: 'red-500' }
              ].map((stat, idx) => (
                <div key={idx} className="bg-gray-50 p-8 rounded-2xl border border-gray-100 flex flex-col justify-center h-40 group hover:shadow-xl hover:shadow-black/5 transition-all">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-1.5 h-1.5 bg-ios-gold rotate-45" />
                    <span className="text-[10px] font-black tracking-widest text-gray-400 uppercase">{stat.label}</span>
                  </div>
                  <div className="text-4xl font-black text-gray-800">{stat.value}</div>
                </div>
              ))}
            </div>

            <div className="flex justify-center pt-8">
              <button className="flex items-center gap-2 px-8 py-4 border-2 border-[#4b6b32] text-[#4b6b32] hover:bg-[#4b6b32] hover:text-white rounded-xl font-bold tracking-widest transition-all group">
                Continue Today's Mission
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        );
      case 'courses':
        const courses = [
          { id: 1, title: 'Ssc Gd Complete Batch 2024', instructor: 'Capt. Rajesh Sharma', progress: 65, lessonsLearned: 32, totalLessons: 50, duration: '3 Months', lastAccessed: '2 days ago', type: 'In Progress', img: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2670&auto=format&fit=crop' },
          { id: 2, title: 'Reasoning Masterclass', instructor: 'Maj. Priya Singh', progress: 100, lessonsLearned: 40, totalLessons: 40, duration: '2 Months', lastAccessed: '2 days ago', type: 'Completed', img: 'https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=2670&auto=format&fit=crop' },
          { id: 3, title: 'Mathematics Foundation', instructor: 'Col. Amit Kumar', progress: 45, lessonsLearned: 18, totalLessons: 40, duration: '2.5 Months', lastAccessed: '2 days ago', type: 'In Progress', img: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?q=80&w=2670&auto=format&fit=crop' },
          { id: 4, title: 'English For Competitive Exams', instructor: 'Lt. Neha Gupta', progress: 30, lessonsLearned: 12, totalLessons: 40, duration: '2 Months', lastAccessed: '2 days ago', type: 'In Progress', img: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=2573&auto=format&fit=crop' },
          { id: 5, title: 'Static Gk Crash Course', instructor: 'Dr. Anil Verma', progress: 0, lessonsLearned: 0, totalLessons: 30, duration: '1 Month', lastAccessed: '2 days ago', type: 'Upcoming', img: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=2574&auto=format&fit=crop' },
          { id: 6, title: 'Current Affairs Monthly', instructor: 'News Analysis Team', progress: 100, lessonsLearned: 12, totalLessons: 12, duration: 'Monthly', lastAccessed: '2 days ago', type: 'Completed', img: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2670&auto=format&fit=crop' },
        ];

        const filteredCourses = courses.filter(c => 
          courseFilter === 'All Courses' || c.type === courseFilter
        );

        return (
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <h2 className="text-2xl font-black tracking-tighter text-gray-800">Enrolled Courses</h2>
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Search courses..." 
                  className="w-full md:w-64 pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-ios-gold/20"
                />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              {(['All Courses', 'In Progress', 'Completed', 'Upcoming'] as CourseFilter[]).map((filter) => (
                <button
                  key={filter}
                  onClick={() => setCourseFilter(filter)}
                  className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                    courseFilter === filter 
                    ? 'bg-ios-olive text-white' 
                    : 'bg-white border border-gray-200 text-gray-500 hover:border-ios-olive hover:text-ios-olive'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredCourses.map((course) => (
                <div key={course.id} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col group">
                  <div className="aspect-video rounded-xl overflow-hidden mb-6 relative">
                    <img 
                      src={(course as any).img} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                      alt={course.title}
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-2 right-2 px-2 py-1 bg-black/50 backdrop-blur-md rounded text-[8px] font-black text-white uppercase tracking-widest">
                       {course.duration}
                    </div>
                  </div>
                  <div className="space-y-1 mb-4">
                    <h3 className="text-sm font-black tracking-tight text-gray-800 group-hover:text-ios-olive transition-colors">{course.title}</h3>
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">By {course.instructor}</p>
                  </div>

                  <div className="space-y-2 mb-6">
                    <div className="flex justify-between items-end">
                      <span className="text-[10px] font-black text-gray-500">Progress: {course.progress}%</span>
                      <span className="text-[10px] text-gray-400 font-bold tracking-tight">{course.lessonsLearned}/{course.totalLessons} Lessons</span>
                    </div>
                    <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${course.progress}%` }}
                        className="h-full bg-ios-olive"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6 border-t border-gray-50 pt-4">
                    <div>
                      <h4 className="text-[9px] font-black text-gray-300 uppercase tracking-widest">Duration</h4>
                      <p className="text-[11px] font-bold text-gray-700">{course.duration}</p>
                    </div>
                    <div>
                      <h4 className="text-[9px] font-black text-gray-300 uppercase tracking-widest">Last Accessed</h4>
                      <p className="text-[11px] font-bold text-gray-700">{course.lastAccessed}</p>
                    </div>
                  </div>

                  <div className="mt-auto grid grid-cols-2 gap-3">
                    <button className="py-2 bg-ios-olive text-white rounded-lg text-[10px] font-bold tracking-widest hover:bg-ios-olive/90 flex items-center justify-center gap-1">
                      Continue Course <ArrowRight className="w-3 h-3" />
                    </button>
                    <button className="py-2 border border-red-500 text-red-500 rounded-lg text-[10px] font-bold tracking-widest hover:bg-red-50">
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        );
      case 'profile':
        return (
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-10"
          >
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="relative group">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-ios-gold shadow-lg">
                  <img 
                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=John" 
                    alt="Profile" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <button className="absolute bottom-1 right-1 w-8 h-8 bg-ios-olive text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                  <Pencil className="w-4 h-4" />
                </button>
              </div>
              <div className="text-center md:text-left space-y-4">
                <div>
                  <h2 className="text-3xl font-black tracking-tighter text-gray-800">John Doe</h2>
                  <p className="text-gray-400 font-bold uppercase tracking-widest text-sm">john.doe@example.com</p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <span className="px-3 py-1.5 bg-gray-50 text-gray-400 text-[10px] font-black uppercase tracking-widest rounded-full border border-gray-100">Member Since: Jan 2023</span>
                  <span className="px-3 py-1.5 bg-gray-50 text-gray-400 text-[10px] font-black uppercase tracking-widest rounded-full border border-gray-100">Rank: Top 15%</span>
                  <span className="px-3 py-1.5 bg-gray-50 text-gray-400 text-[10px] font-black uppercase tracking-widest rounded-full border border-gray-100">Streak: 42 days</span>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-lg font-black tracking-tighter text-ios-olive border-b-2 border-ios-olive/10 pb-2">Personal Information</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Full Name</h4>
                    <p className="text-sm font-bold text-gray-800">John Doe</p>
                  </div>
                  <div>
                    <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Phone Number</h4>
                    <p className="text-sm font-bold text-gray-800">+91 9876543210</p>
                  </div>
                  <div>
                    <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Date of Birth</h4>
                    <p className="text-sm font-bold text-gray-800">15 March 1995</p>
                  </div>
                  <div>
                    <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Location</h4>
                    <p className="text-sm font-bold text-gray-800">New Delhi, India</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-lg font-black tracking-tighter text-ios-olive border-b-2 border-ios-olive/10 pb-2">Exam Preferences</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Primary Exam</h4>
                    <p className="text-sm font-bold text-gray-800">SSC GD Constable</p>
                  </div>
                  <div>
                    <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Secondary Exam</h4>
                    <p className="text-sm font-bold text-gray-800">RRB Group D</p>
                  </div>
                  <div>
                    <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Daily Study Goal</h4>
                    <p className="text-sm font-bold text-gray-800">4 hours</p>
                  </div>
                  <div>
                    <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Preferred Time</h4>
                    <p className="text-sm font-bold text-gray-800">Morning (6AM - 10AM)</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-lg font-black tracking-tighter text-ios-olive border-b-2 border-ios-olive/10 pb-2">Account Settings</h3>
                <div className="space-y-4">
                  {[
                    { label: 'Email Notifications', enabled: true },
                    { label: 'SMS Notifications', enabled: false },
                    { label: 'Study Reminders', enabled: true }
                  ].map((setting, idx) => (
                    <div key={idx} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                      <span className="text-sm font-bold text-gray-700">{setting.label}</span>
                      <div className={`w-12 h-6 rounded-full relative transition-colors cursor-pointer ${setting.enabled ? 'bg-ios-olive' : 'bg-gray-300'}`}>
                        <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${setting.enabled ? 'right-1' : 'left-1'}`} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        );
      case 'quizzes':
        const attempts = [
          { id: 1, name: 'Reasoning: Analogy & Classification', questions: '20/20 questions', date: 'Today, 10:30 AM', score: 85, time: '12:30 mins', rank: 'Top 12%' },
          { id: 2, name: 'Mathematics: Percentage & Profit', questions: '15/20 questions', date: 'Yesterday, 3:45 PM', score: 78, time: '18:45 mins', rank: 'Top 25%' },
          { id: 3, name: 'General Knowledge: Polity', questions: '20/20 questions', date: '2 days ago, 9:15 AM', score: 92, time: '10:20 mins', rank: 'Top 8%' },
          { id: 4, name: 'English: Spotting Errors', questions: '13/20 questions', date: '3 days ago, 8:00 PM', score: 65, time: '25:10 mins', rank: 'Top 40%' },
          { id: 5, name: 'Current Affairs: March 2024', questions: '18/20 questions', date: '1 week ago, 11:00 AM', score: 88, time: '15:30 mins', rank: 'Top 15%' },
          { id: 6, name: 'Full Mock Test #4', questions: '74/100 questions', date: '2 weeks ago, 2:00 PM', score: 74, time: '85:00 mins', rank: 'Top 20%' },
        ];

        return (
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-10"
          >
            <h2 className="text-2xl font-black tracking-tighter text-gray-800">My Quiz Attempts</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { label: 'Total Attempts', value: '142' },
                { label: 'Average Score', value: '72%' },
                { label: 'Best Score', value: '98%' },
                { label: 'Time Spent', value: '45H 30M' }
              ].map((stat, idx) => (
                <div key={idx} className="bg-gray-50 p-8 rounded-2xl border border-gray-100 flex flex-col justify-center h-32 group hover:shadow-xl hover:shadow-black/5 transition-all">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-1.5 h-1.5 bg-ios-gold rotate-45" />
                    <span className="text-[10px] font-black tracking-widest text-gray-400 uppercase">{stat.label}</span>
                  </div>
                  <div className="text-4xl font-black text-gray-800">{stat.value}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="flex flex-wrap gap-2">
                {['Recent Attempts', 'Top Scores', 'By Subject', 'By Difficulty'].map((filter, idx) => (
                  <button 
                    key={idx}
                    className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${idx === 0 ? 'bg-ios-olive text-white' : 'bg-white border border-gray-100 text-gray-500 hover:border-ios-olive hover:text-ios-olive'}`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
              <select className="bg-white border border-gray-200 rounded-lg px-4 py-2 text-xs font-bold outline-none focus:ring-2 focus:ring-ios-gold/20">
                <option>Last 7 days</option>
                <option>Last 30 days</option>
                <option>All time</option>
              </select>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50/50">
                    <th className="px-6 py-4 text-[10px] font-black text-gray-400 uppercase tracking-widest rounded-tl-xl border-b border-gray-100">Quiz Name</th>
                    <th className="px-6 py-4 text-[10px] font-black text-gray-400 uppercase tracking-widest border-b border-gray-100 text-center">Date</th>
                    <th className="px-6 py-4 text-[10px] font-black text-gray-400 uppercase tracking-widest border-b border-gray-100 text-center">Score</th>
                    <th className="px-6 py-4 text-[10px] font-black text-gray-400 uppercase tracking-widest border-b border-gray-100 text-center">Time Taken</th>
                    <th className="px-6 py-4 text-[10px] font-black text-gray-400 uppercase tracking-widest border-b border-gray-100 text-center">Rank</th>
                    <th className="px-6 py-4 text-[10px] font-black text-gray-400 uppercase tracking-widest rounded-tr-xl border-b border-gray-100 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {attempts.map((attempt) => (
                    <tr key={attempt.id} className="hover:bg-gray-50/30 transition-colors group">
                      <td className="px-6 py-5">
                        <h4 className="text-sm font-bold text-gray-800 group-hover:text-ios-olive transition-colors">{attempt.name}</h4>
                        <p className="text-[10px] text-gray-400 font-bold tracking-tight">{attempt.questions}</p>
                      </td>
                      <td className="px-6 py-5 text-center text-[11px] font-bold text-gray-600">{attempt.date}</td>
                      <td className="px-6 py-5 text-center">
                        <span className={`px-2 py-1 rounded text-[10px] font-bold ${attempt.score >= 80 ? 'bg-green-50 text-green-600' : 'bg-yellow-50 text-yellow-600'}`}>
                          {attempt.score}%
                        </span>
                      </td>
                      <td className="px-6 py-5 text-center text-[11px] font-bold text-gray-600">{attempt.time}</td>
                      <td className="px-6 py-5 text-center">
                        <span className="px-2 py-1 bg-ios-olive/5 text-ios-olive rounded text-[10px] font-bold">{attempt.rank}</span>
                      </td>
                      <td className="px-6 py-5">
                        <div className="flex items-center justify-center gap-2">
                          <button className="px-3 py-1.5 border border-gray-200 text-gray-500 rounded text-[10px] font-bold hover:bg-gray-50 transition-colors uppercase tracking-tight">Review</button>
                          <button className="px-3 py-1.5 border border-gray-200 text-gray-500 rounded text-[10px] font-bold hover:bg-gray-50 transition-colors uppercase tracking-tight">Retake</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 space-y-8 border border-gray-100">
               <div className="flex items-center gap-3">
                 <div className="w-10 h-10 bg-red-50 text-red-500 rounded-xl flex items-center justify-center">
                   <Target className="w-5 h-5" />
                 </div>
                 <h3 className="text-lg font-black tracking-tighter text-gray-800">Performance Insights</h3>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                 {[
                   { label: 'Strongest Subject', value: 'General Knowledge', detail: 'Average Score: 86%' },
                   { label: 'Needs Improvement', value: 'English Grammar', detail: 'Average Score: 68%' },
                   { label: 'Best Time Of Day', value: 'Morning (8AM-11AM)', detail: 'Average Score: 81%' },
                   { label: 'Consistency Score', value: 'Good', detail: '±8% variation' }
                 ].map((insight, idx) => (
                   <div key={idx} className="bg-white p-6 rounded-xl border border-gray-100 space-y-2">
                     <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{insight.label}</h4>
                     <p className="text-sm font-black text-gray-800">{insight.value}</p>
                     <p className="text-[10px] text-gray-400 font-bold">{insight.detail}</p>
                   </div>
                 ))}
               </div>
            </div>
          </motion.div>
        );
      case 'subscription':
        return (
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-12"
          >
            <div className="space-y-2">
              <h2 className="text-2xl font-black tracking-tighter text-gray-800">My Subscription</h2>
              <p className="text-sm text-gray-400 font-bold tracking-tight">Manage your subscription plan, billing details, and upgrade options.</p>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-5 gap-8">
              {/* Current Plan */}
              <div className="xl:col-span-3 bg-white border border-gray-100 rounded-3xl p-8 shadow-sm">
                <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-8">
                  <div>
                    <h3 className="text-2xl font-black tracking-tighter text-gray-800 mb-2">Premium Plus</h3>
                    <span className="px-3 py-1 bg-[#4b6b32]/10 text-[#4b6b32] text-[10px] font-black tracking-widest rounded-full border border-[#4b6b32]/10">Active</span>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-black text-gray-800">₹999/month</p>
                    <p className="text-[10px] text-gray-400 font-black tracking-widest">Billed monthly</p>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  {[
                    { label: 'Plan Started', value: '15 Jan 2024' },
                    { label: 'End Date', value: '15 Feb 2024' },
                    { label: 'Next Billing Date', value: '15 Feb 2024' },
                    { label: 'Auto Renewal', value: 'Enabled', icon: <RefreshCw className="w-3 h-3" /> },
                    { label: 'Payment Method', value: 'Visa **** 4321' }
                   ].map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center py-3 border-b border-gray-50 last:border-0">
                      <span className="text-xs text-gray-400 font-bold tracking-tight">{item.label}</span>
                      <div className="flex items-center gap-2">
                        {item.icon && <span className="text-[#4b6b32]">{item.icon}</span>}
                        <span className="text-xs font-black text-gray-800 tracking-tight">{item.value}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="flex-1 px-8 py-3 bg-[#8b8e3a] text-white rounded-xl text-xs font-black uppercase tracking-widest hover:bg-[#7a7d32] transition-colors shadow-sm">Manage Billing</button>
                  <button className="flex-1 px-8 py-3 bg-white border border-red-200 text-red-500 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-red-50 hover:border-red-300 transition-colors">Cancel Subscription</button>
                </div>
              </div>
              {/* Usage This Month */}
              <div className="xl:col-span-2 space-y-6">
                <h3 className="text-lg font-black tracking-tighter text-gray-800">Usage This Month</h3>
                <div className="space-y-4">
                  {[
                    { label: 'Mock Tests Taken', current: 14, total: 20, color: 'bg-ios-gold' },
                    { label: 'Notes Created', current: 45, total: 100, color: 'bg-ios-olive' }
                  ].map((stat, idx) => (
                    <div key={idx} className="bg-gray-50 border border-gray-100 rounded-3xl p-8">
                      <div className="flex justify-between items-end mb-4">
                        <div className="space-y-1">
                          <span className="text-[10px] font-black text-gray-400 tracking-widest block">✦ {stat.label}</span>
                          <p className="text-3xl font-black text-gray-800">{stat.current}/{stat.total}</p>
                        </div>
                      </div>
                      <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                        <motion.div 
                          className={`h-full ${stat.color}`}
                          initial={{ width: 0 }}
                          animate={{ width: `${(stat.current / stat.total) * 100}%` }}
                        />
                      </div>
                      <p className="text-[10px] text-gray-400 font-bold mt-3">{Math.round((stat.current / stat.total) * 100)}% used</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Available Plans */}
            <div className="space-y-8">
              <h3 className="text-2xl font-black tracking-tighter text-gray-800">Available Plans</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { 
                    name: 'Basic', 
                    price: '₹299', 
                    period: '/month', 
                    desc: 'For casual learners',
                    features: ['Access to 50+ courses', '10 Mock tests/month', 'Basic analytics'],
                    excluded: ['Advanced notes', 'Priority support'],
                    current: false
                  },
                  { 
                    name: 'Premium Plus', 
                    price: '₹999', 
                    period: '/month', 
                    desc: 'Best for serious aspirants',
                    features: ['Unlimited courses access', 'Unlimited mock tests', 'Advanced analytics', 'Unlimited notes', 'Priority 24/7 support', '5GB cloud storage'],
                    current: true
                  },
                  { 
                    name: 'Annual Pro', 
                    price: '₹9,999', 
                    period: '/year', 
                    desc: 'Save 16% with annual billing',
                    features: ['All Premium Plus features', 'Personal mentor access', 'Custom study plans', '10GB cloud storage', 'Certificate of completion'],
                    current: false
                  }
                ].map((plan, idx) => (
                  <div key={idx} className={`bg-white border rounded-3xl p-8 transition-all relative ${plan.current ? 'border-ios-gold shadow-lg ring-1 ring-ios-gold' : 'border-gray-100 shadow-sm hover:shadow-md'}`}>
                    {plan.current && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-ios-gold text-white px-4 py-1 rounded-full text-[10px] font-black tracking-widest whitespace-nowrap">Current Plan</div>
                    )}
                    <div className="mb-8">
                      <h4 className="text-xl font-black text-gray-800 tracking-tighter mb-2">{plan.name}</h4>
                      <div className="flex items-end gap-1 mb-2">
                        <span className="text-3xl font-black text-gray-800">{plan.price}</span>
                        <span className="text-sm text-gray-400 font-bold mb-1">{plan.period}</span>
                      </div>
                      <p className="text-xs text-gray-400 font-bold">{plan.desc}</p>
                    </div>

                    <div className="space-y-4 mb-10">
                      {plan.features.map((f, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <CheckCircle2 className="w-4 h-4 text-green-500" />
                          <span className="text-xs text-gray-600 font-medium">{f}</span>
                        </div>
                      ))}
                      {plan.excluded?.map((f, i) => (
                        <div key={i} className="flex items-center gap-3 opacity-40">
                          <XCircle className="w-4 h-4 text-gray-400" />
                          <span className="text-xs text-gray-400 font-medium">{f}</span>
                        </div>
                      ))}
                    </div>

                    <button className={`w-full py-3 rounded-xl text-xs font-black tracking-widest transition-all ${plan.current ? 'bg-gray-100 text-gray-400 cursor-default' : 'bg-[#4b6b32] text-white hover:bg-[#3d5729]'}`}>
                      {plan.current ? 'Current Plan' : plan.name === 'Annual Pro' ? 'Choose Annual' : 'Choose Basic'}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Billing History */}
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <h3 className="text-2xl font-black tracking-tighter text-gray-800">Billing History</h3>
                <button className="flex items-center gap-2 px-4 py-2 bg-gray-50 border border-gray-100 rounded-lg text-[10px] font-black uppercase tracking-widest text-gray-500 hover:bg-gray-100">
                  <Download className="w-3.5 h-3.5" />
                  Download All Invoices
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-gray-50 border-y border-gray-100">
                      <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-gray-400">Date</th>
                      <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-gray-400">Description</th>
                      <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-gray-400">Amount</th>
                      <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-gray-400">Status</th>
                      <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-gray-400">Invoice</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { date: '15 Jan 2024', desc: 'Premium Plus Monthly Subscription', amount: '₹999', status: 'Paid' },
                      { date: '15 Dec 2023', desc: 'Premium Plus Monthly Subscription', amount: '₹999', status: 'Paid' },
                      { date: '15 Nov 2023', desc: 'Premium Plus Monthly Subscription', amount: '₹999', status: 'Paid' },
                      { date: '15 Oct 2023', desc: 'Upgrade to Premium Plus', amount: '₹999', status: 'Paid' }
                    ].map((row, idx) => (
                      <tr key={idx} className="border-b border-gray-50 last:border-0 hover:bg-gray-50/50 transition-colors">
                        <td className="px-6 py-5 text-xs text-gray-800 font-bold">{row.date}</td>
                        <td className="px-6 py-5 text-xs text-gray-500 font-medium">{row.desc}</td>
                        <td className="px-6 py-5 text-xs text-gray-800 font-black">{row.amount}</td>
                        <td className="px-6 py-5">
                          <span className="px-3 py-1 bg-green-50 text-green-600 text-[9px] font-black uppercase tracking-widest rounded-md border border-green-100">{row.status}</span>
                        </td>
                        <td className="px-6 py-5">
                          <button className="px-4 py-1.5 bg-white border border-gray-200 rounded-md text-[9px] font-black uppercase tracking-widest text-gray-500 hover:border-ios-gold hover:text-ios-gold transition-all">Download</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* FAQs */}
            <div className="space-y-6">
              <h3 className="text-2xl font-black tracking-tighter text-gray-800">Frequently Asked Questions</h3>
              <div className="space-y-4 text-left">
                {[
                  { q: 'Can I cancel my subscription anytime?', a: 'Yes, you can cancel your subscription at any time. Your access will continue until the end of your current billing period.' },
                  { q: 'What happens when I downgrade my plan?', a: 'When you downgrade, you\'ll lose access to premium features immediately. The new plan will take effect from your next billing cycle.' },
                  { q: 'How do I update my payment method?', a: 'Go to "Manage Billing" in your current plan section to update your payment method. You can add multiple payment methods.' },
                  { q: 'Is there a free trial available?', a: 'We offer a 7-day free trial for new users on the Premium Plus plan. No credit card required for the trial.' }
                ].map((faq, idx) => (
                  <div key={idx} className="bg-gray-50 border border-gray-100 rounded-2xl p-6 hover:bg-gray-100 transition-colors">
                    <h4 className="text-sm font-black text-gray-800 tracking-tight mb-2 border-l-4 border-ios-gold pl-4">{faq.q}</h4>
                    <p className="text-xs text-gray-400 font-bold leading-relaxed pl-5">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        );
      case 'settings':
        return (
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-12"
          >
            <h2 className="text-2xl font-black tracking-tighter text-gray-800">Settings</h2>

            {/* Account Settings */}
            <div className="space-y-6">
              <h3 className="text-lg font-black tracking-tighter text-ios-olive border-b-2 border-ios-olive/10 pb-2">Account Settings</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-6 bg-gray-50 rounded-2xl border border-gray-100">
                  <div className="space-y-1">
                    <h4 className="text-sm font-black text-gray-800">Change Password</h4>
                    <p className="text-xs text-gray-400 font-bold">Update your account password</p>
                  </div>
                  <button className="px-6 py-2 bg-[#4b6b32] text-white rounded-lg text-xs font-bold tracking-widest hover:bg-[#3d5729] transition-colors">Change</button>
                </div>

                <div className="flex items-center justify-between p-6 bg-gray-50 rounded-2xl border border-gray-100">
                  <div className="space-y-1">
                    <h4 className="text-sm font-black text-gray-800">Two-Factor Authentication</h4>
                    <p className="text-xs text-gray-400 font-bold">Add extra security to your account</p>
                  </div>
                  <div className="w-12 h-6 bg-gray-200 rounded-full relative cursor-pointer group">
                    <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-all group-hover:bg-gray-50" />
                  </div>
                </div>

                <div className="flex items-center justify-between p-6 bg-gray-50 rounded-2xl border border-gray-100">
                  <div className="space-y-1">
                    <h4 className="text-sm font-black text-gray-800">Delete Account</h4>
                    <p className="text-xs text-gray-400 font-bold">Permanently delete your account and data</p>
                  </div>
                  <button className="px-6 py-2 bg-red-500 text-white rounded-lg text-xs font-bold tracking-widest hover:bg-red-600 transition-colors">Delete</button>
                </div>
              </div>
            </div>

            {/* Notification Preferences */}
            <div className="space-y-6">
              <h3 className="text-lg font-black tracking-tighter text-ios-olive border-b-2 border-ios-olive/10 pb-2">Notification Preferences</h3>
              <div className="space-y-4">
                {[
                  { label: 'Email Notifications', desc: 'Receive course updates and reminders', enabled: true },
                  { label: 'Sms Notifications', desc: 'Get important updates via SMS', enabled: true },
                  { label: 'Push Notifications', desc: 'Browser and mobile push notifications', enabled: true }
                ].map((pref, idx) => (
                  <div key={idx} className="flex items-center justify-between p-6 bg-gray-50 rounded-2xl border border-gray-100">
                    <div className="space-y-1">
                      <h4 className="text-sm font-black text-gray-800">{pref.label}</h4>
                      <p className="text-xs text-gray-400 font-bold">{pref.desc}</p>
                    </div>
                    <div className={`w-12 h-6 rounded-full relative transition-colors cursor-pointer ${pref.enabled ? 'bg-ios-olive' : 'bg-gray-300'}`}>
                      <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${pref.enabled ? 'right-1' : 'left-1'}`} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Study Preferences */}
            <div className="space-y-6">
              <h3 className="text-lg font-black tracking-tighter text-ios-olive border-b-2 border-ios-olive/10 pb-2">Study Preferences</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-6 bg-gray-50 rounded-2xl border border-gray-100">
                  <div className="space-y-1">
                    <h4 className="text-sm font-black text-gray-800">Daily Study Goal</h4>
                    <p className="text-xs text-gray-400 font-bold">Set your daily study target</p>
                  </div>
                  <select className="bg-white border border-gray-200 rounded-lg px-4 py-2 text-xs font-bold outline-none">
                    <option>2 hours</option>
                    <option>4 hours</option>
                    <option>6 hours</option>
                  </select>
                </div>

                <div className="flex items-center justify-between p-6 bg-gray-50 rounded-2xl border border-gray-100">
                  <div className="space-y-1">
                    <h4 className="text-sm font-black text-gray-800">Preferred Study Time</h4>
                    <p className="text-xs text-gray-400 font-bold">When do you prefer to study?</p>
                  </div>
                  <select className="bg-white border border-gray-200 rounded-lg px-4 py-2 text-xs font-bold outline-none">
                    <option>Morning (6AM - 10AM)</option>
                    <option>Afternoon (12PM - 4PM)</option>
                    <option>Night (8PM - 12AM)</option>
                  </select>
                </div>

                <div className="flex items-center justify-between p-6 bg-gray-50 rounded-2xl border border-gray-100">
                  <div className="space-y-1">
                    <h4 className="text-sm font-black text-gray-800">Study Reminders</h4>
                    <p className="text-xs text-gray-400 font-bold">Get reminders for your study sessions</p>
                  </div>
                  <div className="w-12 h-6 bg-ios-olive rounded-full relative cursor-pointer">
                    <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full transition-all" />
                  </div>
                </div>
              </div>
            </div>

            {/* Privacy Settings */}
            <div className="space-y-6">
              <h3 className="text-lg font-black tracking-tighter text-ios-olive border-b-2 border-ios-olive/10 pb-2">Privacy Settings</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-6 bg-gray-50 rounded-2xl border border-gray-100">
                  <div className="space-y-1">
                    <h4 className="text-sm font-black text-gray-800">Profile Visibility</h4>
                    <p className="text-xs text-gray-400 font-bold">Who can see your profile?</p>
                  </div>
                  <select className="bg-white border border-gray-200 rounded-lg px-4 py-2 text-xs font-bold outline-none">
                    <option>Everyone</option>
                    <option>Only Friends</option>
                    <option>Private</option>
                  </select>
                </div>

                <div className="flex items-center justify-between p-6 bg-gray-50 rounded-2xl border border-gray-100">
                  <div className="space-y-1">
                    <h4 className="text-sm font-black text-gray-800">Show Activity Status</h4>
                    <p className="text-xs text-gray-400 font-bold">Show when you're online</p>
                  </div>
                  <div className="w-12 h-6 bg-ios-olive rounded-full relative cursor-pointer">
                    <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full transition-all" />
                  </div>
                </div>

                <div className="flex items-center justify-between p-6 bg-gray-50 rounded-2xl border border-gray-100">
                  <div className="space-y-1">
                    <h4 className="text-sm font-black text-gray-800">Data Sharing</h4>
                    <p className="text-xs text-gray-400 font-bold">Allow anonymous data for improvements</p>
                  </div>
                  <div className="w-12 h-6 bg-ios-olive rounded-full relative cursor-pointer">
                    <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full transition-all" />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center pt-8 border-t border-gray-100">
              <button className="flex items-center gap-2 px-10 py-4 bg-white border border-ios-olive text-ios-olive hover:bg-ios-olive hover:text-white rounded-xl font-bold uppercase tracking-widest transition-all group shadow-sm">
                Save All Changes
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        );
      case 'notes':
        const noteItems = [
          { id: 1, course: 'Fundamentals', title: 'Write A Thesis', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', pages: 80, time: '2 days ago' },
          { id: 2, course: 'Advanced', title: 'Mathematics Formulas', description: 'Important formulas and theorems for calculus and algebra with solved examples.', pages: 45, time: '1 week ago' },
          { id: 3, course: 'History', title: 'World War Timeline', description: 'Detailed timeline of major events from 1914 to 1945 with important battles.', pages: 32, time: '3 days ago' },
          { id: 4, course: 'Science', title: 'Chemistry Reactions', description: 'Organic and inorganic chemical reactions with mechanisms and examples.', pages: 68, time: '5 days ago' },
          { id: 5, course: 'Literature', title: 'Poetry Analysis', description: 'Analysis of major poems from different eras with critical interpretations.', pages: 28, time: 'Yesterday' },
        ];

        return (
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-10"
          >
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
              <h2 className="text-2xl font-black tracking-tighter text-gray-800">Notes</h2>
              
              <div className="flex gap-4">
                {[
                  { label: 'Total Notes', value: '125' },
                  { label: 'This Week', value: '8' },
                  { label: 'Subjects', value: '12' }
                ].map((stat, idx) => (
                  <div key={idx} className="bg-ios-gold/5 px-6 py-4 rounded-xl border border-ios-gold/10 text-center min-w-[120px]">
                    <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest block mb-1">{stat.label}</span>
                    <span className="text-2xl font-black text-gray-800">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col xl:flex-row gap-6 justify-between items-center">
              <div className="relative w-full xl:max-w-md">
                <input 
                  type="text" 
                  placeholder="Search notes..." 
                  className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-ios-gold/20 font-medium"
                />
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              </div>

              <div className="flex items-center gap-3 w-full xl:w-auto overflow-x-auto pb-2 xl:pb-0">
                <button className="px-5 py-2.5 bg-ios-gold text-white rounded-lg text-xs font-bold uppercase tracking-widest whitespace-nowrap">All</button>
                <button className="px-5 py-2.5 bg-white border border-gray-100 text-gray-500 hover:border-ios-gold hover:text-ios-gold rounded-lg text-xs font-bold uppercase tracking-widest transition-all whitespace-nowrap">Recent</button>
                <button className="px-5 py-2.5 bg-white border border-gray-100 text-gray-500 hover:border-ios-gold hover:text-ios-gold rounded-lg text-xs font-bold uppercase tracking-widest transition-all whitespace-nowrap">Starred</button>
                <button className="px-5 py-2.5 bg-[#8b8e3a] text-white rounded-lg text-xs font-bold uppercase tracking-widest flex items-center gap-2 hover:bg-[#7a7d32] transition-colors whitespace-nowrap ml-2">
                  <Plus className="w-4 h-4" />
                  New Note
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
              {noteItems.map((note) => (
                <div key={note.id} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all group relative flex flex-col h-[320px]">
                  <button className="absolute top-4 right-4 text-gray-300 hover:text-gray-600 transition-colors">
                    <MoreVertical className="w-5 h-5" />
                  </button>

                  <div className="mb-4">
                    <span className="px-3 py-1 bg-ios-olive/5 text-ios-olive text-[10px] font-black uppercase tracking-widest rounded-md border border-ios-olive/10">
                      course: {note.course}
                    </span>
                  </div>

                  <h3 className="text-xl font-black tracking-tighter text-gray-800 mb-3 group-hover:text-ios-gold transition-colors">
                    {note.title}
                  </h3>

                  <p className="text-xs text-gray-500 leading-relaxed font-medium line-clamp-3 mb-auto">
                    {note.description}
                  </p>

                  <div className="mt-6 pt-6 border-t border-gray-50 flex items-center justify-between">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-gray-400">
                        <FileText className="w-3.5 h-3.5" />
                        <span className="text-[10px] font-black uppercase tracking-tight">{note.pages} pages</span>
                      </div>
                      <p className="text-[10px] text-gray-300 font-bold">{note.time}</p>
                    </div>

                    <button className="w-10 h-10 rounded-xl border border-gray-100 text-gray-400 flex items-center justify-center hover:bg-ios-gold hover:text-white hover:border-ios-gold transition-all">
                      <Download className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        );
      default:
        return (
          <div className="flex flex-col items-center justify-center py-20 text-gray-400">
            <Target className="w-16 h-16 mb-4 opacity-20" />
            <h3 className="text-xl font-bold uppercase tracking-tighter">Information coming soon</h3>
            <p className="text-sm">This section is currently being updated with your personalized data.</p>
          </div>
        );
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50/50">
      {/* Hero Section */}
      <section className="relative h-[300px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0 scale-105"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1590633743991-da5049971916?q=80&w=2070&auto=format&fit=crop')",
            filter: "brightness(0.3)"
          }}
        />
        <div className="relative z-10 text-center text-white px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl font-black tracking-tighter mb-4"
          >
            Profile
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center gap-2 text-sm font-bold tracking-widest text-white/80"
          >
            <span className="hover:text-ios-olive transition-colors cursor-pointer">Home</span>
            <span className="text-white/40">/</span>
            <span className="text-ios-gold">Profile</span>
          </motion.div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-screen-2xl mx-auto w-full px-6 py-12 flex flex-col lg:flex-row gap-8">
        
        {/* Sidebar Nav */}
        <aside className="lg:w-80 flex-shrink-0">
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden divide-y divide-gray-100">
            <div className="py-2">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id as TabType)}
                  className={`w-full flex items-center gap-4 px-6 py-4 transition-all group ${
                    activeTab === item.id 
                    ? 'bg-[#4b6b32] text-white' 
                    : 'text-gray-500 hover:bg-gray-50 hover:text-gray-800'
                  }`}
                >
                  <item.icon className={`w-5 h-5 ${activeTab === item.id ? 'text-white' : 'text-gray-400 group-hover:text-gray-800'}`} />
                  <span className="text-sm font-bold tracking-tight">{item.label}</span>
                </button>
              ))}
            </div>
            
            <div className="py-2">
              <button 
                onClick={handleLogout}
                className="w-full flex items-center gap-4 px-6 py-4 text-red-500 hover:bg-red-50 transition-colors group"
              >
                <LogOut className="w-5 h-5" />
                <span className="text-sm font-bold tracking-tight">Logout</span>
              </button>
            </div>
          </div>
        </aside>

        {/* Content Area */}
        <main className="flex-grow bg-white rounded-[2.5rem] shadow-sm border border-gray-100 p-8 md:p-12 min-h-[600px]">
          <AnimatePresence mode="wait">
            {renderContent()}
          </AnimatePresence>
        </main>

      </div>
    </div>
  );
};
