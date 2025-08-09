/*
Copyright © 2025 Patryk Sobierański. All rights reserved.
Ten plik jest częścią projektu "MTA Quest Webside X" (PinkMan-AI, GOK:AI).
Wszelkie kopiowanie, modyfikowanie i dystrybucja bez pisemnej zgody autora zabronione.
*/

// GOK:AI Lab (Fibonacci + S(GOK))
document.addEventListener('DOMContentLoaded', () => {
  const fib = (n) => {
    n = Math.max(0, Math.floor(n));
    let a=0, b=1;
    for (let i=0; i<n; i++) [a,b] = [b, a+b];
    return a;
  };
  const gokN = $('#gokN');
  const gokFn = $('#gokFn');
  const gokS  = $('#gokS');
  const evalGOK = () => {
    const n = Number(gokN.value || 0);
    const Fn = fib(n);
    gokFn.textContent = Fn.toString();
    gokS.textContent = (9*Math.PI + Fn).toFixed(6);
  };
  $('#gokEval')?.addEventListener('click', evalGOK);
  evalGOK();
  // expose if needed
  window._gokai = { fib, evalGOK };
});
