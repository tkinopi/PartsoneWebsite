import { SectionTitle } from "@/components/ui/section-title";
import RecruitPageLayout from "@/components/recruit/RecruitPageLayout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";

export default function InternPage() {
  return (
    <RecruitPageLayout activeSection="intern">
      <div className="space-y-8">
        <SectionTitle 
          title="インターンシッププログラム" 
          subtitle="次世代のテクノロジー人材を育成" 
        />
        
        <div className="prose prose-lg max-w-none mb-8">
          <p>
            Partsoneでは、意欲的な学生の皆さんに実践的な経験を積む機会を提供しています。私たちのインターンシッププログラムは、単なる就業体験ではなく、実際のプロジェクトに参加し、ビジネスの最前線で活躍できる場です。
          </p>
          
          <p>
            エンジニアリングからマーケティング、ビジネス開発まで、様々な分野でのインターンシップを用意しています。最先端の技術と革新的なビジネスモデルに触れながら、プロフェッショナルとしての成長を目指しませんか？
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4">夏季インターンシップ</h3>
            <ul className="list-disc list-inside space-y-2 mb-6">
              <li>期間: 7月下旬〜9月上旬（4〜8週間）</li>
              <li>対象: 大学3年生・大学院1年生</li>
              <li>分野: エンジニアリング・デザイン・ビジネス</li>
              <li>特徴: 実際のプロジェクトに参加し、成果発表まで</li>
              <li>待遇: 日当 10,000円（交通費込み）</li>
            </ul>
            <div className="bg-gray-100 p-4 rounded-md mb-6">
              <p className="font-medium">応募期間</p>
              <p>4月上旬〜5月中旬</p>
            </div>
            <Button className="w-full" asChild>
              <Link href="/recruit/apply">インターンシップに応募する</Link>
            </Button>
          </Card>
          
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4">冬季インターンシップ</h3>
            <ul className="list-disc list-inside space-y-2 mb-6">
              <li>期間: 2月〜3月（2〜4週間）</li>
              <li>対象: 大学2, 3年生・大学院1年生</li>
              <li>分野: エンジニアリング中心</li>
              <li>特徴: 短期集中型の開発ワークショップ</li>
              <li>待遇: 日当 10,000円（交通費込み）</li>
            </ul>
            <div className="bg-gray-100 p-4 rounded-md mb-6">
              <p className="font-medium">応募期間</p>
              <p>11月〜12月中旬</p>
            </div>
            <Button className="w-full" asChild>
              <Link href="/recruit/apply">インターンシップに応募する</Link>
            </Button>
          </Card>
        </div>
        
        <div className="mt-12">
          <h3 className="text-2xl font-bold mb-6">インターンシップの特徴</h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-primary/10 w-12 h-12 flex items-center justify-center rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 className="text-lg font-bold mb-2">実践的プロジェクト</h4>
              <p className="text-gray-600">実際のプロジェクトに参加し、メンターの指導のもとで成果を出します。社員と同じ環境で働くことで、リアルなビジネス経験を積むことができます。</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-primary/10 w-12 h-12 flex items-center justify-center rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h4 className="text-lg font-bold mb-2">学習機会</h4>
              <p className="text-gray-600">技術セミナーやワークショップを通じて、最新のトレンドや手法を学べます。社内の様々な専門家からのフィードバックも得られます。</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-primary/10 w-12 h-12 flex items-center justify-center rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h4 className="text-lg font-bold mb-2">キャリア支援</h4>
              <p className="text-gray-600">インターンシップの経験を通じて、自分のキャリアパスを見つける手助けをします。優秀な方には、新卒採用へのスムーズな移行も可能です。</p>
            </div>
          </div>
        </div>
        
        <div className="bg-primary/5 p-8 rounded-lg mt-12">
          <h3 className="text-2xl font-bold mb-4">よくある質問</h3>
          
          <div className="space-y-6">
            <div>
              <h4 className="font-bold mb-2">Q: インターンシップの選考プロセスはどのようになっていますか？</h4>
              <p>A: 書類選考、オンライン適性検査、面接（1〜2回）を経て、合否を決定します。全プロセスで約3週間を予定しています。</p>
            </div>
            
            <div>
              <h4 className="font-bold mb-2">Q: リモートでの参加は可能ですか？</h4>
              <p>A: 基本的にはオフィスでの勤務を推奨していますが、状況に応じてハイブリッド形式も検討します。詳細は選考時にご相談ください。</p>
            </div>
            
            <div>
              <h4 className="font-bold mb-2">Q: 学部や専攻に制限はありますか？</h4>
              <p>A: 特に制限はありません。理系・文系を問わず、テクノロジーやビジネスに興味のある学生を歓迎します。</p>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <Button size="lg" asChild>
            <Link href="/recruit/apply">インターンシップに応募する</Link>
          </Button>
        </div>
      </div>
    </RecruitPageLayout>
  );
}