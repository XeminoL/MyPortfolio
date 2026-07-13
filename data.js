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
    en: ['things that work', 'a CPU in Verilog', 'a multi-tenant backend', 'an IoT system'],
    vi: ['những thứ chạy được', 'một CPU bằng Verilog', 'một backend multi-tenant', 'một hệ thống IoT'],
  },
  tagline: {
    en: "Computer Engineering student at HCMUT. I've built a bit of everything so far, and I usually learn a thing by just building it.",
    vi: "Sinh viên Kỹ thuật Máy tính ở Bách Khoa. Tới giờ mình làm qua khá nhiều thứ, và thường thì cứ bắt tay làm là hiểu.",
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
    "I'm a Computer Engineering student at HCMUT. Over the last three years I've touched a lot of different things: mạch and Verilog, microcontrollers, an OS assignment, some networking, a bit of ML and stats, and web backends. I don't have one thing I call my specialty yet, and I'm okay with that for now.",
    "Most of it started as coursework. A few I kept going on after the deadline because I wanted them to actually work, not just pass. That's usually how I end up learning something properly.",
    "I'm decent at picking up whatever a project needs and getting it working. If you hand me something I haven't done before, I'll figure it out.",
  ],
  vi: [
    "Mình là sinh viên Kỹ thuật Máy tính ở Bách Khoa. Ba năm qua mình làm qua khá nhiều thứ: mạch với Verilog, vi điều khiển, một đồ án hệ điều hành, ít mạng máy tính, chút ML và thống kê, với backend web. Mình chưa có mảng nào gọi là chuyên, và giờ mình thấy vậy cũng ổn.",
    "Phần lớn bắt đầu từ bài tập môn. Vài cái mình làm tiếp sau khi hết hạn, vì muốn nó chạy thật chứ không chỉ qua môn. Thường thì đó là lúc mình hiểu một thứ tới nơi.",
    "Mình bắt nhịp được với thứ dự án cần và làm cho nó chạy. Đưa mình cái gì chưa làm bao giờ, mình cũng mò ra.",
  ],
};

/* How I work — concrete habits, each tied to a real project. */
export const APPROACH = {
  en: [
    { title: 'I learn by doing',
      body: "Reading docs doesn't stick with me. I have to actually build the thing, break it, and see what happens. That's how most of what's on this site got made." },
    { title: 'I finish what I start',
      body: "I got turned down by six companies before three said yes. I'm used to things not working the first time and just keep going until they do." },
    { title: "I'd rather ask than guess",
      body: "When something behaves weird I'd rather dig until I know why than paper over it. It's slower, but I don't like leaving a thing I don't understand." },
  ],
  vi: [
    { title: 'Mình học bằng cách làm',
      body: "Đọc tài liệu không vào đầu mình mấy. Phải tự tay dựng, làm hỏng, rồi xem chuyện gì xảy ra. Phần lớn thứ trên trang này ra đời kiểu đó." },
    { title: 'Bắt đầu thì làm cho xong',
      body: "Mình bị sáu công ty từ chối trước khi có ba chỗ nhận. Quen với việc lần đầu không chạy rồi, cứ làm tới khi được thì thôi." },
    { title: 'Thà hỏi còn hơn đoán',
      body: "Thứ gì chạy lạ là mình đào cho ra tại sao chứ không lấp cho qua. Chậm hơn, nhưng mình không thích để lại một cái mình chưa hiểu." },
  ],
};

/* Now — neutral, present tense. */
export const NOW = {
  en: 'Interning, reading a lot more than I write these days, and still looking for the next thing.',
  vi: 'Đang thực tập, dạo này đọc nhiều hơn viết, và vẫn đang tìm chỗ tiếp theo.',
};

/* Timeline — real milestones. Years are approximate by design.
   To name the 2026 employers, just add them into the 2026 text. */
export const TIMELINE = {
  en: [
    { year: '2023', text: 'Started Computer Engineering at HCMUT.' },
    { year: '2024', text: 'Digital-logic year: a small RISC CPU and an FPGA image accelerator, both in Verilog.' },
    { year: '2025', text: 'Built an IoT farm, an HTTP server on raw sockets, the multi-tenant issue tracker, and some modelling and stats work.' },
    { year: '2026', text: 'Looking for a summer internship.' },
  ],
  vi: [
    { year: '2023', text: 'Bắt đầu Kỹ thuật Máy tính tại ĐH Bách Khoa.' },
    { year: '2024', text: 'Năm học luận lý số: một CPU RISC nhỏ và một bộ tăng tốc ảnh FPGA, đều bằng Verilog.' },
    { year: '2025', text: 'Làm một hệ thống IoT, một HTTP server viết trên socket thô, issue tracker multi-tenant, cùng vài bài mô hình hoá và thống kê.' },
    { year: '2026', text: 'Đang tìm một kỳ thực tập hè.' },
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
    contactLead: 'The fastest ways to reach me.',
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
    contactLead: 'Cách nhanh nhất để liên hệ mình.',
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
