import { Language } from '../../structures/structures/types';

export function serverOwner(language: Language) {
  if (language === 'portuguese') return '๐ Dono';
  if (language === 'english') return '๐ Owner';
  if (language === 'spanish') return '๐ Dueรฑo';
  return '๐ Owner';
}

export function serverRegion(language: Language) {
  if (language === 'portuguese') return '๐ Regiรฃo';
  if (language === 'english') return '๐ Region';
  if (language === 'spanish') return '๐ Regiรฃo';
  return '๐ Region';
}

export function serverMembers(language: Language) {
  if (language === 'portuguese') return '๐ฅ Membros';
  if (language === 'english') return '๐ฅ Members';
  if (language === 'spanish') return '๐ฅ Miembros';
  return '๐ฅ Members';
}

export function creationDate(language: Language) {
  if (language === 'portuguese') return '๐ Criado em';
  if (language === 'english') return '๐ Created at';
  if (language === 'spanish') return '๐ Creado en';
  return '๐ Created at';
}

export function joiningDate(language: Language) {
  if (language === 'portuguese') return '๐ Entrei aqui em';
  if (language === 'english') return '๐ Joined here at';
  if (language === 'spanish') return '๐ Ingresado aquรญ en';
  return '๐ Joined here at';
}

export function mainRole(language: Language) {
  if (language === 'portuguese') return '๐ซ Cargo principal';
  if (language === 'english') return '๐ซ Main role';
  if (language === 'spanish') return '๐ซ Posiciรณn principal';
  return '๐ซ Main role';
}

export function secondaryRoles(language: Language) {
  if (language === 'portuguese') return '๐ Cargos secundรกrios';
  if (language === 'english') return '๐ Secondary roles';
  if (language === 'spanish') return '๐ Posicรญones secundarias';
  return '๐ Secondary roles';
}
