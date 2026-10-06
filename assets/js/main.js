/* Content: supplied academic CV, linked papers, and repository documentation. */
const DATA = {
  "publications": [
    {
      "id": "prepo",
      "title": "Skip What You Can Predict: Predictive Repositioning for Policy Optimization for Efficient LLM Training",
      "authors": [
        "<b>I. N. Swapnil</b>",
        "A. Saha",
        "T. Zahra",
        "T. A. Khan",
        "M. A. Haque",
        "S.-N. Lim"
      ],
      "venue": "Preprint · Submitted to ICLR 2027",
      "yearDisplay": "2026",
      "links": {
        "arxiv": "https://arxiv.org/abs/2605.06755",
        "pdf": "https://arxiv.org/pdf/2605.06755",
        "html": "https://arxiv.org/html/2605.06755"
      },
      "abstract": "PrePO approximates repeated same-batch optimizer updates by extrapolating from two observed steps to a farther point on the trajectory, then correcting at a fixed active cost. It reaches matched performance in fewer explicit steps and less wall-clock time. The paper gives finite-horizon error bounds for AdamW and Muon and evaluates the method on reinforcement learning with verifiable rewards and supervised fine-tuning.",
      "summary": "Predicts a farther point on a same-batch optimization trajectory from two probe updates, then repositions and corrects instead of executing every intermediate step.",
      "contribution": "First author. Developed predictive repositioning, established finite-horizon error bounds for AdamW and Muon, and validated the method in RL with verifiable rewards and supervised fine-tuning.",
      "evidence": "The paper reports fewer explicit optimization steps and lower wall-clock time to matched performance targets than the corresponding RLVR baselines."
    },
    {
      "id": "opasd",
      "title": "Teach Yourself Where to Look: On-Policy Attention Self-Distillation for Reasoning",
      "authors": [
        "S. H. Arib",
        "R. Akter",
        "<b>I. N. Swapnil</b>",
        "Md. F. A. Sayeedi",
        "T. Mohiuddin*",
        "Md. M. Islam*"
      ],
      "venue": "Preprint · Submitted to ICLR 2027 · *Equal supervision",
      "yearDisplay": "2026",
      "links": {
        "arxiv": "https://arxiv.org/abs/2609.33200",
        "pdf": "https://arxiv.org/pdf/2609.33200",
        "html": "https://arxiv.org/html/2609.33200"
      },
      "abstract": "OPASD complements token-level on-policy self-distillation with solution-conditioned attention supervision. Teacher attention is projected onto student-visible positions and renormalized before alignment. In the reported comparisons with token-only OPSD, OPASD reduces generated rollout tokens by 73.9% and estimated model compute by 72.6%, while training 1.53× faster. These findings apply to the model sizes, tasks, and training settings evaluated in the paper.",
      "summary": "Transfers where a solution-informed teacher attends, alongside its token predictions, by projecting attention onto context available to the student.",
      "contribution": "Co-author. Co-developed on-policy attention self-distillation with the author team.",
      "evidence": "Across Qwen3 models (1.7B–8B) and four competition-level math benchmarks, the paper reports 4.98–8.40 percentage-point gains in average accuracy over token-only OPSD."
    },
    {
      "id": "grpopp",
      "title": "GRPO++: Enhancing Dermatological Reasoning under Low Resource Settings",
      "authors": [
        "<b>I. N. Swapnil</b>",
        "A. Saha",
        "T. A. Khan",
        "M. A. Haque"
      ],
      "venue": "Preprint · Under review at IEEE Journal of Biomedical and Health Informatics",
      "yearDisplay": "2025",
      "links": {
        "arxiv": "https://arxiv.org/abs/2510.01236",
        "pdf": "https://arxiv.org/pdf/2510.01236",
        "html": "https://arxiv.org/html/2510.01236",
        "dataset": "https://www.kaggle.com/dsv/13076764"
      },
      "abstract": "GRPO++ stabilizes data-hungry GRPO for low-resource medical vision-language models. In the three-stage pipeline, GRPO++ supports diagnostic reasoning, supervised fine-tuning adds conversational ability, and knowledge-graph-based DPO reduces factual errors.",
      "summary": "Combines stabilized policy optimization, supervised fine-tuning, and knowledge-graph-based preference alignment for dermatological reasoning with limited data.",
      "contribution": "First author. Developed GRPO++ within the three-stage dermatological VLM training pipeline.",
      "evidence": "Evaluated on a curated dermatology dataset against standard fine-tuning approaches. Evaluation is limited to the paper’s curated research dataset."
    },
    {
      "id": "clarify",
      "title": "CLARIFY: A Specialist-Generalist Framework for Accurate and Lightweight Dermatological Visual Question Answering",
      "authors": [
        "A. Saha",
        "T. A. Khan",
        "<b>I. N. Swapnil</b>",
        "M. A. Haque"
      ],
      "venue": "Preprint",
      "yearDisplay": "2025",
      "links": {
        "arxiv": "https://arxiv.org/abs/2508.18430",
        "pdf": "https://arxiv.org/pdf/2508.18430",
        "html": "https://arxiv.org/html/2508.18430",
        "dataset": "https://www.kaggle.com/dsv/12845315"
      },
      "abstract": "CLARIFY combines a domain-trained specialist classifier, a compressed conversational VLM, and knowledge-graph retrieval. The paper reports an 18% improvement in diagnostic accuracy over its strongest baseline, a fine-tuned uncompressed VLM, on a curated multimodal dermatology dataset, alongside at least 20% lower average VRAM use and 5% lower latency. The reported gains apply to the paper’s experimental dataset and baselines.",
      "summary": "Uses a specialist image classifier to guide a compressed conversational VLM, with knowledge-graph retrieval for dermatological question answering.",
      "contribution": "Co-author. Contributed to the design of the specialist–generalist architecture for dermatological VQA.",
      "evidence": "On the paper’s curated dermatology dataset, the framework improves diagnostic accuracy over a fine-tuned uncompressed VLM and reduces average VRAM use by at least 20%."
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
  renderPubs();
  renderProjects();
  renderTimeline();
});

function renderPubs() {
  document.getElementById('pubList').innerHTML = DATA.publications.map(pub => {
    const links = Object.entries(pub.links)
      .filter(([, url]) => url && url !== '#')
      .map(([kind, url]) => {
        const label = { arxiv: 'arXiv', pdf: 'PDF', html: 'Methods & experiments', dataset: 'Dataset', code: 'Code', site: 'Project' }[kind] || kind;
        return `<a class="pub-link" href="${url}" target="_blank" rel="noopener">${label} ↗</a>`;
      }).join('');
    return `<li class="pub-item" id="pub-${pub.id}">
      <div class="pub-head"><span class="pub-year">${pub.yearDisplay}</span><h3 class="pub-title">${pub.title}</h3></div>
      <p class="pub-authors">${pub.authors.join(', ')}</p>
      <p class="pub-venue">${pub.venue}</p>
      <p class="pub-summary">${pub.summary}</p>
      <p class="pub-contribution"><strong>My contribution.</strong> ${pub.contribution}</p>
      <p class="pub-evidence"><strong>Evidence.</strong> ${pub.evidence}</p>
      <div class="pub-links">${links}</div>
      <details class="pub-abstract"><summary>More about the method & evaluation</summary><p>${pub.abstract}</p></details>
    </li>`;
  }).join('');
}

function renderProjects() {
  const projects = DATA.projects.map(project => {
    const tags = project.tags.map(tag => `<span>${tag}</span>`).join('');
    const code = project.links.code
      ? `<a class="proj-cta" href="${project.links.code}" target="_blank" rel="noopener">GitHub ↗</a>`
      : '';
    return `<article class="project-card">
      <div><h3 class="proj-title">${project.title}</h3><p class="proj-category">${project.category}</p></div>
      <p class="proj-desc">${project.desc}</p>
      <div class="proj-tags">${tags}</div>
      <div class="proj-foot">${code}</div>
    </article>`;
  });
  document.getElementById('projectsGrid').innerHTML = projects.slice(0, 2).join('') +
    `<details class="archive-details"><summary>Applied projects · OCR, retrieval & voice</summary>${projects.slice(2).join('')}</details>`;
}

function renderTimeline() {
  const news = DATA.news.map(item =>
    `<article class="tl-item"><time class="tl-date">${item.date}</time><div class="tl-text">${item.text}</div></article>`
  );
  document.getElementById('timelineEl').innerHTML = news.slice(0, 3).join('') +
    `<details class="archive-details"><summary>Earlier milestones · 2024–2025</summary>${news.slice(3).join('')}</details>`;
}
