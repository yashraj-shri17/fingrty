const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const content = [
  // ================= 01 HOME PAGE =================
  // Hero
  { key: 'home_hero_eyebrow', content: 'Fingrity Advisors LLP', page: '01 Home', section: '01 Hero', label: 'Hero Eyebrow' },
  { key: 'home_hero_title', content: 'Strategizing [$119M+] in capital for scale-ups.', page: '01 Home', section: '01 Hero', label: 'Hero Title ([Word] to Highlight)' },
  { key: 'home_hero_sub', content: 'The missing link between Operational Chaos and Financial Discipline. We don\'t just consult; we fix.', page: '01 Home', section: '01 Hero', label: 'Hero Subtitle' },
  { key: 'home_hero_cta_primary', content: 'Fix the missing link', page: '01 Home', section: '01 Hero', label: 'Hero CTA Primary' },
  { key: 'home_hero_cta_secondary', content: 'The Practice ↗', page: '01 Home', section: '01 Hero', label: 'Hero CTA Secondary' },
  
  // Home Images
  { key: 'home_hero_img1', content: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800', page: '01 Home', section: '01 Hero', label: 'Hero Panel Image 1 (URL)' },
  { key: 'home_hero_img2', content: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800', page: '01 Home', section: '01 Hero', label: 'Hero Panel Image 2 (URL)' },
  { key: 'home_hero_img3', content: 'https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=800', page: '01 Home', section: '01 Hero', label: 'Hero Panel Image 3 (URL)' },
  { key: 'home_whyus_img', content: 'https://images.pexels.com/photos/4386341/pexels-photo-4386341.jpeg?auto=compress&cs=tinysrgb&w=800', page: '01 Home', section: '08 Why Us', label: 'Why Us Side Image (URL)' },

  // Stats
  { key: 'home_stat1_value', content: '$119M+', page: '01 Home', section: '02 Stats', label: 'Stat 1 Value' },
  { key: 'home_stat1_label', content: 'Capital Enabled', page: '01 Home', section: '02 Stats', label: 'Stat 1 Label' },
  { key: 'home_stat2_value', content: 'Billion $', page: '01 Home', section: '02 Stats', label: 'Stat 2 Value' },
  { key: 'home_stat2_label', content: 'Turnover Managed', page: '01 Home', section: '02 Stats', label: 'Stat 2 Label' },
  { key: 'home_stat3_value', content: '25+ Yrs', page: '01 Home', section: '02 Stats', label: 'Stat 3 Value' },
  { key: 'home_stat3_label', content: 'Leadership DNA', page: '01 Home', section: '02 Stats', label: 'Stat 3 Label' },
  
  // Proof
  { key: 'home_proof_label', content: 'The Proof', page: '01 Home', section: '03 Proof', label: 'Proof Label' },
  { key: 'home_proof_title', content: 'Unwavering Results.', page: '01 Home', section: '03 Proof', label: 'Proof Title' },
  { key: 'home_proof_intro', content: 'Bridging the gap between founder speed and institutional discipline. We deliver boardroom-ready execution, not just advice.', page: '01 Home', section: '03 Proof', label: 'Proof Intro' },
  { key: 'home_proof_list1', content: 'Institutional Scale: Managed billion-dollar P&Ls and global turnovers.', page: '01 Home', section: '03 Proof', label: 'Proof List Item 1' },
  { key: 'home_proof_list2', content: 'Modern Systems: End-to-end ERP Transition & Process Automation.', page: '01 Home', section: '03 Proof', label: 'Proof List Item 2' },
  { key: 'home_proof_list3', content: 'Governance: Institutional SOX & IFRS aligned controllership.', page: '01 Home', section: '03 Proof', label: 'Proof List Item 3' },

  // Paradox
  { key: 'home_paradox_label', content: 'The Strategy', page: '01 Home', section: '04 Paradox', label: 'Paradox Label' },
  { key: 'home_paradox_title', content: 'The Growth Paradox', page: '01 Home', section: '04 Paradox', label: 'Paradox Title' },
  { key: 'home_paradox_intro', content: 'Growth looks exciting outside, but inside the finance engine usually starts breaking quietly. We close the gap between founder speed and institutional discipline before it hurts valuation.', page: '01 Home', section: '04 Paradox', label: 'Paradox Intro' },
  { key: 'home_paradox_card1_tag', content: '01 | Data Room Friction', page: '01 Home', section: '04 Paradox', label: 'Card 1 Tag' },
  { key: 'home_paradox_card1_title', content: 'Fundraising momentum slows down.', page: '01 Home', section: '04 Paradox', label: 'Card 1 Title' },
  { key: 'home_paradox_card1_text', content: 'Numbers live in scattered sheets, monthly closure slips, and investor queries take too long to answer.', page: '01 Home', section: '04 Paradox', label: 'Card 1 Text' },
  { key: 'home_paradox_card2_tag', content: '02 | Cashflow Blindspots', page: '01 Home', section: '04 Paradox', label: 'Card 2 Tag' },
  { key: 'home_paradox_card2_title', content: 'Runway gets risky without warning.', page: '01 Home', section: '04 Paradox', label: 'Card 2 Title' },
  { key: 'home_paradox_card2_text', content: 'Collections, payables, and burn are managed reactively, creating avoidable pressure during critical growth stages.', page: '01 Home', section: '04 Paradox', label: 'Card 2 Text' },
  { key: 'home_paradox_card3_tag', content: '03 | Compliance Overhang', page: '01 Home', section: '04 Paradox', label: 'Card 3 Tag' },
  { key: 'home_paradox_card3_title', content: 'Execution speed drops near audits.', page: '01 Home', section: '04 Paradox', label: 'Card 3 Title' },
  { key: 'home_paradox_card3_text', content: 'Teams scramble at period-end when controls are weak, reducing leadership bandwidth for core business priorities.', page: '01 Home', section: '04 Paradox', label: 'Card 3 Text' },
  { key: 'home_solution_label', content: 'How We Fix It', page: '01 Home', section: '04 Paradox', label: 'Solution Label' },
  { key: 'home_solution_text', content: 'We install clean closure rhythms, board-ready MIS, and governance discipline so your finance function becomes a growth lever, not a growth blocker.', page: '01 Home', section: '04 Paradox', label: 'Solution Text' },

  // Operating Rhythm
  { key: 'home_rhythm_label', content: 'Engagement Model', page: '01 Home', section: '05 Operating Rhythm', label: 'Rhythm Label' },
  { key: 'home_rhythm_title', content: 'The Operating Rhythm', page: '01 Home', section: '05 Operating Rhythm', label: 'Rhythm Title' },
  { key: 'home_rhythm1_title', content: 'Discovery', page: '01 Home', section: '05 Operating Rhythm', label: 'Step 1 Title' },
  { key: 'home_rhythm1_text', content: 'Deep audit of existing books, data rooms, and compliance hygiene. We identify the "Leakages" first.', page: '01 Home', section: '05 Operating Rhythm', label: 'Step 1 Text' },
  { key: 'home_rhythm2_title', content: 'Deep Dive', page: '01 Home', section: '05 Operating Rhythm', label: 'Step 2 Title' },
  { key: 'home_rhythm2_text', content: 'Designing workflows, MIS architecture, and ERP-transition plans. Setting up the bedrock for scale.', page: '01 Home', section: '05 Operating Rhythm', label: 'Step 2 Text' },
  { key: 'home_rhythm3_title', content: 'Execution', page: '01 Home', section: '05 Operating Rhythm', label: 'Step 3 Title' },
  { key: 'home_rhythm3_text', content: 'We embed as your Fractional Leadership. P&L ownership, fundraising support, and statutory management.', page: '01 Home', section: '05 Operating Rhythm', label: 'Step 3 Text' },
  { key: 'home_rhythm4_title', content: 'Governance', page: '01 Home', section: '05 Operating Rhythm', label: 'Step 4 Title' },
  { key: 'home_rhythm4_text', content: 'Long-term board reporting, risk assessment, and maintaining institutional-grade audit readiness.', page: '01 Home', section: '05 Operating Rhythm', label: 'Step 4 Text' },

  // Sectoral Mastery
  { key: 'home_sector_label', content: 'Sectoral Mastery', page: '01 Home', section: '06 Sectoral Mastery', label: 'Sector Label' },
  { key: 'home_sector_title', content: 'Deep Industry Comprehension.', page: '01 Home', section: '06 Sectoral Mastery', label: 'Sector Title' },
  { key: 'home_sector_intro', content: 'We understand how money moves in your specific sector. Finance isn\'t one-size-fits-all.', page: '01 Home', section: '06 Sectoral Mastery', label: 'Sector Intro' },
  { key: 'home_sector1_title', content: 'Healthcare & MedTech', page: '01 Home', section: '06 Sectoral Mastery', label: 'Sector 1 Name' },
  { key: 'home_sector1_text', content: 'Managing high-capex cycles & inventory controls.', page: '01 Home', section: '06 Sectoral Mastery', label: 'Sector 1 Text' },
  { key: 'home_sector2_title', content: 'Consumer & D2C', page: '01 Home', section: '06 Sectoral Mastery', label: 'Sector 2 Name' },
  { key: 'home_sector2_text', content: 'Mastering unit economics & marketing ROI.', page: '01 Home', section: '06 Sectoral Mastery', label: 'Sector 2 Text' },
  { key: 'home_sector3_title', content: 'Agri-Tech', page: '01 Home', section: '06 Sectoral Mastery', label: 'Sector 3 Name' },
  { key: 'home_sector3_text', content: 'Supply chain resilience & working capital governance.', page: '01 Home', section: '06 Sectoral Mastery', label: 'Sector 3 Text' },
  { key: 'home_sector4_title', content: 'FinTech & SaaS', page: '01 Home', section: '06 Sectoral Mastery', label: 'Sector 4 Name' },
  { key: 'home_sector4_text', content: 'Focus on MRR churn, burn-rates & regulatory compliance.', page: '01 Home', section: '06 Sectoral Mastery', label: 'Sector 4 Text' },

  // Expertise (Marquee)
  { key: 'home_expertise_label', content: 'Expertise', page: '01 Home', section: '07 Expertise', label: 'Expertise Label' },
  { key: 'home_expertise_title', content: 'A Dynamic Suite.', page: '01 Home', section: '07 Expertise', label: 'Expertise Title' },
  { key: 'home_expertise1_title', content: 'Fundraising', page: '01 Home', section: '07 Expertise', label: 'Item 1 Title' },
  { key: 'home_expertise1_desc', content: 'Series A/B readiness & equity-debt structuring.', page: '01 Home', section: '07 Expertise', label: 'Item 1 Desc' },
  { key: 'home_expertise2_title', content: 'Strategic Finance', page: '01 Home', section: '07 Expertise', label: 'Item 2 Title' },
  { key: 'home_expertise2_desc', content: 'Unit economics, MIS & P&L ownership.', page: '01 Home', section: '07 Expertise', label: 'Item 2 Desc' },
  { key: 'home_expertise3_title', content: 'Tax & Compliance', page: '01 Home', section: '07 Expertise', label: 'Item 3 Title' },
  { key: 'home_expertise3_desc', content: 'Monthly closure & statutory hygiene.', page: '01 Home', section: '07 Expertise', label: 'Item 3 Desc' },
  { key: 'home_expertise4_title', content: 'IPO Readiness', page: '01 Home', section: '07 Expertise', label: 'Item 4 Title' },
  { key: 'home_expertise4_desc', content: 'Governance & board-level reporting.', page: '01 Home', section: '07 Expertise', label: 'Item 4 Desc' },
  { key: 'home_expertise5_title', content: 'Risk Advisory', page: '01 Home', section: '07 Expertise', label: 'Item 5 Title' },
  { key: 'home_expertise5_desc', content: 'Internal controls & audit management.', page: '01 Home', section: '07 Expertise', label: 'Item 5 Desc' },

  // Why Us
  { key: 'home_why_label', content: 'Why Us', page: '01 Home', section: '08 Why Us', label: 'Why Us Label' },
  { key: 'home_why_title', content: 'Institutional-grade execution', page: '01 Home', section: '08 Why Us', label: 'Why Us Title' },
  { key: 'home_why_intro', content: 'We don\'t just "advise" — we embed as fractional leaders to fix messy data rooms, stop cash-flow leaks, and build audit-ready books.', page: '01 Home', section: '08 Why Us', label: 'Why Us Intro' },
  { key: 'home_why_list1', content: 'Deep experience at Amazon, EY, Deloitte, & PwC.', page: '01 Home', section: '08 Why Us', label: 'Why Us List 1' },
  { key: 'home_why_list2', content: 'Strategic partnership across medtech, fintech, and Agri-tech.', page: '01 Home', section: '08 Why Us', label: 'Why Us List 2' },
  { key: 'home_why_list3', content: 'Proven track record of managing complicated due diligence.', page: '01 Home', section: '08 Why Us', label: 'Why Us List 3' },
  { key: 'home_why_floating_title', content: 'Bengaluru Hub', page: '01 Home', section: '08 Why Us', label: 'Floating Card Title' },
  { key: 'home_why_floating_text', content: 'Serving global scale-ups from the heart of India’s startup capital.', page: '01 Home', section: '08 Why Us', label: 'Floating Card Text' },

  // ================= 02 ABOUT PAGE =================
  { key: 'about_hero_label', content: 'Leadership DNA', page: '02 About', section: '01 Hero', label: 'Hero Label' },
  { key: 'about_hero_title', content: 'We translate financial roadblocks into [Growth Strategies.]', page: '02 About', section: '01 Hero', label: 'Hero Title ([Word] to Highlight)' },
  { key: 'about_hero_intro', content: 'Fingrity Advisors was founded on a simple premise: Founders shouldn\'t have to choose between startup speed and institutional-grade financial discipline.', page: '02 About', section: '01 Hero', label: 'Hero Intro' },
  { key: 'about_hero_quote_eye', content: 'Founder-first. Institution-ready.', page: '02 About', section: '01 Hero', label: 'Hero Quote Line 1' },
  { key: 'about_hero_quote_sub', content: 'Every engagement is engineered for confidence in boardrooms, diligence rooms, and day-to-day execution.', page: '02 About', section: '01 Hero', label: 'Hero Quote Line 2' },

  // About Images
  { key: 'about_founder1_img', content: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=800', page: '02 About', section: '03 Founders', label: 'Rahul Photo (URL)' },
  { key: 'about_founder2_img', content: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=800', page: '02 About', section: '03 Founders', label: 'Rupali Photo (URL)' },

  { key: 'about_value1_title', content: 'Precision', page: '02 About', section: '02 Values', label: 'Value 1 Title' },
  { key: 'about_value1_desc', content: 'Amazon-grade MIS and error-free statutory hygiene. Built for scale, built for trust.', page: '02 About', section: '02 Values', label: 'Value 1 Desc' },
  { key: 'about_value2_title', content: 'Partnership', page: '02 About', section: '02 Values', label: 'Value 2 Title' },
  { key: 'about_value2_desc', content: 'We don\'t just advise; we embed as Fractional CFOs/COOs to fix execution gaps.', page: '02 About', section: '02 Values', label: 'Value 2 Desc' },
  { key: 'about_value3_title', content: 'Integrity', page: '02 About', section: '02 Values', label: 'Value 3 Title' },
  { key: 'about_value3_desc', content: 'Transparency and ethical conduct are at the core of everything we build for you.', page: '02 About', section: '02 Values', label: 'Value 3 Desc' },

  { key: 'about_founders_label', content: 'The Founders', page: '02 About', section: '03 Founders', label: 'Section Label' },
  { key: 'about_founder1_lens', content: 'The Founder Lens | Strategy & Fundraising', page: '02 About', section: '03 Founders', label: 'Rahul Lens' },
  { key: 'about_founder1_name', content: 'Rahul Kanodia, CA, CS', page: '02 About', section: '03 Founders', label: 'Rahul Name' },
  { key: 'about_founder1_bio1', content: 'Rahul translates complex financial roadblocks into founder-friendly growth strategies. With a track record of driving $119M+ in capital raised, he bridges the gap between VC expectations and operational reality.', page: '02 About', section: '03 Founders', label: 'Rahul Bio 1' },
  { key: 'about_founder1_bio2', content: 'He specializes in investor relations, strategic FP&A, and building the "Scale-up DNA" within finance teams.', page: '02 About', section: '03 Founders', label: 'Rahul Bio 2' },
  { key: 'about_founder1_badges', content: 'Ex-Sugarfit, Ex-Fasal, Ex-Amazon JV, Ex-PwC', page: '02 About', section: '03 Founders', label: 'Rahul Badges (Comma separated)' },

  { key: 'about_founder2_lens', content: 'The Institutional Lens | Finance & Compliance', page: '02 About', section: '03 Founders', label: 'Rupali Lens' },
  { key: 'about_founder2_name', content: 'Rupali Kanodia, CA', page: '02 About', section: '03 Founders', label: 'Rupali Name' },
  { key: 'about_founder2_bio1', content: 'Rupali instills financial discipline and operational efficiency at scale. Her expertise lies in building robust frameworks for controllership, audit, and tax compliance across high-complexity environments.', page: '02 About', section: '03 Founders', label: 'Rupali Bio 1' },
  { key: 'about_founder2_bio2', content: 'She has led financial reporting and statutory audits for billion-dollar turnover entities, ensuring institutional hygiene and SOX-aligned controls.', page: '02 About', section: '03 Founders', label: 'Rupali Bio 2' },
  { key: 'about_founder2_badges', content: 'Ex-DTDC, Ex-MediaKind, Ex-EY, Ex-Deloitte', page: '02 About', section: '03 Founders', label: 'Rupali Badges (Comma separated)' },

  { key: 'about_cta_title', content: 'Partners in Execution.', page: '02 About', section: '04 CTA', label: 'CTA Title' },
  { key: 'about_cta_text', content: 'We don\'t just hand over reports. We sit with the founders to build the financial bedrock of the next global standard.', page: '02 About', section: '04 CTA', label: 'CTA Text' },

  // ================= 03 SERVICES PAGE =================
  { key: 'services_hero_label', content: 'The Practice', page: '03 Services', section: '01 Hero', label: 'Hero Label' },
  { key: 'services_hero_title', content: 'Specialized Finance. [Institutional DNA.]', page: '03 Services', section: '01 Hero', label: 'Hero Title ([Word] to Highlight)' },
  { key: 'services_hero_intro', content: 'We don\'t just provide reports. We embed as your Fractional Leadership to fix roadblocks, build systems, and drive capital outcomes.', page: '03 Services', section: '01 Hero', label: 'Hero Intro' },
  { key: 'services_hero_badges', content: 'Fundraise Ready Systems, Execution-Led Advisory, Boardroom Grade Governance', page: '03 Services', section: '01 Hero', label: 'Hero Badges (Comma separated)' },

  // Services Images
  { key: 'services_offering1_img', content: 'https://images.pexels.com/photos/3183190/pexels-photo-3183190.jpeg?auto=compress&cs=tinysrgb&w=800', page: '03 Services', section: '02 Offerings', label: 'Offering 1 Image (URL)' },
  { key: 'services_offering2_img', content: 'https://images.pexels.com/photos/6694543/pexels-photo-6694543.jpeg?auto=compress&cs=tinysrgb&w=800', page: '03 Services', section: '02 Offerings', label: 'Offering 2 Image (URL)' },
  { key: 'services_offering3_img', content: 'https://images.pexels.com/photos/5900222/pexels-photo-5900222.jpeg?auto=compress&cs=tinysrgb&w=800', page: '03 Services', section: '02 Offerings', label: 'Offering 3 Image (URL)' },
  { key: 'services_offering4_img', content: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800', page: '03 Services', section: '02 Offerings', label: 'Offering 4 Image (URL)' },

  { key: 'services_offering1_title', content: 'Fundraising & Capital Enablement', page: '03 Services', section: '02 Offerings', label: 'Offer 1 Title' },
  { key: 'services_offering1_desc', content: 'Strategic support for Series A/B fundraising and institutional-grade debt capital.', page: '03 Services', section: '02 Offerings', label: 'Offer 1 Desc' },
  { key: 'services_offering1_list', content: 'Investor readiness & IPO-ready narratives, Data-room architecture & diligence support, Equity-debt structuring & lender negotiations, Cap-table planning & valuation inputs, VC & Institutional engagement', page: '03 Services', section: '02 Offerings', label: 'Offer 1 Details (Comma separated)' },
  
  { key: 'services_offering2_title', content: 'Strategic Finance & Operational Support', page: '03 Services', section: '02 Offerings', label: 'Offer 2 Title' },
  { key: 'services_offering2_desc', content: 'Translating operations into financial truth through rigorous analysis and P&L ownership.', page: '03 Services', section: '02 Offerings', label: 'Offer 2 Desc' },
  { key: 'services_offering2_list', content: 'Unit economics & EBITDA optimization, MIS, FP&A & KPI dashboards, Budgeting, AOP & long-range plans, Working capital & cashflow governance, Cost optimization & ROI discipline', page: '03 Services', section: '02 Offerings', label: 'Offer 2 Details (Comma separated)' },

  { key: 'services_offering3_title', content: 'Accounting, Tax & Compliance', page: '03 Services', section: '02 Offerings', label: 'Offer 3 Title' },
  { key: 'services_offering3_desc', content: 'Building the bedrock of financial integrity with automated workflows and clean records.', page: '03 Services', section: '02 Offerings', label: 'Offer 3 Desc' },
  { key: 'services_offering3_list', content: 'Monthly book closure & accounting hygiene, GST advisory, audits & representations, ERP transition, process design & automation, Statutory audit coordination & closure, IND AS / IFRS / SOX-aligned controls', page: '03 Services', section: '02 Offerings', label: 'Offer 3 Details (Comma separated)' },

  { key: 'services_offering4_title', content: 'IPO Readiness & Governance', page: '03 Services', section: '02 Offerings', label: 'Offer 4 Title' },
  { key: 'services_offering4_desc', content: 'Instilling corporate-grade frameworks to prepare your firm for public markets.', page: '03 Services', section: '02 Offerings', label: 'Offer 4 Desc' },
  { key: 'services_offering4_list', content: 'IPO planning, timelines & listing guidance, Governance, policy & compliance frameworks, Internal financial controls (IFC) testing, Risk assessment & board-level reporting, Audit readiness & disclosure discipline', page: '03 Services', section: '02 Offerings', label: 'Offer 4 Details (Comma separated)' },

  { key: 'services_eng_label', content: 'Engagement Models', page: '03 Services', section: '03 Engagement', label: 'Section Label' },
  { key: 'services_eng_title', content: 'Flexible Execution.', page: '03 Services', section: '03 Engagement', label: 'Section Title' },
  { key: 'services_eng1_title', content: 'Project Based', page: '03 Services', section: '03 Engagement', label: 'Model 1 Title' },
  { key: 'services_eng1_desc', content: 'Focused execution for fundraising, ERP transition, or IPO prep.', page: '03 Services', section: '03 Engagement', label: 'Model 1 Desc' },
  { key: 'services_eng2_title', content: 'Retainer / Fractional', page: '03 Services', section: '03 Engagement', label: 'Model 2 Title' },
  { key: 'services_eng2_desc', content: 'Continuity through Fractional CFO/COO leadership for growing teams.', page: '03 Services', section: '03 Engagement', label: 'Model 2 Desc' },

  { key: 'services_cta_text', content: 'Ready to institutionalize your finance?', page: '03 Services', section: '04 CTA', label: 'CTA Text' },

  // ================= 04 CONTACT PAGE =================
  { key: 'contact_hero_label', content: 'The Hub', page: '04 Contact', section: '01 Hero', label: 'Hero Label' },
  { key: 'contact_hero_title', content: 'Let’s fix the missing link.', page: '04 Contact', section: '01 Hero', label: 'Hero Title' },
  { key: 'contact_hero_sub', content: 'Whether you\'re prepping for Series A or cleaning messy books for an IPO, we respond within 24 hours from Bengaluru.', page: '04 Contact', section: '01 Hero', label: 'Hero Subtitle' },
  { key: 'contact_detail_conf_label', content: 'Confidential Support', page: '04 Contact', section: '01 Hero', label: 'Help Label' },
  { key: 'contact_detail_conf_value', content: 'rk@fingrityadvisors.com', page: '04 Contact', section: '01 Hero', label: 'Help Email' },
  { key: 'contact_detail_loc_label', content: 'Location', page: '04 Contact', section: '01 Hero', label: 'Loc Label' },
  { key: 'contact_detail_loc_value', content: 'Bengaluru, India 🇮🇳', page: '04 Contact', section: '01 Hero', label: 'Loc Value' },
  { key: 'contact_meta_text', content: '“Integrity in Finance. Globally.”', page: '04 Contact', section: '01 Hero', label: 'Meta Text' },
  { key: 'contact_safety_text', content: 'All inquiries are strictly confidential.', page: '04 Contact', section: '01 Hero', label: 'Safety Text' },
];

const seed = async () => {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS site_content (
        id SERIAL PRIMARY KEY,
        key TEXT UNIQUE NOT NULL,
        content TEXT NOT NULL,
        page TEXT,
        section TEXT,
        label TEXT
      );
    `);

    for (const item of content) {
      await pool.query(
        'INSERT INTO site_content (key, content, page, section, label) VALUES ($1, $2, $3, $4, $5) ON CONFLICT (key) DO UPDATE SET content = $2, page = $3, section = $4, label = $5',
        [item.key, item.content, item.page, item.section, item.label]
      );
    }
    console.log('Final mapping seeding successful');
    process.exit(0);
  } catch (err) {
    console.error('Seeding failed', err);
    process.exit(1);
  }
};

seed();
