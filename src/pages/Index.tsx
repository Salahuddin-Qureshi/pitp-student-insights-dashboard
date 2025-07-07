import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, PieChart, Pie, Cell, ResponsiveContainer, LineChart, Line, AreaChart, Area } from 'recharts';
import { Users, GraduationCap, BookOpen, Calendar, UserCheck, UserX, TrendingUp, Award, Clock, Target, Search, Filter, Download } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const batchData = {
  'Batch 1': {
    startDate: '2024-01-15',
    endDate: '2024-06-15',
    duration: '5 months',
    allDataCenters: [
      { name: 'Sukkur', students: 35 },
      { name: 'Khairpur', students: 32 },
      { name: 'Larkana', students: 30 },
      { name: 'Nawabshah', students: 28 }
    ],
    students: [
      { id: 1, name: 'Ahmed Ali', city: 'Sukkur', course: 'Web Dev', email: 'ahmed.ali@email.com', contact: '+92-300-1234567' },
      { id: 2, name: 'Fatima Khan', city: 'Sukkur', course: 'Graphic Design', email: 'fatima.khan@email.com', contact: '+92-301-2345678' },
      { id: 3, name: 'Hassan Sheikh', city: 'Khairpur', course: 'Web Dev', email: 'hassan.sheikh@email.com', contact: '+92-302-3456789' },
      { id: 4, name: 'Ayesha Malik', city: 'Khairpur', course: 'Graphic Design', email: 'ayesha.malik@email.com', contact: '+92-303-4567890' },
      { id: 5, name: 'Usman Raza', city: 'Larkana', course: 'Web Dev', email: 'usman.raza@email.com', contact: '+92-304-5678901' },
      { id: 6, name: 'Zara Ahmed', city: 'Larkana', course: 'Graphic Design', email: 'zara.ahmed@email.com', contact: '+92-305-6789012' },
      { id: 7, name: 'Bilal Hussain', city: 'Nawabshah', course: 'Web Dev', email: 'bilal.hussain@email.com', contact: '+92-306-7890123' },
      { id: 8, name: 'Sadia Noor', city: 'Nawabshah', course: 'Graphic Design', email: 'sadia.noor@email.com', contact: '+92-307-8901234' }
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
    startDate: '2024-07-01',
    endDate: '2024-12-01',
    duration: '5 months',
    allDataCenters: [
      { name: 'Sukkur', students: 45 },
      { name: 'Khairpur', students: 40 },
      { name: 'Larkana', students: 38 },
      { name: 'Nawabshah', students: 33 }
    ],
    students: [
      { id: 1, name: 'Muhammad Tariq', city: 'Sukkur', course: 'AI', email: 'muhammad.tariq@email.com', contact: '+92-310-1234567' },
      { id: 2, name: 'Kiran Batool', city: 'Sukkur', course: 'Web Dev', email: 'kiran.batool@email.com', contact: '+92-311-2345678' },
      { id: 3, name: 'Shoaib Ahmad', city: 'Khairpur', course: 'AI', email: 'shoaib.ahmad@email.com', contact: '+92-312-3456789' },
      { id: 4, name: 'Rubina Shah', city: 'Khairpur', course: 'Web Dev', email: 'rubina.shah@email.com', contact: '+92-313-4567890' },
      { id: 5, name: 'Waseem Abbas', city: 'Larkana', course: 'AI', email: 'waseem.abbas@email.com', contact: '+92-314-5678901' },
      { id: 6, name: 'Nadia Khatoon', city: 'Larkana', course: 'Web Dev', email: 'nadia.khatoon@email.com', contact: '+92-315-6789012' },
      { id: 7, name: 'Kashif Brohi', city: 'Nawabshah', course: 'AI', email: 'kashif.brohi@email.com', contact: '+92-316-7890123' },
      { id: 8, name: 'Shaista Parveen', city: 'Nawabshah', course: 'Web Dev', email: 'shaista.parveen@email.com', contact: '+92-317-8901234' }
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
    startDate: '2025-01-01',
    endDate: '2025-06-30',
    duration: '6 months',
    allDataCenters: [
      { name: 'Sukkur', students: 120 },
      { name: 'Khairpur', students: 120 },
      { name: 'Kandhkot', students: 120 },
      { name: 'Larkana', students: 120 },
      { name: 'Nawabshah', students: 120 },
    ],
    students: [
      { id: 1, name: 'Ali Hassan', city: 'Sukkur', course: 'Web Development', email: 'ali.hassan@email.com', contact: '+92-320-1234567' },
      { id: 2, name: 'Sara Ahmed', city: 'Sukkur', course: 'Python Programming', email: 'sara.ahmed@email.com', contact: '+92-321-2345678' },
      { id: 3, name: 'Imran Shah', city: 'Sukkur', course: 'Graphic Design', email: 'imran.shah@email.com', contact: '+92-322-3456789' },
      { id: 4, name: 'Zainab Malik', city: 'Khairpur', course: 'Artificial Intelligence', email: 'zainab.malik@email.com', contact: '+92-323-4567890' },
      { id: 5, name: 'Fahad Brohi', city: 'Khairpur', course: 'Python Programming', email: 'fahad.brohi@email.com', contact: '+92-324-5678901' },
      { id: 6, name: 'Hina Noor', city: 'Khairpur', course: 'Amazon FBA', email: 'hina.noor@email.com', contact: '+92-325-6789012' },
      { id: 7, name: 'Asim Raza', city: 'Kandhkot', course: 'Web Development', email: 'asim.raza@email.com', contact: '+92-326-7890123' },
      { id: 8, name: 'Mariam Khan', city: 'Kandhkot', course: 'Artificial Intelligence', email: 'mariam.khan@email.com', contact: '+92-327-8901234' },
      { id: 9, name: 'Bilal Sheikh', city: 'Larkana', course: 'Python Programming', email: 'bilal.sheikh@email.com', contact: '+92-328-9012345' },
      { id: 10, name: 'Sana Khatoon', city: 'Larkana', course: 'Graphic Design', email: 'sana.khatoon@email.com', contact: '+92-329-0123456' },
      { id: 11, name: 'Omar Siddiqui', city: 'Nawabshah', course: 'Amazon FBA', email: 'omar.siddiqui@email.com', contact: '+92-330-1234567' },
      { id: 12, name: 'Rabia Parveen', city: 'Nawabshah', course: 'Web Development', email: 'rabia.parveen@email.com', contact: '+92-331-2345678' }
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
  const [searchTerm, setSearchTerm] = useState('');

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

  const filteredStudents = currentBatchData.students?.filter(student =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.course.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.contact.includes(searchTerm)
  ) || [];

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
            <div className="flex items-center justify-center w-full mb-6 sm:mb-0">
              <div className="text-center">
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
        {/* Compact Batch Information Section */}
        <div className="mb-8">
          <Card className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white shadow-2xl">
            <CardHeader className="pb-3">
              <CardTitle className="text-xl font-bold flex items-center gap-3">
                <Calendar className="w-6 h-6" />
                Batch Information
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Current Batch Info */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3">
                  <div className="text-xs opacity-90 mb-1">{selectedBatch}</div>
                  <div className="text-sm font-bold">{new Date(currentBatchData.startDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })} - {new Date(currentBatchData.endDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</div>
                  <div className="text-xs opacity-75">{currentBatchData.duration}</div>
                </div>
                
                {/* Other Batches */}
                {batches.filter(batch => batch !== selectedBatch).map(batch => (
                  <div key={batch} className="bg-white/10 backdrop-blur-sm rounded-xl p-3">
                    <div className="text-xs opacity-90 mb-1">{batch}</div>
                    <div className="text-sm font-bold">{new Date(batchData[batch].startDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })} - {new Date(batchData[batch].endDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</div>
                    <div className="text-xs opacity-75">{batchData[batch].duration}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

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
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-8">
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
        </div>

        {/* Student and Teacher Information in One Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Student List Section */}
          <div>
            <Card className="shadow-2xl border-0 bg-white/80 backdrop-blur-sm h-full">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-t-lg">
                <CardTitle className="text-xl font-bold flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Users className="w-6 h-6" />
                    Students ({selectedBatch})
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/70 w-4 h-4" />
                      <Input
                        placeholder="Search students..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10 bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:bg-white/30"
                      />
                    </div>
                    <button className="bg-white/20 hover:bg-white/30 p-2 rounded-lg transition-colors">
                      <Download className="w-4 h-4" />
                    </button>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <ScrollArea className="h-96">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-gray-50 hover:bg-gray-50">
                        <TableHead className="font-bold text-gray-700 text-xs">Name</TableHead>
                        <TableHead className="font-bold text-gray-700 text-xs">City</TableHead>
                        <TableHead className="font-bold text-gray-700 text-xs">Course</TableHead>
                        <TableHead className="font-bold text-gray-700 text-xs">Contact</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredStudents.map((student) => (
                        <TableRow key={student.id} className="hover:bg-blue-50/50 transition-colors border-b border-gray-100">
                          <TableCell className="font-semibold text-gray-800 text-sm">{student.name}</TableCell>
                          <TableCell>
                            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                              {student.city}
                            </span>
                          </TableCell>
                          <TableCell>
                            <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                              {student.course}
                            </span>
                          </TableCell>
                          <TableCell className="text-gray-600 text-xs">{student.contact}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </ScrollArea>
              </CardContent>
            </Card>
          </div>

          {/* Teachers List */}
          <div>
            <Card className="shadow-2xl border-0 bg-white/80 backdrop-blur-sm h-full">
              <CardHeader className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-t-lg">
                <CardTitle className="text-xl font-bold flex items-center gap-3">
                  <GraduationCap className="w-6 h-6" />
                  Faculty ({selectedCenter})
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
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
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Remaining Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Performance Trend */}
          <div className="bg-white p-8 rounded-2xl shadow-xl">
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

          {/* Attendance by Course */}
          <div className="bg-white p-8 rounded-2xl shadow-xl">
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
      </div>
    </div>
  );
};

export default Dashboard;
