/* =====================================================================
   data.js — all content for the portfolio (bilingual EN / VI).

   Voice: short, direct, technical. Plain words, no buzzwords, no scores,
   no boasting. Only real, verified facts. If something is half-built it
   says so. Edit this file to change content, then run `node build.js`.
   ===================================================================== */

export const PROFILE = {
  name: 'Dang Thai Khang',
  nameVI: 'Đặng Thái Khang',
  initials: 'DK',
  email: 'dangthaikhang34@gmail.com',
  github: 'XeminoL',
  githubUrl: 'https://github.com/XeminoL',
  linkedin: 'thái-khang-đặng',
  linkedinUrl: 'https://www.linkedin.com/in/th%C3%A1i-khang-%C4%91%E1%BA%B7ng-329645296/',
  facebookUrl: 'https://www.facebook.com/khang.ang.270801/',
  location: { en: 'Ho Chi Minh City, Vietnam', vi: 'TP. Hồ Chí Minh, Việt Nam' },
  role: { en: 'Computer Engineering @ HCMUT', vi: 'Kỹ thuật Máy tính @ Bách Khoa' },
  // titles cycled by the hero typing effect — concrete things actually built
  roles: {
    en: ['things that work', 'a multi-tenant backend', 'a document assistant on AWS', 'a smart-parking system'],
    vi: ['những thứ chạy được', 'một backend multi-tenant', 'một trợ lý tài liệu trên AWS', 'một hệ thống bãi xe thông minh'],
  },
  tagline: {
    en: "Computer Engineering student at HCMUT. I build a bit of everything and learn it by building it.",
    vi: "Sinh viên Kỹ thuật Máy tính ở Bách Khoa. Mình làm đủ thứ, và học bằng cách bắt tay làm.",
  },
};

export const NAV = [
  { id: 'home', label: { en: 'Home', vi: 'Trang chủ' } },
  { id: 'about', label: { en: 'About', vi: 'Giới thiệu' } },
  { id: 'stack', label: { en: 'Stack', vi: 'Công nghệ' } },
  { id: 'timeline', label: { en: 'Timeline', vi: 'Hành trình' } },
  { id: 'projects', label: { en: 'Projects', vi: 'Dự án' } },
  { id: 'contact', label: { en: 'Contact', vi: 'Liên hệ' } },
];

export const GITHUB_USER = 'XeminoL';

export const SPOTIFY = {
  endpoint: 'https://my-website-pink-rho-50.vercel.app/api/now-playing',
};

/* Quick facts — shown as a small strip under About. Plain, checkable. */
export const FACTS = [
  { label: { en: 'Education', vi: 'Học vấn' },
    value: { en: 'Computer Engineering, HCMUT — since 2023', vi: 'Kỹ thuật Máy tính, ĐH Bách Khoa — từ 2023' } },
  { label: { en: 'Based in', vi: 'Ở' },
    value: { en: 'Ho Chi Minh City', vi: 'TP. Hồ Chí Minh' } },
  { label: { en: 'Languages', vi: 'Ngôn ngữ' },
    value: { en: 'Vietnamese (native), English (IELTS 7.0)', vi: 'Tiếng Việt (bản ngữ), Tiếng Anh (IELTS 7.0)' } },
];

/* About — three short paragraphs. Plain and factual. */
export const ABOUT = {
  en: [
    "Computer Engineering student at HCMUT.",
    "I mostly taught myself by pulling things apart to see how they work. The projects here started that way: I'd finish the assignment, then keep going until the thing actually ran the way I wanted.",
    "I don't mind being the one who doesn't know yet. That's usually where the interesting part starts.",
  ],
  vi: [
    "Sinh viên Kỹ thuật Máy tính ở Bách Khoa.",
    "Phần lớn mình tự học bằng cách tháo mọi thứ ra xem nó chạy thế nào. Mấy project ở đây bắt đầu vậy: xong bài rồi mình làm tiếp cho tới khi nó chạy đúng ý.",
    "Mình không ngại là người chưa biết. Đó thường là chỗ phần thú vị bắt đầu.",
  ],
};

/* How I work — concrete habits, each tied to a real project. */
export const APPROACH = {
  en: [
    { title: 'I learn by doing',
      body: "Docs don't stick with me. I build the thing, break it, and figure it out from there." },
    { title: 'I finish what I start',
      body: "Six companies turned me down before three said yes. I'm used to it not working the first time." },
    { title: "I'd rather ask than guess",
      body: "When something's weird I dig until I know why. Slower, but I don't like leaving things I don't understand." },
  ],
  vi: [
    { title: 'Mình học bằng cách làm',
      body: "Đọc tài liệu không vào đầu. Mình dựng, làm hỏng, rồi từ đó mò ra." },
    { title: 'Bắt đầu thì làm cho xong',
      body: "Sáu công ty từ chối trước khi có ba chỗ nhận. Mình quen việc lần đầu không chạy rồi." },
    { title: 'Thà hỏi còn hơn đoán',
      body: "Thứ gì lạ là mình đào tới khi hiểu. Chậm hơn, nhưng mình không thích để lại cái mình chưa hiểu." },
  ],
};

/* Now — neutral, present tense. */
export const NOW = {
  en: 'Interning, and reading more than I write these days.',
  vi: 'Đang thực tập, dạo này đọc nhiều hơn viết.',
};

/* Timeline — real milestones. Years are approximate by design.
   To name the 2026 employers, just add them into the 2026 text. */
export const TIMELINE = {
  en: [
    { year: '2023', text: 'Started Computer Engineering at HCMUT.' },
    { year: '2024', text: 'A lot of coursework across the map: logic design, microcontrollers, an OS, networking labs.' },
    { year: '2025', text: 'Built the multi-tenant issue tracker, a smart-parking system for the SE course, and a few other course projects.' },
    { year: '2026', text: 'Interned at TKSolution, then AWS (First Cloud Journey), where I built InsightShare.' },
  ],
  vi: [
    { year: '2023', text: 'Bắt đầu Kỹ thuật Máy tính tại ĐH Bách Khoa.' },
    { year: '2024', text: 'Nhiều bài tập môn trải khắp: thiết kế luận lý, vi điều khiển, hệ điều hành, lab mạng.' },
    { year: '2025', text: 'Làm issue tracker multi-tenant, một hệ thống bãi xe thông minh cho môn CNPM, và vài đồ án môn khác.' },
    { year: '2026', text: 'Thực tập ở TKSolution, rồi AWS (First Cloud Journey), làm InsightShare ở đó.' },
  ],
};

/* Tech stack — grouped for the visual grid. glyph is a short self-drawn
   mark (no emoji, no external icon set). */
export const TECH = [
  { group: { en: 'Languages', vi: 'Ngôn ngữ' }, items: [
    { name: 'Python', glyph: 'py' }, { name: 'JavaScript', glyph: 'js' }, { name: 'HTML / CSS', glyph: '<>' },
  ]},
  { group: { en: 'Backend & cloud', vi: 'Backend & cloud' }, items: [
    { name: 'Flask', glyph: 'Fl' }, { name: 'PostgreSQL', glyph: 'pg' }, { name: 'AWS', glyph: 'aws' },
    { name: 'Docker', glyph: 'dk' }, { name: 'MQTT', glyph: 'mq' }, { name: 'Linux', glyph: 'tux' },
  ]},
  { group: { en: 'Tooling', vi: 'Công cụ' }, items: [
    { name: 'Git', glyph: 'git' }, { name: 'pytest', glyph: 'pt' },
  ]},
];

/* Projects — each has a card blurb, a flow diagram (nodes), quick
   highlights, and a structured detail page told technically.
   Written to show understanding, not to impress. None ranked above
   the others. `repo` is left as the profile for now — swap in the real
   per-project repo URL once each is pushed. */
export const PROJECTS = [
  {
    id: 'issue-tracker',
    icon: 'SaaS',
    name: 'Issue Tracker',
    year: '2025',
    repo: 'https://github.com/XeminoL/issue-tracker',
    meta: { en: 'Flask · multi-tenant', vi: 'Flask · multi-tenant' },
    role: { en: 'Solo · side project', vi: 'Cá nhân · dự án phụ' },
    blurb: {
      en: 'A multi-tenant issue tracker with strict data isolation between organizations.',
      vi: 'Issue tracker multi-tenant với cô lập dữ liệu chặt giữa các tổ chức.',
    },
    tags: ['Flask', 'SQLAlchemy', 'Docker', 'pytest'],
    flow: ['Request', 'Session auth', 'RBAC + CSRF', 'Base repo (tenant_id)', 'Service', 'DB'],
    highlights: {
      en: ['Isolation enforced in the data layer, not per-route', 'Session auth + admin / member roles + CSRF', 'Rate limits on login and writes; Alembic migrations', '20 tests, incl. tenant B invisible to tenant A; Dockerized'],
      vi: ['Cô lập ép ở tầng dữ liệu, không phải từng route', 'Session auth + vai trò admin / member + CSRF', 'Giới hạn tốc độ ở login và ghi; migration bằng Alembic', '20 test, gồm tenant B vô hình với tenant A; đóng gói Docker'],
    },
    detail: {
      en: [
        { h: 'The problem', p: 'Several organizations use the same app, and none of them should ever see another one\'s issues. Everything else was built around keeping that true.' },
        { h: 'How I kept tenants apart', p: 'Instead of remembering to filter every query by the org, I put that filter in one place (a base repository) that every query has to go through. So even if I get lazy later and write a normal-looking query, it still can\'t leak another org\'s data.' },
        { h: 'The rest of it', p: 'Login with sessions, admin/member roles, CSRF on the forms, rate limits on login and writes, and an email when an issue changes. Routes stay thin: repositories talk to the DB, services hold the logic, schemas check the input. Runs under Docker with Postgres, schema handled by Alembic.' },
        { h: 'Tests', p: '20 tests. The CRUD ones are fine, but the one I actually cared about logs in as org A and checks it genuinely can\'t see org B\'s data. If that ever fails, the whole point of the project is gone.' },
      ],
      vi: [
        { h: 'Bài toán', p: 'Nhiều tổ chức dùng chung một app, và không ai được thấy issue của tổ chức khác. Mọi thứ còn lại mình xây xoay quanh việc giữ điều đó đúng.' },
        { h: 'Cách mình tách các tổ chức', p: 'Thay vì phải nhớ lọc theo tổ chức ở mỗi query, mình gom cái lọc đó vào một chỗ (một base repository) mà mọi query đều phải đi qua. Nên kể cả sau này mình có lười viết một query trông bình thường, nó vẫn không rò được dữ liệu tổ chức khác.' },
        { h: 'Phần còn lại', p: 'Đăng nhập bằng session, vai trò admin/member, CSRF ở form, giới hạn tốc độ ở login và ghi, gửi email khi issue đổi. Route giữ mỏng: repository nói với DB, service giữ logic, schema kiểm đầu vào. Chạy dưới Docker với Postgres, schema do Alembic lo.' },
        { h: 'Test', p: '20 test. Mấy test CRUD thì ổn, nhưng cái mình thật sự để tâm là test đăng nhập bằng tổ chức A rồi kiểm nó chắc chắn không thấy được dữ liệu tổ chức B. Cái đó mà sai thì cả project mất ý nghĩa.' },
      ],
    },
  },
  {
    id: 'insightshare',
    icon: 'AWS',
    name: 'InsightShare',
    year: '2026',
    repo: 'https://github.com/XeminoL/InsightShare',
    demo: 'https://insightshare.dangthaikhang34.workers.dev/',
    meta: { en: 'AWS · serverless', vi: 'AWS · serverless' },
    role: { en: 'AWS FCAJ internship capstone', vi: 'Đồ án cuối kỳ thực tập AWS FCAJ' },
    blurb: {
      en: 'Upload a document, then search it and ask questions about it. Serverless, on AWS.',
      vi: 'Tải một tài liệu lên, rồi tìm trong nó và hỏi về nó. Serverless, chạy trên AWS.',
    },
    tags: ['AWS', 'Lambda', 'Textract', 'Bedrock', 'DynamoDB'],
    flow: ['Upload', 'S3 (presigned)', 'Lambda', 'Textract + Rekognition', 'DynamoDB', 'Search / Ask (Bedrock)'],
    highlights: {
      en: ['Extracts text (Textract) + labels (Rekognition), stores in DynamoDB', 'Search files by content, not filename', 'Ask a document questions, answered by Bedrock (Claude)', 'Files stay private in S3; browser only gets presigned URLs', 'Runs at about 1 USD/month at demo scale'],
      vi: ['Rút text (Textract) + nhãn (Rekognition), lưu vào DynamoDB', 'Tìm file theo nội dung chứ không theo tên', 'Hỏi tài liệu bằng câu thường, Bedrock (Claude) trả lời', 'File nằm riêng trong S3; trình duyệt chỉ nhận URL ký tạm', 'Chạy khoảng 1 USD/tháng ở quy mô demo'],
    },
    detail: {
      en: [
        { h: 'What it is', p: 'The capstone for my AWS First Cloud Journey internship. You upload an image or PDF, and it turns the file into something you can actually search and ask about.' },
        { h: 'How it flows', p: 'The frontend calls API Gateway, which routes to Python Lambdas. One Lambda runs Textract and Rekognition and writes the text and labels to DynamoDB. Another searches that stored content. Another sends your question to Bedrock (Claude) with the document text as context.' },
        { h: 'Keeping files private', p: 'The original files never get a public URL. The browser uploads and downloads through short-lived presigned S3 URLs, so the bucket stays private the whole time.' },
        { h: 'What I paid attention to', p: 'Least-privilege IAM (one role per Lambda, scoped to what it touches), CloudWatch logs across everything, and cost: it sits around a dollar a month because nothing runs when idle.' },
      ],
      vi: [
        { h: 'Là gì', p: 'Đồ án cuối kỳ thực tập AWS First Cloud Journey của mình. Bạn tải lên một ảnh hoặc PDF, nó biến file đó thành thứ bạn thật sự tìm và hỏi được.' },
        { h: 'Luồng chạy', p: 'Frontend gọi API Gateway, route sang các Lambda Python. Một Lambda chạy Textract và Rekognition rồi ghi text với nhãn vào DynamoDB. Một Lambda khác tìm trong đống nội dung đó. Một Lambda nữa gửi câu hỏi của bạn sang Bedrock (Claude) kèm nội dung tài liệu làm ngữ cảnh.' },
        { h: 'Giữ file riêng tư', p: 'File gốc không bao giờ có URL công khai. Trình duyệt tải lên/xuống qua URL S3 ký tạm thời, nên bucket luôn ở chế độ riêng tư.' },
        { h: 'Chỗ mình để tâm', p: 'IAM tối thiểu quyền (mỗi Lambda một role, chỉ chạm đúng thứ nó cần), log CloudWatch khắp nơi, và chi phí: nó tốn cỡ một đô một tháng vì lúc rảnh thì không chạy gì.' },
      ],
    },
  },
  {
    id: 'smart-parking',
    icon: 'IoT',
    name: 'Smart Parking',
    year: '2025',
    repo: 'https://github.com/XeminoL/SmartParking_-IoT-SPMS-',
    meta: { en: 'IoT · web · SE course', vi: 'IoT · web · môn CNPM' },
    role: { en: 'Team · Software Engineering course', vi: 'Nhóm · môn Công nghệ Phần mềm' },
    blurb: {
      en: 'A parking system for the HCMUT campus, designed around the motorbike morning rush.',
      vi: 'Hệ thống bãi xe cho khuôn viên Bách Khoa, thiết kế quanh giờ cao điểm xe máy buổi sáng.',
    },
    tags: ['JavaScript', 'MQTT', 'UML', 'HTML/CSS'],
    flow: ['Plate camera + card tap', 'Sensors (MQTT)', 'Slot count', 'Gate signs', 'Operator / Admin view'],
    highlights: {
      en: ['Barrier-free main lane: camera reads the plate, rider taps while moving', 'Plate tied to card at entry; a mismatch at exit raises a theft alarm', 'Live free-slot count over MQTT; a silent sensor is marked unknown, not free', 'Roles for driver / operator / admin, each with their own view', 'Full requirements + UML + design docs (the course deliverable)'],
      vi: ['Làn chính không barie: camera đọc biển số, người chạy quẹt thẻ khi đang di chuyển', 'Biển số gắn với thẻ lúc vào; lệch lúc ra thì báo động nghi trộm', 'Đếm chỗ trống trực tiếp qua MQTT; cảm biến im lặng bị đánh dấu không rõ, không tính là trống', 'Vai trò tài xế / vận hành / admin, mỗi bên một màn hình riêng', 'Đủ tài liệu yêu cầu + UML + thiết kế (sản phẩm nộp môn)'],
    },
    detail: {
      en: [
        { h: 'The real constraint', p: 'This was for the Software Engineering course, but the design comes from a real fact: campus parking here is mostly motorbikes and everyone shows up in a rush right before class. A normal barrier car-park model does not fit that.' },
        { h: 'Barrier-free by design', p: 'The main lane has no barrier because a barrier is too slow for the morning rush. A camera reads the plate and the rider taps their card while moving. Barriers only stay on the smaller car lot.' },
        { h: 'Knowing what is actually free', p: 'Sensors report slot changes over MQTT. The tricky part is faults: a sensor that goes quiet gets marked unknown and is not counted as free, so the gate signs never lie about space that is not there.' },
        { h: 'What I actually built', p: 'A working demo (plain HTML/CSS/JS, no libraries, data in the code) that simulates cars coming and going, sensors dropping out, and theft alarms. Plus the full course docs: requirements, UML, and the design.' },
      ],
      vi: [
        { h: 'Ràng buộc thật', p: 'Đây là bài môn Công nghệ Phần mềm, nhưng thiết kế đến từ một thực tế: bãi xe trong trường phần lớn là xe máy và ai cũng ùa tới sát giờ vào học. Mô hình bãi xe hơi có barie bình thường không hợp.' },
        { h: 'Không barie theo chủ đích', p: 'Làn chính không có barie vì barie quá chậm cho giờ cao điểm. Camera đọc biển số, người chạy quẹt thẻ khi đang đi. Barie chỉ còn ở bãi ô tô nhỏ hơn.' },
        { h: 'Biết chỗ nào thật sự trống', p: 'Cảm biến báo thay đổi chỗ qua MQTT. Chỗ khó là lỗi: một cảm biến im lặng bị đánh dấu không rõ và không tính là trống, để bảng ở cổng không bao giờ báo sai chỗ trống không có thật.' },
        { h: 'Mình làm được gì', p: 'Một demo chạy được (HTML/CSS/JS thuần, không thư viện, dữ liệu viết trong code) mô phỏng xe ra vào, cảm biến rớt, và báo động trộm. Cùng đủ tài liệu môn: yêu cầu, UML, và thiết kế.' },
      ],
    },
  },
];

export const UI = {
  en: {
    heroKicker: 'I build',
    heroCta: 'See projects',
    heroContact: 'Contact',
    scrollHint: 'Scroll',
    sectionAbout: 'About',
    sectionStack: 'Stack',
    sectionTimeline: 'Timeline',
    sectionProjects: 'Projects',
    sectionContact: 'Contact',
    aboutLead: 'Who I am, in plain terms.',
    approachLabel: 'How I work',
    stackLead: 'The tools I reach for, grouped by where they sit.',
    timelineLead: 'How I got here, roughly.',
    nowLabel: 'Now',
    projectsLead: 'A few things I have actually built. Open one for the details.',
    contactLead: 'The fastest ways to reach me.',
    readMore: 'Read more',
    backToProjects: 'Back',
    roleLabel: 'Role',
    flowLabel: 'How it flows',
    glanceLabel: 'At a glance',
    viewCode: 'View code',
    liveDemo: 'Live demo',
    nowPlaying: 'Now playing',
    notPlaying: 'Not playing right now',
    onSpotify: 'on Spotify',
    spotifyBtn: 'Now playing',
    paletteHint: 'Type to jump anywhere…',
    footer: 'Built from scratch — HTML, CSS, JS. No frameworks.',
    statusOnline: 'ONLINE',
    statusSession: 'session',
  },
  vi: {
    heroKicker: 'Mình làm',
    heroCta: 'Xem dự án',
    heroContact: 'Liên hệ',
    scrollHint: 'Cuộn',
    sectionAbout: 'Giới thiệu',
    sectionStack: 'Công nghệ',
    sectionTimeline: 'Hành trình',
    sectionProjects: 'Dự án',
    sectionContact: 'Liên hệ',
    aboutLead: 'Mình là ai, nói thẳng.',
    approachLabel: 'Cách mình làm',
    stackLead: 'Mấy thứ mình hay dùng, nhóm theo chỗ nó nằm.',
    timelineLead: 'Mình tới đây như thế nào, đại khái vậy.',
    nowLabel: 'Hiện tại',
    projectsLead: 'Vài thứ mình thật sự đã làm. Mở một cái để xem chi tiết.',
    contactLead: 'Cách nhanh nhất để liên hệ mình.',
    readMore: 'Xem thêm',
    backToProjects: 'Quay lại',
    roleLabel: 'Vai trò',
    flowLabel: 'Luồng hoạt động',
    glanceLabel: 'Tóm tắt nhanh',
    viewCode: 'Xem mã nguồn',
    liveDemo: 'Bản chạy thử',
    nowPlaying: 'Đang nghe',
    notPlaying: 'Đang không nghe gì',
    onSpotify: 'trên Spotify',
    spotifyBtn: 'Đang nghe',
    paletteHint: 'Gõ để nhảy tới bất cứ đâu…',
    footer: 'Tự tay làm — HTML, CSS, JS. Không framework.',
    statusOnline: 'TRỰC TUYẾN',
    statusSession: 'phiên',
  },
};

/* boot log lines for the system intro */
export const INTRO_BOOT = {
  en: ['init display', 'mount /home/khang', 'load embedded core', 'link backend', 'spotify uplink', 'ready'],
  vi: ['khởi tạo màn hình', 'gắn /home/khang', 'nạp lõi embedded', 'kết nối backend', 'liên kết spotify', 'sẵn sàng'],
};
