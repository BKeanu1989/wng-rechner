'use strict';

const hf = require('../../utils/helper_functions');
// 1,08 · (M – (a + b · M + c · Y) ·Y)
// „M“ ist die zu berücksichtigende monatliche Miete oder Belastung in Euro. „Y“ ist das monatliche
// Gesamteinkommen in Euro. „a“, „b“ und „c“ sind nach der Anzahl der zu berücksichtigenden Haushaltsmitglieder unterschiedene Werte

var a,b,c, M, Y;

a = 5.700 / 100;
b = 5.761 / 10000;
c = 6.431 / 100000;
M = 395;
Y = 835;


// var wohngeld = 1.15 * (M - ( a + (b * M) + (c * Y)) * Y;
var wohngeld = Math.round(1.15 * (M - (a + b * M + c * Y) * Y));

// console.log("wohngeld: ", wohngeld);
console.log("wohngeld: ", wohngeld);
