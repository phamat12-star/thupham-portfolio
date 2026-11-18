/* All site content lives here. Edit text and numbers in this file only.
   Source of truth: CV_Thu_Pham_A4.pdf (updated 9/11/2026). Every number below comes from that CV. */
window.PORTFOLIO = {
  person: {
    name: "Thu Pham (Shu)",
    title: "Digital Marketing Specialist · Social Media & Community · Content Marketing & SEO",
    intro: "6+ years designing organic and paid acquisition strategies across Facebook, TikTok, Zalo and search engines. I lead a 2-person team and outsourced partners, and use AI-driven workflows to shorten production time and improve ROI.",
    location: "Ho Chi Minh City, Vietnam",
    email: "pham.at12@gmail.com",
    phone: "+84909132401",
    phoneDisplay: "+84 909 132 401",
    linkedin: "https://www.linkedin.com/in/thu-pham-1020",
    cvFile: "cv.html"
  },

  stats: [
    { value: 6, suffix: "+", label: "Years in digital marketing", note: "Organic and paid acquisition, since 2020" },
    { value: 4, suffix: "", label: "Industries", note: "Healthcare · Pharmaceutical · Education · Tourism" },
    { value: 100, suffix: "+", label: "Fanpages in our network", note: "Satellite network for SEO, Medpharm" },
    { value: 2, suffix: "", label: "Team members led", note: "Plus outsourced partners" }
  ],

  about: {
    paragraphs: [
      "I work where community, content and performance meet. I start with what the audience cares about, then design the content, channels and measurement that turn attention into action.",
      "My background is in community management and SEO writing. That means I can write for search, run a community day to day, and read the numbers that tell me what to change next.",
      "Lately I have used AI to shorten production time and to build workflows the whole team can reuse."
    ],
    skills: [
      "Social media strategy", "Paid social (Meta & TikTok Ads)", "Community growth",
      "Influencer marketing", "Trend-jacking & social listening", "Content creation & copywriting",
      "SEO foundations", "WordPress", "Google Analytics 4", "Google Search Console",
      "Ahrefs", "Yoast SEO", "Meta Business Suite", "CapCut · Photoshop · Canva",
      "ChatGPT · Claude · Google AI", "Outsourced partner management"
    ]
  },

  expertise: [
    {
      no: "01",
      title: "Social & Paid Media",
      desc: "Plan omnichannel campaigns across Facebook, TikTok and Zalo, then manage the paid budget against CPA targets.",
      skills: ["Omnichannel strategy", "Meta & TikTok Ads", "A/B testing", "Meta Business Suite"]
    },
    {
      no: "02",
      title: "Community Growth",
      desc: "Launch communities from zero and keep members active with minigames, campaigns and expert livestreams.",
      skills: ["Community building", "Minigames & campaigns", "Expert livestreams", "Member retention"]
    },
    {
      no: "03",
      title: "Content & SEO",
      desc: "Research keywords, write content that ranks, and run the technical audits that keep it indexed.",
      skills: ["Keyword research", "SEO content", "Technical audits", "Content funnels", "GA4 analysis"]
    },
    {
      no: "04",
      title: "AI Workflows & Production",
      desc: "Use AI tools to shorten production time, and turn repeat work into workflows the whole team can use.",
      skills: ["AI content workflows", "Video production", "Brand Hub", "Cross-team collaboration"]
    }
  ],

  // Four projects, each taken from the CV (Medpharm, Mastr Mode and The Aura, Hello Bacsi).
  projects: [
    {
      id: "hello-bacsi",
      order: 3,
      no: "03",
      category: "COMMUNITY",
      title: "8 health communities grown to 132K+ members",
      short: "Community growth from zero, Hello Bacsi (2020–2023)",
      tags: ["Planning", "Video Scripts", "Communication", "Community Activities Management", "Data Analytics"],
      context: "Hello Bacsi is a leading digital health company in Asia. I scaled eight healthcare communities from scratch, where members share health questions and talk with doctors and experts.",
      actions: [
        "Ran minigames, campaigns and expert livestreams for each community.",
        "Partnered with cross-functional teams on lifecycle email campaigns.",
        "Used AI integrations to cut response time to under 5 minutes.",
        "Managed the community operating budget."
      ],
      results: [
        { value: 132, suffix: "K+", label: "members across 8 communities" },
        { value: 450, suffix: "K", label: "Average monthly organic visitors" },
        { value: 32, suffix: "%", label: "monthly engagement rate" },
        { value: 3, suffix: "–4K", label: "new members per campaign" }
      ],
      visuals: [
        {
            title: "Livestream: Ask an expert",
            note: "Community Announcement Post",
            lines: [
              "Topic: The secret to choosing a menu for multi-generational families",
              "Platform: Community Website"
            ],
            images: [
              {
                src: "assets/img/cv-livestream-announce-post.png",
                alt: "Livestream announcement post: Choosing a menu for multi-generational families"
              },
              {
                src: "assets/img/cv-livestream-poster.png",
                alt: "Livestream poster: 19:30, 28/06/2022, 100K chances to receive a gift"
              }
            ],
            stats: [],
            list: [],
            links: [
              {
                label: "See post",
                href: "https://hellobacsi.com/community/kiem-soat-can-nang/livestream-giai-dap-thac-mac-cung-chuyen-gia-chu-de-bi-quyet-chon-thuc-don-cho-gia-dinh-nhieu-the-he/"
              }
            ]
          },
        {
            title: "Livestream: The secret to choosing a menu for multi-generational families",
            note: "Livestream results",
            lines: ["Platform: Hello Bacsi & MarryBaby Fanpage"],
            strip: {
              panels: [
                { type: "stats", title: "", sub: "", stats: [{ value: "72K", label: "organic views" }, { value: "385", label: "engagements" }, { value: "149", label: "people interested" }], label: "See post", href: "https://hellobacsi.com/community/kiem-soat-can-nang/livestream-giai-dap-thac-mac-cung-chuyen-gia-chu-de-bi-quyet-chon-thuc-don-cho-gia-dinh-nhieu-the-he/" },
                { type: "img", cls: "sc-poster", src: "assets/img/cv-livestream-poster-countdown.png", alt: "Livestream poster: 19:30, 28/06/2022" },
                { type: "img", cls: "sc-post", src: "assets/img/cv-livestream-post.png", alt: "Hello Bacsi livestream post, 28 June 2022" }
              ],
              groups: [
                { img: { src: "assets/img/cv-livestream-reminder.png", alt: "Reminder card: livestream at 19:30, 28/06/2022" }, title: "Hello Bacsi Fanpage", links: [
                  { label: "Teaser Community", href: "https://hellobacsi.com/community/kiem-soat-can-nang/livestream-giai-dap-thac-mac-cung-chuyen-gia-chu-de-bi-quyet-chon-thuc-don-cho-gia-dinh-nhieu-the-he/" },
                  { label: "Event Page", href: "https://www.facebook.com/share/UgCGLH5Vn82witZC/" },
                  { label: "Post Countdown", href: "https://www.facebook.com/share/v/8uYErJn96N9jnity/" }
                ] },
                { img: { src: "assets/img/cv-livestream-thumb.png", alt: "MarryBaby livestream poster thumbnail" }, title: "MarryBaby Fanpage", links: [
                  { label: "Teaser Community", href: "https://www.marrybaby.vn/community/cham-soc-gia-dinh/livestream-giai-dap-thac-mac-cung-chuyen-gia-chu-de-bi-quyet-chon-thuc-don-cho-gia-dinh-nhieu-the-he-1654075614" },
                  { label: "Post Countdown", href: "https://www.facebook.com/share/v/TdcSHojVhYM2gwhh/" },
                  { label: "Livestream post", href: "https://www.facebook.com/share/v/8qLxnzmDspGkUEfz/" }
                ] }
              ]
            }
        },
        {
            title: "Contest: Healthy Family Moments, share to win",
            note: "Community Announcement Post",
            lines: [
              "Platform: Hello Bacsi Community Website",
              "Brief: Sharing the photo that family doing activities together, has sponsor gifts from Omron clients"
            ],
            images: [
              {
                src: "assets/img/cv-contest-announce-post.png",
                alt: "Contest announcement post: Healthy Family Moments"
              },
              {
                src: "assets/img/cv-contest-poster.png",
                alt: "Contest poster: Healthy Family Moments, 15/06 – 04/07/2022"
              }
            ],
            stats: [],
            list: [],
            links: [
              {
                label: "See post",
                href: "https://hellobacsi.com/community/nuoi-day-con/cuoc-thi-gia-dinh-vui-khoe-khoe-hinh-nhan-thuong-1655262459/"
              }
            ]
          },
        {
            title: "Contest Performance",
            statsRow: true,
            winners: [
              { src: "assets/img/cv-winner-post-1.png", alt: "Winner post 1", href: "https://hellobacsi.com/community/nuoi-day-con/cuoc-thi-gia-dinh-vui-khoe-khoe-hinh-nhan-thuong-noi-tinh-yeu-khong-bao-gio-ket-thuc/", title: "Winner Post 1", line1: "Total engagement: 284", line2: "(214 comments, 70 likes)" },
              { src: "assets/img/cv-winner-post-2.png", alt: "Winner post 2", href: "https://hellobacsi.com/community/nuoi-day-con/gia-dinh-vui-khoe-khoe-hinh-nhan-thuong-gia-dinh-nho-hanh-phuc-to/", title: "Winner Post 2", line1: "Total engagement: 125", line2: "(10 comments, 115 likes)" },
              { src: "assets/img/cv-winner-post-3.png", alt: "Winner post 3", href: "https://hellobacsi.com/community/nuoi-day-con/cuoc-thi-gia-dinh-vui-khoe-khoe-hinh-nhan-thuong-noi-tinh-yeu-khong-bao-gio-ket-thuc/", title: "Winner Post 3", line1: "Total engagement: 133", line2: "(13 comments, 120 likes)" }
            ],
            note: "Photo contest results",
            lines: [],
            images: [
            { src: "assets/img/cv-contest-winners-poster.png", alt: "Contest result poster: prize winners announced" },
            { src: "assets/img/cv-contest-winners-post.png", alt: "Community Admin post: contest results and prize winners" },
            ],
            stats: [
              {
                value: "100K",
                label: "organic views"
              },
              {
                value: "2,511",
                label: "engagements"
              },
              {
                value: "135",
                label: "participants"
              }
            ],
            list: [],
            links: [
              {
                label: "Contest results post",
                href: "https://hellobacsi.com/community/nuoi-day-con/ket-qua-cuoc-thi-gia-dinh-vui-khoe-khoe-hinh-nhan-thuong/"
              }
            ]
          },
        {
            title: "Mini Game: Quick Eyes, Fast Prizes, June 1st Fun",
            note: "Community Announcement Post",
            lines: [
              "Platform: Hello Bacsi Community Website",
              "Brief: Puzzle challenge - Catch prizes on June 1st"
            ],
            images: [
              {
                src: "assets/img/cv-minigame-announce-post.png",
                alt: "Minigame announcement post: Quick Eyes, Fast Prizes"
              },
              {
                src: "assets/img/cv-minigame-poster.png",
                alt: "Minigame poster: Quick Eyes, Fast Prizes, June 1st"
              }
            ],
            stats: [],
            list: [],
            links: [
              {
                label: "See post",
                href: "https://hellobacsi.com/community/mang-thai/minigame-ghep-hinh-nhanh-mat-bat-qua-16/"
              }
            ]
          },
        {
            title: "Mini Game Performance",
            statsRow: true,
            note: "Minigame results",
            lines: [],
            images: [
            { src: "assets/img/cv-minigame-poster-winners.png", alt: "Minigame poster: Quick Eyes, Fast Prizes, June 1st" },
            { src: "assets/img/cv-minigame-winners-post.png", alt: "Minigame result post: prize winners announced" }
          ],
          wide: true,
            stats: [
              {
                value: "57K",
                label: "organic views"
              },
              {
                value: "275",
                label: "engagements"
              },
              {
                value: "85",
                label: "participants"
              }
            ],
            list: [],
            links: [
              {
                label: "Minigame results post",
                href: "https://hellobacsi.com/community/mang-thai/ket-qua-mini-game-ghep-hinh-nhanh-mat-bat-qua-16/"
              }
            ]
          },
        {
            title: "Newsletter Email",
            note: "Community newsletter",
            lines: [],
            images: [
              {
                src: "assets/img/cv-newsletter-email.png",
                alt: "Newsletter email: Ngày Gia đình Việt Nam gift promotion"
              },
              {
                src: "assets/img/cv-newsletter-promo.png",
                alt: "Newsletter: community activities and minigame promotion"
              }
            ],
            stats: [],
            list: [],
            links: []
          },
        {
            title: "Family Activity Infographic",
            rowImages: true,
            note: "7 family activities that keep everyone healthy",
            lines: [],
            images: [
              {
                src: "assets/img/cv-infographic-7.png",
                alt: "Infographic: 7 checklist family activities"
              },
              {
                src: "assets/img/cv-infographic-day1.png",
                alt: "Infographic Day 1: read books together"
              },
              {
                src: "assets/img/cv-infographic-day2.png",
                alt: "Infographic Day 2: whole family runs together"
              }
            ],
            wide: true,
            stats: [],
            list: [],
            links: [
              {
                label: "Family Activity Infographic",
                href: "https://hellobacsi.com/community/nuoi-day-con/checklist-7-hoat-dong-gia-dinh-giup-ca-nha-vui-khoe-1654138130/"
              }
            ]
          },
        {
            title: "Other Popular Activities",
            acts: [
              { src: "assets/img/cv-activity-checkin.png", alt: "Check-in Program", title: "Check-in Program", href: "https://hellobacsi.com/community/kiem-soat-can-nang/tuan-le-check-in-vi-vu-nhan-qua-cung-cong-dong-hello-bacsi-1674014412/" },
              { src: "assets/img/cv-activity-member.png", alt: "Member Appreciation", title: "Member Appreciation", href: "https://hellobacsi.com/community/tieu-duong/hot-hot-hot-tri-an-thanh-vien-noi-bat-tren-cong-dong-hello-bacsi-2022/" },
              { src: "assets/img/cv-activity-opinion.png", alt: "Opinion Question", title: "Opinion Question", href: "https://hellobacsi.com/community/mang-thai/goc-tuong-tac-hoi-dap-nhiet-tinh-rinh-qua-dac-biet/" },
              { src: "assets/img/cv-activity-ask.png", alt: "Community ask, expert reply", title: "Community ask · Expert reply", href: "https://hellobacsi.com/community/mang-thai/cong-dong-hoi-bac-si-tra-loi-cach-phan-biet-mau-bao-thai-va-mau-kinh/" }
            ],

            note: "Community activities",
            lines: [],
            stats: [],
            list: [],
            }
      ],
      cover: "assets/img/hellobacsi-cover-16x10.jpg",
      overviewCover: true,
      overviewResults: true,
      overviewButton: { href: "https://hellobacsi.com/community/", label: "Visit community ↗" },
      featured: {
        title: "Featured project: Family Month Campaign",
        overview: "This initiative is designed to honor the essence of family bonds and highlight the significance of nurturing relationships within families. Throughout the month, we hosted a series of engaging events and activities aimed at strengthening family ties and creating lasting memories. From interactive livestreams on effective communication to fun family outing tips, there was something for everyone to enjoy.",
        sponsor: "Omron",
        image: { src: "assets/img/fm-spotlight.png", alt: "Hello Bacsi Family Month spotlight page" },
        button: { href: "https://hellobacsi.com/spotlight/khoe-manh-toan-dien-vi-gia-dinh/", label: "Visit campaign spotlight ↗" }
      },
      facts: {
        company: "Hello Bacsi, Hello Health Group",
        role: "Community Coordinator",
        period: "08/2020 – 07/2023"
      },
      challenge: "Build healthcare communities from zero, then grow them with campaigns that bring new members in every round and keep them coming back.",
      hideSections: ["insight", "learnings"],
      insight: null, // To add: a member quote or a behaviour insight from the community
      timeline: [
        { when: "June 2022", what: "Teaser posts and the Family Month expert livestream (28/06, 19:30)." },
        { when: "June – July 2022", what: "Photo contest (15/06 – 04/07) and the June 1st minigame (until 19/06)." },
        { when: "July 2022", what: "Results posts and winner announcements for each activity." }
      ],
      campaignResults: [
        { name: "Expert livestream teaser", views: "72K", engagements: "385", people: "149 people interested" },
        { name: "Photo contest", views: "100K", engagements: "2,511", people: "135 participants" },
        { name: "Minigame", views: "57K", engagements: "275", people: "85 participants" }
      ],
      testimonial: {
        image: { src: "assets/img/cv-testimonial-newsletter.png", alt: "Employee of Month newsletter: Thu Pham + Linh Tat, Content Writers" },
        heading: "Employee of Month · Newsletter, Hello Health Group",
        quote: "Thank you very much for your hard work, demonstrating our Hello Health Values and for living the culture. Keep up the good work Team!",
        name: "Thu Pham + Linh Tat",
        role: "Content Writers",
        text: "Thu and Linh have taken a lot of initiatives for Hello Bacsi Engage content and Together content this month, while still managed to achieve her KPIs and contribute to Discover pillar. Thu and Linh really showed the Champion's Mindset in their work!"
      },
      seoArticles: [
        { client: "University of Management and Technology", title: "Top 5 các ngành hot hiện nay: khám phá cơ hội nghề nghiệp đầy triển vọng", type: "Informative Article", href: "https://www.umt.edu.vn/vi-vn/top-5-cac-nganh-hot-hien-nay-kham-pha-co-hoi-nghe-nghiep-day-trien-vong.html" },
        { client: "Hello Bacsi", title: "Người bị suy giãn tĩnh mạch nên ăn gì?", type: "Infographic Article", href: "https://hellobacsi.com/benh-tim-mach/van-de-tim-mach-khac/suy-gian-tinh-mach-nen-an-gi/" },
        { client: "Tanaka", title: "Suy giảm trí nhớ ở người trẻ tuổi: Đừng chủ quan kẻo muộn", type: "Informative Article", href: "https://hellobacsi.com/benh-nao-he-than-kinh/sa-sut-tri-tue-alzheimer/suy-giam-tri-nho-o-nguoi-tre-tuoi/" }
      ],
      learnings: [] // To add: 2–3 lessons from the campaigns
    },
    {
      id: "medpharm-social",
      order: 1,
      no: "01",
      category: "OMNICHANNEL & SOCIAL",
      title: "Omnichannel content at Medpharm: 1.4M+ views across Facebook, TikTok and more",
      short: "1.4M+ views, 796K+ reach and 32 of 57 keywords on page 1",
      tags: ["Omnichannel strategy", "Short-form video", "Facebook & TikTok", "SEO", "AI workflows"],
      context: "As Digital Marketing Lead at Medpharm Pharmaceutical JSC, I ran content across the company's social channels: three Facebook fanpages and a group, three TikTok accounts, YouTube, Instagram and Zalo, backed by a network of satellite pages and the website. The goal was to get more people to watch, trust and search for Medpharm's health products, with a small team and one content pipeline.",
      chips: ["Facebook", "TikTok", "YouTube", "Zalo", "Instagram", "Satellite pages", "Website & SEO", "Meta & TikTok Ads"],
      challenge: [
        "Ten channels and four core products, but a team of two: one content pipeline had to feed every format.",
        "The brand fanpage was flat at about 7,000 followers and product posts did not travel. Health content also has strict rules on what it can claim.",
        "Each platform rewards something different: posts and community on Facebook, short how-to video on TikTok, and keywords on Google."
      ],
      strategy: {
        objectives: [
          { k: "Business", t: "Bring new viewers to Medpharm's core products (Saturex, Hemocyl, Femarelle, Clearwayz) and route them to landing pages, shops and Zalo." },
          { k: "Communication", t: "Be a trusted, easy-to-follow health voice: pharmacist and doctor expertise in short, practical content." },
          { k: "Media", t: "Grow monthly views across every channel, and own search results for 57 tea and health keywords." }
        ],
        audience: [
          { name: "Adults 45–65", tag: "Main", desc: "Living with high blood pressure, blood fat or haemorrhoids. They watch Facebook every day and trust doctors more than ads." },
          { name: "Their adult children, 30–40", tag: "Support", desc: "Look up health information for their parents, mostly on TikTok, and often make the purchase." },
          { name: "Women in midlife", tag: "Support", desc: "Dealing with menopause symptoms (Femarelle). They want discreet, expert answers rather than a sales pitch." }
        ],
        insight: "People share a health tip they can use today, and scroll past a product ad.",
        approach: [
          { t: "Give each channel a job", d: "Facebook for community and conversion, TikTok for reach, YouTube and Zalo video for reuse, and satellite pages for search." },
          { t: "Lead with how-to", d: "Move from product posts to short lists and animations people can apply at home, with the product as the answer, not the headline." },
          { t: "Put experts on camera", d: "The CEO, who is a pharmacist, and partner doctors front the videos, so the content earns trust before it sells." },
          { t: "Make once, cut for every channel", d: "One script becomes a Reel, a TikTok, a YouTube Short and a Zalo video, with AI tools speeding up editing." }
        ],
        channels: [
          { layer: "Facebook", count: "4", goal: "Three fanpages (Medpharm, Saturex, Femarelle) and a health group, for community, consultation and orders.", kpi: "Views, messages, orders" },
          { layer: "TikTok", count: "3", goal: "Brand, animation and 'Sức khỏe Y học' accounts, for reach with short how-to and explainer videos.", kpi: "Views and followers" },
          { layer: "Video reuse", count: "3", goal: "YouTube, Zalo video and Instagram carry the same videos to audiences who are not on TikTok.", kpi: "Views per video" },
          { layer: "Search", count: "115", goal: "Facebook satellite and cover pages plus the website, so people who search a health topic find Medpharm.", kpi: "57 keywords ranked" }
        ],
        phases: [
          { when: "Dec 2024 – Mar 2025", t: "Test formats", d: "Tried animation, minigames and how-to lists. Ads lifted Facebook reach 54× in December 2024." },
          { when: "Feb – May 2026", t: "Add channels", d: "Set up the satellite network, then launched the 'Sức khỏe Y học' TikTok account, YouTube and Zalo video." },
          { when: "Jun 2026", t: "Peak month", d: "634.6K views across all channels in one month, led by Saturex video." },
          { when: "Jul – Sep 2026", t: "Shift focus", d: "Moved video and ads to Hemocyl. The Medpharm fanpage reached 51.1K views in August." }
        ]
      },
      actions: [
        "Led the omnichannel strategy across 10 channels: three Facebook fanpages and a group, three TikTok accounts, YouTube, Instagram and Zalo, with a monthly report on views, reach and followers for each.",
        "Shifted content from product posts to short how-to videos and animation, with the CEO-pharmacist and partner doctors on camera.",
        "Launched the TikTok account 'Sức khỏe Y học': 82.5K views in its first month and about 346K views from April to August 2026.",
        "Led a team of 2 and outsourced vendors, planning monthly content calendars of up to 47 fanpage posts and 18 Reels.",
        "Managed paid social on Meta and TikTok, cutting cost per conversation by 32% (113K → 77K VND) and cost per ThruPlay by 33% through A/B testing of scripts and audiences.",
        "Ran SEO vendors and a network of 115 Facebook satellite and cover pages, with 32 of 57 target keywords on page 1.",
        "Introduced AI into creative workflows and built an AI-powered Brand Hub for cross-team use."
      ],
      results: [
        { value: 1.4, suffix: "M+", dec: 1, label: "views in 7 months (Mar–Sep 2026)" },
        { value: 796, suffix: "K+", label: "reach in 7 months" },
        { value: 32, suffix: "/57", label: "target keywords on page 1 (Aug 2026)" },
        { value: 50, suffix: "%", label: "shorter video production lead time" }
      ],
      facts: {
        company: "Medpharm Pharmaceutical JSC",
        role: "Digital Marketing Lead",
        period: "08/2024 – 10/2026"
      },
      hideSections: ["insight", "timeline"],
      gallery: [],
      visuals: [
        {
          title: "Views across every channel",
          note: "Monthly channel report · Mar – Sep 2026",
          stack: true,
          images: [
            { src: "assets/img/p1-traffic-en.png", alt: "Traffic Social Media 2026: monthly views and viewers by channel, March to September" }
          ],
          stats: [
            { value: "1.4M", label: "views, Mar – Sep 2026" },
            { value: "634.6K", label: "views in June 2026, the peak month" },
            { value: "10", label: "channels tracked every month" }
          ],
          list: [],
          button: null
        },
        {
          title: "Short video that travels",
          note: "TikTok · Facebook fanpage, Jan 2025",
          pair: true,
          images: [
            { src: "assets/img/p1-tiktok-profile.jpg", alt: "Dược Medpharm TikTok profile with pinned videos at 191K, 54.8K and 27.4K views" },
            { src: "assets/img/p1-fb-jan2025.jpg", alt: "Medpharm fanpage insights for January 2025: 46.8K views, 165.9K people reached (+52.7%), 4.2K interactions, 378 new followers" }
          ],
          stats: [
            { value: "191K", label: "views on the top Dược Medpharm TikTok video" },
            { value: "165.9K", label: "people reached on the Medpharm fanpage in Jan 2025 (+52.7%)" },
            { value: "4.2K", label: "content interactions in Jan 2025 (+588.6%)" },
            { value: "+378", label: "new followers in one month (+500%)" }
          ],
          list: [],
          button: null
        },
        {
          title: "AI health explainer videos",
          note: "TikTok · Sức Khỏe Y Học (@songkhoecungsaturex) · since Apr 2026",
          solo: true,
          lines: ["A TikTok channel built on AI-made explainer videos. Each one opens with a health question, shows what happens inside the body with AI-generated visuals, and ends by inviting viewers to ask a Medpharm pharmacist in the community group."],
          images: [
            { src: "assets/img/ai-tiktok-popular.jpg", alt: "Most popular videos on the channel, led by one at 340.8K views" }
          ],
          stats: [
            { value: "340.8K", label: "views on the top video" },
            { value: "82.5K", label: "views in the first month" }
          ],
          list: [],
          links: [
            { label: "View the channel", href: "https://www.tiktok.com/@songkhoecungsaturex" }
          ],
          button: null
        },
        {
          title: "AI-ready Brand Hub",
          note: "Google Drive · Second Brain - Medpharm",
          pair: true,
          lines: ["A shared knowledge base for the team: positioning, audience, tone of voice, products, visuals, competitors and content pillars, plus customer insight research. Each document is written as structured Markdown, so AI assistants can use it as brand context and every brief, caption and script starts on-brand. The next step is a Telegram bot on top of it, so anyone on the team can ask a question and get an answer with its source file (concept shown below)."],
          images: [
            { src: "assets/img/brandhub-drive.svg", alt: "Google Drive folder 'Second Brain - Medpharm' with the Brand Hub open: ten brand documents with what each one holds" },
            { src: "assets/img/brandhub-bot-demo.svg", alt: "Concept demo of a Telegram bot that answers questions about the brand from the Brand Hub files, citing the source file" }
          ],
          stats: [
            { value: "10", label: "brand documents" },
            { value: "5", label: "sections in the team's Second Brain" }
          ],
          list: [],
          button: null
        },
        {
          title: "Video ads: A/B testing and cost",
          note: "Meta Ads Manager · Saturex fanpage · 16 Jun – 4 Jul 2026",
          wide: true,
          lines: ["Tested video scripts and audiences side by side, moved budget to the winners and paused the rest. Dashboard built from the Ads Manager export for the campaign."],
          stack: true,
          images: [
            { src: "assets/img/ads-dashboard.svg", alt: "Dashboard built from the Meta Ads Manager export: cost per conversation by message ad and cost per ThruPlay by video and audience" },
            { src: "assets/img/ads-manager-table.png", alt: "Meta Ads Manager table: spend, impressions, reach and cost per conversation for each script, with Script 6 at 77,304 VND for 17 conversations" }
          ],
          stats: [
            { value: "−49%", label: "cost per conversation, best vs weakest message ad (152K → 77K VND)" },
            { value: "−32%", label: "best message ad vs the average (113K → 77K VND)" },
            { value: "−33%", label: "cost per ThruPlay, winning vs losing video on the same audience (103₫ → 69₫)" },
            { value: "446.9K", label: "people reached in 20 days" }
          ],
          links: [
            { label: "Winning message ad: \"Tea is hard to sell\"", href: "https://www.facebook.com/61587382373764/posts/122125164885246079" },
            { label: "Winning video ad: blood pressure", href: "https://www.facebook.com/61587382373764/posts/122124348753246079" }
          ],
          list: [],
          button: null
        },
        {
          title: "Satellite page network on Facebook",
          note: "Facebook search coverage · 115 pages, Mar – Aug 2026",
          lines: ["A network of Facebook pages built around health keywords. Search \"trà điều chỉnh huyết áp\" (blood pressure tea) on Facebook and the results are a wall of Saturex pages, each leading back to the main page."],
          tiles: true,
          images: [
            { src: "assets/img/sx-fb-search.jpg", alt: "Facebook search results for 'trà điều chỉnh huyết áp': six Saturex pages in a row" },
            { src: "assets/img/sx-keywords.png", alt: "Keyword tracking: 57 tea and health keywords and where each ranks" }
          ],
          stats: [
            { value: "115", label: "pages (100 cover + 15 satellite)" },
            { value: "~100K", label: "posts, Mar – Aug 2026" },
            { value: "~178K", label: "page visits, Mar – Aug 2026" },
            { value: "32/57", label: "keywords on page 1" }
          ],
          list: [],
          button: null
        },
        {
          title: "Content pillars by funnel stage",
          note: "Pillar 1 · Decoding modern health",
          solo: true,
          lines: ["Each content pillar was planned as a funnel. Topics move from naming a health problem, to a tip people can try at home, to the product story and its proof."],
          images: [
            { src: "assets/img/plan-pillar-en.svg", alt: "Content pillar 'Decoding modern health' in three funnel stages: Awareness, Interest and Product story, with four sample topics each" }
          ],
          stats: [
            { value: "30", label: "Awareness topics" },
            { value: "30", label: "Interest topics" },
            { value: "3", label: "funnel stages per pillar" }
          ],
          list: [],
          button: null
        },
        {
          title: "Content planning system",
          note: "Monthly calendar, pillars and funnel mix · 2025",
          tiles: true,
          lines: ["Each month was planned as one calendar: occasions, product focus, funnel phase, content pillar and angle. A tracker then logged every post, with its platform, status and final link."],
          images: [
            { src: "assets/img/plan-occasions.jpg", alt: "Monthly occasion plan for October 2025: Mid-Autumn, menopause day, Vietnamese Women's Day and Halloween, with product focus, funnel phase and pillar" },
            { src: "assets/img/plan-calendar.jpg", alt: "Content calendar for October 2025 by platform and product" },
            { src: "assets/img/plan-tracker.jpg", alt: "Post tracker with date, platform, style, status, product, pillar, topic and final link" },
            { src: "assets/img/plan-blog-tracker.jpg", alt: "Website blog tracker, 2025: article title, focus keyword, word count, status, product and publish date" }
          ],
          stats: [
            { value: "40% / 40% / 20%", label: "awareness / consideration / conversion split", wide: true },
            { value: "51", label: "educational posts in January 2025, the peak" },
            { value: "48", label: "shareable posts in July 2025" }
          ],
          listTitle: "What the planning sheets show",
          list: [
            { text: "Occasions, product focus, funnel phase and pillar for the month", meta: "Monthly plan" },
            { text: "Posts per platform, content type and product", meta: "Jan – Oct 2025" },
            { text: "Day-by-day calendar by channel and product", meta: "Oct 2025" },
            { text: "Post tracker: platform, format, status, pillar, topic and link", meta: "Every post" },
            { text: "Blog tracker: focus keyword, word count, product and publish date", meta: "Website · 2025" }
          ],
          button: null
        }
      ],
      learnings: [
        "Useful beats promotional. Health content travels when it is a tip people can try today; the product works best as the answer inside it.",
        "A fresh channel can outgrow the brand account. The new 'Sức khỏe Y học' TikTok reached 82.5K views in its first month, while the brand account stayed at about 2,000 followers.",
        "A peak month needs a follow-up plan. Views hit 634.6K in June 2026, then fell to 110K–142K a month once the Saturex video push ended.",
        "Reposted content and basic AI videos kept keywords ranked, but they did not go viral. Satellite pages need original, hook-led video to reach their targets."
      ],
      cover: "assets/img/medpharm-cover-16x10-v3.png"
    },
    {
      id: "partner-livestream",
      order: 2,
      no: "02",
      category: "PARTNER & LIVESTREAM",
      title: "Launching Medpharm on Droppii and selling through doctor-led livestreams",
      short: "44% more active partners, 63% revenue growth",
      tags: ["Social commerce", "Partner enablement", "Zalo community", "KOL livestream"],
      context: "Medpharm brought its products onto Droppii, a social-commerce platform where independent sellers (partners) resell products to their own customers. I set up the launch on the platform and ran the partner programme around it. In parallel, I worked with a doctor KOL on TikTok livestreams that sold Hemocyl, Medpharm's haemorrhoid supplement, directly to viewers.",
      challenge: "Droppii partners sell many brands at once. Medpharm had to give them enough product knowledge and ready-made content to recommend its products and keep selling after the first order. Direct sales of a sensitive product like Hemocyl also needed a medical voice that viewers trust.",
      actions: [
        "Compiled product information for the Droppii catalogue (origin, pack size, price, daily cost, promotions) and set up the product listings on the platform. The same material fed an AI-powered brand hub that partners could use to learn about the products.",
        "Built the launch checklist and mapped the partner journey, from the first touchpoint to the first order.",
        "Co-ran the partner training programme on Zoom: sessions by customer group (metabolic disorders, chronic respiratory conditions, haemorrhoids), an app onboarding session, promotions tied to attendance, and the logistics checklist behind each session.",
        "Managed content for the Droppii partner Zalo group: a weekly calendar of about 18 posts a month, with banners, product videos, sign-up forms and promotions.",
        "Supported Droppii livestreams and sale events, including product training with Medpharm's CEO on Droppii Business Training and mall livestreams.",
        "Edited the Hemocyl livestream scripts for Dr. Chường's TikTok channel: a Q&A format, medical review by the doctor and pharmacist, and a promotion for each session."
      ],
      timeline: [
        { when: "Dec 2024 – Q1 2025", what: "First doctor-led livestreams for Hemocyl on TikTok, with about 90% order fulfillment." },
        { when: "Jun – Oct 2025", what: "Launch on Droppii, the 'Lên kệ Droppii' expo (140 partners joined the Zalo group), Zoom trainings and weekly Zalo content. Revenue grew 63% in October." },
        { when: "Nov 2025 – Jan 2026", what: "Mall livestreams for the sale events. Active partners grew 44% in November." }
      ],
      results: [
        { value: 44, suffix: "%", label: "more active sales partners (Nov 2025)" },
        { value: 63, suffix: "%", label: "revenue growth on Droppii (Oct 2025)" },
        { value: 90, suffix: "%", label: "order fulfillment in the Q1 2025 livestream campaign" },
        { value: 176, label: "orders from 19 doctor livestreams (Q1 2025)" }
      ],
      facts: {
        company: "Medpharm Pharmaceutical JSC",
        role: "Digital Marketing Lead",
        period: "12/2024 – 01/2026"
      },
      hideSections: ["insight", "learnings"],
      gallery: [],
      visuals: [
        {
          title: "Launch expo: 'Lên Kệ Droppii'",
          note: "Droppii launch event · 17 Jul 2025",
          lines: ["Medpharm's booth at the Droppii event that launched its products on the platform: a product display for Saturex, Clearwayz and Rectovenal, a launch video, and a Zalo group where visiting partners could keep asking questions."],
          mosaic: true,
          images: [
            { src: "assets/img/dp-expo-booth.jpg", alt: "Medpharm Facebook post with photos of the booth and the team at the 'Lên Kệ Droppii' event" },
            { src: "assets/img/dp-expo-video.jpg", alt: "Medpharm Facebook post with the launch video shown at the Droppii event" },
            { src: "assets/img/dp-expo-drive-folder.jpg", alt: "Shared folder for Hemocyl partner materials: images, product info, FAQs, videos, sales posts and feedback" },
            { src: "assets/img/dp-expo-product-docs.jpg", alt: "Product information sheets for Medpharm's Droppii range, prepared for the partner launch" }
          ],
          stats: [
            { value: "140", label: "partners joined the Zalo consultation group" }
          ],
          list: [],
          button: null
        },
        {
          title: "Partner training on Zoom",
          note: "Droppii partner programme · Aug – Oct 2025",
          images: [
            { src: "assets/img/dp-zoom-training.jpg", alt: "Banner for the 3-session business training with Medpharm on Zoom, Oct 2025" },
            { src: "assets/img/dp-app-onboarding.jpg", alt: "Banner for the Droppii app onboarding session with Medpharm" },
            { src: "assets/img/partner-cover-16x10.png", alt: "Banner for the 'Kinh doanh bền vững cùng Medpharm' Zoom session, 20 Sep 2025" },
            { src: "assets/img/dp-training-schedule.jpg", alt: "Weekly training schedule, Aug – Sep 2025: topic, host, mentor and promotions for each session" },
            { src: "assets/img/dp-zoom-checklist.jpg", alt: "Zoom session checklist: design and communication, programme content, minigame, and who is in charge of each" }
          ],
          stats: [
            { value: "25", label: "Zoom trainings" },
            { value: "3", label: "promotions per training round" }
          ],
          listTitle: "Training themes",
          list: [
            { text: "Metabolic disorders", meta: "Saturex" },
            { text: "Chronic respiratory conditions", meta: "Clearwayz" },
            { text: "Haemorrhoids", meta: "Hemocyl · Rectovenal" },
            { text: "App onboarding and closing techniques", meta: "New partners" }
          ],
          button: null
        },
        {
          title: "Droppii livestreams and partner growth",
          note: "Droppii Business Training · partner dashboard, Jun – Nov 2025",
          images: [
            { src: "assets/img/dp-livestream-training.jpg", alt: "Droppii Business Training livestream with Medpharm's CEO, 21 Oct 2025" },
            { src: "assets/img/dp-revenue-partners-nov.svg", alt: "Monthly Droppii revenue and active business partners, Jun to Nov 2025: revenue from 11.2M to 66.8M VND, partners from 22 to 82" }
          ],
          lines: ["November: 3 promotions and 3 mall livestreams (11.11 for 24 hours, 20.11 and Black Friday)."],
          stats: [
            { value: "22 → 82", label: "active business partners, Jun → Nov 2025" },
            { value: "6×", label: "monthly revenue, Jun → Nov 2025 (11.2M → 66.8M VND)" },
            { value: "+63%", label: "revenue, Oct vs Sep 2025" },
            { value: "+23% / +44%", label: "revenue / partners, Nov vs Oct 2025" }
          ],
          list: [],
          button: null
        },
        {
          title: "Content support for external partners",
          collage: true,
          note: "BabyMall & Care and a spa partner · Nov 2025",
          lines: ["Beyond Droppii, my team supported partner shops with ready-to-post content for their own channels: product and ingredient visuals, and images for each customer group they serve, such as pregnant and postpartum women or spa clients."],
          images: [
            { src: "assets/img/pc-babymall-post.jpg", alt: "BabyMall & Care Facebook post thanking customers who bought the Saturex tea combo" },
            { src: "assets/img/pc-spa-content.jpg", alt: "Saturex content set made for a spa partner: wellness benefits, ingredients and clinical claims" },
            { src: "assets/img/pc-segment-designs.jpg", alt: "Saturex visuals made for partners: product, benefits, ingredients, and pregnant and postpartum women" }
          ],
          stats: [],
          list: [],
          links: [
            { label: "View BabyMall post", href: "https://www.facebook.com/share/p/14QGTcqxAiY/" }
          ],
          button: null
        },
        {
          title: "Doctor-led livestreams for Hemocyl",
          note: "TikTok · Dr. Chường's channel · Q1 2025 (Jan – Feb)",
          lines: ["Q&A livestreams reviewed by Dr. Chường and pharmacist Hiếu, each with its own promotion and a Facebook post to announce it. I edited the scripts for each session."],
          grid2: true,
          images: [
            { src: "assets/img/kol-live-poster.jpg", alt: "Facebook post announcing Dr. Chường's livestreams on easing haemorrhoid pain, 11–15 Feb 2025, with a 300K voucher" },
            { src: "assets/img/kol-scripts-folder.jpg", alt: "Drive folder of Hemocyl livestream scripts, one per session" },
            { src: "assets/img/kol-live-jan.png", alt: "TikTok Shop dashboard, 23 Dec 2024 – 31 Jan 2025: 102.6M VND revenue, 91 items sold" },
            { src: "assets/img/kol-live-feb.png", alt: "TikTok Shop dashboard for February 2025: 96.9M VND revenue, 87 items sold" }
          ],
          stats: [
            { value: "19", label: "livestreams" },
            { value: "176", label: "orders" },
            { value: "90%", label: "orders completed (159 of 176)" },
            { value: "~199M", label: "TikTok Shop revenue (VND)" }
          ],
          listTitle: "Results by month",
          list: [
            { text: "Jan 2025 · 11 livestreams", meta: "89 orders · 102.6M" },
            { text: "Feb 2025 · 8 livestreams", meta: "87 orders · 96.9M" }
          ],
          links: [
            { label: "Read a livestream script", href: "https://docs.google.com/document/d/1aJCZT0U1IJzLXwge2qSDs8aBe73gxyHBpxynJBgQx9Q/edit?tab=t.0" }
          ],
          button: null
        }
      ],
      cover: "assets/img/partner-cover-16x10.png"
    },
    {
      id: "mastr-mode",
      order: 4,
      no: "04",
      category: "CONTENT & SOCIAL",
      title: "Self-care content on Instagram: 500K monthly impressions",
      short: "Instagram content for Mastr Mode's North American audience (2023–2024)",
      tags: ["Content Creation & Copywriting", "Reels & Feed", "Trend analysis"],
      context: "As Social Content Specialist at Mastr Mode, a digital wellness brand in Canada, I ran the North American Instagram channel, producing how-to videos on self-care and relationship tips, with product links in the bio.",
      challenge: "Keep a steady flow of Reels and posts that hold attention and turn viewers into profile visits and product clicks.",
      actions: [
        "Produced a series of how-to videos on personal growth, self-love and relationship tips.",
        "Ran the Instagram content strategy across Reels and Feed, with product links in the bio.",
        "Used social performance analytics and trend-jacking to refine posting schedules."
      ],
      results: [
        { value: 200, suffix: "K", label: "monthly account reach" },
        { value: 42, suffix: "K", label: "monthly engagement" },
        { value: 500, suffix: "K", label: "monthly impressions" },
        { value: 10, suffix: "K+", label: "total followers" }
      ],
      gallery: [],
      visuals: [
        {
          title: "Channel profile",
          note: "Mastr Mode · North American Instagram",
          images: [
            { src: "assets/img/ig-el-profile.png", alt: "Mastr Mode Instagram profile: 10K followers, 25 following" }
          ],
          stats: [],
          list: [],
          button: { label: "View on Instagram ↗", href: "https://www.instagram.com/joyfulselfcare.babe" }
        },
        {
          title: "Audience range",
          collage: true,
          note: "Self-care Instagram channel",
          images: [
            { src: "assets/img/ig-el-followers.png", alt: "Followers panel: 14,495 followers" },
            { src: "assets/img/ig-el-gender.png", alt: "Gender split: 72.4% women, 27.5% men" },
            { src: "assets/img/ig-el-countries.png", alt: "Followers by country and age range" }
          ],
          stats: [
            { value: "18–65", label: "audience age range" },
            { value: "72%", label: "female" },
            { value: "60%", label: "from North America" },
            { value: "30%", label: "accounts reached per post" }
          ],
          listTitle: "Top countries",
          list: [
            { text: "United States", meta: "50.7%" },
            { text: "India", meta: "10.9%" },
            { text: "United Kingdom", meta: "4.5%" },
            { text: "Canada", meta: "3.9%" }
          ],
          button: null
        },
        {
          title: "Reach & engagement",
          collage: true,
          note: "Last 90 days · Mar 23 – Jun 20",
          images: [
            { src: "assets/img/ig-el-reach.png", alt: "Reach panel: 2,399,697 accounts reached" },
            { src: "assets/img/ig-el-engaged.png", alt: "Engagement panel: 192,401 accounts engaged" },
            { src: "assets/img/ig-el-interactions.png", alt: "Engagement panel: 236,329 content interactions" }
          ],
          stats: [
            { value: "2,399,697", label: "accounts reached" },
            { value: "2,621,461", label: "impressions" },
            { value: "192,401", label: "accounts engaged" },
            { value: "236,329", label: "content interactions" }
          ],
          listTitle: "Reels interactions · 236,279",
          list: [
            { text: "Likes", meta: "96,789" },
            { text: "Saves", meta: "70,813" },
            { text: "Shares", meta: "68,350" },
            { text: "Comments", meta: "327" }
          ],
          button: null
        },
        {
          title: "Viral Reels",
          note: "Top posts from the channel",
          lines: ["Most-shared Reels"],
          images: [],
          stats: [],
          list: [],
          acts: [
            { src: "assets/img/ig-el-phone1.png", alt: "Viral Reel: 6 types of boundaries", title: "6 types of boundaries with real life examples", meta: "27.3K likes · 9,876 shares", href: "https://www.instagram.com/reel/CxlaZQCvgO0/" },
            { src: "assets/img/ig-el-phone2.png", alt: "Viral Reel: This is NOT a boundary", title: "This is NOT a boundary", meta: "29.9K likes · 9,737 shares", href: "https://www.instagram.com/reel/C37ZXMkyEqn/" },
            { src: "assets/img/ig-el-phone3.png", alt: "Viral Reel: 10 Interesting Facts About Introverts", title: "10 Interesting Facts About Introverts", meta: "19.3K likes · 3,351 shares", href: "https://www.instagram.com/reel/C0y98oSudcV/" },
            { src: "assets/img/ig-el-phone4.png", alt: "Viral Reel: Sometimes Growth sounds like", title: "Sometimes Growth sounds like", meta: "13.3K likes · 1,330 shares", href: "https://www.instagram.com/reel/C1JT8E5uh4C/" }
          ],
          button: null
        }
      ],
      cover: "assets/img/mastr-cover-16x10-v3.jpg",
      pageCover: true,
      card: {
        company: "Mastr Mode",
        title: "Self-care content on Instagram: 500K monthly impressions",
        tags: ["Content Creation & Copywriting", "Reels & Feed", "Trend analysis"],
        results: [
          { value: 200, suffix: "K", label: "monthly account reach" },
          { value: 42, suffix: "K", label: "monthly engagement" },
          { value: 500, suffix: "K", label: "monthly impressions" }
        ]
      },
      facts: {
        company: "Mastr Mode (Canada)",
        role: "Social Content Specialist",
        period: "09/2023 – 08/2024"
      },
      hideSections: ["insight", "timeline", "learnings"],
      insight: null,
      learnings: []
    }
  ],

  moreProjects: [
    {
      id: "aura-tiktok",
      title: "TikTok content for The Aura: 1M average post views",
      meta: ["The Aura", "Vietnamese TikTok", "2023 – 2024"],
      tags: ["TikTok", "Mindfulness", "Productivity"],
      results: [
        { value: 20, prefix: "+", suffix: "K", label: "total followers" },
        { value: 1, suffix: "M", label: "average post views" },
        { value: 200, suffix: "K", label: "average engagement" }
      ],
      cover: "assets/img/aura-tiktok-cover-16x10.jpg",
      images: [
        { src: "assets/img/tk-el-phone.png", alt: "The Aura TikTok profile: 20K+ followers, 740.6K likes" },
        { src: "assets/img/tk-el-analytics.png", alt: "TikTok analytics overview: 7.5M post views, 53K profile views" },
        { src: "assets/img/tk-el-viewers.png", alt: "TikTok viewers panel: 5.4M total viewers" }
      ]
    }
  ],

  tools: {
    "Social & Paid": ["Meta Business Suite", "Meta Ads", "TikTok Ads"],
    "Analytics & SEO": ["GA4", "Google Search Console", "Ahrefs", "Yoast SEO"],
    "Content & Design": ["CapCut", "Photoshop", "Canva", "WordPress"],
    "AI": ["ChatGPT", "Claude", "Google AI"]
  }
};
