/*
Copyright © 2025 Patryk Sobierański. All rights reserved.
Ten plik jest częścią projektu "MTA Quest Webside X" (PinkMan-AI, GOK:AI).
Wszelkie kopiowanie, modyfikowanie i dystrybucja bez pisemnej zgody autora zabronione.
*/
/*
Copyright © 2025 Patryk Sobierański. All rights reserved.
Ten plik jest częścią projektu "MTA Quest Webside X" (PinkMan-AI, GOK:AI).
Wszelkie kopiowanie, modyfikowanie i dystrybucja bez pisemnej zgody autora zabronione.
*/

// PinkMan‑AI Prototype (modal + local heuristics)
document.addEventListener('DOMContentLoaded', () => {
  const fib = (n) => {
    n = Math.max(0, Math.floor(n));
    let a=0, b=1;
    for (let i=0; i<n; i++) [a,b] = [b, a+b];
    return a;
  };
  const reduce9 = (s) => {
    const digits = (s.match(/\d/g)||[]).map(Number);
    if (!digits.length) return { sum:0, mod9:0 };
    const sum = digits.reduce((a,b)=>a+b,0);
    const mod9 = sum % 9 || 9;
    return { sum, mod9 };
  };

  const aiModal = $('#aiModal');
  $('#openAI')?.addEventListener('click', () => aiModal.showModal());

  const logAI = (role, html) => {
    const node = document.createElement('div');
    node.className = `p-2 my-1 rounded ${role==='you'?'bg-gray-800':'bg-gray-800/60'}`;
    node.innerHTML = `<span class="text-[11px] uppercase text-gray-400">${role==='you'?'Ty':'PM‑AI'}</span><div class="mt-1">${html}</div>`;
    $('#aiLog').appendChild(node);
    $('#aiLog').scrollTop = $('#aiLog').scrollHeight;
  };

  const aiAnswer = (q) => {
    const nums = (q.match(/-?\d+(?:\.\d+)?/g)||[]).map(Number);
    const a = Number($('#coreA')?.value||0), b = Number($('#coreB')?.value||0);
    let out = '';
    if (nums.length){
      const x = nums[0];
      const y = a*x + b;
      out += `Z rdzenia liniowego: y=a·x+b → y=${a}·${x}+${b} = <b>${y}</b>.<br/>`;
    }
    const n = Math.max(0, Math.floor(nums[1] ?? 10));
    const Fn = fib(n);
    out += `Równanie S(GOK:AI): 9π + F(${n}) = ${(9*Math.PI + Fn).toFixed(6)} (F(${n})=${Fn}).<br/>`;
    const { mod9 } = reduce9(q);
    out += `Kontekst 369: Σmod9 = <b>${mod9}</b>.`;
    return out || 'Pytanie zapisane. W trybie offline odpowiadam heurystykami 369/Fibonacci/ax+b.';
  };

  $('#aiSend')?.addEventListener('click', () => {
    const msg = $('#aiMsg').value.trim();
    if (!msg) return;
    logAI('you', msg);
    const res = aiAnswer(msg);
    logAI('ai', res);
    $('#aiMsg').value='';
  });

  $('#pmAsk')?.addEventListener('click', () => {
    const q = $('#pmInput').value.trim();
    if (!q) return;
    $('#pmOut').innerHTML = aiAnswer(q);
  });
  $('#pmClear')?.addEventListener('click', () => { $('#pmInput').value=''; $('#pmOut').innerHTML=''; });
  $('#pmHint')?.addEventListener('click', () => {
    $('#pmInput').value = 'Policz y dla x=7 i pokaż S(GOK:AI) dla n=12. 12345678910';
  });
});
