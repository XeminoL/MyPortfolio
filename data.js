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
  // titles cycled by the hero typing effect
  roles: {
    en: ['embedded systems', 'FPGA & RTL', 'backend services'],
    vi: ['hệ thống nhúng', 'FPGA & RTL', 'backend'],
  },
  tagline: {
    en: 'Computer Engineering student working across embedded systems (ESP32, STM32), FPGA / Verilog, and Python / C# backends. I enjoy building projects end to end to understand how they work.',
    vi: 'Sinh viên Kỹ thuật Máy tính, làm việc với hệ thống nhúng (ESP32, STM32), FPGA / Verilog, và backend Python / C#. Mình thích xây dự án từ đầu đến cuối để hiểu cách chúng hoạt động.',
  },
  // one honest line for the contact section
  availability: {
    en: 'Student, third year. Open to internships and to talking about embedded, FPGA or backend work.',
    vi: 'Sinh viên năm ba. Sẵn sàng cho cơ hội thực tập và trao đổi về mảng nhúng, FPGA hoặc backend.',
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
    'I am a Computer Engineering student at HCMUT, focused on embedded systems, FPGA / RTL design, and backend development.',
    'Most of my work started as coursework that I extended into more complete projects — a CPU and an image accelerator in Verilog, an IoT system with firmware and a backend, and a multi-tenant web application.',
    'I like building projects from the ground up, since it helps me understand how each layer works and how the pieces fit together.',
  ],
  vi: [
    'Mình là sinh viên Kỹ thuật Máy tính tại ĐH Bách Khoa, tập trung vào hệ thống nhúng, thiết kế FPGA / RTL, và phát triển backend.',
    'Phần lớn dự án của mình bắt đầu từ bài tập môn học rồi mình phát triển thành các dự án hoàn chỉnh hơn — một CPU và một bộ tăng tốc ảnh bằng Verilog, một hệ thống IoT gồm firmware và backend, và một ứng dụng web multi-tenant.',
    'Mình thích xây dự án từ đầu, vì điều đó giúp mình hiểu cách từng tầng hoạt động và cách các phần khớp với nhau.',
  ],
};

/* How I work — concrete habits, each tied to a real project. */
export const APPROACH = {
  en: [
    { title: 'Understand it end to end',
      body: 'I build the core parts myself before reaching for a framework — for example, writing to raw sockets and a hand-driven FSM — so I understand what a library would otherwise hide.' },
    { title: 'Design for correctness',
      body: 'In the multi-tenant tracker, tenant isolation is enforced in a single base query rather than in every route, so it cannot be missed. I look for the one place that prevents a whole class of mistakes.' },
    { title: 'Measure before optimizing',
      body: 'On the FPGA image pipeline, the computation was cheap and UART was the real bottleneck. I try to find where the time actually goes before making changes.' },
  ],
  vi: [
    { title: 'Hiểu từ đầu đến cuối',
      body: 'Mình tự viết phần lõi trước khi dùng framework — ví dụ viết trực tiếp trên socket và một FSM tự điều khiển — để hiểu những gì một thư viện sẽ che đi.' },
    { title: 'Thiết kế hướng tới tính đúng đắn',
      body: 'Trong issue tracker multi-tenant, việc cô lập tenant được ép ở một query gốc thay vì ở từng route, nên không thể bỏ sót. Mình tìm đúng một điểm ngăn được cả một lớp lỗi.' },
    { title: 'Đo trước khi tối ưu',
      body: 'Ở pipeline xử lý ảnh trên FPGA, phần tính toán rẻ còn UART mới là nút cổ chai. Mình cố tìm xem thời gian thật sự đi đâu trước khi thay đổi.' },
  ],
};

/* Now — neutral, present tense. */
export const NOW = {
  en: 'Building small systems end to end, studying more than I write, and preparing for two summer internships.',
  vi: 'Xây các hệ thống nhỏ từ đầu đến cuối, học nhiều hơn viết, và chuẩn bị cho hai kỳ thực tập hè.',
};

/* Timeline — real milestones. Years are approximate by design.
   To name the 2026 employers, just add them into the 2026 text. */
export const TIMELINE = {
  en: [
    { year: '2023', text: 'Started Computer Engineering at HCMUT (Bach Khoa).' },
    { year: '2024', text: 'Logic-design coursework: an 8-bit RISC CPU and an FPGA image accelerator, both in Verilog, built from the datapath up.' },
    { year: '2025', text: 'Broadened into an IoT farm, a from-scratch async HTTP server, a multi-tenant web app, a Petri-net analyzer, and data analysis in R.' },
    { year: '2026', text: 'Two summer internships — one embedded / hardware-leaning, one in cloud.' },
  ],
  vi: [
    { year: '2023', text: 'Bắt đầu Kỹ thuật Máy tính tại ĐH Bách Khoa.' },
    { year: '2024', text: 'Bài tập thiết kế luận lý: một CPU RISC 8-bit và một bộ tăng tốc ảnh FPGA, đều bằng Verilog, dựng từ datapath lên.' },
    { year: '2025', text: 'Mở rộng sang một hệ thống IoT nông nghiệp, một async HTTP server tự viết, một ứng dụng web multi-tenant, một bộ phân tích mạng Petri, và phân tích dữ liệu bằng R.' },
    { year: '2026', text: 'Hai kỳ thực tập hè — một thiên về nhúng / phần cứng, một về cloud.' },
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
    id: 'risc-cpu',
    icon: 'CPU',
    name: 'RISC CPU',
    year: '2024',
    meta: { en: 'Verilog · Vivado', vi: 'Verilog · Vivado' },
    role: { en: 'Solo · logic-design course', vi: 'Cá nhân · môn Thiết kế luận lý' },
    blurb: {
      en: 'An 8-bit accumulator CPU built from the datapath up in Verilog.',
      vi: 'CPU accumulator 8-bit dựng từ datapath bằng Verilog.',
    },
    tags: ['Verilog', 'RTL', 'FSM', 'Vivado'],
    flow: ['PC', 'Instr reg', 'Decode FSM', 'ALU', 'Accumulator', '32B RAM'],
    highlights: {
      en: ['1-byte instructions: 3-bit opcode + 5-bit address', '8 ops over a 32-byte address space', 'Hand-driven fetch → decode → execute FSM', 'Verified cycle-by-cycle in simulation'],
      vi: ['Lệnh 1 byte: 3-bit opcode + 5-bit địa chỉ', '8 phép toán trên không gian 32 byte', 'FSM fetch → decode → execute tự kéo tay', 'Kiểm chứng từng chu kỳ khi mô phỏng'],
    },
    detail: {
      en: [
        { h: 'What it is', p: 'An 8-bit, accumulator-based processor. Every instruction is a single byte — a 3-bit opcode and a 5-bit address — which gives 8 operations over a 32-byte address space.' },
        { h: 'How it works', p: 'The datapath is a program counter, instruction register, accumulator, a 32-byte RAM and an ALU doing ADD / SUB / AND / OR / XOR / NOT / shift. A controller FSM walks fetch → decode → execute and drives every load and enable line by hand.' },
        { h: 'A key tradeoff', p: 'A single accumulator keeps the decode logic tiny, but everything routes through one register, so even trivial programs need a lot of loads and stores. That is the moment you feel, concretely, why real ISAs have register files.' },
        { h: 'Result', p: 'Validated by loading a small program into memory in simulation and watching the accumulator and PC step correctly, cycle by cycle, against what I had worked out on paper.' },
      ],
      vi: [
        { h: 'Là gì', p: 'Một vi xử lý 8-bit kiểu accumulator. Mỗi lệnh đúng một byte — 3-bit opcode và 5-bit địa chỉ — cho ra 8 phép toán trên không gian địa chỉ 32 byte.' },
        { h: 'Cách hoạt động', p: 'Datapath gồm program counter, thanh ghi lệnh, accumulator, RAM 32 byte và một ALU làm ADD / SUB / AND / OR / XOR / NOT / dịch. Một FSM điều khiển đi qua fetch → decode → execute và tự tay kéo từng đường load/enable.' },
        { h: 'Một đánh đổi chính', p: 'Một accumulator duy nhất giữ logic decode rất nhỏ, nhưng mọi thứ phải đi qua một thanh ghi, nên chương trình tầm thường cũng cần rất nhiều load/store. Đó là lúc cảm nhận cụ thể vì sao ISA thật có register file.' },
        { h: 'Kết quả', p: 'Kiểm chứng bằng cách nạp một chương trình nhỏ vào bộ nhớ khi mô phỏng và xem accumulator với PC chạy đúng từng chu kỳ, đối chiếu với những gì mình đã tính trên giấy.' },
      ],
    },
  },
  {
    id: 'fpga-rotate',
    icon: 'FPGA',
    name: 'FPGA Image Rotate',
    year: '2024',
    meta: { en: 'Verilog · Arty Z7-20', vi: 'Verilog · Arty Z7-20' },
    role: { en: 'Group of 3 · I owned the datapath', vi: 'Nhóm 3 · mình phụ trách datapath' },
    blurb: {
      en: 'Rotate and mirror a 256×256 image in hardware, streamed over UART.',
      vi: 'Xoay và lật ảnh 256×256 bằng phần cứng, truyền qua UART.',
    },
    tags: ['FPGA', 'Verilog', 'BRAM', 'UART'],
    flow: ['JPEG (host)', '.coe', 'BRAM in', 'Address remap', 'BRAM out', 'UART', 'Python host'],
    highlights: {
      en: ['256×256 grayscale, transformed in hardware', 'Rotate is pure address arithmetic — no pixel moves', 'Dual-port BRAM so read and write never fight', 'Synthesized with 0 errors on the Arty Z7-20'],
      vi: ['Ảnh xám 256×256, biến đổi bằng phần cứng', 'Xoay chỉ là số học địa chỉ — không pixel nào di chuyển', 'BRAM hai cổng nên đọc/ghi không tranh nhau', 'Tổng hợp 0 lỗi trên Arty Z7-20'],
    },
    detail: {
      en: [
        { h: 'What it is', p: 'A 256×256 grayscale image is loaded into block RAM, transformed in hardware, and read back to a Python host over UART.' },
        { h: 'Approach', p: 'The transform is pure address arithmetic: a rotation is (x, y) → (y, 255 − x); a mirror flips one axis. No pixel actually moves — you just rewrite the read address into the output buffer. That is the whole reason to do it on an FPGA instead of in software.' },
        { h: 'Performance', p: 'Two BRAM ports let read and write happen without fighting over one memory. The slow part is UART, not the maths: at this image size the serial link dominates, so the compute being effectively free only matters because the FPGA can keep the pipeline full.' },
        { h: 'Result', p: 'Synthesis completed with 0 errors on the Arty Z7-20, and the design was verified with testbenches. The Python side handles JPEG → .coe conversion and reassembles the bytes that come back.' },
      ],
      vi: [
        { h: 'Là gì', p: 'Một ảnh xám 256×256 được nạp vào block RAM, biến đổi bằng phần cứng, rồi đọc ngược về host Python qua UART.' },
        { h: 'Cách tiếp cận', p: 'Phép biến đổi thuần là số học địa chỉ: xoay là (x, y) → (y, 255 − x); lật thì đổi một trục. Không pixel nào thật sự di chuyển — chỉ viết lại địa chỉ đọc vào buffer ra. Đó chính là lý do làm trên FPGA thay vì phần mềm.' },
        { h: 'Hiệu năng', p: 'Hai cổng BRAM cho phép đọc và ghi không tranh nhau một bộ nhớ. Chỗ chậm là UART chứ không phải phần tính: ở kích thước ảnh này, đường serial mới là nút cổ chai, nên việc tính "miễn phí" chỉ có nghĩa vì FPGA giữ pipeline luôn đầy.' },
        { h: 'Kết quả', p: 'Tổng hợp hoàn tất với 0 lỗi trên Arty Z7-20, và thiết kế được kiểm chứng bằng testbench. Bên Python lo chuyển JPEG → .coe và ghép lại các byte trả về.' },
      ],
    },
  },
  {
    id: 'http-server',
    icon: 'NET',
    name: 'Async HTTP Server',
    year: '2025',
    meta: { en: 'Python · raw sockets', vi: 'Python · socket thô' },
    role: { en: 'Solo · networks course', vi: 'Cá nhân · môn Mạng' },
    blurb: {
      en: 'A non-blocking HTTP server with auth, cookies and a chat on top — no framework.',
      vi: 'HTTP server non-blocking có auth, cookie và chat — không framework.',
    },
    tags: ['Python', 'AsyncIO', 'HTTP', 'Sockets'],
    flow: ['Socket', 'Event loop', 'Ready set', 'HTTP parse', 'Handler', 'Response'],
    highlights: {
      en: ['One thread, many sockets — no thread-per-request', 'Basic Auth + a session cookie, by hand', 'A long-polling chat on top, no WebSocket', 'A request becomes a state machine, not a call'],
      vi: ['Một luồng, nhiều socket — không thread mỗi request', 'Basic Auth + cookie session, tự viết', 'Một chat long-poll phía trên, không WebSocket', 'Một request thành máy trạng thái, không phải lời gọi'],
    },
    detail: {
      en: [
        { h: 'What it is', p: 'The course handed over an async event-loop skeleton; I wrote the HTTP layer and the handlers on top of raw sockets — no framework underneath.' },
        { h: 'Concept', p: 'Non-blocking means one thread juggling many sockets: you never call recv and wait, you ask the loop which sockets are ready and only touch those. A request stops being a function call and becomes a state machine you advance whenever bytes arrive.' },
        { h: 'Auth & sessions', p: 'I implemented Basic Auth — parse the header, return 401 with WWW-Authenticate when it is missing — and a session cookie set after login and read back on later requests.' },
        { h: 'Real-time chat', p: 'A small chat: peers register with a tracker, the tracker fans messages out, and the page long-polls every second. No WebSocket — just plain fetch loops, which is enough to feel real-time at this scale.' },
      ],
      vi: [
        { h: 'Là gì', p: 'Môn học cho sẵn khung event-loop async; mình viết tầng HTTP và các handler trên socket thô — không framework bên dưới.' },
        { h: 'Ý tưởng', p: 'Non-blocking nghĩa là một luồng xoay nhiều socket: không bao giờ gọi recv rồi ngồi đợi, mà hỏi event loop socket nào sẵn sàng và chỉ đụng vào cái đó. Một request thôi không còn là lời gọi hàm, mà thành máy trạng thái được đẩy tiến mỗi khi có byte tới.' },
        { h: 'Auth & phiên', p: 'Mình hiện thực Basic Auth — parse header, trả 401 kèm WWW-Authenticate khi thiếu — và một cookie session set sau khi đăng nhập, rồi đọc lại ở các request sau.' },
        { h: 'Chat thời gian thực', p: 'Một chat nhỏ: các peer đăng ký với tracker, tracker phát tin ra, trang long-poll mỗi giây. Không WebSocket — chỉ vòng fetch thường, đủ để cảm giác real-time ở quy mô này.' },
      ],
    },
  },
  {
    id: 'yolo-farm',
    icon: 'IoT',
    name: 'AIoT Farm',
    year: '2025',
    meta: { en: 'ESP32 · Flask · MQTT', vi: 'ESP32 · Flask · MQTT' },
    role: { en: 'Group · I owned firmware + backend', vi: 'Nhóm · mình phụ trách firmware + backend' },
    blurb: {
      en: 'Sensors → ESP32 → MQTT → a Flask backend that waters plants on a schedule.',
      vi: 'Cảm biến → ESP32 → MQTT → backend Flask tưới cây theo lịch.',
    },
    tags: ['ESP32-S3', 'MQTT', 'Flask', 'SQLite'],
    flow: ['Sensors', 'ESP32-S3', 'MQTT (Adafruit IO)', 'Flask', 'SQLite', 'Pump relay'],
    highlights: {
      en: ['DHT20 + soil + light, shown on an I2C LCD', 'Closed-loop watering on raw ADC thresholds', 'APScheduler runs timed watering server-side', 'Honest scope: the "YOLO" part was never built'],
      vi: ['DHT20 + đất + ánh sáng, hiện trên LCD I2C', 'Tưới vòng kín theo ngưỡng ADC thô', 'APScheduler chạy tưới theo giờ phía server', 'Nói thật: phần "YOLO" chưa từng được làm'],
    },
    detail: {
      en: [
        { h: 'What it is', p: 'An ESP32-S3 reads temperature and humidity (DHT20), soil moisture and light, shows them on an I2C LCD, and publishes to Adafruit IO over MQTT.' },
        { h: 'Closed-loop watering', p: 'Below a dry threshold the firmware drives the pump relay; above a wet one it stops. The thresholds are raw ADC counts, not nice units — calibrating "what number actually means dry soil" was most of the work, and it drifts with the probe.' },
        { h: 'Why a backend', p: 'The Flask backend stores plants, watering logs and schedules in SQLite, and an APScheduler job runs timed watering server-side — so it keeps working even when I am not watching the dashboard.' },
        { h: 'Honest scope', p: 'The "YOLO" pest-detection in the name never got past an idea — there is no model and no inference code on disk. What actually runs is the firmware + MQTT + backend loop, and I would rather say that plainly than imply more.' },
      ],
      vi: [
        { h: 'Là gì', p: 'Một con ESP32-S3 đọc nhiệt độ và độ ẩm (DHT20), độ ẩm đất và ánh sáng, hiện lên LCD I2C, rồi publish lên Adafruit IO qua MQTT.' },
        { h: 'Tưới vòng kín', p: 'Dưới ngưỡng khô thì firmware bật relay bơm; trên ngưỡng ướt thì dừng. Ngưỡng là giá trị ADC thô chứ không phải đơn vị đẹp — canh "con số nào mới thật sự là đất khô" mới là phần tốn công nhất, và nó trôi theo đầu dò.' },
        { h: 'Vì sao cần backend', p: 'Backend Flask lưu cây, nhật ký tưới và lịch trong SQLite, một job APScheduler chạy tưới theo giờ phía server — nên vẫn hoạt động kể cả khi mình không ngó dashboard.' },
        { h: 'Phạm vi thật', p: 'Phần "YOLO" nhận diện sâu bệnh trong tên chỉ dừng ở ý tưởng — không có model, không có code inference trên ổ. Cái chạy thật là vòng firmware + MQTT + backend, và mình thà nói thẳng còn hơn để người ta hiểu lố.' },
      ],
    },
  },
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
  {
    id: 'petri-net',
    icon: 'PN',
    name: 'Petri Net Analyzer',
    year: '2025',
    meta: { en: 'Python · BDD · ILP', vi: 'Python · BDD · ILP' },
    role: { en: 'Solo · modelling course', vi: 'Cá nhân · môn mô hình hoá' },
    blurb: {
      en: 'Reachability and deadlock analysis for Petri nets, implemented two ways for comparison.',
      vi: 'Phân tích khả đạt & deadlock cho mạng Petri, cài đặt theo hai cách để so sánh.',
    },
    tags: ['Python', 'BDD', 'ILP', 'PuLP'],
    flow: ['PNML', 'Parser', 'Explicit BFS / Symbolic BDD', 'Reachability + deadlock', 'ILP (PuLP)'],
    highlights: {
      en: ['Parses Petri nets from PNML', 'Explicit BFS vs symbolic BDD, side by side', 'BDD scales where the explicit search chokes', 'Best firing sequence framed as an ILP'],
      vi: ['Đọc mạng Petri từ PNML', 'BFS tường minh vs BDD ký hiệu, đặt cạnh nhau', 'BDD co giãn ở chỗ tìm tường minh nghẹn', 'Chuỗi fire tốt nhất đặt thành bài ILP'],
    },
    detail: {
      en: [
        { h: 'Scope', p: 'It parses a Petri net from PNML, then answers two questions: which states are reachable, and can the system deadlock — reach a state where nothing can fire.' },
        { h: 'Two approaches', p: 'The explicit method does BFS over markings: simple, but the state set blows up exponentially. The symbolic method encodes whole sets of states as a BDD, so it scales to nets the explicit search chokes on. Doing both shows exactly where each one breaks.' },
        { h: 'Optimization', p: 'Finding the best firing sequence under constraints is framed as an integer linear program and solved with PuLP — useful when you want the best reachable sequence, not just any reachable one.' },
        { h: 'What it taught me', p: 'This is the project that made state-space explosion concrete: the same question, two encodings, and wildly different limits depending on how you represent the states.' },
      ],
      vi: [
        { h: 'Phạm vi', p: 'Nó parse mạng Petri từ PNML, rồi trả lời hai câu hỏi: trạng thái nào tới được, và hệ có deadlock không — tới một trạng thái mà không transition nào fire được.' },
        { h: 'Hai cách tiếp cận', p: 'Cách tường minh duyệt BFS trên các marking: đơn giản, nhưng tập trạng thái nổ theo cấp số mũ. Cách ký hiệu mã hóa cả tập trạng thái thành BDD nên co giãn tới những mạng mà cách tường minh nghẹn. Làm cả hai để thấy chính xác mỗi cách gãy ở đâu.' },
        { h: 'Tối ưu', p: 'Tìm chuỗi fire tốt nhất dưới ràng buộc được đặt thành bài quy hoạch tuyến tính nguyên và giải bằng PuLP — hữu ích khi cần chuỗi tới được tốt nhất, chứ không chỉ một chuỗi tới được bất kỳ.' },
        { h: 'Học được gì', p: 'Đây là dự án làm cho mình hiểu cụ thể "state-space explosion": cùng một câu hỏi, hai cách mã hóa, và giới hạn khác nhau một trời một vực tùy cách biểu diễn trạng thái.' },
      ],
    },
  },
  {
    id: 'stats-r',
    icon: 'R',
    name: 'Internet Ads Classifier',
    year: '2025',
    meta: { en: 'R · logistic regression', vi: 'R · hồi quy logistic' },
    role: { en: 'Solo · statistics course', vi: 'Cá nhân · môn Xác suất thống kê' },
    blurb: {
      en: 'Classifying ad images from layout features, using logistic regression in R.',
      vi: 'Phân loại ảnh quảng cáo từ đặc trưng layout, dùng logistic regression trong R.',
    },
    tags: ['R', 'Logistic Reg.', 'Hypothesis testing'],
    flow: ['UCI dataset', 'Clean + impute', 'Feature tests', 'Logistic reg', 'Odds ratios + ROC'],
    highlights: {
      en: ['UCI Internet-Ads: is this image an ad?', 'Over a thousand sparse features, many missing', 't-tests / Mann-Whitney before trusting a feature', 'Read through odds ratios and ROC, not raw accuracy'],
      vi: ['UCI Internet-Ads: ảnh này có phải quảng cáo?', 'Hơn ngàn đặc trưng thưa, nhiều giá trị thiếu', 't-test / Mann-Whitney trước khi tin một đặc trưng', 'Đọc qua odds ratio và ROC, không nhìn accuracy thô'],
    },
    detail: {
      en: [
        { h: 'What it is', p: 'UCI Internet-Ads: predict whether an image on a page is an advert, from features like geometry, aspect ratio and URL tokens.' },
        { h: 'Data preparation', p: 'The dataset has missing values and over a thousand sparse features, so cleaning the data and choosing what to keep mattered far more than which model I picked.' },
        { h: 'Reliability', p: 'Before trusting any feature I checked that it actually separates the two classes — t-tests where the assumptions hold, Mann-Whitney where they do not. Then logistic regression, read through odds ratios so a coefficient means something concrete.' },
        { h: 'Judging it honestly', p: 'On an imbalanced set raw accuracy lies, so I judged the model by its ROC curve instead — which keeps you honest about false positives.' },
      ],
      vi: [
        { h: 'Là gì', p: 'UCI Internet-Ads: đoán một ảnh trên trang có phải quảng cáo không, từ đặc trưng như hình học, tỉ lệ và token URL.' },
        { h: 'Chuẩn bị dữ liệu', p: 'Dữ liệu có giá trị thiếu và hơn ngàn đặc trưng thưa, nên làm sạch dữ liệu và chọn giữ cái gì quan trọng hơn nhiều so với việc chọn mô hình nào.' },
        { h: 'Độ tin cậy', p: 'Trước khi tin một đặc trưng, mình kiểm tra nó có thật sự tách hai lớp không — t-test khi giả định thỏa, Mann-Whitney khi không. Rồi hồi quy logistic, đọc qua odds ratio để một hệ số có nghĩa cụ thể.' },
        { h: 'Đánh giá trung thực', p: 'Trên tập lệch, accuracy thô nói dối, nên mình đánh giá mô hình bằng đường ROC — thứ giữ cho mình thành thật về false positive.' },
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
    projectsLead: 'Things I rebuilt to understand. Open one for the details.',
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
    projectsLead: 'Những thứ mình dựng lại để hiểu. Mở một cái để xem chi tiết.',
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
