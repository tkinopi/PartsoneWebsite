// メール送信のヘルパー関数
export interface ApplicationData {
  name: string;
  email: string;
  phone?: string;
  position: string;
  message: string;
}

export function createMailtoLink(applicationData: ApplicationData): string {
  const recipient = 'torumuxia@gmail.com';
  const subject = encodeURIComponent(`【新規応募】${applicationData.position} - ${applicationData.name}さんから`);
  
  const body = encodeURIComponent(`
新しい応募が届きました。

【応募者情報】
氏名: ${applicationData.name}
メールアドレス: ${applicationData.email}
電話番号: ${applicationData.phone || '未記入'}
希望職種: ${applicationData.position}

【メッセージ】
${applicationData.message}

---
Partsone 採用システムより
  `);

  return `mailto:${recipient}?subject=${subject}&body=${body}`;
}

export function sendApplicationEmail(applicationData: ApplicationData): void {
  const mailtoUrl = createMailtoLink(applicationData);
  window.location.href = mailtoUrl;
}