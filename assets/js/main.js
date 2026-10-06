/* =========================================================
   Data — Ismam Nur Swapnil's portfolio
   Content sourced from arXiv abstracts, GitHub READMEs, and the CV.
   ========================================================= */
const DATA = {
  publications: [
    {
      id: 'gxpo',
      title: 'Gradient Extrapolation-Based Policy Optimization',
      authors: ['<b>Ismam Nur Swapnil</b>', 'Aranya Saha', 'Tanvir Ahmed Khan', 'Mohammad Ariful Haque', 'Ser-Nam Lim'],
      venue: 'arXiv preprint',
      yearDisplay: '2026',
      links: {
        arxiv: 'https://arxiv.org/abs/2605.06755',
        pdf: 'https://arxiv.org/pdf/2605.06755'
      },
      abstract: 'Reinforcement learning is widely used to improve the reasoning ability of large language models, especially when answers can be automatically checked. Standard GRPO-style training updates the model using only the current step, while full multi-step lookahead can give a better update direction but is too expensive. We propose <strong>GXPO</strong>, a plug-compatible policy-update rule for GRPO-style reasoning RL that approximates a longer local lookahead using only three backward passes per active phase. It reuses the same batch of rollouts, rewards, advantages, and GRPO loss, so no new rollouts or reward computation are needed. GXPO takes two fast optimizer steps, measures how the gradients change, predicts a virtual K-step lookahead point, moves the policy partway toward it, and applies a corrective update. When the lookahead signal becomes unstable it automatically falls back to standard GRPO. Across Qwen2.5 and Llama math-reasoning experiments, GXPO improves average sampled pass@1 by <strong>+1.65 to +5.00</strong> over GRPO and up to <strong>4.0×</strong> step speedup to GRPO\'s peak accuracy.'
    },
    {
      id: 'grpopp',
      title: 'GRPO++: Enhancing Dermatological Reasoning under Low Resource Settings',
      authors: ['<b>Ismam Nur Swapnil</b>', 'Aranya Saha', 'Tanvir Ahmed Khan', 'Mohammad Ariful Haque'],
      venue: 'arXiv preprint · under review at IEEE JBHI',
      yearDisplay: '2025',
      links: {
        arxiv: 'https://arxiv.org/abs/2510.01236',
        pdf: 'https://arxiv.org/pdf/2510.01236'
      },
      abstract: 'Vision-Language Models (VLMs) show promise in medical image analysis, yet their capacity for structured reasoning in complex domains like dermatology is limited by data scarcity and the high cost of advanced training. We introduce <strong>DermIQ-VLM</strong>, built through a multi-stage, resource-efficient pipeline designed to emulate a dermatologist\'s diagnostic process. Our primary contribution is a modified GRPO called <strong>GRPO++</strong> that stabilizes the powerful but data-intensive GRPO framework. The pipeline first uses GRPO++ for reasoning-oriented disease recognition, then supervised fine-tuning for conversational ability, then aligns the model via Direct Preference Optimization (DPO) using a <em>knowledge-graph-based</em> system as a scalable proxy for expert preference. Preliminary evaluation on a curated dermatology dataset shows notable gains over standard fine-tuning, validating the pipeline as a feasible pathway for specialized VLMs in resource-constrained environments.'
    },
    {
      id: 'clarify',
      title: 'CLARIFY: A Specialist-Generalist Framework for Accurate and Lightweight Dermatological Visual Question Answering',
      authors: ['Aranya Saha', 'Tanvir Ahmed Khan', '<b>Ismam Nur Swapnil</b>', 'Mohammad Ariful Haque'],
      venue: 'arXiv preprint',
      yearDisplay: '2025',
      links: {
        arxiv: 'https://arxiv.org/abs/2508.18430',
        pdf: 'https://arxiv.org/pdf/2508.18430'
      },
      abstract: 'General-purpose VLMs are powerful but their size poses substantial inference costs for clinical deployment, and their generality can hurt specialized diagnostic accuracy. <strong>CLARIFY</strong> is a Specialist-Generalist framework for dermatological VQA that combines (i) a lightweight, domain-trained image classifier (the <em>Specialist</em>) that gives fast, highly accurate diagnostic predictions, and (ii) a compressed conversational VLM (the <em>Generalist</em>) that generates natural-language explanations. The Specialist\'s predictions directly guide the Generalist\'s reasoning, focused on the correct diagnostic path, and a knowledge-graph retriever grounds the Generalist\'s responses in factual dermatological knowledge. This hierarchical design reduces diagnostic errors and improves computational efficiency. On our curated dermatology dataset, CLARIFY achieves an <strong>18%</strong> improvement in diagnostic accuracy over the strongest baseline (a fine-tuned, uncompressed single-line VLM) while cutting average VRAM by <strong>≥20%</strong> and latency by <strong>≥5%</strong>.'
    },
    {
      id: 'compression',
      title: 'Compression Strategies for Efficient Multimodal LLMs in Medical Contexts',
      authors: ['Tanvir A. Khan', 'Aranya Saha', '<b>Ismam N. Swapnil</b>', 'Mohammad A. Haque'],
      venue: 'arXiv preprint',
      yearDisplay: '2025',
      links: {
        arxiv: 'https://arxiv.org/abs/2507.21976',
        pdf: 'https://arxiv.org/pdf/2507.21976'
      },
      abstract: 'MLLMs hold huge potential in medicine, but their computational costs demand efficient compression. This work evaluates structural pruning and activation-aware quantization on a fine-tuned LLaVA model for medical applications, proposing a novel <em>layer-selection method</em> for pruning, comparing quantization techniques, and analyzing the performance trade-offs of a <strong>prune → SFT → quantize</strong> pipeline. The proposed method enables MLLMs with 7B parameters to run within <strong>4 GB of VRAM</strong> — a 70% memory reduction — while achieving a <strong>4% higher</strong> model performance compared to traditional pruning and quantization at the same compression ratio.'
    }
  ],

  projects: [
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
      title: 'Bangla OCR Pipeline',
      category: 'On-device handwriting recognition',
      desc: 'Detects words with YOLO and recognizes Bangla text with Qwen3-VL-2B, with PyTorch and ONNX inference options.',
      tags: ['YOLO', 'Qwen3-VL', 'OCR', 'ONNX'],
      year: '2025',
      links: { code: 'https://github.com/SwapniL-afk-now/Bangla-OCR-2.0' }
    },
    {
      title: 'AgroResearch AI',
      category: 'Domain-grounded research assistant',
      desc: 'Retrieves and synthesizes scientific literature to answer questions about crops, soil, livestock, and aquaculture.',
      tags: ['RAG', 'LangChain', 'FastAPI'],
      year: '2024',
      links: { code: 'https://github.com/SwapniL-afk-now/ResearchAI' }
    },
    {
      title: 'AI Voice Sales Agent',
      category: 'Real-time conversational agent',
      desc: 'A full-duplex voice agent pairing Whisper speech recognition and pyttsx3 speech with a local Qwen2 model.',
      tags: ['FastAPI', 'LangChain', 'Whisper', 'WebSockets'],
      year: '2024',
      links: { code: 'https://github.com/SwapniL-afk-now/AI_Sales_Assistant' }
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
