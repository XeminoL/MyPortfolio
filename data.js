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
  linkedin: 'khang-dang-329645296',
  linkedinUrl: 'https://www.linkedin.com/in/khang-dang-329645296/',
  facebookUrl: 'https://www.facebook.com/khang.ang.270801/',
  location: { en: 'Ho Chi Minh City, Vietnam', vi: 'TP. Hồ Chí Minh, Việt Nam' },
  role: { en: 'Computer Engineering @ HCMUT', vi: 'Kỹ thuật Máy tính @ Bách Khoa' },
  // titles cycled by the hero typing effect — concrete things actually built
  roles: {
    en: ['things that work', 'a CPU in Verilog', 'a multi-tenant backend', 'an IoT system'],
    vi: ['những thứ chạy được', 'một CPU bằng Verilog', 'một backend multi-tenant', 'một hệ thống IoT'],
  },
  tagline: {
    en: "Computer Engineering student at HCMUT. I build things, take them apart to see how they work, and put them back together properly.",
    vi: "Sinh viên Kỹ thuật Máy tính tại ĐH Bách Khoa. Mình dựng đồ, tháo ra xem nó chạy thế nào, rồi ráp lại cho tử tế.",
  },
  // one honest line for the contact section
  availability: {
    en: "Open to internships. Happy to talk about anything I've built here.",
    vi: "Đang tìm cơ hội thực tập. Sẵn sàng trao đổi về bất cứ thứ gì mình đã làm ở đây.",
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
  { label: { en: 'Focus', vi: 'Mảng chính' },
    value: { en: 'Embedded · FPGA / RTL · backend', vi: 'Nhúng · FPGA / RTL · backend' } },
];

/* About — three short paragraphs. Plain and factual. */
export const ABOUT = {
  en: [
    "I'm a Computer Engineering student at HCMUT. I like taking things apart to understand how they actually work, then rebuilding them until they're clean.",
    "Most of what I've made started as coursework I pushed further than the assignment asked for — because half-understanding something bothers me more than the extra hours do.",
    "I work best when I can go deep on a problem, sit with it, and get it right rather than just get it running.",
  ],
  vi: [
    "Mình là sinh viên Kỹ thuật Máy tính tại ĐH Bách Khoa. Mình thích tháo mọi thứ ra để hiểu nó thật sự chạy thế nào, rồi ráp lại cho tới khi gọn gàng.",
    "Phần lớn thứ mình làm bắt đầu từ bài tập môn học mà mình đẩy đi xa hơn đề bài — vì hiểu nửa vời làm mình khó chịu hơn là bỏ thêm giờ.",
    "Mình làm tốt nhất khi được đào sâu một bài toán, ngồi lại với nó, và làm cho đúng chứ không chỉ cho chạy.",
  ],
};

/* How I work — concrete habits, each tied to a real project. */
export const APPROACH = {
  en: [
    { title: 'Learn by building it',
      body: "The fastest way I understand something is to build a rough version myself. Most of my projects exist because I wanted to see how the thing actually works, not because I had to." },
    { title: 'Do it properly',
      body: "I would rather ship one thing that is correct and clean than three that half-work. In the issue tracker, for instance, tenant isolation sits in one place so it cannot be forgotten." },
    { title: 'Get to the bottom of it',
      body: "When something breaks or behaves oddly, I want to know why, not just make it stop. Most of what I've learned came from chasing one of those down." },
  ],
  vi: [
    { title: 'Học bằng cách làm',
      body: "Cách mình hiểu nhanh nhất là tự dựng một bản thô. Phần lớn dự án của mình có mặt vì mình muốn xem thứ đó chạy ra sao, chứ không phải vì bị bắt làm." },
    { title: 'Làm cho tử tế',
      body: "Mình thà làm xong một thứ đúng và sạch còn hơn ba thứ nửa vời. Ví dụ trong issue tracker, việc cô lập tenant nằm gọn một chỗ để không thể quên." },
    { title: 'Truy tới cùng',
      body: "Khi thứ gì hỏng hay chạy lạ, mình muốn biết vì sao, không chỉ làm nó ngừng lạ. Phần lớn thứ mình học được đến từ việc truy một ca như vậy tới cùng." },
  ],
};

/* Now — neutral, present tense. */
export const NOW = {
  en: 'Studying more than I write, keeping the issue tracker tidy, and looking for a summer internship.',
  vi: 'Học nhiều hơn viết, giữ cho issue tracker gọn gàng, và tìm một kỳ thực tập hè.',
};

/* Timeline — real milestones. Years are approximate by design.
   To name the 2026 employers, just add them into the 2026 text. */
export const TIMELINE = {
  en: [
    { year: '2023', text: 'Started Computer Engineering at HCMUT.' },
    { year: '2024', text: 'Digital-logic year: a small RISC CPU and an FPGA image accelerator, both in Verilog.' },
    { year: '2025', text: 'Went wider: an IoT farm, an HTTP server on raw sockets, the multi-tenant issue tracker, some modelling and stats work.' },
    { year: '2026', text: 'Looking for a summer internship. Happy to go where the interesting work is.' },
  ],
  vi: [
    { year: '2023', text: 'Bắt đầu Kỹ thuật Máy tính tại ĐH Bách Khoa.' },
    { year: '2024', text: 'Năm học luận lý số: một CPU RISC nhỏ và một bộ tăng tốc ảnh FPGA, đều bằng Verilog.' },
    { year: '2025', text: 'Đi rộng hơn: một hệ thống IoT, một HTTP server viết trên socket thô, issue tracker multi-tenant, cùng vài bài mô hình hoá và thống kê.' },
    { year: '2026', text: 'Đang tìm một kỳ thực tập hè. Sẵn sàng tới nơi có việc thú vị.' },
  ],
};

/* Tech stack — grouped for the visual grid. glyph is a short self-drawn
   mark (no emoji, no external icon set). */
export const TECH = [
  { group: { en: 'Languages', vi: 'Ngôn ngữ' }, items: [
    { name: 'C / C++', glyph: 'C' }, { name: 'Python', glyph: 'py' }, { name: 'Verilog', glyph: 'V' },
    { name: 'C# / .NET', glyph: 'C#' }, { name: 'JavaScript', glyph: 'js' }, { name: 'R', glyph: 'R' },
  ]},
  { group: { en: 'Hardware', vi: 'Phần cứng' }, items: [
    { name: 'ESP32', glyph: '32' }, { name: 'STM32', glyph: 'ST' }, { name: 'FPGA', glyph: 'FP' },
    { name: 'Vivado', glyph: 'Vv' }, { name: 'UART · I2C', glyph: 'io' },
  ]},
  { group: { en: 'Backend & cloud', vi: 'Backend & cloud' }, items: [
    { name: 'Flask', glyph: 'Fl' }, { name: 'SQLite', glyph: 'sql' }, { name: 'MQTT', glyph: 'mq' },
    { name: 'Docker', glyph: 'dk' }, { name: 'Linux', glyph: 'tux' }, { name: 'AWS', glyph: 'aws' },
  ]},
  { group: { en: 'Data & tooling', vi: 'Dữ liệu & công cụ' }, items: [
    { name: 'Git', glyph: 'git' }, { name: 'NumPy · Pandas', glyph: 'np' }, { name: 'OpenCV', glyph: 'cv' },
    { name: 'pytest', glyph: 'pt' },
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
        { h: 'The core requirement', p: 'Many organizations share one app, but no one may ever see another tenant’s issues. That single rule shapes the entire design.' },
        { h: 'Where isolation lives', p: 'Tenant isolation lives in the data layer, not in each route: a base repository forces every query to filter by tenant_id, so a developer cannot forget it by writing a normal-looking query. Pushing the rule down to one place is the difference between "usually safe" and "safe".' },
        { h: 'The rest of the system', p: 'On top: session auth, admin / member roles, CSRF protection on the forms, rate limits on login and writes, and email on issue changes. Routes stay thin — repositories talk to the DB, services hold the logic, schemas validate input. Alembic owns the schema; the whole thing runs under Docker with Postgres.' },
        { h: 'Testing', p: 'Of the 20 tests, the ones I care about most are not the CRUD ones — they are the ones that log in as tenant A and assert tenant B’s data is invisible. That is the property that actually matters here.' },
      ],
      vi: [
        { h: 'Yêu cầu cốt lõi', p: 'Nhiều tổ chức dùng chung một app, nhưng không ai được phép thấy issue của tenant khác. Đúng một luật đó định hình toàn bộ thiết kế.' },
        { h: 'Cô lập nằm ở đâu', p: 'Việc cô lập tenant nằm ở tầng dữ liệu, không phải ở từng route: một base repository ép mọi query phải lọc theo tenant_id, để lập trình viên không thể quên bằng cách viết một query trông bình thường. Đẩy luật xuống một chỗ duy nhất chính là khác biệt giữa "thường thì an toàn" và "an toàn".' },
        { h: 'Phần còn lại của hệ thống', p: 'Phía trên: session auth, vai trò admin / member, bảo vệ CSRF ở form, giới hạn tốc độ ở login và ghi, gửi email khi issue đổi. Route giữ mỏng — repository nói chuyện với DB, service giữ logic, schema validate đầu vào. Alembic quản lý schema; toàn bộ chạy được dưới Docker với Postgres.' },
        { h: 'Kiểm thử', p: 'Trong 20 test, bộ mình quan tâm nhất không phải mấy test CRUD — mà là test đăng nhập bằng tenant A rồi khẳng định dữ liệu tenant B vô hình. Đó mới là tính chất thật sự quan trọng ở đây.' },
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
    projectsLead: 'The one I keep coming back to. Open it for the details.',
    contactLead: 'Open to talk — pick whichever is easiest.',
    readMore: 'Read more',
    backToProjects: 'Back',
    roleLabel: 'Role',
    flowLabel: 'How it flows',
    glanceLabel: 'At a glance',
    repoNote: 'Source available on request.',
    nowPlaying: 'Now playing',
    notPlaying: 'Not playing right now',
    onSpotify: 'on Spotify',
    spotifyBtn: 'Now playing',
    paletteHint: 'Type to jump anywhere…',
    footer: 'Built from scratch — HTML, CSS, JS. No frameworks.',
    footerTip: 'Tip: press Ctrl / Cmd + K',
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
    projectsLead: 'Dự án mình quay lại nhiều nhất. Mở ra để xem chi tiết.',
    contactLead: 'Sẵn sàng trao đổi — chọn kênh nào tiện nhất.',
    readMore: 'Xem thêm',
    backToProjects: 'Quay lại',
    roleLabel: 'Vai trò',
    flowLabel: 'Luồng hoạt động',
    glanceLabel: 'Tóm tắt nhanh',
    repoNote: 'Có thể cung cấp mã nguồn khi cần.',
    nowPlaying: 'Đang nghe',
    notPlaying: 'Đang không nghe gì',
    onSpotify: 'trên Spotify',
    spotifyBtn: 'Đang nghe',
    paletteHint: 'Gõ để nhảy tới bất cứ đâu…',
    footer: 'Tự tay làm — HTML, CSS, JS. Không framework.',
    footerTip: 'Mẹo: nhấn Ctrl / Cmd + K',
    statusOnline: 'TRỰC TUYẾN',
    statusSession: 'phiên',
  },
};

/* boot log lines for the system intro */
export const INTRO_BOOT = {
  en: ['init display', 'mount /home/khang', 'load embedded core', 'link backend', 'spotify uplink', 'ready'],
  vi: ['khởi tạo màn hình', 'gắn /home/khang', 'nạp lõi embedded', 'kết nối backend', 'liên kết spotify', 'sẵn sàng'],
};
