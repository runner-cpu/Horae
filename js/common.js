// 节气志 - 公共脚本（粒子背景、导航、主题色、回到顶部）

let particles = [];
let particleCanvas, particleCtx;

function initCommon(pageName) {
  initParticles();
  initNavActive(pageName);
  initBackTop();
}

// 粒子背景
function initParticles() {
  particleCanvas = document.getElementById('particleCanvas');
  if (!particleCanvas) return;
  particleCtx = particleCanvas.getContext('2d');
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);
  
  const count = Math.min(70, Math.floor(window.innerWidth / 22));
  particles = [];
  for (let i = 0; i < count; i++) {
    particles.push({
      x: Math.random() * particleCanvas.width,
      y: Math.random() * particleCanvas.height,
      r: Math.random() * 2 + 0.5,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      opacity: Math.random() * 0.5 + 0.1,
      pulse: Math.random() * Math.PI * 2
    });
  }
  animateParticles();
}

function resizeCanvas() {
  if (!particleCanvas) return;
  particleCanvas.width = window.innerWidth;
  particleCanvas.height = window.innerHeight;
}

function animateParticles() {
  if (!particleCtx) return;
  particleCtx.clearRect(0, 0, particleCanvas.width, particleCanvas.height);
  const themeColor = getComputedStyle(document.documentElement).getPropertyValue('--theme-color').trim() || '#d4a853';
  const rgb = hexToRgb(themeColor);
  
  particles.forEach(p => {
    p.x += p.vx; p.y += p.vy; p.pulse += 0.02;
    if (p.x < 0) p.x = particleCanvas.width;
    if (p.x > particleCanvas.width) p.x = 0;
    if (p.y < 0) p.y = particleCanvas.height;
    if (p.y > particleCanvas.height) p.y = 0;
    const opacity = p.opacity * (0.5 + 0.5 * Math.sin(p.pulse));
    particleCtx.beginPath();
    particleCtx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    particleCtx.fillStyle = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${opacity})`;
    particleCtx.fill();
  });
  
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x;
      const dy = particles[i].y - particles[j].y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 120) {
        particleCtx.beginPath();
        particleCtx.moveTo(particles[i].x, particles[i].y);
        particleCtx.lineTo(particles[j].x, particles[j].y);
        particleCtx.strokeStyle = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${0.06 * (1 - dist / 120)})`;
        particleCtx.lineWidth = 0.5;
        particleCtx.stroke();
      }
    }
  }
  requestAnimationFrame(animateParticles);
}

function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? { r: parseInt(result[1], 16), g: parseInt(result[2], 16), b: parseInt(result[3], 16) } : { r: 212, g: 168, b: 83 };
}

// 导航高亮
function initNavActive(pageName) {
  document.querySelectorAll('.navbar .links a').forEach(a => {
    if (a.dataset.page === pageName) a.classList.add('active');
  });
}

// 回到顶部
function initBackTop() {
  const btn = document.getElementById('backTop');
  if (!btn) return;
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  window.addEventListener('scroll', () => {
    if (window.scrollY > 200) btn.classList.add('show');
    else btn.classList.remove('show');
  });
}

// 主题色切换
function setThemeColor(season) {
  const colors = {
    spring: { color: '#8bc34a', glow: 'rgba(139,195,74,0.15)' },
    summer: { color: '#ef5350', glow: 'rgba(239,83,80,0.15)' },
    autumn: { color: '#ffa726', glow: 'rgba(255,167,38,0.15)' },
    winter: { color: '#42a5f5', glow: 'rgba(66,165,245,0.15)' }
  };
  const c = colors[season] || colors.spring;
  document.documentElement.style.setProperty('--theme-color', c.color);
  document.documentElement.style.setProperty('--theme-glow', c.glow);
}

// 生成节气轮盘SVG（共享）
function generateWheelSVG(size, withCenterHole) {
  const cx = size / 2, cy = size / 2;
  const outerR = size / 2 - 12, midR = outerR * 0.8, innerR = outerR * 0.55, textR = outerR * 0.88;
  const anglePerTerm = 360 / 24;
  let html = '';
  
  // 装饰环
  html += `<circle cx="${cx}" cy="${cy}" r="${outerR + 6}" fill="none" stroke="rgba(212,168,83,0.2)" stroke-width="1"/>`;
  html += `<circle cx="${cx}" cy="${cy}" r="${outerR + 2}" fill="none" stroke="rgba(212,168,83,0.1)" stroke-width="1" stroke-dasharray="2,4"/>`;
  
  // 北斗七星
  const scale = size / 520;
  const beidou = [
    {x: cx - 60*scale, y: cy - (outerR + 25)*scale}, {x: cx - 40*scale, y: cy - (outerR + 33)*scale},
    {x: cx - 20*scale, y: cy - (outerR + 23)*scale}, {x: cx, y: cy - (outerR + 15)*scale},
    {x: cx + 18*scale, y: cy - (outerR)*scale}, {x: cx + 35*scale, y: cy - (outerR - 15)*scale},
    {x: cx + 50*scale, y: cy - (outerR - 30)*scale}
  ];
  beidou.forEach((star, i) => {
    html += `<circle cx="${star.x}" cy="${star.y}" r="${i === 0 || i === 6 ? 3 : 2}" fill="rgba(212,168,83,0.6)"/>`;
    if (i < beidou.length - 1) {
      html += `<line x1="${star.x}" y1="${star.y}" x2="${beidou[i+1].x}" y2="${beidou[i+1].y}" stroke="rgba(212,168,83,0.3)" stroke-width="1"/>`;
    }
  });
  
  // 扇区
  solarTerms.forEach((term, i) => {
    const startAngle = i * anglePerTerm - 90 - anglePerTerm / 2;
    const endAngle = startAngle + anglePerTerm;
    const color = seasonColors[term.season].primary;
    const extra = termExtras[term.id] || {color: {hex: color}};
    
    const x1 = cx + outerR * Math.cos(startAngle * Math.PI / 180);
    const y1 = cy + outerR * Math.sin(startAngle * Math.PI / 180);
    const x2 = cx + outerR * Math.cos(endAngle * Math.PI / 180);
    const y2 = cy + outerR * Math.sin(endAngle * Math.PI / 180);
    const x3 = cx + midR * Math.cos(endAngle * Math.PI / 180);
    const y3 = cy + midR * Math.sin(endAngle * Math.PI / 180);
    const x4 = cx + midR * Math.cos(startAngle * Math.PI / 180);
    const y4 = cy + midR * Math.sin(startAngle * Math.PI / 180);
    
    const path = `M ${x1} ${y1} A ${outerR} ${outerR} 0 0 1 ${x2} ${y2} L ${x3} ${y3} A ${midR} ${midR} 0 0 0 ${x4} ${y4} Z`;
    html += `<path d="${path}" fill="${seasonColors[term.season].light}" stroke="${color}" stroke-width="1" data-index="${i}" class="wheel-sector" style="cursor:pointer;transition:all 0.3s"/>`;
    
    const textAngle = i * anglePerTerm - 90;
    const tx = cx + textR * Math.cos(textAngle * Math.PI / 180);
    const ty = cy + textR * Math.sin(textAngle * Math.PI / 180);
    const rotation = textAngle + 90;
    html += `<text x="${tx}" y="${ty}" text-anchor="middle" dominant-baseline="middle" fill="${color}" font-size="${size > 400 ? 14 : 11}" font-weight="600" transform="rotate(${rotation}, ${tx}, ${ty})" style="pointer-events:none;letter-spacing:1px;font-family:'Noto Serif SC',serif;">${term.name}</text>`;
    
    // 传统色点
    const dotAngle = textAngle;
    const dx = cx + (innerR + 10) * Math.cos(dotAngle * Math.PI / 180);
    const dy = cy + (innerR + 10) * Math.sin(dotAngle * Math.PI / 180);
    html += `<circle cx="${dx}" cy="${dy}" r="4" fill="${extra.color.hex}" stroke="rgba(255,255,255,0.3)" stroke-width="1" style="pointer-events:none;"/>`;
  });
  
  // 内圈
  html += `<circle cx="${cx}" cy="${cy}" r="${innerR}" fill="rgba(14,12,10,0.9)" stroke="rgba(212,168,83,0.25)" stroke-width="1"/>`;
  html += `<circle cx="${cx}" cy="${cy}" r="${innerR - 15}" fill="none" stroke="rgba(212,168,83,0.1)" stroke-width="1" stroke-dasharray="3,5"/>`;
  
  // 刻度
  for (let i = 0; i < 24; i++) {
    const angle = i * anglePerTerm - 90;
    const r1 = innerR - 5, r2 = innerR - 12;
    const x1 = cx + r1 * Math.cos(angle * Math.PI / 180);
    const y1 = cy + r1 * Math.sin(angle * Math.PI / 180);
    const x2 = cx + r2 * Math.cos(angle * Math.PI / 180);
    const y2 = cy + r2 * Math.sin(angle * Math.PI / 180);
    html += `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="rgba(212,168,83,0.35)" stroke-width="1"/>`;
  }
  
  return html;
}

// 渲染节气详情HTML（共享）
function renderTermDetailHTML(term) {
  const extra = termExtras[term.id] || {};
  const seasonCN = term.season === 'spring' ? '春' : term.season === 'summer' ? '夏' : term.season === 'autumn' ? '秋' : '冬';
  const dayPct = (extra.dayHours || 12) / 24 * 100;
  const nightPct = (extra.nightHours || 12) / 24 * 100;
  const sunrise = (12 - (extra.dayHours || 12) / 2).toFixed(1);
  const sunset = (12 + (extra.dayHours || 12) / 2).toFixed(1);
  
  return `
    <div class="season-tag ${term.season}">${seasonCN}季 · 节气</div>
    <h2>${term.name}</h2>
    <div class="meta"><span>${term.pinyin}</span><span>${term.date}</span><span>黄经 ${term.longitude}°</span></div>
    
    ${extra.poem ? `
    <div class="poem-card">
      <div class="title">《${extra.poem.title}》</div>
      <div class="author">—— ${extra.poem.author}</div>
      <div class="content">${extra.poem.content}</div>
    </div>` : ''}
    
    <div class="data-card">
      <h4>🌿 三候</h4>
      <div class="phenology-list">
        <div class="item"><span class="num">一</span>${term.phenology.first}</div>
        <div class="item"><span class="num">二</span>${term.phenology.second}</div>
        <div class="item"><span class="num">三</span>${term.phenology.third}</div>
      </div>
    </div>
    
    <div class="ancient-quote">「${term.ancient}」</div>
    
    <div class="data-card">
      <h4>🌡️ 古今温度对比</h4>
      <div class="temp-compare">
        <div class="temp-item"><div class="val old">${term.oldTemp}°C</div><div class="lbl">50年前均温</div></div>
        <div class="temp-item"><div class="val new">${term.modernTemp}°C</div><div class="lbl">当代均温</div></div>
        <div class="temp-item"><div class="val change">+${term.tempChange}°C</div><div class="lbl">升温幅度</div></div>
      </div>
      <div class="trend-chart" id="detail-trend-${term.id}"></div>
    </div>
    
    <div class="data-card">
      <h4>🌗 昼夜时长</h4>
      <div class="daynight-bar">
        <div class="day" style="width:${dayPct}%">☀ ${extra.dayHours || 12}h</div>
        <div class="night" style="width:${nightPct}%">🌙 ${extra.nightHours || 12}h</div>
      </div>
      <div class="daynight-labels">
        <span>日出 ${sunrise}:00</span>
        <span>日落 ${sunset}:00</span>
      </div>
    </div>
    
    <div class="data-card">
      <h4>📊 当代气候与物候</h4>
      <div class="info-grid">
        <div class="info-item"><div class="label">平均湿度</div><div class="value">${term.humidity}%</div></div>
        <div class="info-item"><div class="label">降水量</div><div class="value">${term.precipitation}mm</div></div>
        <div class="info-item"><div class="label">时令饮食</div><div class="value">${extra.food || '—'}</div></div>
        <div class="info-item"><div class="label">节气花卉</div><div class="value">${extra.flower || '—'}</div></div>
        <div class="info-item" style="grid-column:1/-1;"><div class="label">物候变化</div><div class="value" style="color:${term.tempChange > 1.8 ? 'var(--summer)' : 'var(--spring)'}">${term.phenologyChange}</div></div>
      </div>
    </div>
    
    ${extra.color ? `
    <div class="data-card">
      <h4>🎨 节气传统色</h4>
      <div class="color-card">
        <div class="color-swatch" style="background:${extra.color.hex}"></div>
        <div class="color-info">
          <div class="name">${extra.color.name}</div>
          <div class="hex">${extra.color.hex}</div>
        </div>
      </div>
    </div>` : ''}
    
    <div class="ai-dialogue">
      <div class="label">AI 古今对话</div>
      ${term.aiDialogue}
    </div>
  `;
}

// 初始化趋势图
function initTrendChart(containerId, term) {
  const el = document.getElementById(containerId);
  if (!el) return;
  const chart = echarts.init(el);
  const colors = seasonColors[term.season];
  const data = [];
  for (let y = 1976; y <= 2025; y++) {
    const t = term.oldTemp + (term.tempChange / 49) * (y - 1976) + Math.sin(y * 1.5 + term.longitude) * 0.2;
    data.push([y, parseFloat(t.toFixed(2))]);
  }
  chart.setOption({
    backgroundColor: 'transparent',
    grid: { left: 45, right: 15, top: 15, bottom: 25 },
    tooltip: { trigger: 'axis', formatter: p => `${p[0].value[0]}年<br/>均温: ${p[0].value[1]}°C` },
    xAxis: { type: 'value', min: 1976, max: 2025, axisLabel: { color: '#a09888', fontSize: 10, interval: 12 }, axisLine: { lineStyle: { color: '#333' } }, splitLine: { show: false } },
    yAxis: { type: 'value', axisLabel: { color: '#a09888', fontSize: 10 }, splitLine: { lineStyle: { color: 'rgba(255,255,255,0.05)' } } },
    series: [{
      type: 'line', data, smooth: true, symbol: 'none',
      lineStyle: { color: colors.primary, width: 2.5, shadowColor: colors.primary, shadowBlur: 10 },
      areaStyle: { color: new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:colors.primary+'50'},{offset:1,color:colors.primary+'05'}]) }
    }]
  });
  return chart;
}
