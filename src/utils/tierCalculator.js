// utils/tierCalculator.js
export function calculateTier(rating) {
  // 다이아
  if (rating >= 1850) {
    if (rating >= 2000) return "Diamond 1";
    if (rating >= 1950) return "Diamond 2";
    if (rating >= 1900) return "Diamond 3";
    return "Diamond 4";
    // 플래티넘
  } else if (rating >= 1650) {
    if (rating >= 1800) return "Platinum 1";
    if (rating >= 1750) return "Platinum 2";
    if (rating >= 1700) return "Platinum 3";
    return "Platinum 4";
    // 골드
  } else if (rating >= 1450) {
    if (rating >= 1600) return "Gold 1";
    if (rating >= 1550) return "Gold 2";
    if (rating >= 1500) return "Gold 3";
    return "Gold 4";
    // 실버
  } else if (rating >= 1250) {
    if (rating >= 1400) return "Silver 1";
    if (rating >= 1350) return "Silver 2";
    if (rating >= 1300) return "Silver 3";
    return "Silver 4";
  } else {
    if (rating >= 1200) return "Bronze 1";
    if (rating >= 1150) return "Bronze 2";
    if (rating >= 1100) return "Bronze 3";
    return "Bronze 4";
  }
}
