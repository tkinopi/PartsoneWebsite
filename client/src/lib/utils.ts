import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * 日付をフォーマットする関数
 * @param dateInput - Date、日付文字列、またはISO文字列
 * @returns 日本語形式の日付文字列 (例: "2023年12月15日")
 */
export function formatDate(dateInput: string | Date): string {
  try {
    let dateString: string;
    
    if (typeof dateInput === 'string') {
      dateString = dateInput.includes('T') ? dateInput.split('T')[0] : dateInput;
    } else {
      dateString = dateInput.toISOString().split('T')[0];
    }
    
    const date = new Date(dateString + 'T00:00:00.000Z');
    
    if (isNaN(date.getTime())) {
      return '日付不明';
    }
    
    const year = date.getUTCFullYear();
    const month = date.getUTCMonth() + 1;
    const day = date.getUTCDate();
    
    return `${year}年${month}月${day}日`;
  } catch (error) {
    return '日付不明';
  }
}
