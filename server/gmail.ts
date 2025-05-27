import { google } from 'googleapis';
import nodemailer from 'nodemailer';

interface EmailData {
  to: string;
  subject: string;
  text: string;
  html?: string;
}

// Gmail API設定
const createTransporter = async () => {
  // OAuth2設定（環境変数から取得）
  const oauth2Client = new google.auth.OAuth2(
    process.env.GMAIL_CLIENT_ID,
    process.env.GMAIL_CLIENT_SECRET,
    'https://developers.google.com/oauthplayground' // リダイレクトURL
  );

  oauth2Client.setCredentials({
    refresh_token: process.env.GMAIL_REFRESH_TOKEN,
  });

  const accessToken = await oauth2Client.getAccessToken();

  // Nodemailerトランスポーター作成
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: process.env.GMAIL_FROM_EMAIL,
      clientId: process.env.GMAIL_CLIENT_ID,
      clientSecret: process.env.GMAIL_CLIENT_SECRET,
      refreshToken: process.env.GMAIL_REFRESH_TOKEN,
      accessToken: accessToken.token,
    },
  });

  return transporter;
};

export async function sendEmail(emailData: EmailData): Promise<boolean> {
  try {
    // 必要な環境変数の確認
    const requiredEnvVars = [
      'GMAIL_CLIENT_ID',
      'GMAIL_CLIENT_SECRET', 
      'GMAIL_REFRESH_TOKEN',
      'GMAIL_FROM_EMAIL'
    ];

    for (const envVar of requiredEnvVars) {
      if (!process.env[envVar]) {
        console.error(`Missing environment variable: ${envVar}`);
        return false;
      }
    }

    const transporter = await createTransporter();

    const mailOptions = {
      from: process.env.GMAIL_FROM_EMAIL,
      to: emailData.to,
      subject: emailData.subject,
      text: emailData.text,
      html: emailData.html || emailData.text,
    };

    const result = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', result.messageId);
    return true;

  } catch (error) {
    console.error('Failed to send email:', error);
    return false;
  }
}

// 応募通知メールを送信する関数
export async function sendRecruitmentNotification(applicationData: {
  name: string;
  email: string;
  phone?: string;
  position: string;
  message: string;
}): Promise<boolean> {
  const emailContent = {
    to: 'torumuxia@gmail.com',
    subject: `【新規応募】${applicationData.position} - ${applicationData.name}さんから`,
    text: `
新しい応募が届きました。

【応募者情報】
氏名: ${applicationData.name}
メールアドレス: ${applicationData.email}
電話番号: ${applicationData.phone || '未記入'}
希望職種: ${applicationData.position}

【メッセージ】
${applicationData.message}

---
Partsone 採用システムより自動送信
    `,
    html: `
<h2>新しい応募が届きました</h2>

<h3>応募者情報</h3>
<ul>
  <li><strong>氏名:</strong> ${applicationData.name}</li>
  <li><strong>メールアドレス:</strong> ${applicationData.email}</li>
  <li><strong>電話番号:</strong> ${applicationData.phone || '未記入'}</li>
  <li><strong>希望職種:</strong> ${applicationData.position}</li>
</ul>

<h3>メッセージ</h3>
<p style="background-color: #f5f5f5; padding: 15px; border-radius: 5px;">
  ${applicationData.message.replace(/\n/g, '<br>')}
</p>

<hr>
<p style="color: #666; font-size: 12px;">
  Partsone 採用システムより自動送信
</p>
    `
  };

  return await sendEmail(emailContent);
}