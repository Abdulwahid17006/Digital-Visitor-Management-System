// --- SIMULATED DATABASE OF VISITORS ---

// --- SIMULATED DATABASE OF 50 VISITORS ---
// This acts as our backend data source for the prototype.

const allVisitors = [
  // The first 15 are detailed for variety
  { id: 1734567890123, name: 'Rohan Sharma', gender: 'Male', dob: '12-May-1990', address: 'Kothrud, Pune', phone: '9876543210', department: 'cyber', applicationType: 'Online Fraud Report', submissionDate: '2025-09-24', submissionTime: '11:15 AM', applicationForm: 'form_rohan_sharma.pdf', status: 'Completed', remarks: 'Case closed. Final report filed with cyber crime division.' },
  { id: 1734567890124, name: 'Priya Patel', gender: 'Female', dob: '22-Jul-1988', address: 'Wakad, Pune', phone: '9876543211', department: 'women', applicationType: 'Harassment Complaint', submissionDate: '2025-09-25', submissionTime: '02:40 PM', applicationForm: 'form_priya_patel.pdf', status: 'In Progress', remarks: 'Statement recorded. Awaiting evidence submission from the complainant.' },
  { id: 1734567890125, name: 'Amit Singh', gender: 'Male', dob: '05-Jan-1995', address: 'Hinjewadi, Pune', phone: '9876543212', department: 'dsb', applicationType: 'Passport Enquiry', submissionDate: '2025-09-23', submissionTime: '10:05 AM', applicationForm: 'form_amit_singh.pdf', status: 'Pending Review', remarks: 'Application forwarded to local station for address verification.' },
  { id: 1734567890126, name: 'Sneha Reddy', gender: 'Female', dob: '18-Nov-1992', address: 'Aundh, Pune', phone: '9876543213', department: 'eow', applicationType: 'Financial Fraud Complaint', submissionDate: '2025-09-22', submissionTime: '04:10 PM', applicationForm: 'form_sneha_reddy.pdf', status: 'Action Required', remarks: 'Please submit bank statements for the last 6 months to proceed.' },
  { id: 1734567890127, name: 'Vikram Rathod', gender: 'Male', dob: '30-Mar-1985', address: 'Baner, Pune', phone: '9876543214', department: 'lcb', applicationType: 'Information Submission', submissionDate: '2025-09-25', submissionTime: '12:30 PM', applicationForm: 'form_vikram_rathod.pdf', status: 'Pending Review', remarks: 'Information received. Verifying credibility with sources.' },
  { id: 1734567890128, name: 'Anjali Mehta', gender: 'Female', dob: '10-Feb-1991', address: 'Koregaon Park, Pune', phone: '9876543215', department: 'cyber', applicationType: 'Social Media Harassment', submissionDate: '2025-09-24', submissionTime: '03:00 PM', applicationForm: 'form_anjali_mehta.pdf', status: 'In Progress', remarks: 'Contacted the social media platform for user data. Awaiting response.' },
  { id: 1734567890129, name: 'Sandeep Desai', gender: 'Male', dob: '25-Aug-1980', address: 'Pimpri, Pune', phone: '9876543216', department: 'accounts', applicationType: 'Bill Submission', submissionDate: '2025-09-23', submissionTime: '11:45 AM', applicationForm: 'form_sandeep_desai.pdf', status: 'Completed', remarks: 'Payment processed via treasury.' },
  { id: 1734567890130, name: 'Kavita Joshi', gender: 'Female', dob: '03-Jun-1998', address: 'Viman Nagar, Pune', phone: '9876543217', department: 'dsb', applicationType: 'Character Verification', submissionDate: '2025-09-22', submissionTime: '09:30 AM', applicationForm: 'form_kavita_joshi.pdf', status: 'Rejected', remarks: 'Applicant has a pending criminal case. Verification cannot be provided.' },
  { id: 1734567890131, name: 'Manish Gupta', gender: 'Male', dob: '14-Sep-1987', address: 'Hadapsar, Pune', phone: '9876543218', department: 'eow', applicationType: 'Cheating Case Application', submissionDate: '2025-09-21', submissionTime: '01:50 PM', applicationForm: 'form_manish_gupta.pdf', status: 'In Progress', remarks: 'Investigating officer (IO) has been assigned to the case.' },
  { id: 1734567890132, name: 'Pooja Kumar', gender: 'Female', dob: '28-Apr-1993', address: 'Swargate, Pune', phone: '9876543219', department: 'women', applicationType: 'Domestic Violence Report', submissionDate: '2025-09-20', submissionTime: '12:10 PM', applicationForm: 'form_pooja_kumar.pdf', status: 'Completed', remarks: 'FIR filed. Accused has been apprehended.' },
  { id: 1734567890133, name: 'Rajesh Nair', gender: 'Male', dob: '19-Oct-1979', address: 'Deccan, Pune', phone: '9876543220', department: 'lcb', applicationType: 'Case Follow-up', submissionDate: '2025-09-19', submissionTime: '03:25 PM', applicationForm: 'form_rajesh_nair.pdf', status: 'Action Required', remarks: 'Witness statement required. Please visit the station on the provided date.' },
  { id: 1734567890134, name: 'Sunita Patil', gender: 'Female', dob: '07-Dec-1982', address: 'Katraj, Pune', phone: '9876543221', department: 'establishment', applicationType: 'Recruitment Enquiry', submissionDate: '2025-09-18', submissionTime: '10:40 AM', applicationForm: 'form_sunita_patil.pdf', status: 'Completed', remarks: 'Information on upcoming recruitment drives provided.' },
  { id: 1734567890135, name: 'Arun Verma', gender: 'Male', dob: '11-Mar-2000', address: 'Bhosari, Pune', phone: '9876543222', department: 'wireless', applicationType: 'License Application', submissionDate: '2025-09-17', submissionTime: '04:55 PM', applicationForm: 'form_arun_verma.pdf', status: 'Pending Review', remarks: 'Application is under review by the technical team.' },
  { id: 1734567890136, name: 'Divya Iyer', gender: 'Female', dob: '21-Jun-1996', address: 'Magarpatta, Pune', phone: '9876543223', department: 'cyber', applicationType: 'Data Theft Complaint', submissionDate: '2025-09-16', submissionTime: '02:00 PM', applicationForm: 'form_divya_iyer.pdf', status: 'Rejected', remarks: 'Insufficient evidence to proceed with the complaint.' },
  { id: 1734567890137, name: 'Nitin Pawar', gender: 'Male', dob: '01-Aug-1975', address: 'Shivajinagar, Pune', phone: '9876543224', department: 'accounts', applicationType: 'Payment Enquiry', submissionDate: '2025-09-15', submissionTime: '12:05 PM', applicationForm: 'form_nitin_pawar.pdf', status: 'Completed', remarks: 'Queried payment has been cleared.' },

  // Auto-generating the rest to reach 50
  ...Array.from({ length: 35 }, (_, i) => {
    const departments = ['dsb', 'eow', 'accounts', 'establishment', 'wireless', 'cyber', 'women', 'lcb'];
    const statuses = ['Pending Review', 'In Progress', 'Action Required', 'Completed', 'Rejected'];
    const names = ['Mahesh', 'Suresh', 'Rita', 'Gita', 'Zoya', 'Imran', 'Farhan', 'Chris'];
    const surnames = ['Jadhav', 'Khan', 'Fernandes', 'Chavan', 'More', 'Gaikwad'];
    const name = `${names[i % names.length]} ${surnames[i % surnames.length]}`;
    const hour = 9 + (i % 9); // 9 AM to 5 PM
    const minute = i % 60;
    
    return {
      id: 1734567890138 + i,
      name: name,
      gender: i % 2 === 0 ? 'Male' : 'Female',
      dob: `${15 - (i % 10)}-Jan-${1980 + (i % 20)}`,
      address: `Area ${i+1}, Pune`,
      phone: `98765000${i < 10 ? '0' : ''}${i}`,
      department: departments[i % departments.length],
      applicationType: 'General Enquiry',
      submissionDate: `2025-09-${15 - (i % 15)}`,
      submissionTime: `${hour > 12 ? hour - 12 : hour}:${minute < 10 ? '0' : ''}${minute} ${hour >= 12 ? 'PM' : 'AM'}`,
      applicationForm: `form_${name.toLowerCase().replace(' ', '_')}.pdf`,
      status: statuses[i % statuses.length],
      remarks: 'Standard procedure is being followed.'
    };
  })
];

