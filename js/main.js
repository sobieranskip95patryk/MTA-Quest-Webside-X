/*
Copyright © 2025 Patryk Sobierański. All rights reserved.
Ten plik jest częścią projektu "MTA Quest Webside X" (PinkMan-AI, GOK:AI).
Wszelkie kopiowanie, modyfikowanie i dystrybucja bez pisemnej zgody autora zabronione.
*/

// Theme / language / menu
document.addEventListener('DOMContentLoaded', () => {
  $('#btnTheme')?.addEventListener('click', () => {
    document.documentElement.classList.toggle('invert');
    document.body.classList.toggle('bg-white');
  });
  $('#btnLang')?.addEventListener('click', (e) => {
    const btn = e.currentTarget;
    btn.textContent = btn.textContent.trim() === 'PL' ? 'EN' : 'PL';
  });
  $('#btnMenu')?.addEventListener('click', () => $('#menuMobile').classList.toggle('hidden'));
});
