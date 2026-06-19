/* =========================================================
   Data — Ismam Nur Swapnil's portfolio
   Content sourced from arXiv abstracts, GitHub READMEs, and the CV.
   ========================================================= */
const DATA = {
  name: 'Ismam Nur Swapnil',
  typed: ['PhD-bound ML researcher', 'GRPO author', 'VLM builder', 'Dhaka, BD'],
  email: 'ismamnurswapnil@gmail.com',
  citations: 2,

  publications: [
    {
      id: 'gxpo',
      title: 'Gradient Extrapolation-Based Policy Optimization',
      authors: ['<b>Ismam Nur Swapnil</b>', 'Aranya Saha', 'Tanvir Ahmed Khan', 'Mohammad Ariful Haque', 'Ser-Nam Lim'],
      venue: 'arXiv preprint',
      year: 2026,
      yearDisplay: '2026',
      tags: ['first', '2026', 'preprint'],
      links: {
        arxiv: 'https://arxiv.org/abs/2605.06755',
        pdf: 'https://arxiv.org/pdf/2605.06755'
      },
      venueType: 'preprint',
      thumb: 'arXiv',
      abstract: 'Reinforcement learning is widely used to improve the reasoning ability of large language models, especially when answers can be automatically checked. Standard GRPO-style training updates the model using only the current step, while full multi-step lookahead can give a better update direction but is too expensive. We propose <strong>GXPO</strong>, a plug-compatible policy-update rule for GRPO-style reasoning RL that approximates a longer local lookahead using only three backward passes per active phase. It reuses the same batch of rollouts, rewards, advantages, and GRPO loss, so no new rollouts or reward computation are needed. GXPO takes two fast optimizer steps, measures how the gradients change, predicts a virtual K-step lookahead point, moves the policy partway toward it, and applies a corrective update. When the lookahead signal becomes unstable it automatically falls back to standard GRPO. Across Qwen2.5 and Llama math-reasoning experiments, GXPO improves average sampled pass@1 by <strong>+1.65 to +5.00</strong> over GRPO and up to <strong>4.0×</strong> step speedup to GRPO\'s peak accuracy.'
    },
    {
      id: 'grpopp',
      title: 'GRPO++: Enhancing Dermatological Reasoning under Low Resource Settings',
      authors: ['<b>Ismam Nur Swapnil</b>', 'Aranya Saha', 'Tanvir Ahmed Khan', 'Mohammad Ariful Haque'],
      venue: 'arXiv preprint · under review at IEEE JBHI',
      year: 2025,
      yearDisplay: '2025',
      tags: ['first', '2025', 'preprint'],
      links: {
        arxiv: 'https://arxiv.org/abs/2510.01236',
        pdf: 'https://arxiv.org/pdf/2510.01236'
      },
      venueType: 'preprint',
      thumb: 'IEEE JBHI',
      abstract: 'Vision-Language Models (VLMs) show promise in medical image analysis, yet their capacity for structured reasoning in complex domains like dermatology is limited by data scarcity and the high cost of advanced training. We introduce <strong>DermIQ-VLM</strong>, built through a multi-stage, resource-efficient pipeline designed to emulate a dermatologist\'s diagnostic process. Our primary contribution is a modified GRPO called <strong>GRPO++</strong> that stabilizes the powerful but data-intensive GRPO framework. The pipeline first uses GRPO++ for reasoning-oriented disease recognition, then supervised fine-tuning for conversational ability, then aligns the model via Direct Preference Optimization (DPO) using a <em>knowledge-graph-based</em> system as a scalable proxy for expert preference. Preliminary evaluation on a curated dermatology dataset shows notable gains over standard fine-tuning, validating the pipeline as a feasible pathway for specialized VLMs in resource-constrained environments.'
    },
    {
      id: 'clarify',
      title: 'CLARIFY: A Specialist-Generalist Framework for Accurate and Lightweight Dermatological Visual Question Answering',
      authors: ['Aranya Saha', 'Tanvir Ahmed Khan', '<b>Ismam Nur Swapnil</b>', 'Mohammad Ariful Haque'],
      venue: 'arXiv preprint',
      year: 2025,
      yearDisplay: '2025',
      tags: ['2025', 'preprint'],
      links: {
        arxiv: 'https://arxiv.org/abs/2508.18430',
        pdf: 'https://arxiv.org/pdf/2508.18430'
      },
      venueType: 'preprint',
      thumb: 'arXiv',
      abstract: 'General-purpose VLMs are powerful but their size poses substantial inference costs for clinical deployment, and their generality can hurt specialized diagnostic accuracy. <strong>CLARIFY</strong> is a Specialist-Generalist framework for dermatological VQA that combines (i) a lightweight, domain-trained image classifier (the <em>Specialist</em>) that gives fast, highly accurate diagnostic predictions, and (ii) a compressed conversational VLM (the <em>Generalist</em>) that generates natural-language explanations. The Specialist\'s predictions directly guide the Generalist\'s reasoning, focused on the correct diagnostic path, and a knowledge-graph retriever grounds the Generalist\'s responses in factual dermatological knowledge. This hierarchical design reduces diagnostic errors and improves computational efficiency. On our curated dermatology dataset, CLARIFY achieves an <strong>18%</strong> improvement in diagnostic accuracy over the strongest baseline (a fine-tuned, uncompressed single-line VLM) while cutting average VRAM by <strong>≥20%</strong> and latency by <strong>≥5%</strong>.'
    },
    {
      id: 'compression',
      title: 'Compression Strategies for Efficient Multimodal LLMs in Medical Contexts',
      authors: ['Tanvir A. Khan', 'Aranya Saha', '<b>Ismam N. Swapnil</b>', 'Mohammad A. Haque'],
      venue: 'arXiv preprint',
      year: 2025,
      yearDisplay: '2025',
      tags: ['2025', 'preprint'],
      links: {
        arxiv: 'https://arxiv.org/abs/2507.21976',
        pdf: 'https://arxiv.org/pdf/2507.21976'
      },
      venueType: 'preprint',
      thumb: 'arXiv',
      abstract: 'MLLMs hold huge potential in medicine, but their computational costs demand efficient compression. This work evaluates structural pruning and activation-aware quantization on a fine-tuned LLaVA model for medical applications, proposing a novel <em>layer-selection method</em> for pruning, comparing quantization techniques, and analyzing the performance trade-offs of a <strong>prune → SFT → quantize</strong> pipeline. The proposed method enables MLLMs with 7B parameters to run within <strong>4 GB of VRAM</strong> — a 70% memory reduction — while achieving a <strong>4% higher</strong> model performance compared to traditional pruning and quantization at the same compression ratio.'
    }
  ],

  projects: [
    {
      title: 'GraphIQ-VLM',
      tag: 'VLM',
      category: 'Knowledge-grounded vision-language model',
      desc: 'A knowledge-graph-grounded vision-language model: a medical-concept KG is retrieved at inference time and fused with the VLM for explainable visual reasoning. The repo bundles the KG builder, the VLM training/eval scripts, and the GraphRAG-style retrieval layer.',
      tags: ['VLM', 'Knowledge Graph', 'RAG', 'Medical AI'],
      year: '2025',
      links: { code: 'https://github.com/SwapniL-afk-now/GraphIQ-VLM' }
    },
    {
      title: 'graph-discovery',
      tag: 'Agents',
      category: 'Agentic long-video understanding',
      desc: 'GVD — an agentic long-video understanding framework built on top of Deep Video Discovery (DVD). Replaces the flat NanoVectorDB data layer with a typed Video Knowledge Graph (built once per video via Whisper + OCR + VLM scene extraction) and gives the agent graph-native tools: typed access, multi-hop traversal along CAUSAL · ENTITY · TEMPORAL · SPEAKER · SIMILAR · CONTAINS · EMOTION edges, causal reasoning, and entity timeline queries.',
      tags: ['Agents', 'ReAct', 'Knowledge Graphs', 'Whisper', 'OCR'],
      year: '2025',
      links: { code: 'https://github.com/SwapniL-afk-now/graph-discovery' }
    },
    {
      title: 'Bangla OCR Pipeline',
      tag: 'OCR',
      category: 'On-device handwriting recognition',
      desc: 'End-to-end OCR for Bangla handwritten and printed text. YOLO for word detection paired with Qwen3-VL-2B for text recognition, with both PyTorch and ONNX backends for flexible deployment on resource-constrained hardware.',
      tags: ['YOLO', 'Qwen3-VL', 'OCR', 'ONNX'],
      year: '2025',
      links: { code: 'https://github.com/SwapniL-afk-now/Bangla-OCR-2.0' }
    },
    {
      title: 'AgroResearch AI',
      tag: 'RAG',
      category: 'Domain-grounded research assistant',
      desc: 'RAG-powered chatbot for agricultural research. Synthesizes insights from scientific literature to give actionable recommendations on crops, soil, livestock, and aquaculture. Built on LangChain retrieval with a FastAPI serving layer.',
      tags: ['RAG', 'LangChain', 'FastAPI'],
      year: '2024',
      links: { code: 'https://github.com/SwapniL-afk-now/ResearchAI' }
    },
    {
      title: 'AI Voice Sales Agent',
      tag: 'Voice',
      category: 'Real-time conversational agent',
      desc: 'Real-time full-duplex voice sales agent using FastAPI, LangChain, and WebSockets. Pairs Whisper (STT) and pyttsx3 (TTS) with a local Qwen2 LLM for conversational AI, with auto-downloaded model weights and a configurable course / product catalog.',
      tags: ['FastAPI', 'LangChain', 'Whisper', 'WebSockets'],
      year: '2024',
      links: { code: 'https://github.com/SwapniL-afk-now/AI_Sales_Assistant' }
    },
    {
      title: 'Knowledge Graph with LLM',
      tag: 'KG',
      category: 'Triple extraction pipeline',
      desc: 'LLM-driven extraction pipeline that pulls (entity, relation, entity) triples from text and builds a NetworkX knowledge graph. Uses a DeepSeek-R1-Distill-Qwen-14B model with optional 4-bit quantization, configurable per-dataset extraction prompts, and a clean module split across config / interaction / graph-builder / main.',
      tags: ['NetworkX', 'DeepSeek', 'Triple Extraction'],
      year: '2024',
      links: { code: 'https://github.com/SwapniL-afk-now/Knowledge_Graph_with_LLM' }
    }
  ],

  news: [
    { date: 'May 2026', text: '<strong>GXPO</strong> — a gradient-extrapolation policy-update rule for GRPO-style reasoning RL — on arXiv. Joint work with Prof. Ser-Nam Lim (UCF).' },
    { date: 'Nov 2025', text: 'Joined <strong>Prof. Ser-Nam Lim</strong> at <em>University of Central Florida</em> as a Research Collaborator on policy-gradient methods for LLM reasoning.' },
    { date: 'Oct 2025', text: '<strong>GRPO++</strong> (DermIQ-VLM) on arXiv; under review at <em>IEEE Journal of Biomedical and Health Informatics</em>.' },
    { date: 'Aug 2025', text: '<strong>CLARIFY</strong> Specialist-Generalist framework for dermatological VQA on arXiv.' },
    { date: 'Aug 2025', text: '<strong>1st Runner-Up</strong> at the Bear Summit 2024 Poster Competition, BUET EEE.' },
    { date: 'Jul 2025', text: '<strong>Compression Strategies</strong> for medical MLLMs on arXiv — 70% VRAM reduction on a 7B LLaVA.' },
    { date: 'Apr 2025', text: 'Joined <strong>Advanced Chemical Industries (ACI)</strong> as a Machine Learning Engineer.' },
    { date: 'Feb 2025', text: 'Graduated <strong>B.Sc. in EEE from BUET</strong> — CGPA 3.73/4.0, Dean\'s List, University Merit Scholarship.' }
  ]
};

/* =========================================================
   Boot
   ========================================================= */
document.addEventListener('DOMContentLoaded', () => {
  setYear();
  renderPubs();
  renderProjects();
  renderTimeline();
  initTheme();
  initNavbar();
  initScrollSpy();
  initScrollReveal();
  initCounters();
  initFilters();
  initBackTop();
});

/* =========================================================
   Footer
   ========================================================= */
function setYear() {
  document.getElementById('year').textContent = new Date().getFullYear();
  const d = new Date();
  const opts = { year: 'numeric', month: 'short', day: 'numeric' };
  document.getElementById('lastUpdated').textContent = d.toLocaleDateString('en-US', opts);
}

/* =========================================================
   Theme
   ========================================================= */
function initTheme() {
  const btn = document.getElementById('themeToggle');
  const stored = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initial = stored || (prefersDark ? 'dark' : 'light');
  applyTheme(initial);
  btn.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    applyTheme(current === 'dark' ? 'light' : 'dark', true);
  });
}
function applyTheme(theme, persist = false) {
  document.documentElement.setAttribute('data-theme', theme);
  const btn = document.getElementById('themeToggle');
  btn.innerHTML = theme === 'dark'
    ? '<i class="fa-solid fa-sun"></i>'
    : '<i class="fa-solid fa-moon"></i>';
  if (persist) localStorage.setItem('theme', theme);
}

/* =========================================================
   Navbar
   ========================================================= */
function initNavbar() {
  const nav = document.getElementById('navbar');
  const burger = document.getElementById('navBurger');
  const links = document.getElementById('navLinks');
  burger.addEventListener('click', () => {
    burger.classList.toggle('open');
    links.classList.toggle('open');
  });
  document.querySelectorAll('.nav-link').forEach(a => {
    a.addEventListener('click', () => {
      burger.classList.remove('open');
      links.classList.remove('open');
    });
  });
  const onScroll = () => {
    if (window.scrollY > 30) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

function initScrollSpy() {
  const links = document.querySelectorAll('.nav-link');
  const sections = [...links].map(a => document.querySelector(a.getAttribute('href'))).filter(Boolean);
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const id = '#' + e.target.id;
        links.forEach(l => l.classList.toggle('active', l.getAttribute('href') === id));
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });
  sections.forEach(s => observer.observe(s));
}

/* =========================================================
   Reveal
   ========================================================= */
function initScrollReveal() {
  const els = document.querySelectorAll('[data-reveal]');
  const io = new IntersectionObserver(entries => {
    entries.forEach((e, idx) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('revealed'), idx * 80);
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  els.forEach(el => io.observe(el));
}

/* =========================================================
   Counters
   ========================================================= */
function initCounters() {
  const els = document.querySelectorAll('[data-count]');
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target;
      const target = parseFloat(el.dataset.count);
      const decimals = parseInt(el.dataset.decimal || '0', 10);
      const dur = 1500;
      const start = performance.now();
      const step = (now) => {
        const t = Math.min((now - start) / dur, 1);
        const eased = 1 - Math.pow(1 - t, 3);
        el.textContent = (eased * target).toFixed(decimals);
        if (t < 1) requestAnimationFrame(step);
        else el.textContent = target.toFixed(decimals);
      };
      requestAnimationFrame(step);
      io.unobserve(el);
    });
  }, { threshold: 0.5 });
  els.forEach(el => io.observe(el));
}

/* =========================================================
   Publications — academic bibliography style
   ========================================================= */
function renderPubs() {
  const list = document.getElementById('pubList');
  list.innerHTML = DATA.publications.map(pub => {
    const links = Object.entries(pub.links)
      .filter(([k, url]) => url && url !== '#')
      .map(([k, url]) => {
        const map = {
          arxiv: ['arXiv', 'fa-brands fa-arxiv'],
          code: ['Code', 'fa-brands fa-github'],
          pdf: ['PDF', 'fa-regular fa-file-pdf'],
          site: ['Site', 'fa-solid fa-arrow-up-right-from-square']
        };
        const [label, icon] = map[k] || [k, 'fa-solid fa-link'];
        return `<a class="pub-link" href="${url}" target="_blank" rel="noopener"><i class="${icon}"></i><span>${label}</span></a>`;
      }).join('');

    const badge = pub.venueType === 'preprint'
      ? '<span class="pub-badge">Preprint</span>'
      : '';

    return `
      <li class="pub-item" id="pub-${pub.id}" data-tags="${pub.tags.join(' ')}">
        <button class="pub-head-btn" type="button" aria-expanded="false" aria-controls="abs-${pub.id}">
          <div class="pub-head">
            <div class="pub-year">${pub.yearDisplay}</div>
            <h3 class="pub-title">${pub.title} ${badge}</h3>
            <div class="pub-toggle-indicator" aria-hidden="true">
              <i class="fa-solid fa-chevron-down"></i>
              <span class="pub-toggle-label">Read abstract</span>
            </div>
          </div>
        </button>
        <div class="pub-authors">${pub.authors.join(', ')}</div>
        <div class="pub-venue">${pub.venue}</div>
        <div class="pub-links">${links}</div>
        <div class="pub-abstract" id="abs-${pub.id}" hidden>${pub.abstract}</div>
      </li>
    `;
  }).join('');

  // Wire up expand toggles. The whole title row is the click target.
  list.querySelectorAll('.pub-item').forEach(item => {
    const headBtn = item.querySelector('.pub-head-btn');
    const abs = item.querySelector('.pub-abstract');
    const label = item.querySelector('.pub-toggle-label');
    if (!headBtn || !abs) return;
    headBtn.addEventListener('click', () => {
      const open = item.classList.toggle('expanded');
      headBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
      if (open) abs.removeAttribute('hidden'); else abs.setAttribute('hidden', '');
      if (label) label.textContent = open ? 'Hide abstract' : 'Read abstract';
    });
  });

  document.getElementById('pubTotal').textContent = DATA.publications.length;
  document.getElementById('citeTotal').textContent = DATA.citations;
}

function initFilters() {
  const chips = document.querySelectorAll('#pubFilters .chip');
  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      chips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      const f = chip.dataset.filter;
      document.querySelectorAll('.pub-item').forEach(item => {
        const tags = item.dataset.tags.split(' ');
        const show = f === 'all' || tags.includes(f);
        item.classList.toggle('hidden', !show);
      });
    });
  });
}

/* =========================================================
   Projects
   ========================================================= */
function renderProjects() {
  const grid = document.getElementById('projectsGrid');
  const total = DATA.projects.length;
  const pad = (n) => String(n).padStart(2, '0');
  grid.innerHTML = DATA.projects.map((p, i) => {
    const idx = `${pad(i + 1)} / ${pad(total)}`;
    const tag = (p.tag || p.title.split(/[\s-]+/)[0]).slice(0, 14);
    const cta = (p.links && p.links.code) ? `
      <a class="proj-cta" href="${p.links.code}" target="_blank" rel="noopener">
        <i class="fa-brands fa-github"></i>
        <span>View on GitHub</span>
        <i class="fa-solid fa-arrow-up-right-from-square proj-cta-arrow"></i>
      </a>` : '';
    const tags = (p.tags || []).map(t => `<span class="proj-tag">${t}</span>`).join('');
    return `
      <article class="project-card" data-reveal>
        <div class="proj-meta">
          <span class="proj-index">${idx}</span>
          <span class="proj-tag-mark">${tag}</span>
        </div>
        <h3 class="proj-title">${p.title}</h3>
        <div class="proj-category">${p.category || ''}</div>
        <p class="proj-desc">${p.desc}</p>
        <div class="proj-tags">${tags}</div>
        <div class="proj-foot">
          <span class="proj-year">${p.year}</span>
          ${cta}
        </div>
      </article>
    `;
  }).join('');
}

/* =========================================================
   Timeline
   ========================================================= */
function renderTimeline() {
  const el = document.getElementById('timelineEl');
  el.innerHTML = DATA.news.map(n => `
    <div class="tl-item" data-reveal>
      <div class="tl-date">${n.date}</div>
      <div class="tl-text">${n.text}</div>
    </div>
  `).join('');
}

/* =========================================================
   Back to top
   ========================================================= */
function initBackTop() {
  const btn = document.getElementById('backTop');
  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 600);
  }, { passive: true });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}
