
import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { Users, GraduationCap, BookOpen, Calendar, UserCheck, UserX } from 'lucide-react';

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

  const enrollmentByCenter = currentBatchData.allDataCenters.map(center => ({
    ...center,
    fill: selectedCenter === 'All' || selectedCenter === center.name ? '#10b981' : '#e5e7eb'
  }));

  const StatCard = ({ title, value, icon: Icon, color, subtitle }) => (
    <div className={`bg-white rounded-xl p-6 shadow-lg border-l-4 ${color} transform hover:scale-105 transition-all duration-300`}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600 mb-1">{title}</p>
          <p className="text-3xl font-bold text-gray-800">{value}</p>
          {subtitle && <p className="text-xs text-gray-500 mt-1">{subtitle}</p>}
        </div>
        <div className={`p-3 rounded-full ${color.replace('border-l', 'bg').replace('500', '100')}`}>
          <Icon className={`w-6 h-6 ${color.replace('border-l', 'text')}`} />
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">PITP Student Dashboard</h1>
              <p className="text-gray-600 mt-1">Pakistan Institute of Technology for People</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mt-4 sm:mt-0">
              <div className="flex items-center gap-2">
                <label className="text-sm font-medium text-gray-700">Batch:</label>
                <select
                  value={selectedBatch}
                  onChange={(e) => setSelectedBatch(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                >
                  {batches.map(batch => (
                    <option key={batch} value={batch}>{batch}</option>
                  ))}
                </select>
              </div>
              <div className="flex items-center gap-2">
                <label className="text-sm font-medium text-gray-700">Center:</label>
                <select
                  value={selectedCenter}
                  onChange={(e) => setSelectedCenter(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                >
                  <option value="All">All Centers</option>
                  {Object.keys(currentBatchData.allDataCourses).map(center => (
                    <option key={center} value={center}>{center}</option>
                  ))}
                </select>
              </div>
              <div className="flex items-center gap-2">
                <label className="text-sm font-medium text-gray-700">Date:</label>
                <input 
                  type="date" 
                  value={selectedDate} 
                  onChange={(e) => setSelectedDate(e.target.value)} 
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 mb-8">
          <StatCard
            title="Total Students"
            value={totalStudents}
            icon={Users}
            color="border-l-blue-500"
          />
          <StatCard
            title="Male Students"
            value={totalMales}
            icon={Users}
            color="border-l-blue-600"
          />
          <StatCard
            title="Female Students"
            value={totalFemales}
            icon={Users}
            color="border-l-pink-500"
          />
          <StatCard
            title="Total Courses"
            value={courseArray.length}
            icon={BookOpen}
            color="border-l-green-500"
          />
          <StatCard
            title="Total Teachers"
            value={totalTeachers}
            icon={GraduationCap}
            color="border-l-purple-500"
          />
          <StatCard
            title="Attendance"
            value={`${totalPresent}/${totalStudents}`}
            icon={Calendar}
            color="border-l-orange-500"
            subtitle={`Present: ${totalPresent} | Absent: ${totalAbsent}`}
          />
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {/* Enrollment by Center */}
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Enrollment by Center</h3>
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={enrollmentByCenter}>
                <XAxis dataKey="name" stroke="#6b7280" fontSize={12} />
                <YAxis stroke="#6b7280" fontSize={12} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#f9fafb', 
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px'
                  }}
                />
                <Bar dataKey="students" fill="#10b981" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Enrollment by Course */}
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Enrollment by Course ({selectedCenter})
            </h3>
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={courseArray}>
                <XAxis dataKey="name" stroke="#6b7280" fontSize={12} />
                <YAxis stroke="#6b7280" fontSize={12} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#f9fafb', 
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px'
                  }}
                />
                <Bar dataKey="students" fill="#3b82f6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Gender Distribution */}
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Gender Distribution ({selectedCenter})
            </h3>
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

          {/* Teachers List */}
          <div className="bg-white p-6 rounded-xl shadow-lg lg:col-span-2">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Teachers List ({selectedCenter})
            </h3>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Subject
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Center
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {teacherArray.map((teacher, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {teacher.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {teacher.subject}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {teacher.center}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Attendance by Course */}
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Attendance by Course ({selectedDate})
            </h3>
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={attendanceArray}>
                <XAxis dataKey="course" stroke="#6b7280" fontSize={12} />
                <YAxis stroke="#6b7280" fontSize={12} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#f9fafb', 
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px'
                  }}
                />
                <Bar dataKey="present" fill="#f59e0b" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
