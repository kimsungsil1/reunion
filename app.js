const CONFIG = {
  YOUTUBE_VIDEO_ID: 'dQw4w9WgXcQ',
  AMULET_BUY_URL: 'https://example.com/buy-amulet',
  STORAGE_KEY: 'reunion-calculator-v1',
  THEME_KEY: 'reunion-theme-v1'
};

const QUESTIONS = [
  { title: '1. 마지막으로 연락이 끊긴 정확한 순간은 언제였고, 그 직전에 어떤 일이 있었나요?', hint: '날짜/시간대/장소처럼 기억나는 사실부터 적어보세요.\n그 직전의 감정과 행동을 분리해서 써보면 정리가 쉬워집니다.' },
  { title: '2. 그 사람이 떠난 이유를 지금의 너는 어떻게 해석하나요? (사실/추측을 분리해서)', hint: '확실히 확인된 사실과 내 해석을 나눠 적어보세요.\n해석의 근거가 무엇인지 한 줄로 붙여보세요.' },
  { title: '3. 지금 돌이켜보면, 네가 놓친 신호가 있었다면 무엇이었나요?', hint: '사소했지만 반복되던 장면을 떠올려 보세요.\n“그때 왜 그냥 넘겼을까?”라는 관점이 도움이 됩니다.' },
  { title: '4. 관계에서 반복되던 갈등 패턴이 있었다면, 한 문장으로 정의하면?', hint: '예: “회피-추궁 패턴”, “침묵-폭발 패턴”처럼 이름 붙여보세요.\n짧고 정확할수록 좋아요.' },
  { title: '5. 그 사람이 너에게 기대했던 역할(연인/동반자/가족 같은 느낌)은 무엇이었나요?', hint: '상대가 반복해서 요청한 말·행동을 떠올려 보세요.\n역할 기대와 실제 내 행동의 차이도 적어보세요.' },
  { title: '6. 너는 그 관계에서 어떤 방식으로 사랑을 표현했나요? 상대는 그걸 알아차렸나요?', hint: '네가 준 방식(시간/말/행동)과 상대가 원하는 방식이 달랐는지 써보세요.\n오해가 생긴 지점을 구체적으로 적어보세요.' },
  { title: '7. 너의 가장 큰 실수 1가지는 무엇이었고, 왜 그랬나요?', hint: '실수 자체보다 “그때의 상태/두려움”을 함께 적어보세요.\n변명보다 이해와 책임의 톤으로 써보세요.' },
  { title: '8. 반대로 상대의 가장 큰 실수 1가지는 무엇이었고, 너는 어떻게 반응했나요?', hint: '비난보다 상황 묘사 중심으로 써보세요.\n내 반응이 관계를 키웠는지 악화했는지도 함께 적어보세요.' },
  { title: '9. 지금 재회를 원하지만, 사실은 외로움을 원한으로 착각하는 부분이 있나요?', hint: '“지금 내가 진짜 원하는 것”을 한 줄로 적어보세요.\n그 감정이 상대 때문인지, 현재 삶의 공백 때문인지 구분해보세요.' },
  { title: '10. 다시 만난다면 절대 반복하지 않을 행동 3가지는?', hint: '행동 단위로 명확히 쓰세요.\n예: “읽씹으로 벌주지 않기”, “감정 격할 때 24시간 룰”처럼.' },
  { title: '11. 다시 만난다면 새로 만들 행동/습관 3가지는?', hint: '주간 단위 루틴으로 적어보세요.\n누가, 언제, 어떻게 할지 포함하면 더 현실적입니다.' },
  { title: '12. 상대가 다시 돌아오려면 가장 먼저 확인하고 싶어할 안전장치는 무엇일까요?', hint: '상대 입장에서 불안 요소를 먼저 적어보세요.\n그 불안을 줄이는 장치를 실제 행동으로 바꿔보세요.' },
  { title: '13. 상대가 너를 다시 신뢰하려면, 너는 무엇을 증명해야 하나요?', hint: '말보다 관찰 가능한 증거 중심으로 적어보세요.\n기간, 빈도, 측정 가능한 변화가 있으면 좋습니다.' },
  { title: '14. 상대가 지금도 너를 떠올린다면, 어떤 장면/기억 때문일까요?', hint: '둘만의 구체적 순간을 떠올려 보세요.\n미화보다 현실적인 기억을 선택해보세요.' },
  { title: '15. 재회가 되더라도 장기적으로 유지될 구조(시간/거리/돈/가치관)는 준비되어 있나요?', hint: '현실 조건 1~2개를 골라 현재 상태를 써보세요.\n준비 부족한 항목은 보완 계획을 짧게 붙여보세요.' },
  { title: '16. 너의 현재 생활은 안정적인가요? (수면/일/돈/인간관계 중 핵심 1개 선택)', hint: '지금 가장 흔들리는 영역 하나만 깊게 써보세요.\n안정이 관계에 미치는 영향을 연결해보세요.' },
  { title: '17. 상대에게 사과가 아니라 수정으로 보여줘야 하는 것은 무엇인가요?', hint: '반복된 문제를 하나 고르고, 수정 행동을 적어보세요.\n언제부터 어떻게 지속할지도 함께 써보세요.' },
  { title: '18. 연락을 다시 한다면, 어떤 문장으로 시작할 건가요? (초안 그대로)', hint: '짧고 명확하게, 상대의 경계를 존중하는 톤으로 써보세요.\n답장을 강요하지 않는 문장이 좋습니다.' },
  { title: '19. 재회가 안 되더라도, 너는 이 관계에서 무엇을 가져가고 싶나요?', hint: '배운 점, 버릴 패턴, 지킬 가치 하나씩 적어보세요.\n다음 관계가 아니라 “내 삶” 기준으로 정리해보세요.' },
  { title: '20. 마지막 질문: 오늘 이 설문을 끝내고 너 자신에게 해주고 싶은 한 문장은?', hint: '짧아도 좋습니다.\n지금의 나를 존중하는 문장으로 마무리해보세요.' }
];

const POSITIVE = ['내가', '고치', '배우', '다음엔', '존중', '경계', '대화', '노력', '책임', '수정', '실천', '계획'];
const NEGATIVE = ['걔는 원래', '절대', '무조건', '다 내 탓 아님', '끝이야', '변하지 않아', '항상 너'];
const ACTION_WORDS = ['언제', '어떻게', '무엇', '매일', '매주', '오늘부터', '한 달', '시간', '루틴', '실행'];

const state = {
  index: 0,
  answers: Array(QUESTIONS.length).fill(''),
  storageAvailable: true,
  score: 0,
  level: '중간'
};

const $ = (id) => document.getElementById(id);
const els = {
  surveyCard: $('surveyCard'),
  summaryCard: $('summaryCard'),
  resultCard: $('resultCard'),
  progressText: $('progressText'),
  progressBar: $('progressBar'),
  questionPanel: $('questionPanel'),
  questionTitle: $('questionTitle'),
  hintText: $('hintText'),
  answerInput: $('answerInput'),
  softWarning: $('softWarning'),
  saveStatus: $('saveStatus'),
  backBtn: $('backBtn'),
  nextBtn: $('nextBtn'),
  summaryList: $('summaryList'),
  summaryBackBtn: $('summaryBackBtn'),
  showResultBtn: $('showResultBtn'),
  scoreValue: $('scoreValue'),
  levelLabel: $('levelLabel'),
  interpretCard: $('interpretCard'),
  strengthList: $('strengthList'),
  riskList: $('riskList'),
  nextActions: $('nextActions'),
  video: $('frequencyVideo'),
  videoOpenLink: $('videoOpenLink'),
  buyAmuletBtn: $('buyAmuletBtn'),
  shareResultBtn: $('shareResultBtn'),
  resetBtn: $('resetBtn'),
  themeToggle: $('themeToggle'),
  storageWarning: $('storageWarning')
};

function checkStorage() {
  try {
    localStorage.setItem('__test__', '1');
    localStorage.removeItem('__test__');
    return true;
  } catch {
    return false;
  }
}

function saveState() {
  els.saveStatus.textContent = '저장 중...';
  const payload = JSON.stringify({ index: state.index, answers: state.answers });
  if (state.storageAvailable) {
    try {
      localStorage.setItem(CONFIG.STORAGE_KEY, payload);
      els.saveStatus.textContent = '자동저장됨';
      return;
    } catch {
      state.storageAvailable = false;
    }
  }
  window.__reunionMemory = payload;
  els.saveStatus.textContent = '임시 메모리에 저장됨';
  els.storageWarning.textContent = '브라우저 저장소를 사용할 수 없어 임시 메모리로 동작 중입니다. 탭을 닫으면 데이터가 사라집니다.';
  els.storageWarning.classList.remove('hidden');
}

function loadState() {
  if (state.storageAvailable) {
    try {
      const raw = localStorage.getItem(CONFIG.STORAGE_KEY);
      if (!raw) return;
      const parsed = JSON.parse(raw);
      state.index = Math.min(Math.max(parsed.index ?? 0, 0), QUESTIONS.length);
      state.answers = QUESTIONS.map((_, i) => parsed.answers?.[i] ?? '');
      return;
    } catch {
      state.storageAvailable = false;
    }
  }
  if (window.__reunionMemory) {
    const parsed = JSON.parse(window.__reunionMemory);
    state.index = Math.min(Math.max(parsed.index ?? 0, 0), QUESTIONS.length);
    state.answers = QUESTIONS.map((_, i) => parsed.answers?.[i] ?? '');
  }
}

function updateProgress() {
  const current = Math.min(state.index + 1, QUESTIONS.length);
  els.progressText.textContent = `현재 20 중 ${current}`;
  els.progressBar.style.width = `${(current / QUESTIONS.length) * 100}%`;
  els.progressBar.parentElement.setAttribute('aria-valuenow', String(current));
}

function showSoftWarning() {
  const value = els.answerInput.value.trim();
  els.softWarning.textContent = value.length > 0 && value.length < 18 ? '조금만 더 구체적으로 적어보면 분석이 더 정확해져요.' : '';
}

function renderQuestion(animateDirection = 1) {
  const q = QUESTIONS[state.index];
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  els.backBtn.disabled = state.index === 0;

  const paint = () => {
    els.questionTitle.textContent = q.title;
    els.hintText.textContent = q.hint;
    els.answerInput.value = state.answers[state.index] || '';
    updateProgress();
    showSoftWarning();
    els.answerInput.focus();
  };

  if (reduced) return paint();

  els.questionPanel.classList.add('leaving');
  setTimeout(() => {
    paint();
    els.questionPanel.classList.remove('leaving');
    els.questionPanel.classList.add('entering');
    els.questionPanel.style.transform = animateDirection > 0 ? 'translateX(14px)' : 'translateX(-14px)';
    requestAnimationFrame(() => {
      els.questionPanel.style.transform = 'translateX(0)';
      els.questionPanel.classList.remove('entering');
    });
  }, 120);

}

function showSurvey() {
  els.surveyCard.classList.remove('hidden');
  els.summaryCard.classList.add('hidden');
  els.resultCard.classList.add('hidden');
  els.summaryCard.setAttribute('aria-hidden', 'true');
  els.resultCard.setAttribute('aria-hidden', 'true');
  renderQuestion();
}

function showSummary() {
  els.surveyCard.classList.add('hidden');
  els.summaryCard.classList.remove('hidden');
  els.resultCard.classList.add('hidden');
  els.summaryCard.setAttribute('aria-hidden', 'false');

  els.summaryList.innerHTML = '';
  QUESTIONS.forEach((q, i) => {
    const li = document.createElement('li');
    li.textContent = q.title.replace(/^\d+\.\s*/, '');
    if (!(state.answers[i] || '').trim()) li.classList.add('muted');
    els.summaryList.appendChild(li);
  });
}

function scoreAnswers() {
  let total = 45;
  let shortCount = 0;
  let positiveHits = 0;
  let negativeHits = 0;
  let actionHits = 0;

  state.answers.forEach((raw) => {
    const answer = (raw || '').trim();
    const len = answer.length;
    if (len < 12) {
      total -= 3;
      shortCount += 1;
    } else if (len > 160) {
      total += 1.5;
    }

    POSITIVE.forEach((w) => { if (answer.includes(w)) { total += 1.2; positiveHits += 1; } });
    NEGATIVE.forEach((w) => { if (answer.includes(w)) { total -= 1.6; negativeHits += 1; } });
    ACTION_WORDS.forEach((w) => { if (answer.includes(w)) { total += 1.0; actionHits += 1; } });
  });

  total = Math.round(Math.min(100, Math.max(0, total)));

  const level = total < 40 ? '낮음' : total < 70 ? '중간' : '높음';
  const reasons = [
    shortCount > 8 ? '답변이 짧은 문항이 많아 현재 감정과 계획이 덜 드러났어요.' : '여러 문항에서 상황과 감정을 비교적 구체적으로 정리했어요.',
    positiveHits >= 8 ? '책임 인식/수정 의지가 드러나는 표현이 자주 보였어요.' : '책임 인식이나 변화 의지를 드러내는 표현을 조금 더 늘리면 좋아요.',
    actionHits >= 6 ? '실행 단서(언제/어떻게/무엇)가 있어 실제 행동 전환 가능성이 보여요.' : '실행 계획 표현이 적어, 행동 계획을 더 선명하게 적을수록 좋아요.'
  ];

  const strengths = [
    positiveHits >= 6 ? '관계를 돌아보는 책임 인식이 보입니다.' : '스스로를 돌아보려는 의도가 분명합니다.',
    actionHits >= 5 ? '행동 계획의 단서가 있어 실천 가능성이 있습니다.' : '재회를 감정보다 구조로 생각하려는 시도가 있습니다.',
    shortCount <= 5 ? '답변 밀도가 높아 자기이해에 도움이 됩니다.' : '중요 문항에서 핵심 포인트를 짚으려는 흐름이 보입니다.'
  ];

  const risks = [
    shortCount >= 7 ? '짧은 답변이 많아 실제 원인 분석이 흐려질 수 있습니다.' : '일부 문항은 더 구체적인 사실 정리가 필요합니다.',
    negativeHits >= 4 ? '단정적/비난 표현이 많으면 재접촉 메시지의 온도를 낮출 수 있습니다.' : '해석과 사실을 분리하는 습관을 유지하는 것이 중요합니다.',
    actionHits < 5 ? '“언제/어떻게”가 부족하면 변화가 선언으로 끝날 수 있습니다.' : '실행 계획을 일정표로 옮겨야 유지력이 생깁니다.'
  ];

  const nextByLevel = {
    낮음: [
      '하루 15분, 문항 7·10·17번만 다시 써서 “수정 행동”을 한 줄씩 구체화하세요.',
      '연락은 7일 보류하고, 수면/식사/업무 루틴을 먼저 회복하세요.',
      '보낼 메시지 초안(18번)을 3문장 이내로 다듬고 강요 표현을 제거하세요.'
    ],
    중간: [
      '이번 주에 반복 갈등 패턴(4번)을 끊는 행동 1개를 실제로 실행하세요.',
      '상대 관점 안전장치(12번)를 체크리스트로 만들어 매일 점검하세요.',
      '연락 전, 신뢰 증명 항목(13번)을 최소 2개 이상 준비한 뒤 메시지 타이밍을 정하세요.'
    ],
    높음: [
      '재접촉 전 7일간 계획(11번)을 실천해 일관성을 먼저 확보하세요.',
      '첫 메시지는 짧고 존중 중심으로 보내고, 답장을 재촉하지 마세요.',
      '재회 후 유지 구조(15번)를 문서로 정리해 현실 변수 대응안을 만드세요.'
    ]
  };

  return { total, level, reasons, strengths, risks, nextActions: nextByLevel[level] };
}

function showResult() {
  const result = scoreAnswers();
  state.score = result.total;
  state.level = result.level;

  els.surveyCard.classList.add('hidden');
  els.summaryCard.classList.add('hidden');
  els.resultCard.classList.remove('hidden');
  els.resultCard.setAttribute('aria-hidden', 'false');

  els.scoreValue.textContent = `재회 지표: ${result.total}%`;
  els.levelLabel.textContent = `해석 등급: ${result.level}`;
  els.interpretCard.innerHTML = `
    <h3>해석 카드: ${result.level}</h3>
    <p>${result.reasons[0]}</p>
    <p>${result.reasons[1]}</p>
    <p>${result.reasons[2]}</p>
  `;

  els.strengthList.innerHTML = result.strengths.map((s) => `<li>${s}</li>`).join('');
  els.riskList.innerHTML = result.risks.map((s) => `<li>${s}</li>`).join('');
  els.nextActions.innerHTML = result.nextActions.map((a, i) => `<li><input id="a-${i}" type="checkbox" /><label for="a-${i}">${a}</label></li>`).join('');

  const embed = `https://www.youtube.com/embed/${CONFIG.YOUTUBE_VIDEO_ID}`;
  const watch = `https://www.youtube.com/watch?v=${CONFIG.YOUTUBE_VIDEO_ID}`;
  els.video.src = embed;
  els.videoOpenLink.href = watch;
  els.buyAmuletBtn.href = CONFIG.AMULET_BUY_URL;

  saveState();
}

function goNext() {
  if (state.index < QUESTIONS.length - 1) {
    state.index += 1;
    saveState();
    renderQuestion(1);
  } else {
    state.index = QUESTIONS.length;
    saveState();
    showSummary();
  }
}

function goBack() {
  if (state.index > 0) {
    state.index -= 1;
    saveState();
    renderQuestion(-1);
  }
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  els.themeToggle.textContent = theme === 'dark' ? '☀️ 라이트모드' : '🌙 다크모드';
}

function initTheme() {
  const saved = state.storageAvailable ? localStorage.getItem(CONFIG.THEME_KEY) : null;
  const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  applyTheme(saved || (systemDark ? 'dark' : 'light'));
}

function bind() {
  els.answerInput.addEventListener('input', (e) => {
    state.answers[state.index] = e.target.value;
    showSoftWarning();
    saveState();
  });

  els.answerInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) goNext();
  });

  els.nextBtn.addEventListener('click', goNext);
  els.backBtn.addEventListener('click', goBack);
  els.summaryBackBtn.addEventListener('click', () => {
    state.index = QUESTIONS.length - 1;
    showSurvey();
    saveState();
  });
  els.showResultBtn.addEventListener('click', showResult);

  els.shareResultBtn.addEventListener('click', async () => {
    const txt = `재회 가능성 계산기 결과\n재회 지표: ${state.score}%\n등급: ${state.level}`;
    try {
      await navigator.clipboard.writeText(txt);
      alert('점수/등급만 복사되었습니다.');
    } catch {
      alert('클립보드 복사에 실패했습니다. 직접 복사해주세요.\n\n' + txt);
    }
  });

  els.resetBtn.addEventListener('click', () => {
    if (!confirm('저장된 답변을 모두 지우고 처음부터 시작할까요?')) return;
    state.index = 0;
    state.answers = Array(QUESTIONS.length).fill('');
    state.score = 0;
    state.level = '중간';
    if (state.storageAvailable) localStorage.removeItem(CONFIG.STORAGE_KEY);
    showSurvey();
    saveState();
  });

  els.themeToggle.addEventListener('click', () => {
    const curr = document.documentElement.getAttribute('data-theme') || 'light';
    const next = curr === 'light' ? 'dark' : 'light';
    applyTheme(next);
    if (state.storageAvailable) localStorage.setItem(CONFIG.THEME_KEY, next);
  });
}

function init() {
  state.storageAvailable = checkStorage();
  loadState();
  initTheme();
  bind();
  if (!state.storageAvailable) {
    els.storageWarning.textContent = '브라우저 저장소(localStorage)를 사용할 수 없어 임시 메모리로 동작 중입니다.';
    els.storageWarning.classList.remove('hidden');
  }

  if (state.index >= QUESTIONS.length) {
    showSummary();
  } else {
    showSurvey();
  }
}

init();
