import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { error: "必要な情報が不足しています" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.GMAILUSER,
        pass: process.env.GMAILPASSWORD,
      },
    });

    // 管理者が受け取るメール
    const mailOptions = {
      from: body.email,
      to: "byakkokondo@gmail.com",
      subject: `[お問い合わせ] ${body.company ? `(${body.company}) ` : ""}${
        body.name
      }様より`,
      text: `
【お問い合わせ内容】

会社名: ${body.company || "なし"}
お名前: ${body.name}
メールアドレス: ${body.email}

メッセージ:
${body.message}

------------------------
送信元: ${body.email}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; padding: 10px; border: 1px solid #ddd;">
          <h2 style="color: #0056b3;">お問い合わせ内容</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="font-weight: bold; padding: 5px; border-bottom: 1px solid #ddd;">会社名</td>
              <td style="padding: 5px; border-bottom: 1px solid #ddd;">${
                body.company || "なし"
              }</td>
            </tr>
            <tr>
              <td style="font-weight: bold; padding: 5px; border-bottom: 1px solid #ddd;">お名前</td>
              <td style="padding: 5px; border-bottom: 1px solid #ddd;">${
                body.name
              }</td>
            </tr>
            <tr>
              <td style="font-weight: bold; padding: 5px; border-bottom: 1px solid #ddd;">メールアドレス</td>
              <td style="padding: 5px; border-bottom: 1px solid #ddd;">${
                body.email
              }</td>
            </tr>
            <tr>
              <td style="font-weight: bold; padding: 5px; border-bottom: 1px solid #ddd;">メッセージ</td>
              <td style="padding: 5px; border-bottom: 1px solid #ddd;">${body.message.replace(
                /\n/g,
                "<br>"
              )}</td>
            </tr>
          </table>
          <p style="margin-top: 20px; font-size: 12px; color: #888;">送信元: ${
            body.email
          }</p>
        </div>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("送信成功: ", info.messageId);

    return NextResponse.json({ message: "メール送信完了" }, { status: 200 });
  } catch (error: unknown) {
    console.error("メール送信エラー:", error);

    let errorMessage = "不明なエラーが発生しました";
    if (error instanceof Error) {
      errorMessage = error.message;
    }

    return NextResponse.json(
      { message: "メール送信に失敗しました", error: errorMessage },
      { status: 500 }
    );
  }
}
