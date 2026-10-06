/* Portfolio content from the current CV, papers, and project documentation. */
const DATA = {
  "publications": [
    {
      "id": "prepo",
      "title": "Skip What You Can Predict: Predictive Repositioning for Policy Optimization for Efficient LLM Training",
      "authors": [
        "<span class=\"self-author\">Ismam Nur Swapnil</span>",
        "Aranya Saha",
        "Tasneea Zahra",
        "Tanvir Ahmed Khan",
        "Mohammad Ariful Haque",
        "Ser-Nam Lim"
      ],
      "venue": "Preprint · Submitted to ICLR 2027",
      "yearDisplay": "2026",
      "links": {
        "arxiv": "https://arxiv.org/abs/2605.06755",
        "pdf": "https://arxiv.org/pdf/2605.06755",
        "html": "https://arxiv.org/html/2605.06755"
      },
      "abstract": "PrePO approximates repeated same-batch optimizer updates by extrapolating from two observed steps to a farther point on the trajectory, then correcting at a fixed active cost. It reaches matched performance in fewer explicit steps and less wall-clock time. The paper gives finite-horizon error bounds for AdamW and Muon and evaluates the method on reinforcement learning with verifiable rewards and supervised fine-tuning."
    },
    {
      "id": "opasd",
      "title": "Teach Yourself Where to Look: On-Policy Attention Self-Distillation for Reasoning",
      "authors": [
        "Safaeid Hossain Arib",
        "Rabeya Akter",
        "<span class=\"self-author\">Ismam Nur Swapnil</span>",
        "Md. Faiyaz Abdullah Sayeedi",
        "Tasnim Mohiuddin*",
        "Md Mofijul Islam*"
      ],
      "venue": "Preprint · Submitted to ICLR 2027 · *Equal supervision",
      "yearDisplay": "2026",
      "links": {
        "arxiv": "https://arxiv.org/abs/2609.33200",
        "pdf": "https://arxiv.org/pdf/2609.33200",
        "html": "https://arxiv.org/html/2609.33200"
      },
      "abstract": "OPASD complements token-level on-policy self-distillation with solution-conditioned attention supervision. Teacher attention is projected onto student-visible positions and renormalized before alignment. In the reported comparisons with token-only OPSD, OPASD reduces generated rollout tokens by 73.9% and estimated model compute by 72.6%, while training 1.53× faster. These findings apply to the model sizes, tasks, and training settings evaluated in the paper."
    },
    {
      "id": "grpopp",
      "title": "GRPO++: Enhancing Dermatological Reasoning under Low Resource Settings",
      "authors": [
        "<span class=\"self-author\">Ismam Nur Swapnil</span>",
        "Aranya Saha",
        "Tanvir Ahmed Khan",
        "Mohammad Ariful Haque"
      ],
      "venue": "Preprint · Under review at IEEE Journal of Biomedical and Health Informatics",
      "yearDisplay": "2025",
      "links": {
        "arxiv": "https://arxiv.org/abs/2510.01236",
        "pdf": "https://arxiv.org/pdf/2510.01236",
        "html": "https://arxiv.org/html/2510.01236",
        "dataset": "https://www.kaggle.com/dsv/13076764"
      },
      "abstract": "GRPO++ stabilizes data-hungry GRPO for low-resource medical vision-language models. In the three-stage pipeline, GRPO++ supports diagnostic reasoning, supervised fine-tuning adds conversational ability, and knowledge-graph-based DPO reduces factual errors."
    },
    {
      "id": "clarify",
      "title": "CLARIFY: A Specialist-Generalist Framework for Accurate and Lightweight Dermatological Visual Question Answering",
      "authors": [
        "Aranya Saha",
        "Tanvir Ahmed Khan",
        "<span class=\"self-author\">Ismam Nur Swapnil</span>",
        "Mohammad Ariful Haque"
      ],
      "venue": "Preprint",
      "yearDisplay": "2025",
      "links": {
        "arxiv": "https://arxiv.org/abs/2508.18430",
        "pdf": "https://arxiv.org/pdf/2508.18430",
        "html": "https://arxiv.org/html/2508.18430",
        "dataset": "https://www.kaggle.com/dsv/12845315"
      },
      "abstract": "CLARIFY combines a domain-trained specialist classifier, a compressed conversational VLM, and knowledge-graph retrieval. The paper reports an 18% improvement in diagnostic accuracy over its strongest baseline, a fine-tuned uncompressed VLM, on a curated multimodal dermatology dataset, alongside at least 20% lower average VRAM use and 5% lower latency. The reported gains apply to the paper’s experimental dataset and baselines."
    }
  ],
  "projects": [
    {
      "title": "GraphIQ-VLM",
      "category": "Medical VLM training",
      "desc": "Fine-tunes Qwen2.5-VL-3B for skin-disease classification using GRPO, LoRA, and accuracy and output-format rewards.",
      "tags": [
        "GRPO",
        "Qwen2.5-VL",
        "LoRA"
      ],
      "links": {
        "code": "https://github.com/SwapniL-afk-now/GraphIQ-VLM"
      }
    },
    {
      "title": "graph-discovery",
      "category": "Agentic long-video understanding",
      "desc": "Extends Deep Video Discovery with a typed video knowledge graph and tools for temporal queries, entity tracking, and graph traversal.",
      "tags": [
        "Agents",
        "ReAct",
        "Knowledge Graphs",
        "Whisper",
        "OCR"
      ],
      "links": {
        "code": "https://github.com/SwapniL-afk-now/graph-discovery"
      }
    },
    {
      "title": "Bangla OCR Pipeline",
      "category": "Bangla handwritten and printed text OCR",
      "desc": "Combines YOLO word detection with Qwen3-VL-2B recognition; includes PyTorch and ONNX deployment backends.",
      "tags": [
        "YOLO",
        "Qwen3-VL",
        "OCR",
        "ONNX"
      ],
      "links": {
        "code": "https://github.com/SwapniL-afk-now/Bangla-OCR-2.0"
      }
    },
    {
      "title": "AgroResearch AI",
      "category": "Agricultural research assistant",
      "desc": "A retrieval-augmented chatbot that synthesizes scientific literature for crop, soil, livestock, and aquaculture management.",
      "tags": [
        "RAG",
        "LangChain",
        "FastAPI"
      ],
      "links": {
        "code": "https://github.com/SwapniL-afk-now/ResearchAI"
      }
    },
    {
      "title": "Real-Time AI Sales Communicator",
      "category": "Voice-agent prototype",
      "desc": "A simulated sales-call agent with a local Qwen model, Whisper recognition, and pyttsx3 speech synthesis, using FastAPI and WebSockets.",
      "tags": [
        "FastAPI",
        "Whisper",
        "WebSockets"
      ],
      "links": {
        "code": "https://github.com/SwapniL-afk-now/AI_Sales_Assistant"
      }
    },
    {
      "title": "Knowledge Graph with LLM",
      "category": "Triple extraction pipeline",
      "desc": "Extracts entity-relation triples with a DeepSeek-distilled model and builds a NetworkX graph, with optional 4-bit quantization.",
      "tags": [
        "NetworkX",
        "DeepSeek",
        "Triple Extraction"
      ],
      "links": {
        "code": "https://github.com/SwapniL-afk-now/Knowledge_Graph_with_LLM"
      }
    }
  ],
  "news": [
    {
      "date": "Sep 2026",
      "text": "Co-developed <strong>OPASD</strong>, on-policy attention self-distillation for reasoning, with Md Mofijul Islam (Amazon GenAI); preprint on arXiv."
    },
    {
      "date": "May 2026",
      "text": "<strong>PrePO</strong> (<em>Skip What You Can Predict</em>) released on arXiv. First-author work with Prof. Ser-Nam Lim (UCF)."
    },
    {
      "date": "Nov 2025",
      "text": "Began a research collaboration with <strong>Prof. Ser-Nam Lim</strong> at the <em>University of Central Florida</em> on policy optimization for LLM reasoning."
    },
    {
      "date": "Sep 2025",
      "text": "<strong>GRPO++</strong> on arXiv; under review at <em>IEEE Journal of Biomedical and Health Informatics</em>."
    },
    {
      "date": "Aug 2025",
      "text": "<strong>CLARIFY</strong> Specialist-Generalist framework for dermatological VQA on arXiv."
    },
    {
      "date": "Jul 2025",
      "text": "<strong>Compression Strategies</strong> for medical MLLMs on arXiv — 70% VRAM reduction on a 7B LLaVA."
    },
    {
      "date": "Jun 2025",
      "text": "Joined <strong>Advanced Chemical Industries Limited (ACI)</strong> as a Machine Learning Engineer in the Department of MIS."
    },
    {
      "date": "Feb 2025",
      "text": "Graduated <strong>B.Sc. in EEE from BUET</strong> — CGPA 3.73/4.0, Dean's List, University Merit Scholarship."
    },
    {
      "date": "2024",
      "text": "<strong>Runner-up, Poster Presentation</strong> at Bear Summit 2024, BUET EEE."
    }
  ]
};

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('year').textContent = new Date().getFullYear();
  if (document.getElementById('pubList')) renderPubs();
  if (document.getElementById('projectsGrid')) renderProjects();
  if (document.getElementById('timelineEl')) renderTimeline();

  const menu = document.querySelector('.nav-menu');
  const desktop = window.matchMedia('(min-width: 576px)');
  const syncMenu = () => { menu.open = desktop.matches; };
  syncMenu();
  desktop.addEventListener('change', syncMenu);

  const toggle = document.querySelector('.theme-toggle');
  const setTheme = dark => {
    document.documentElement.dataset.theme = dark ? 'dark' : 'light';
    toggle.setAttribute('aria-pressed', String(dark));
    toggle.setAttribute('aria-label', dark ? 'Switch to light theme' : 'Switch to dark theme');
  };
  try { setTheme(localStorage.getItem('portfolio-theme') === 'dark'); } catch { setTheme(false); }
  toggle.addEventListener('click', () => {
    const dark = document.documentElement.dataset.theme !== 'dark';
    setTheme(dark);
    try { localStorage.setItem('portfolio-theme', dark ? 'dark' : 'light'); } catch {}
  });

  // Preserve links to sections from the previous single-page layout.
  if (document.getElementById('about')) {
    const routeLegacyHash = () => {
      const hash = location.hash;
      const routes = { '#publications': 'publications/', '#research': 'research/', '#projects': 'research/#projects', '#experience': 'experience/' };
      const destination = hash.startsWith('#pub-') ? 'publications/' + hash : routes[hash];
      if (destination) location.replace(destination);
    };
    routeLegacyHash();
    window.addEventListener('hashchange', routeLegacyHash);
  }
});

function renderPubs() {
  const years = [...new Set(DATA.publications.map(pub => pub.yearDisplay))];
  document.getElementById('pubList').innerHTML = years.map(year =>
    `<section class="publication-year"><h2 class="year-label">${year}</h2><ol class="pub-list">${DATA.publications.filter(pub => pub.yearDisplay === year).map(pub => {
      const links = Object.entries(pub.links).filter(([, url]) => url && url !== '#').map(([kind, url]) => {
        const label = { arxiv: 'arXiv', pdf: 'PDF', html: 'HTML', dataset: 'Data', code: 'Code', site: 'Project' }[kind] || kind;
        return `<a class="pub-link" href="${url}" target="_blank" rel="noopener">${label}</a>`;
      }).join('');
      return `<li class="pub-item" id="pub-${pub.id}"><h3 class="pub-title">${pub.title}</h3><p class="pub-authors">${pub.authors.join(', ')}</p><p>${pub.yearDisplay}</p><p class="pub-venue">${pub.venue}</p><div class="pub-links">${links}<details class="pub-abstract"><summary aria-label="Abstract">ABS</summary><p>${pub.abstract}</p></details></div></li>`;
    }).join('')}</ol></section>`
  ).join('');
}

function renderProjects() {
  document.getElementById('projectsGrid').innerHTML = DATA.projects.map(project =>
    `<article class="project"><h3><a href="${project.links.code}" target="_blank" rel="noopener">${project.title}</a></h3><p>${project.desc}</p></article>`
  ).join('');
}

function renderTimeline() {
  document.getElementById('timelineEl').innerHTML = `<table class="news-table"><tbody>${DATA.news.map(item =>
    `<tr><th scope="row">${item.date}</th><td>${item.text}</td></tr>`
  ).join('')}</tbody></table>`;
}
