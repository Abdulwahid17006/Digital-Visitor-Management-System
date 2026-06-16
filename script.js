// --- TRANSLATION DICTIONARY (WITH CORRECTIONS) ---
const translations = {
  // Page Titles
  'vms_title': { en: 'Visitor Management System - SP Office, Sangli', mr: 'अभ्यागत व्यवस्थापन प्रणाली - पोलीस अधीक्षक कार्यालय, सांगली' },
  'admin_dashboard_title': { en: 'Admin Dashboard - VMS', mr: 'प्रशासक डॅशबोर्ड - VMS' },
  // Header
  'sp_office_title': { en: 'Office of the Superintendent of Police, Sangli', mr: 'पोलीस अधीक्षक कार्यालय, सांगली' },
  'vms_subtitle': { en: 'Digital Visitor Management System', mr: 'डिजिटल अभ्यागत व्यवस्थापन प्रणाली' },
  // Role Selection
  'welcome_message': { en: 'Welcome! Please select an option:', mr: 'स्वागत आहे! कृपया एक पर्याय निवडा:' },
  'admin_portal': { en: 'Admin Portal', mr: 'प्रशासक पोर्टल' },
  'admin_portal_desc': { en: 'Access the management dashboard.', mr: 'व्यवस्थापन डॅशबोर्डमध्ये प्रवेश करा.' },
  'new_visitor': { en: 'New Visitor', mr: 'नवीन अभ्यागत' },
  'new_visitor_desc': { en: 'Register a new application or visit.', mr: 'नवीन अर्ज किंवा भेटीची नोंदणी करा.' },
  'track_application': { en: 'Track Application', mr: 'अर्जाचा मागोवा घ्या' },
  'track_application_desc': { en: 'Check the status of your submission.', mr: 'तुमच्या अर्जाची स्थिती तपासा.' },
  'how_to_use': { en: 'How to Use This Page', mr: 'हे पृष्ठ कसे वापरावे' },
  // Forms & Buttons
  'admin_login': { en: 'Admin Login', mr: 'प्रशासक लॉगिन' },
  'username': { en: 'Username', mr: 'युझरनेम' },
  'password': { en: 'Password', mr: 'पासवर्ड' },
  'login': { en: 'Login', mr: 'लॉगिन' },
  'back': { en: 'Back', mr: 'मागे' },
  'update': { en: 'Update', mr: 'अद्यतनित करा' },
  'new_visitor_reg': { en: 'New Visitor Registration', mr: 'नवीन अभ्यागत नोंदणी' },
  'step1': { en: 'Step 1: Identity Verification', mr: 'पायरी १: ओळख पडताळणी' },
  'select_id_type': { en: 'Select ID Type:', mr: 'ओळखपत्राचा प्रकार निवडा:' },
  'aadhaar': { en: 'Aadhaar', mr: 'आधार' },
  'pan_card': { en: 'PAN Card', mr: 'पॅन कार्ड' },
  'passport': { en: 'Passport', mr: 'पारपत्र' },
  'enter_id': { en: 'Enter ID Number', mr: 'ओळखपत्र क्रमांक टाका' },
  'verify_fetch': { en: 'Verify & Fetch Details', mr: 'पडताळणी करा आणि तपशील मिळवा' },
  'step2': { en: 'Step 2: Your Details & Purpose of Visit', mr: 'पायरी २: तुमचा तपशील आणि भेटीचा उद्देश' },
  'full_name': { en: 'Full Name', mr: 'पूर्ण नाव' },
  'gender': { en: 'Gender', mr: 'लिंग' },
  'dob': { en: 'Date of Birth', mr: 'जन्मतारीख' },
  'address': { en: 'Address', mr: 'पत्ता' },
  'contact_number': { en: 'Contact Number', mr: 'संपर्क क्रमांक' },
  'select_branch': { en: 'Select Branch', mr: 'शाखा निवडा' },
  'please_select': { en: '-- Please Select --', mr: '-- कृपया निवडा --' },
  'application_type': { en: 'Application Type', mr: 'अर्जाचा प्रकार' },
  'select_branch_first': { en: '-- Select a branch first --', mr: '-- प्रथम शाखा निवडा --' },
  'upload_form': { en: 'Upload Application Form (PDF, JPG)', mr: 'अर्ज अपलोड करा (PDF, JPG)' },
  'submit_application': { en: 'Submit Application', mr: 'अर्ज सादर करा' },
  'track_status_title': { en: 'Track Application Status', mr: 'अर्जाची स्थिती तपासा' },
  'enter_unique_id': { en: 'Enter Your Unique ID', mr: 'तुमचा युनिक आयडी टाका' },
  'check_status': { en: 'Check Status', mr: 'स्थिती तपासा' },
  // Admin Dashboard
  'admin_panel': { en: 'Admin Panel', mr: 'प्रशासक पॅनेल' },
  'search_placeholder': { en: 'Search by name or ID...', mr: 'नाव किंवा आयडीनुसार शोधा...' },
  'help': { en: 'Help', mr: 'मदत' },
  'logout': { en: 'Logout', mr: 'लॉगआउट' },
  'traffic_patterns': { en: 'Visitor Traffic Patterns (Last 7 Days)', mr: 'अभ्यागत रहदारीचे नमुने (मागील ७ दिवस)' },
  'all_visitors': { en: 'All Visitor Details', mr: 'सर्व अभ्यागत तपशील' },
  'dept_dsb': { en: 'District Special Branch', mr: 'जिल्हा विशेष शाखा' },
  'dept_eow': { en: 'Economic Offences Wing', mr: 'आर्थिक गुन्हे शाखा' },
  'dept_accounts': { en: 'Accounts Branch', mr: 'लेखा शाखा' },
  'dept_establishment': { en: 'Establishment Branch', mr: 'आस्थापना शाखा' },
  'dept_wireless': { en: 'State Police Wireless', mr: 'राज्य पोलीस वायरलेस' },
  'dept_cyber': { en: 'Cyber Police Station', mr: 'सायबर पोलीस स्टेशन' },
  'dept_women': { en: 'Women Safety Branch', mr: 'महिला सुरक्षा शाखा' },
  'dept_lcb': { en: 'Local Crime Branch', mr: 'स्थानिक गुन्हे शाखा' },
  'col_id': { en: 'Unique ID', mr: 'युनिक आयडी' },
  'col_name': { en: 'Name', mr: 'नाव' },
  'col_dept': { en: 'Department', mr: 'विभाग' },
  'col_date': { en: 'Submission Date', mr: 'सादर करण्याची तारीख' },
  'col_status': { en: 'Status', mr: 'स्थिती' },
  'col_actions': { en: 'Actions', mr: 'क्रिया' },
  // Statuses (FIXED: Added translations for statuses)
  'status_pending_review': { en: 'Pending Review', mr: 'पुनरावलोकनासाठी प्रलंबित' },
  'status_in_progress': { en: 'In Progress', mr: 'प्रगतीपथावर' },
  'status_action_required': { en: 'Action Required', mr: 'कृती आवश्यक' },
  'status_completed': { en: 'Completed', mr: 'पूर्ण झाले' },
  'status_rejected': { en: 'Rejected', mr: 'नाकारले' },
  'update_status_for': { en: 'Update Status for', mr: 'साठी स्थिती अद्यतनित करा' },
  'new_status': { en: 'New Status', mr: 'नवीन स्थिती' },
  'add_remarks': { en: 'Add Remarks', mr: 'शेरा जोडा' },
  'save_changes': { en: 'Save Changes', mr: 'बदल जतन करा' },
  // Help Modals
  'how_to_use_admin': { en: 'How to Use the Admin Dashboard', mr: 'प्रशासक डॅशबोर्ड कसा वापरावा' },
  'help_new_visitor_desc': { en: 'Register a new application. Start by verifying your ID (Aadhaar, PAN, etc.) to auto-fill your details. After submission, you will receive a Unique ID.', mr: 'नवीन अर्ज नोंदणी करा. तुमची माहिती आपोआप भरण्यासाठी तुमच्या आयडी (आधार, पॅन, इ.) द्वारे पडताळणी करून सुरुवात करा. अर्ज सादर केल्यानंतर, तुम्हाला एक युनिक आयडी मिळेल.' },
  'help_track_desc': { en: 'Use the Unique ID you received during registration to check the current status of your application.', mr: 'नोंदणी दरम्यान मिळालेला युनिक आयडी वापरून तुमच्या अर्जाची सद्यस्थिती तपासा.' },
  'help_admin_desc': { en: 'For authorized personnel to log in and manage all visitor records and application statuses.', mr: 'अधिकृत कर्मचाऱ्यांसाठी सर्व अभ्यागत रेकॉर्ड आणि अर्जांच्या स्थितीचे व्यवस्थापन करण्यासाठी लॉगिन करा.' },
  // Footer
  'about_project': { en: 'About This Project', mr: 'या प्रकल्पाबद्दल' },
  'project_desc': { en: 'A Digital Visitor Management System prototype designed to enhance efficiency and security.', mr: 'कार्यक्षमता आणि सुरक्षितता वाढविण्यासाठी डिझाइन केलेली एक डिजिटल अभ्यागत व्यवस्थापन प्रणाली.' },
  'made_by': { en: 'Made with ❤️ by <strong>Team VISTAL</strong><br><em>Students of Rajarambapu Institute of Technology</em>', mr: '<strong>टीम VISTAL</strong> यांनी ❤️ ने बनवले आहे<br><em>राजारामबापू इन्स्टिट्यूट ऑफ टेक्नॉलॉजीचे विद्यार्थी</em>' },
  'quick_links': { en: 'Quick Links', mr: 'द्रुत दुवे' },
  'home': { en: 'Home', mr: 'मुख्यपृष्ठ' },
  'privacy_policy': { en: 'Privacy Policy', mr: 'गोपनीयता धोरण' },
  'terms_of_service': { en: 'Terms of Service', mr: 'सेवा अटी' },
  'official_website': { en: 'Official MahaPolice Website', mr: 'अधिकृत महापोलीस वेबसाइट' },
  'help_support': { en: 'Help & Support', mr: 'मदत आणि समर्थन' },
  'footer_disclaimer': { en: '&copy; 2025 Team VISTAL (RIT). This is a student project for demonstration purposes only. All Rights Reserved.', mr: '&copy; २०२५ टीम VISTAL (RIT). हा केवळ प्रात्यक्षिक उद्देशांसाठी एक विद्यार्थी प्रकल्प आहे. सर्व हक्क राखीव.' },
};
let currentLanguage = 'en';

// --- GLOBAL INITIALIZER ---
document.addEventListener('DOMContentLoaded', () => {
  // Your existing setup
  currentLanguage = localStorage.getItem('language') || 'en';
  if (document.querySelector('.dashboard-container')) {
    initAdminDashboard();
  } else {
    initVisitorPage();
  }
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
  });
  setLanguage(currentLanguage);

  // New peak time chart filter initialization
  const peakFilter = document.getElementById('peak-time-filter');
  if (peakFilter) {
    peakFilter.addEventListener('change', e => renderPeakTimeChart(e.target.value));
    renderPeakTimeChart(peakFilter.value); // Initial chart render
  }
});


// --- LANGUAGE FUNCTIONS ---
function setLanguage(lang) {
  currentLanguage = lang;
  localStorage.setItem('language', lang);
  document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.toggle('active', btn.dataset.lang === lang));
  document.querySelectorAll('[data-translate]').forEach(el => {
    const key = el.dataset.translate;
    if (translations[key]?.[lang]) el.innerHTML = translations[key][lang];
  });
  document.querySelectorAll('[data-translate-placeholder]').forEach(el => {
    const key = el.dataset.translatePlaceholder;
    if (translations[key]?.[lang]) el.placeholder = translations[key][lang];
  });

  // FIXED: Re-render the admin table if it exists to update dynamic text
  if (document.querySelector('.dashboard-container')) {
    const currentFilter = document.querySelector('.nav-item.active').dataset.filter;
    const filteredVisitors = currentFilter === 'all' ? allVisitors : allVisitors.filter(v => v.department === currentFilter);
    renderVisitorTable(filteredVisitors);
  }
}
function t(key) { return translations[key]?.[currentLanguage] || key; }

// --- VISITOR PAGE LOGIC (Unchanged) ---
function initVisitorPage() {
  document.getElementById('admin-card').addEventListener('click', () => showForm('admin-login'));
  document.getElementById('visitor-card').addEventListener('click', () => showForm('visitor-form'));
  document.getElementById('enquiry-card').addEventListener('click', () => showForm('enquiry-form'));
  document.getElementById('show-help-visitor').addEventListener('click', showVisitorHelp);
}
function showForm(formType) {
  const roleSelection = document.getElementById('role-selection');
  const formDisplayArea = document.getElementById('form-display-area');
  if (formType === 'role-selection') {
    roleSelection.classList.remove('hidden');
    formDisplayArea.classList.add('hidden');
    formDisplayArea.innerHTML = '';
    return;
  }
  roleSelection.classList.add('hidden');
  formDisplayArea.classList.remove('hidden');
  let contentHTML = '';
  switch (formType) {
    case 'admin-login': contentHTML = generateAdminLoginForm(); break;
    case 'visitor-form': contentHTML = generateVisitorIdForm(); break;
    case 'enquiry-form': contentHTML = generateEnquiryForm(); break;
  }
  formDisplayArea.innerHTML = contentHTML;
  attachFormEventListeners(formType);
  setLanguage(currentLanguage);
}
function attachFormEventListeners(formType) {
  if (formType === 'admin-login') document.getElementById('login-form').addEventListener('submit', handleAdminLogin);
  if (formType === 'visitor-form') {
    document.getElementById('verify-btn').addEventListener('click', handleVisitorIdVerification);
    document.getElementById('department').addEventListener('change', populateApplicationTypes);
    document.getElementById('new-visitor-form').addEventListener('submit', handleVisitorRegistration);
  }
  if (formType === 'enquiry-form') document.getElementById('enquiry-form-actual').addEventListener('submit', handleStatusCheck);
}

async function handlePhotoCapture() {
    const canvas = document.getElementById('photo-canvas');
    const button = document.getElementById('capture-photo-btn');
    const formDisplayArea = document.getElementById('form-display-area');

    // Check if the stream is already active
    if (button.dataset.streaming === 'true') {
        const video = document.getElementById('camera-stream');
        const context = canvas.getContext('2d');

        // Ensure canvas and video are available
        if (video && context) {
            // Set canvas dimensions to match video to avoid distortion
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            // Draw the current video frame to the canvas
            context.drawImage(video, 0, 0, canvas.width, canvas.height);

            // Hide the video element and show the captured photo on the canvas
            video.style.display = 'none';
            canvas.style.display = 'block';
        }

        // Stop the video stream and remove the video element
        if (video.srcObject) {
            video.srcObject.getTracks().forEach(track => track.stop());
        }
        video.remove();

        button.innerHTML = '<i class="fa-solid fa-camera"></i> Retake Photo';
        button.dataset.streaming = 'false';
        return;
    }

    try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: { width: 320, height: 240 } });
        const video = document.createElement('video');
        video.id = 'camera-stream';
        video.srcObject = stream;
        video.autoplay = true;
        video.style.display = 'block'; // Display video for live feed
        video.style.maxWidth = '100%';
        video.style.borderRadius = '8px';

        // Append the video element to the form
        const photoGroup = button.parentElement;
        photoGroup.insertBefore(video, canvas);
        canvas.style.display = 'none'; // Hide canvas while video is streaming

        video.onloadedmetadata = () => {
            video.play();
        };

        button.innerHTML = '<i class="fa-solid fa-camera"></i> Capture Photo';
        button.dataset.streaming = 'true';

    } catch (err) {
        alert('Access to camera denied or not available. Please allow camera access to use this feature.');
        console.error('Error accessing the camera: ', err);
    }
}


// --- HTML GENERATION & EVENT HANDLERS (Unchanged Logic, Language-Aware Text) ---
function generateAdminLoginForm() { return `<h3><i class="fa-solid fa-user-shield"></i> ${t('admin_login')}</h3><form id="login-form"><div class="form-group"><label for="username">${t('username')}</label><input type="text" id="username" required value="admin"></div><div class="form-group"><label for="password">${t('password')}</label><input type="password" id="password" required value="password123"></div><button type="submit" class="btn"><i class="fa-solid fa-right-to-bracket"></i> ${t('login')}</button><button type="button" class="btn btn-secondary" onclick="showForm('role-selection')">${t('back')}</button></form>`; }
function generateVisitorIdForm() { return `<h3><i class="fa-solid fa-user-plus"></i> ${t('new_visitor_reg')}</h3><form id="new-visitor-form"><fieldset><legend>${t('step1')}</legend><div class="form-group"><label>${t('select_id_type')}</label><div class="radio-group" style="display:flex; gap:15px;"><input type="radio" id="aadhaar" name="id_type" value="aadhaar" checked><label for="aadhaar">${t('aadhaar')}</label><input type="radio" id="pan" name="id_type" value="pan"><label for="pan">${t('pan_card')}</label><input type="radio" id="passport" name="id_type" value="passport"><label for="passport">${t('passport')}</label></div></div><div class="form-group"><label for="visitor-id">${t('enter_id')}</label><input type="text" id="visitor-id" required></div><button type="button" class="btn" id="verify-btn"><i class="fa-solid fa-check-double"></i> ${t('verify_fetch')}</button></fieldset><fieldset id="details-fieldset" disabled><legend>${t('step2')}</legend><div class="form-group"><label for="visitor-name">${t('full_name')}</label><input type="text" id="visitor-name" readonly></div><div class="form-group"><label for="visitor-gender">${t('gender')}</label><input type="text" id="visitor-gender" readonly></div><div class="form-group"><label for="visitor-dob">${t('dob')}</label><input type="text" id="visitor-dob" readonly></div><div class="form-group"><label for="visitor-address">${t('address')}</label><textarea id="visitor-address" rows="2" readonly></textarea></div><div class="form-group"><label for="visitor-contact">${t('contact_number')}</label><input type="tel" id="visitor-contact" readonly></div><div class="form-group"><label for="department">${t('select_branch')}</label><select id="department" required>${getDepartmentOptions()}</select></div><div class="form-group"><label for="application-type">${t('application_type')}</label><select id="application-type" required disabled><option value="">${t('select_branch_first')}</option></select></div><div class="form-group"><label for="application-upload">${t('upload_form')}</label><input type="file" id="application-upload" accept=".pdf,.jpg,.jpeg"></div></fieldset><button type="submit" class="btn" id="submit-btn" disabled><i class="fa-solid fa-paper-plane"></i> ${t('submit_application')}</button><button type="button" class="btn btn-secondary" onclick="showForm('role-selection')">${t('back')}</button></form>`; }
function generateEnquiryForm() { return `<h3><i class="fa-solid fa-magnifying-glass"></i> ${t('track_status_title')}</h3><form id="enquiry-form-actual"><div class="form-group"><label for="unique-id">${t('enter_unique_id')}</label><input type="text" id="unique-id" required placeholder="e.g., 1734567890123"></div><button type="submit" class="btn"><i class="fa-solid fa-search"></i> ${t('check_status')}</button><button type="button" class="btn btn-secondary" onclick="showForm('role-selection')">${t('back')}</button></form>`; }
function handleAdminLogin(e) { e.preventDefault(); if (e.target.username.value === 'admin' && e.target.password.value === 'password123') window.location.href = 'admin_dashboard.html'; else alert('Invalid credentials.'); }
function handleVisitorIdVerification() { if (!document.getElementById('visitor-id').value) { alert('Please enter an ID number to verify.'); return; } const dummyData = { name: 'Suresh Kumar', gender: 'Male', dob: '15-Aug-1985', address: '123, Main Road, Islampur, Pune', phone: '9876543210' }; document.getElementById('visitor-name').value = dummyData.name; document.getElementById('visitor-gender').value = dummyData.gender; document.getElementById('visitor-dob').value = dummyData.dob; document.getElementById('visitor-address').value = dummyData.address; document.getElementById('visitor-contact').value = dummyData.phone; document.getElementById('details-fieldset').disabled = false; document.getElementById('submit-btn').disabled = false; alert('Verification successful! Please fill the remaining details.'); }
function handleVisitorRegistration(e) {
  e.preventDefault();
  const now = new Date();
  const newId = Date.now();
  const submissionTime = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });
  const photoCanvas = document.getElementById('photo-canvas');
  const photoDataUrl = photoCanvas.style.display !== 'none' ? photoCanvas.toDataURL() : null;

  allVisitors.unshift({
    id: newId,
    name: document.getElementById('visitor-name').value,
    phone: document.getElementById('visitor-contact').value,
    department: document.getElementById('department').value,
    applicationType: document.getElementById('application-type').options[document.getElementById('application-type').selectedIndex].text,
    submissionDate: now.toISOString().split('T')[0],
    submissionTime: submissionTime,
    status: 'Pending Review',
    remarks: 'Application submitted. Awaiting officer assignment.',
    photo: photoDataUrl
  });

  // Refresh peak time chart to show updated data
  renderPeakTimeChart(document.getElementById('peak-time-filter').value || 'month');

  // Show registration success modal with unique ID and QR code
  showModal(`
    <h2><i class="fa-solid fa-circle-check" style="color: var(--success-color);"></i> Registration Successful!</h2>
    <p>Please save your Unique ID for future reference. A QR code containing your ID is also generated below.</p>
    <h3 style="text-align: center; margin: 1rem 0; background: #e9ecef; padding: 1rem; border-radius: 8px;">${newId}</h3>
    <div id="qrcode" style="display:flex; justify-content:center; padding:1rem;"></div>
  `);
  new QRCode(document.getElementById("qrcode"), newId.toString());

  // Do NOT automatically call showForm('role-selection') here to give user time to see QR code
  // Clean up the camera stream and video element if they exist
    const video = document.getElementById('camera-stream');
    if (video) {
        video.srcObject.getTracks().forEach(track => track.stop());
        video.remove();
    }

    showForm('role-selection'); // Reset view behind modal
}


async function handlePhotoCapture() {
    const canvas = document.getElementById('photo-canvas');
    const button = document.getElementById('capture-photo-btn');
    const formDisplayArea = document.getElementById('form-display-area');

    // Check if the stream is already active
    if (button.dataset.streaming === 'true') {
        const video = document.getElementById('camera-stream');
        const context = canvas.getContext('2d');

        // Ensure canvas and video are available
        if (video && context) {
            // Set canvas dimensions to match video to avoid distortion
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            // Draw the current video frame to the canvas
            context.drawImage(video, 0, 0, canvas.width, canvas.height);

            // Hide the video element and show the captured photo on the canvas
            video.style.display = 'none';
            canvas.style.display = 'block';
        }

        // Stop the video stream and remove the video element
        if (video.srcObject) {
            video.srcObject.getTracks().forEach(track => track.stop());
        }
        video.remove();

        button.innerHTML = '<i class="fa-solid fa-camera"></i> Retake Photo';
        button.dataset.streaming = 'false';
        return;
    }

    try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: { width: 320, height: 240 } });
        const video = document.createElement('video');
        video.id = 'camera-stream';
        video.srcObject = stream;
        video.autoplay = true;
        video.style.display = 'block'; // Display video for live feed
        video.style.maxWidth = '100%';
        video.style.borderRadius = '8px';

        // Append the video element to the form
        const photoGroup = button.parentElement;
        photoGroup.insertBefore(video, canvas);
        canvas.style.display = 'none'; // Hide canvas while video is streaming

        video.onloadedmetadata = () => {
            video.play();
        };

        button.innerHTML = '<i class="fa-solid fa-camera"></i> Capture Photo';
        button.dataset.streaming = 'true';

    } catch (err) {
        alert('Access to camera denied or not available. Please allow camera access to use this feature.');
        console.error('Error accessing the camera: ', err);
    }
}

function handleStatusCheck(e) {
  e.preventDefault();
  alert("Submit handler triggered");
  e.preventDefault();
  const id = parseInt(document.getElementById('unique-id').value);
  const visitor = allVisitors.find(v => v.id === id);
  let modalContent;
  if (visitor) {
    const statusKey = 'status_' + visitor.status.toLowerCase().replace(/ /g, '_');
    modalContent = `
      <h2>Application Status for ID: ${id}</h2>
      <p><strong>${t('full_name')}:</strong> ${visitor.name}</p>
      <p><strong>${t('application_type')}:</strong> ${visitor.applicationType}</p>
      <p><strong>${t('col_date')}:</strong> ${visitor.submissionDate}</p>
      <p><strong>Submission Time:</strong> ${visitor.submissionTime}</p>
      <p><strong>Application Form:</strong> <button class="btn" onclick="openApplicationForm('${visitor.applicationForm}')">View</button></p>
      <p><strong>${t('col_status')}:</strong> <span class="status-badge status-${visitor.status.toLowerCase().replace(/ /g, '-')}">${t(statusKey)}</span></p>
      <hr style="margin: 1rem 0;">
      <p><strong>${t('add_remarks')}:</strong> ${visitor.remarks}</p>
    `;
  } else {
    modalContent = `
      <h2><i class="fa-solid fa-circle-xmark" style="color: var(--danger-color);"></i> Not Found</h2>
      <p>No application was found with the ID: <strong>${id}</strong>. Please check and try again.</p>
    `;
  }
  showModal(modalContent);
}
function getDepartmentOptions() { const departments = { dsb: t('dept_dsb'), eow: t('dept_eow'), accounts: t('dept_accounts'), establishment: t('dept_establishment'), wireless: t('dept_wireless'), cyber: t('dept_cyber'), women: t('dept_women'), lcb: t('dept_lcb') }; return `<option value="">${t('please_select')}</option>` + Object.entries(departments).map(([key, value]) => `<option value="${key}">${value}</option>`).join(''); }
function populateApplicationTypes() { const appTypes = { dsb: ['Character Verification', 'Passport Enquiry'], eow: ['Fraud Complaint', 'Financial Dispute'], accounts: ['Bill Submission', 'Payment Enquiry'], establishment: ['Recruitment Enquiry', 'Service Record'], wireless: ['License Application', 'Technical Enquiry'], cyber: ['Online Fraud Report', 'Data Theft Complaint'], women: ['Domestic Violence Report', 'Harassment Complaint'], lcb: ['Information Submission', 'Case Follow-up'] }; const dept = document.getElementById('department').value; const appSelect = document.getElementById('application-type'); appSelect.innerHTML = `<option value="">${t('select_branch_first')}</option>`; if (dept && appTypes[dept]) { appSelect.disabled = false; appTypes[dept].forEach(type => { appSelect.innerHTML += `<option value="${type.toLowerCase().replace(/ /g, '-')}">${type}</option>`; }); } else { appSelect.disabled = true; } }

// --- ADMIN DASHBOARD LOGIC (WITH FIXES) ---
function initAdminDashboard() {
  renderTrafficChart();
  renderVisitorTable(allVisitors);
  document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', e => {
      e.preventDefault();
      document.querySelector('.nav-item.active').classList.remove('active');
      item.classList.add('active');
      const filter = item.dataset.filter;
      const filtered = filter === 'all' ? allVisitors : allVisitors.filter(v => v.department === filter);
      renderVisitorTable(filtered);
    });
  });
  document.getElementById('search-input').addEventListener('input', e => {
    const term = e.target.value.toLowerCase();
    const filtered = allVisitors.filter(v => v.name.toLowerCase().includes(term) || v.id.toString().includes(term));
    renderVisitorTable(filtered);
  });
  document.getElementById('show-help-admin').addEventListener('click', showAdminHelp);
}
function renderTrafficChart() { const ctx = document.getElementById('visitorChart').getContext('2d'); new Chart(ctx, { type: 'line', data: { labels: ['Day 7', 'Day 6', 'Day 5', 'Day 4', 'Day 3', 'Yesterday', 'Today'], datasets: [{ label: 'Visitors per Day', data: [30, 45, 42, 55, 60, 75, 50], backgroundColor: 'rgba(13, 110, 253, 0.1)', borderColor: 'rgba(13, 110, 253, 1)', borderWidth: 2, tension: 0.4, fill: true, }] }, options: { responsive: true, maintainAspectRatio: false } }); }
function renderVisitorTable(visitorArray) {
  const tableBody = document.getElementById('visitor-table-body');
  const tableTitle = document.getElementById('visitor-table-title');
  const deptMap = { dsb: 'DSB', eow: 'EOW', accounts: 'Accounts', establishment: 'Establishment', wireless: 'Wireless', cyber: 'Cyber', women: 'Women Safety', lcb: 'LCB' };

  // FIXED: Use the data-translate key to get the title text correctly
  const activeFilterKey = document.querySelector('.nav-item.active').dataset.filter === 'all' ? 'all_visitors' : 'dept_' + document.querySelector('.nav-item.active').dataset.filter;
  tableTitle.innerHTML = `${t(activeFilterKey)} (${visitorArray.length})`;

  if (visitorArray.length === 0) {
    tableBody.innerHTML = `<tr><td colspan="6" style="text-align:center; padding: 2rem;">No visitors found.</td></tr>`;
    return;
  }
  tableBody.innerHTML = visitorArray.map(v => {
    const statusKey = 'status_' + v.status.toLowerCase().replace(/ /g, '_');
    return `<tr>
  <td>${v.id}</td>
  <td>${v.name}</td>
  <td>${deptMap[v.department] || 'N/A'}</td>
  <td>${v.submissionDate}</td>
  <td>${v.submissionTime}</td>                     <!-- New column -->
  <td><button class="btn" onclick="openApplicationForm('${v.applicationForm}')">View</button></td>    <!-- New column -->
  <td><span class="status-badge status-${v.status.toLowerCase().replace(/ /g, '-')}">${t(statusKey)}</span></td>
  <td><button class="btn" onclick="openUpdateModal(${v.id})"><i class="fa-solid fa-pen-to-square"></i> ${t('update')}</button></td>
</tr>`;
  }).join('');
}
function openUpdateModal(visitorId) {
  const visitor = allVisitors.find(v => v.id === visitorId);
  if (!visitor) return;
  const statuses = ['Pending Review', 'In Progress', 'Action Required', 'Completed', 'Rejected'];
  const opts = statuses.map(s => {
    const statusKey = 'status_' + s.toLowerCase().replace(/ /g, '_');
    return `<option value="${s}" ${s === visitor.status ? 'selected' : ''}>${t(statusKey)}</option>`;
  }).join('');

  showModal(`<h2>${t('update_status_for')} ${visitor.name}</h2><p><strong>ID:</strong> ${visitor.id}</p><form id="update-form"><div class="form-group"><label for="new-status">${t('new_status')}</label><select id="new-status">${opts}</select></div><div class="form-group"><label for="new-remarks">${t('add_remarks')}</label><textarea id="new-remarks" rows="4">${visitor.remarks}</textarea></div><button type="submit" class="btn"><i class="fa-solid fa-save"></i> ${t('save_changes')}</button></form>`);

  document.getElementById('update-form').addEventListener('submit', e => {
    e.preventDefault();
    const selectedStatusInEnglish = e.target['new-status'].value;
    visitor.status = selectedStatusInEnglish; // Always store status in English in the database
    visitor.remarks = e.target['new-remarks'].value;
    closeModal();
    const currentFilter = document.querySelector('.nav-item.active').dataset.filter;
    renderVisitorTable(currentFilter === 'all' ? allVisitors : allVisitors.filter(v => v.department === currentFilter));
  });
}
// MODAL & HELP FUNCTIONS (Unchanged)
function showVisitorHelp() { showModal(`<h2>${t('how_to_use')}</h2><p><strong><i class="fa-solid fa-user-plus"></i> ${t('new_visitor')}:</strong> ${t('help_new_visitor_desc')}</p><p><strong><i class="fa-solid fa-magnifying-glass"></i> ${t('track_application')}:</strong> ${t('help_track_desc')}</p><p><strong><i class="fa-solid fa-user-shield"></i> ${t('admin_portal')}:</strong> ${t('help_admin_desc')}</p>`); }
function showAdminHelp() { showModal(`<h2>${t('how_to_use_admin')}</h2><p><strong><i class="fa-solid fa-chart-line"></i> Analytics:</strong> The chart at the top provides a visual overview of visitor traffic over the last week.</p><p><strong><i class="fa-solid fa-filter"></i> Filtering:</strong> Use the sidebar to filter the main visitor list by department. Click "All Visitor Details" to see everyone.</p><p><strong><i class="fa-solid fa-search"></i> Searching:</strong> Use the search bar to find a visitor by their name or Unique ID instantly.</p><p><strong><i class="fa-solid fa-pen-to-square"></i> Updating Status:</strong> Click the "Update" button to change an application's status and add remarks. The table will refresh automatically.</p>`); }
function showModal(content) { document.getElementById('modal-content').innerHTML = content; document.getElementById('modal-backdrop').classList.remove('hidden'); document.getElementById('generic-modal').classList.remove('hidden'); document.getElementById('modal-close-btn').addEventListener('click', closeModal, { once: true }); document.getElementById('modal-backdrop').addEventListener('click', closeModal, { once: true }); setLanguage(currentLanguage); }
function closeModal() { document.getElementById('modal-backdrop').classList.add('hidden'); document.getElementById('generic-modal').classList.add('hidden'); document.getElementById('modal-content').innerHTML = ''; }
function openApplicationForm(formFileName) {
  const url = `forms/${formFileName}`; // Make sure form files exist in this folder
  const content = `
    <h2>Application Form</h2>
    <embed src="${url}" type="application/pdf" width="100%" height="600px" />
    <p><a href="${url}" target="_blank" rel="noopener">Open in new tab</a></p>
  `;
  showModal(content); // Reuses your existing modal popup function
}
function renderPeakTimeChartDemo() {
  const labels = [
    "0:00-0:59", "1:00-1:59", "2:00-2:59", "3:00-3:59", "4:00-4:59",
    "5:00-5:59", "6:00-6:59", "7:00-7:59", "8:00-8:59", "9:00-9:59",
    "10:00-10:59", "11:00-11:59", "12:00-12:59", "13:00-13:59", "14:00-14:59",
    "15:00-15:59", "16:00-16:59", "17:00-17:59", "18:00-18:59", "19:00-19:59",
    "20:00-20:59", "21:00-21:59", "22:00-22:59", "23:00-23:59"
  ];

  // Corresponding visitor counts from your data.js sample
  const data = [
    0, 0, 0, 0, 0, 0, 0, 0, 1, 2,
    3, 3, 4, 1, 5,
    7, 2, 1, 0, 0,
    0, 0, 0, 0
  ];

  const ctx = document.getElementById('peakTimeChart').getContext('2d');

  if (window.peakTimeChartDemo) window.peakTimeChartDemo.destroy();

  window.peakTimeChartDemo = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
        label: 'Number of Visitors',
        data: data,
        backgroundColor: 'rgba(13, 110, 253, 0.7)'
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
          ticks: { stepSize: 1 }
        }
      }
    }
  });
}

// Call this function after your DOM is loaded to see the chart
document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('peakTimeChart')) {
    renderPeakTimeChartDemo();
  }
});

