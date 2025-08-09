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

// Helpers + localStorage wrapper
window.$ = (s, p=document) => p.querySelector(s);
window.$$ = (s, p=document) => Array.from(p.querySelectorAll(s));
window.store = {
  get: (k, d=null) => { try { return JSON.parse(localStorage.getItem(k)) ?? d } catch { return d } },
  set: (k, v) => localStorage.setItem(k, JSON.stringify(v))
};
