import { SectionTitle } from "@/components/ui/section-title";
import RecruitPageLayout from "@/components/recruit/RecruitPageLayout";
import ceoImagePath from "@assets/スクリーンショット 2025-05-26 19.26.45.png";

export default function MessagePage() {
  return (
    <RecruitPageLayout activeSection="message">
      <div className="space-y-8">
        <SectionTitle 
          title="代表メッセージ" 
          subtitle="循環型社会の実現に向けて" 
        />
        
        <div className="flex flex-col md:flex-row gap-8 mb-10">
          <div className="md:w-1/3">
            <img 
              src={ceoImagePath}
              alt="代表取締役 長倉 達也" 
              className="w-full rounded-lg shadow-lg"
            />
            <p className="text-center mt-4">
              <span className="block font-bold text-lg">長倉 達也</span>
              <span className="text-gray-600">代表取締役</span>
            </p>
          </div>
          
          <div className="md:w-2/3 prose prose-lg max-w-none">
            <h3 className="text-2xl font-bold mb-6">新しい産業創出と静脈産業の進化</h3>
            
            <p>
              世界は「地球温暖化」「世界人口増加」という目を背けることができない課題に直面している。各国がこうした問題解決へ取り組む姿勢を打ち出しているが、その解決手段や施策は追いついてないのが現状です。
            </p>
            
            <p>
              戦後、日本は製造大国として発展してきました。資源の貧しかった日本にとって、技術力を磨き世界へ大きなインパクトを与えたことは日本の大きな財産と言えるでしょう。しかし、大量生産大量消費の時代が終わった現在、製造業は新興国を中心とした新しい世界地図が形成されつつあります。
            </p>
            
            <p>
              では、今後の日本を支えていく産業は何だろうか？<br />
              IT産業？サービス産業？それとも農業？
            </p>
            
            <p className="text-xl font-medium my-6">
              私の答えは「静脈産業」である。<br />
              すなわち、限られた資源を再利用するリサイクル産業です。
            </p>
            
            <p>
              人間にとって静脈とは、動脈によって身体中へ運ばれた血液を、心臓に戻すための血管である。その意味において、人間は生きるために「循環」という仕組みを生まれながらにして備えているのだ。そしてそれが生きること、持続することの本質であると私は考えます。
            </p>
            
            <p>
              資源は消費されていく一方、地球上の人口は増え続けている。世界が工業化を推し進める限り、この先の資源不足は不可避的でしょう。地球も人間と同様、血液を供給する動脈だけでは生きてはいけないのです。モノを供給する製造業が動脈であるのならば、それを循環させる静脈が必要です。ただ循環させるだけではない。静脈は身体、つまりは地球環境に対する負担を極力抑えることも重要です。
            </p>
            
            <h4 className="text-xl font-bold mt-8 mb-4">日本人らしさを追求したアイデンティティ</h4>
            
            <p>
              こうした地球の問題解決において、世界でリーダーシップを発揮するのは私たち日本人だと思う。それは、日本人が文化として「もったいない」という習慣をもっているからです。
            </p>
            
            <p>
              ものを大事に扱う、長く使えるように工夫するといった日本人の国民性は、制度や法律によって定められたからではなく、私たちが生まれ育った気候や風土、意識することのなかった常識の中で生まれ育ったもの。これこそ私たちが世界に誇るべき「日本人らしさ」ではないでしょうか。
            </p>
            
            <p>
              現在、「Mottainai」という言葉が世界でも認知され始めている。しかし、その本質が理解されるにはまだ時間がかかると思います。時間だけではない。言語、教育水準、文化、モラル、秩序の違いといった障壁を越えていくためには、統合的な強さ、そして忍耐力が必要です。それでも私は、日本の、日本人の文化を世界へと発信していきたい。
            </p>
            
            <p>
              きっと理解してもらえる価値ある文化だと思うからです。<br />
              これからの時代はリサイクル産業、静脈産業が中心となる。
            </p>
            
            <p>
              新しい時代における新しい産業は、挑戦や革新からしか生まれてこないことは歴史を振り返ってみれば明らかです。だからこそ若いメンバーを発掘し、チャンスを共有し、人間性とビジネスセンスを伸ばしていかなければいけない。
            </p>
            
            <p className="text-xl font-medium my-6">
              未来へ挑戦し、新しい価値をつくる。
            </p>
            
            <p>
              この言葉で集まったメンバーは、誰もが個性的で、誰もが創造的。だけど、見据える未来はみんな一緒です。パーツワンの船出は常識との戦い。誰も安易には認めてくれない。<br />
              だがその先にある、実現したい社会へ向けて、私たちは歩みを止めない。
            </p>
            
            <div className="mt-8 text-right">
              <p className="font-medium">代表取締役</p>
              <p className="text-2xl font-bold">長倉 達也</p>
            </div>
          </div>
        </div>
      </div>
    </RecruitPageLayout>
  );
}