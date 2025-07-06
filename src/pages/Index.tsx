
import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, PieChart, Pie, Cell, ResponsiveContainer, LineChart, Line, AreaChart, Area } from 'recharts';
import { Users, GraduationCap, BookOpen, Calendar, UserCheck, UserX, TrendingUp, Award, Clock, Target } from 'lucide-react';

const batchData = {
  'Batch 1': {
    allDataCenters: [
      { name: 'Sukkur', students: 35 },
      { name: 'Khairpur', students: 32 },
      { name: 'Larkana', students: 30 },
      { name: 'Nawabshah', students: 28 }
    ],
    allDataCourses: {
      Sukkur: [ { name: 'Web Dev', students: 18 }, { name: 'Graphic Design', students: 17 } ],
      Khairpur: [ { name: 'Web Dev', students: 16 }, { name: 'Graphic Design', students: 16 } ],
      Larkana: [ { name: 'Web Dev', students: 15 }, { name: 'Graphic Design', students: 15 } ],
      Nawabshah: [ { name: 'Web Dev', students: 14 }, { name: 'Graphic Design', students: 14 } ]
    },
    allGenderData: {
      Sukkur: [ { name: 'Male', value: 20 }, { name: 'Female', value: 15 } ],
      Khairpur: [ { name: 'Male', value: 18 }, { name: 'Female', value: 14 } ],
      Larkana: [ { name: 'Male', value: 16 }, { name: 'Female', value: 14 } ],
      Nawabshah: [ { name: 'Male', value: 13 }, { name: 'Female', value: 15 } ]
    },
    allTeachers: {
      Sukkur: [ { name: 'Ali', subject: 'Web Dev' } ],
      Khairpur: [ { name: 'Sara', subject: 'Graphic Design' } ],
      Larkana: [ { name: 'Imran', subject: 'Web Dev' } ],
      Nawabshah: [ { name: 'Ayesha', subject: 'Graphic Design' } ]
    },
    attendanceData: {
      '2025-07-01': {
        Sukkur: [ { course: 'Web Dev', present: 16 }, { course: 'Graphic Design', present: 15 } ],
        Khairpur: [ { course: 'Web Dev', present: 15 }, { course: 'Graphic Design', present: 14 } ],
        Larkana: [ { course: 'Web Dev', present: 14 }, { course: 'Graphic Design', present: 13 } ],
        Nawabshah: [ { course: 'Web Dev', present: 13 }, { course: 'Graphic Design', present: 13 } ]
      }
    }
  },
  'Batch 2': {
    allDataCenters: [
      { name: 'Sukkur', students: 45 },
      { name: 'Khairpur', students: 40 },
      { name: 'Larkana', students: 38 },
      { name: 'Nawabshah', students: 33 }
    ],
    allDataCourses: {
      Sukkur: [ { name: 'AI', students: 25 }, { name: 'Web Dev', students: 20 } ],
      Khairpur: [ { name: 'AI', students: 20 }, { name: 'Web Dev', students: 20 } ],
      Larkana: [ { name: 'AI', students: 18 }, { name: 'Web Dev', students: 20 } ],
      Nawabshah: [ { name: 'AI', students: 17 }, { name: 'Web Dev', students: 16 } ]
    },
    allGenderData: {
      Sukkur: [ { name: 'Male', value: 30 }, { name: 'Female', value: 15 } ],
      Khairpur: [ { name: 'Male', value: 25 }, { name: 'Female', value: 15 } ],
      Larkana: [ { name: 'Male', value: 20 }, { name: 'Female', value: 18 } ],
      Nawabshah: [ { name: 'Male', value: 20 }, { name: 'Female', value: 13 } ]
    },
    allTeachers: {
      Sukkur: [ { name: 'Usman', subject: 'AI' } ],
      Khairpur: [ { name: 'Mehwish', subject: 'Web Dev' } ],
      Larkana: [ { name: 'Zahid', subject: 'AI' } ],
      Nawabshah: [ { name: 'Hina', subject: 'Web Dev' } ]
    },
    attendanceData: {
      '2025-07-01': {
        Sukkur: [ { course: 'AI', present: 22 }, { course: 'Web Dev', present: 19 } ],
        Khairpur: [ { course: 'AI', present: 18 }, { course: 'Web Dev', present: 17 } ],
        Larkana: [ { course: 'AI', present: 17 }, { course: 'Web Dev', present: 18 } ],
        Nawabshah: [ { course: 'AI', present: 16 }, { course: 'Web Dev', present: 15 } ]
      }
    }
  },
  'Batch 4': {
    allDataCenters: [
      { name: 'Sukkur', students: 120 },
      { name: 'Khairpur', students: 120 },
      { name: 'Kandhkot', students: 120 },
      { name: 'Larkana', students: 120 },
      { name: 'Nawabshah', students: 120 },
    ],
    allDataCourses: {
      Sukkur: [
        { name: 'Web Development', students: 40 },
        { name: 'Python Programming', students: 40 },
        { name: 'Graphic Design', students: 40 },
      ],
      Khairpur: [
        { name: 'Artificial Intelligence', students: 40 },
        { name: 'Python Programming', students: 40 },
        { name: 'Amazon FBA', students: 40 },
      ],
      Kandhkot: [
        { name: 'Web Development', students: 40 },
        { name: 'Artificial Intelligence', students: 40 },
      ],
      Larkana: [
        { name: 'Python Programming', students: 40 },
        { name: 'Graphic Design', students: 40 },
      ],
      Nawabshah: [
        { name: 'Amazon FBA', students: 40 },
        { name: 'Web Development', students: 40 },
      ]
    },
    allGenderData: {
      Sukkur: [
        { name: 'Male', value: 60 },
        { name: 'Female', value: 60 },
      ],
      Khairpur: [
        { name: 'Male', value: 50 },
        { name: 'Female', value: 70 },
      ],
      Kandhkot: [
        { name: 'Male', value: 65 },
        { name: 'Female', value: 55 },
      ],
      Larkana: [
        { name: 'Male', value: 70 },
        { name: 'Female', value: 50 },
      ],
      Nawabshah: [
        { name: 'Male', value: 55 },
        { name: 'Female', value: 65 },
      ]
    },
    allTeachers: {
      Sukkur: [
        { name: 'Ali', subject: 'Web Development' },
        { name: 'Sara', subject: 'Python Programming' },
      ],
      Khairpur: [
        { name: 'Ahmed', subject: 'AI' },
        { name: 'Zara', subject: 'Amazon FBA' },
      ],
      Kandhkot: [
        { name: 'Asim', subject: 'AI' },
      ],
      Larkana: [
        { name: 'Sana', subject: 'Graphic Design' },
      ],
      Nawabshah: [
        { name: 'Bilal', subject: 'Web Development' },
        { name: 'Hira', subject: 'Amazon FBA' },
      ]
    },
    attendanceData: {
      '2025-07-01': {
        Sukkur: [
          { course: 'Web Development', present: 35 },
          { course: 'Python Programming', present: 38 },
          { course: 'Graphic Design', present: 36 },
        ],
        Khairpur: [
          { course: 'Artificial Intelligence', present: 32 },
          { course: 'Python Programming', present: 30 },
          { course: 'Amazon FBA', present: 33 },
        ],
      },
      '2025-07-02': {
        Sukkur: [
          { course: 'Web Development', present: 34 },
          { course: 'Python Programming', present: 36 },
          { course: 'Graphic Design', present: 35 },
        ],
        Khairpur: [
          { course: 'Artificial Intelligence', present: 31 },
          { course: 'Python Programming', present: 29 },
          { course: 'Amazon FBA', present: 34 },
        ],
      }
    }
  }
};

const COLORS = ['#3b82f6', '#ec4899', '#10b981', '#f59e0b', '#8b5cf6'];
const GENDER_COLORS = ['#3b82f6', '#ec4899'];

const Dashboard = () => {
  const [selectedCenter, setSelectedCenter] = useState('All');
  const [selectedDate, setSelectedDate] = useState('2025-07-01');
  const [selectedBatch, setSelectedBatch] = useState('Batch 4');
  const [currentBatchData, setCurrentBatchData] = useState(batchData['Batch 4']);

  useEffect(() => {
    setCurrentBatchData(batchData[selectedBatch]);
    setSelectedCenter('All');
  }, [selectedBatch]);

  const batches = ['Batch 1', 'Batch 2', 'Batch 4'];

  const courseArray = selectedCenter === 'All'
    ? Object.values(currentBatchData.allDataCourses).flat()
    : currentBatchData.allDataCourses[selectedCenter] || [];

  const genderArray = selectedCenter === 'All'
    ? Object.values(currentBatchData.allGenderData).flat().reduce((acc, curr) => {
        const found = acc.find(g => g.name === curr.name);
        if (found) found.value += curr.value;
        else acc.push({ ...curr });
        return acc;
      }, [])
    : currentBatchData.allGenderData[selectedCenter] || [];

  const teacherArray = selectedCenter === 'All'
    ? Object.entries(currentBatchData.allTeachers).flatMap(([center, teachers]) => 
        teachers.map(t => ({ ...t, center })))
    : currentBatchData.allTeachers[selectedCenter]?.map(t => ({ ...t, center: selectedCenter })) || [];

  const attendanceArray = selectedCenter === 'All'
    ? Object.values(currentBatchData.attendanceData[selectedDate] || {}).flat()
    : currentBatchData.attendanceData[selectedDate]?.[selectedCenter] || [];

  const totalStudents = courseArray.reduce((acc, curr) => acc + curr.students, 0);
  const totalMales = genderArray.find(g => g.name === 'Male')?.value || 0;
  const totalFemales = genderArray.find(g => g.name === 'Female')?.value || 0;
  const totalTeachers = teacherArray.length;
  const totalPresent = attendanceArray.reduce((acc, curr) => acc + curr.present, 0);
  const totalAbsent = totalStudents - totalPresent;
  const attendanceRate = totalStudents > 0 ? Math.round((totalPresent / totalStudents) * 100) : 0;

  const enrollmentByCenter = currentBatchData.allDataCenters.map(center => ({
    ...center,
    fill: selectedCenter === 'All' || selectedCenter === center.name ? '#10b981' : '#e5e7eb'
  }));

  const performanceData = [
    { month: 'Jan', enrollment: 450, completion: 85 },
    { month: 'Feb', enrollment: 480, completion: 88 },
    { month: 'Mar', enrollment: 520, completion: 92 },
    { month: 'Apr', enrollment: 580, completion: 89 },
    { month: 'May', enrollment: 600, completion: 94 },
    { month: 'Jun', enrollment: 650, completion: 91 }
  ];

  const StatCard = ({ title, value, icon: Icon, color, subtitle, trend }: { 
    title: string; 
    value: any; 
    icon: any; 
    color: string; 
    subtitle?: string;
    trend?: string;
  }) => (
    <div className={`bg-white rounded-2xl p-6 shadow-xl border-l-4 ${color} transform hover:scale-105 transition-all duration-300 hover:shadow-2xl relative overflow-hidden`}>
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-transparent to-gray-50 rounded-full -translate-y-10 translate-x-10"></div>
      <div className="flex items-center justify-between relative z-10">
        <div>
          <p className="text-sm font-medium text-gray-600 mb-2">{title}</p>
          <p className="text-4xl font-bold text-gray-800 mb-1">{value}</p>
          {subtitle && <p className="text-xs text-gray-500">{subtitle}</p>}
          {trend && <p className="text-xs text-green-600 font-semibold mt-1">↗ {trend}</p>}
        </div>
        <div className={`p-4 rounded-2xl ${color.replace('border-l', 'bg').replace('500', '100')} backdrop-blur-sm`}>
          <Icon className={`w-8 h-8 ${color.replace('border-l', 'text')}`} />
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <div className="bg-white shadow-lg border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center justify-between w-full mb-6 sm:mb-0">
              {/* Left Logo - PITP */}
              <div className="flex-shrink-0 bg-white p-3 rounded-xl shadow-md border-2 border-blue-100 hover:shadow-lg transition-shadow">
                <img 
                  src="/lovable-uploads/3da68ccc-c51b-4193-905f-850c5f595275.png" 
                  alt="PITP Logo" 
                  className="h-20 w-auto object-contain"
                />
              </div>
              
              {/* Center Content */}
              <div className="flex-1 text-center mx-8">
                <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  PITP Student Dashboard
                </h1>
                <p className="text-gray-600 text-lg font-medium mb-2">Pakistan Institute of Technology for People</p>
                <p className="text-blue-600 font-semibold mb-2">Admin Portal</p>
                <div className="flex items-center justify-center text-sm text-gray-500">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                  Live Data • Last updated: {new Date().toLocaleTimeString()}
                </div>
              </div>
              
              {/* Right Logo - Sukkur IBA */}
              <div className="flex-shrink-0 bg-white p-3 rounded-xl shadow-md border-2 border-purple-100 hover:shadow-lg transition-shadow">
                <img 
                  src="/lovable-uploads/fac2a76c-a8a2-4be8-bd27-210e54bd25e7.png" 
                  alt="Sukkur IBA University Logo" 
                  className="h-20 w-auto object-contain"
                />
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-4 sm:mt-0">
              <div className="flex items-center gap-3 bg-gradient-to-r from-blue-50 to-blue-100 p-3 rounded-xl shadow-sm border border-blue-200">
                <label className="text-sm font-bold text-blue-700">Batch:</label>
                <select
                  value={selectedBatch}
                  onChange={(e) => setSelectedBatch(e.target.value)}
                  className="px-4 py-2 border-2 border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white font-medium shadow-sm hover:shadow-md transition-shadow"
                >
                  {batches.map(batch => (
                    <option key={batch} value={batch}>{batch}</option>
                  ))}
                </select>
              </div>
              <div className="flex items-center gap-3 bg-gradient-to-r from-green-50 to-green-100 p-3 rounded-xl shadow-sm border border-green-200">
                <label className="text-sm font-bold text-green-700">Center:</label>
                <select
                  value={selectedCenter}
                  onChange={(e) => setSelectedCenter(e.target.value)}
                  className="px-4 py-2 border-2 border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-white font-medium shadow-sm hover:shadow-md transition-shadow"
                >
                  <option value="All">All Centers</option>
                  {Object.keys(currentBatchData.allDataCourses).map(center => (
                    <option key={center} value={center}>{center}</option>
                  ))}
                </select>
              </div>
              <div className="flex items-center gap-3 bg-gradient-to-r from-purple-50 to-purple-100 p-3 rounded-xl shadow-sm border border-purple-200">
                <label className="text-sm font-bold text-purple-700">Date:</label>
                <input 
                  type="date" 
                  value={selectedDate} 
                  onChange={(e) => setSelectedDate(e.target.value)} 
                  className="px-4 py-2 border-2 border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white font-medium shadow-sm hover:shadow-md transition-shadow"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Enhanced Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6 mb-8">
          <StatCard
            title="Total Students"
            value={totalStudents.toLocaleString()}
            icon={Users}
            color="border-l-blue-500"
            subtitle={`Active in ${selectedBatch}`}
            trend="+12% from last month"
          />
          <StatCard
            title="Male Students"
            value={totalMales.toLocaleString()}
            icon={Users}
            color="border-l-blue-600"
            subtitle={`${Math.round((totalMales/totalStudents)*100)}% of total`}
          />
          <StatCard
            title="Female Students"
            value={totalFemales.toLocaleString()}
            icon={Users}
            color="border-l-pink-500"
            subtitle={`${Math.round((totalFemales/totalStudents)*100)}% of total`}
          />
          <StatCard
            title="Active Courses"
            value={courseArray.length}
            icon={BookOpen}
            color="border-l-green-500"
            subtitle="Across all centers"
            trend="+2 new courses"
          />
          <StatCard
            title="Instructors"
            value={totalTeachers}
            icon={GraduationCap}
            color="border-l-purple-500"
            subtitle="Expert faculty"
          />
        </div>

        {/* Attendance Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="Present Today"
            value={totalPresent}
            icon={UserCheck}
            color="border-l-green-500"
            subtitle={`${attendanceRate}% attendance rate`}
          />
          <StatCard
            title="Absent Today"
            value={totalAbsent}
            icon={UserX}
            color="border-l-red-500"
            subtitle={`${Math.round((totalAbsent/totalStudents)*100)}% of students`}
          />
          <StatCard
            title="Completion Rate"
            value="94%"
            icon={Award}
            color="border-l-yellow-500"
            subtitle="Course completion"
            trend="+3% this month"
          />
          <StatCard
            title="Avg. Performance"
            value="8.7/10"
            icon={TrendingUp}
            color="border-l-indigo-500"
            subtitle="Student rating"
            trend="+0.5 improved"
          />
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {/* Enrollment by Center */}
          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-gray-800">Enrollment by Center</h3>
              <div className="p-2 bg-green-100 rounded-lg">
                <Target className="w-5 h-5 text-green-600" />
              </div>
            </div>
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={enrollmentByCenter}>
                <XAxis dataKey="name" stroke="#6b7280" fontSize={12} />
                <YAxis stroke="#6b7280" fontSize={12} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#f9fafb', 
                    border: '1px solid #e5e7eb',
                    borderRadius: '12px',
                    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
                  }}
                />
                <Bar dataKey="students" fill="#10b981" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Enrollment by Course */}
          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-gray-800">
                Courses ({selectedCenter})
              </h3>
              <div className="p-2 bg-blue-100 rounded-lg">
                <BookOpen className="w-5 h-5 text-blue-600" />
              </div>
            </div>
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={courseArray}>
                <XAxis dataKey="name" stroke="#6b7280" fontSize={12} />
                <YAxis stroke="#6b7280" fontSize={12} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#f9fafb', 
                    border: '1px solid #e5e7eb',
                    borderRadius: '12px',
                    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
                  }}
                />
                <Bar dataKey="students" fill="#3b82f6" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Gender Distribution */}
          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-gray-800">
                Gender Distribution
              </h3>
              <div className="p-2 bg-pink-100 rounded-lg">
                <Users className="w-5 h-5 text-pink-600" />
              </div>
            </div>
            <ResponsiveContainer width="100%" height={280}>
              <PieChart>
                <Pie
                  data={genderArray}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({name, value, percent}) => `${name}: ${value} (${(percent * 100).toFixed(0)}%)`}
                >
                  {genderArray.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={GENDER_COLORS[index % GENDER_COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Performance Trend */}
          <div className="bg-white p-8 rounded-2xl shadow-xl lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-gray-800">Enrollment & Completion Trends</h3>
              <div className="p-2 bg-indigo-100 rounded-lg">
                <TrendingUp className="w-5 h-5 text-indigo-600" />
              </div>
            </div>
            <ResponsiveContainer width="100%" height={280}>
              <AreaChart data={performanceData}>
                <XAxis dataKey="month" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#f9fafb', 
                    border: '1px solid #e5e7eb',
                    borderRadius: '12px',
                    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
                  }}
                />
                <Area type="monotone" dataKey="enrollment" stackId="1" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.3} />
                <Area type="monotone" dataKey="completion" stackId="2" stroke="#10b981" fill="#10b981" fillOpacity={0.3} />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Teachers List */}
          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-gray-800">
                Faculty ({selectedCenter})
              </h3>
              <div className="p-2 bg-purple-100 rounded-lg">
                <GraduationCap className="w-5 h-5 text-purple-600" />
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Name</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Subject</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Center</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {teacherArray.map((teacher, index) => (
                    <tr key={index} className="hover:bg-gray-50 transition-colors">
                      <td className="px-4 py-3 text-sm font-medium text-gray-900">{teacher.name}</td>
                      <td className="px-4 py-3 text-sm text-gray-600">{teacher.subject}</td>
                      <td className="px-4 py-3 text-sm text-gray-600">{teacher.center}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Attendance by Course */}
          <div className="bg-white p-8 rounded-2xl shadow-xl lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-gray-800">
                Daily Attendance ({selectedDate})
              </h3>
              <div className="p-2 bg-orange-100 rounded-lg">
                <Clock className="w-5 h-5 text-orange-600" />
              </div>
            </div>
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={attendanceArray}>
                <XAxis dataKey="course" stroke="#6b7280" fontSize={12} />
                <YAxis stroke="#6b7280" fontSize={12} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#f9fafb', 
                    border: '1px solid #e5e7eb',
                    borderRadius: '12px',
                    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
                  }}
                />
                <Bar dataKey="present" fill="#f59e0b" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Footer Stats */}
        <div className="mt-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 text-white">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">{totalStudents.toLocaleString()}</div>
              <div className="text-blue-100">Total Enrolled</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">5</div>
              <div className="text-blue-100">Training Centers</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">{attendanceRate}%</div>
              <div className="text-blue-100">Attendance Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">94%</div>
              <div className="text-blue-100">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
