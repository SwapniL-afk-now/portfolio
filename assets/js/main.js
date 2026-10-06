/* =========================================================
   Data — Ismam Nur Swapnil's portfolio
   Content sourced from arXiv abstracts, GitHub READMEs, and the CV.
   ========================================================= */
const DATA = {
  publications: [
    {
      id: 'prepo',
      title: 'Skip What You Can Predict: Predictive Repositioning for Policy Optimization for Efficient LLM Training',
      authors: ['<b>I. N. Swapnil</b>', 'A. Saha', 'T. Zahra', 'T. A. Khan', 'M. A. Haque', 'S.-N. Lim'],
      venue: 'Submitted to ICLR 2027 · Preprint · First author',
      yearDisplay: '2026',
      links: {
        arxiv: 'https://arxiv.org/abs/2605.06755',
        pdf: 'https://arxiv.org/pdf/2605.06755'
      },
      abstract: 'PrePO approximates repeated same-batch optimizer updates by extrapolating from two observed steps to a farther point on the trajectory, then correcting at a fixed active cost. It reaches matched performance in fewer explicit steps and less wall-clock time. The paper gives finite-horizon error bounds for AdamW and Muon and evaluates the method on reinforcement learning with verifiable rewards and supervised fine-tuning.'
    },
    {
      id: 'opasd',
      title: 'Teach Yourself Where to Look: On-Policy Attention Self-Distillation for Reasoning',
      authors: ['S. H. Arib', 'R. Akter', '<b>I. N. Swapnil</b>', 'Md. F. A. Sayeedi', 'T. Mohiuddin*', 'Md. M. Islam*'],
      venue: 'Submitted to ICLR 2027 · Preprint · *Equal supervision',
      yearDisplay: '2026',
      links: {
        arxiv: 'https://arxiv.org/abs/2609.33200',
        pdf: 'https://arxiv.org/pdf/2609.33200'
      },
      abstract: 'OPASD adds solution-conditioned attention distillation to on-policy self-distillation by projecting teacher attention onto positions visible to the student. On Qwen3 models from 1.7B to 8B parameters, it reports 4.98–8.40 accuracy points over token-only OPSD, 73.9% fewer generated rollout tokens, 72.6% lower estimated model compute, and 1.53× faster training.'
    },
    {
      id: 'grpopp',
      title: 'GRPO++: Enhancing Dermatological Reasoning under Low Resource Settings',
      authors: ['<b>I. N. Swapnil</b>', 'A. Saha', 'T. A. Khan', 'M. A. Haque'],
      venue: 'Under review at IEEE Journal of Biomedical and Health Informatics · First author',
      yearDisplay: '2025',
      links: {
        arxiv: 'https://arxiv.org/abs/2510.01236',
        pdf: 'https://arxiv.org/pdf/2510.01236'
      },
      abstract: 'GRPO++ stabilizes data-hungry GRPO for low-resource medical vision-language models. In the three-stage pipeline, GRPO++ supports diagnostic reasoning, supervised fine-tuning adds conversational ability, and knowledge-graph-based DPO reduces factual errors.'
    },
    {
      id: 'clarify',
      title: 'CLARIFY: A Specialist-Generalist Framework for Accurate and Lightweight Dermatological Visual Question Answering',
      authors: ['A. Saha', 'T. A. Khan', '<b>I. N. Swapnil</b>', 'M. A. Haque'],
      venue: 'Preprint',
      yearDisplay: '2025',
      links: {
        arxiv: 'https://arxiv.org/abs/2508.18430',
        pdf: 'https://arxiv.org/pdf/2508.18430'
      },
      abstract: 'CLARIFY pairs a small specialist classifier with a compressed conversational vision-language model, grounded by knowledge-graph retrieval. The paper reports 18% higher diagnostic accuracy than a fine-tuned full-size VLM with at least 20% less VRAM.'
    }
  ],

  projects: [
    {
      title: 'Bangla OCR Pipeline',
      category: 'Bangla handwritten and printed text OCR',
      desc: 'Combines YOLO word detection with Qwen3-VL-2B recognition; includes PyTorch and ONNX deployment backends.',
      tags: ['YOLO', 'Qwen3-VL', 'OCR', 'ONNX'],
      year: '2025',
      links: { code: 'https://github.com/SwapniL-afk-now/Bangla-OCR-2.0' }
    },
    {
      title: 'AgroResearch AI',
      category: 'Agricultural research assistant',
      desc: 'A retrieval-augmented chatbot that synthesizes scientific literature for crop, soil, livestock, and aquaculture management.',
      tags: ['RAG', 'LangChain', 'FastAPI'],
      year: '2024',
      links: { code: 'https://github.com/SwapniL-afk-now/ResearchAI' }
    },
    {
      title: 'Real-Time AI Sales Communicator',
      category: 'Full-duplex voice agent',
      desc: 'Pairs a local Qwen language model with Whisper speech recognition and pyttsx3 speech synthesis, served through FastAPI and WebSockets.',
      tags: ['FastAPI', 'Whisper', 'WebSockets'],
      year: '2024',
      links: { code: 'https://github.com/SwapniL-afk-now/AI_Sales_Assistant' }
    },
    {
      title: 'GraphIQ-VLM',
      category: 'Knowledge-grounded vision-language model',
      desc: 'Retrieves medical concepts from a knowledge graph and combines them with a vision-language model for explainable medical image reasoning.',
      tags: ['VLM', 'Knowledge Graph', 'RAG', 'Medical AI'],
      year: '2025',
      links: { code: 'https://github.com/SwapniL-afk-now/GraphIQ-VLM' }
    },
    {
      title: 'graph-discovery',
      category: 'Agentic long-video understanding',
      desc: 'Builds a typed video knowledge graph from Whisper, OCR, and VLM scene extraction, then supports multi-hop, temporal, and causal queries through agent tools.',
      tags: ['Agents', 'ReAct', 'Knowledge Graphs', 'Whisper', 'OCR'],
      year: '2025',
      links: { code: 'https://github.com/SwapniL-afk-now/graph-discovery' }
    },
    {
      title: 'Knowledge Graph with LLM',
      category: 'Triple extraction pipeline',
      desc: 'Extracts entity-relation triples with a DeepSeek-distilled model and builds a NetworkX graph, with optional 4-bit quantization.',
      tags: ['NetworkX', 'DeepSeek', 'Triple Extraction'],
      year: '2024',
      links: { code: 'https://github.com/SwapniL-afk-now/Knowledge_Graph_with_LLM' }
    }
  ],

  news: [
    { date: 'Sep 2026', text: 'Co-developed <strong>OPASD</strong>, on-policy attention self-distillation for reasoning, with Md Mofijul Islam (Amazon GenAI); preprint on arXiv and submitted to ICLR 2027.' },
    { date: 'May 2026', text: '<strong>PrePO</strong> (<em>Skip What You Can Predict</em>) on arXiv; submitted to ICLR 2027. First-author work with Prof. Ser-Nam Lim (UCF).' },
    { date: 'Nov 2025', text: 'Joined <strong>Prof. Ser-Nam Lim</strong> at <em>University of Central Florida</em> as a Research Collaborator on policy-gradient methods for LLM reasoning.' },
    { date: 'Oct 2025', text: '<strong>GRPO++</strong> on arXiv; under review at <em>IEEE Journal of Biomedical and Health Informatics</em>.' },
    { date: 'Aug 2025', text: '<strong>CLARIFY</strong> Specialist-Generalist framework for dermatological VQA on arXiv.' },
    { date: 'Jul 2025', text: '<strong>Compression Strategies</strong> for medical MLLMs on arXiv — 70% VRAM reduction on a 7B LLaVA.' },
    { date: 'Jun 2025', text: 'Joined <strong>Advanced Chemical Industries Limited (ACI)</strong> as a Machine Learning Engineer in the Department of MIS.' },
    { date: 'Feb 2025', text: 'Graduated <strong>B.Sc. in EEE from BUET</strong> — CGPA 3.73/4.0, Dean\'s List, University Merit Scholarship.' },
    { date: '2024', text: '<strong>Runner-up, Poster Presentation</strong> at Bear Summit 2024, BUET EEE.' }
  ]
};

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('year').textContent = new Date().getFullYear();
  renderPubs();
  renderProjects();
  renderTimeline();
});

function renderPubs() {
  document.getElementById('pubList').innerHTML = DATA.publications.map(pub => {
    const links = Object.entries(pub.links)
      .filter(([, url]) => url && url !== '#')
      .map(([kind, url]) => {
        const label = { arxiv: 'arXiv', pdf: 'PDF', code: 'Code', site: 'Project' }[kind] || kind;
        return `<a class="pub-link" href="${url}" target="_blank" rel="noopener">${label} ↗</a>`;
      }).join('');
    return `<li class="pub-item" id="pub-${pub.id}">
      <div class="pub-head"><span class="pub-year">${pub.yearDisplay}</span><h3 class="pub-title">${pub.title}</h3></div>
      <p class="pub-authors">${pub.authors.join(', ')}</p>
      <p class="pub-venue">${pub.venue}</p>
      <div class="pub-links">${links}</div>
      <details class="pub-abstract"><summary>Abstract</summary><p>${pub.abstract}</p></details>
    </li>`;
  }).join('');
}

function renderProjects() {
  document.getElementById('projectsGrid').innerHTML = DATA.projects.map(project => {
    const tags = project.tags.map(tag => `<span>${tag}</span>`).join('');
    const code = project.links.code
      ? `<a class="proj-cta" href="${project.links.code}" target="_blank" rel="noopener">GitHub ↗</a>`
      : '';
    return `<article class="project-card">
      <div><h3 class="proj-title">${project.title}</h3><p class="proj-category">${project.category}</p></div>
      <p class="proj-desc">${project.desc}</p>
      <div class="proj-tags">${tags}</div>
      <div class="proj-foot"><span class="proj-year">${project.year}</span>${code}</div>
    </article>`;
  }).join('');
}

function renderTimeline() {
  document.getElementById('timelineEl').innerHTML = DATA.news.map(item =>
    `<article class="tl-item"><time class="tl-date">${item.date}</time><div class="tl-text">${item.text}</div></article>`
  ).join('');
}
