import Link from "next/link";
import Image from "next/image";

const dorkipediaContent = [
  {
    id: "intro",
    section: "Introduction",
    topics: [
      {
        title: "What is Dorkcoin?",
        content:
          "Dorkcoin is a community-first Proof-of-Stake memecoin designed for internet creators and collectors who embrace the dorky side of crypto. It uses proven PoS technology that's been securing networks since the early days of blockchain.",
      },
      {
        title: "What makes Dorkcoin different?",
        content:
          "Dorkcoin focuses on community storytelling, low friction staking, and a playful culture anchored by open participation. As a PoS coin, it eliminates mining pools, reduces energy consumption, and gives every holder the ability to earn rewards.",
      },
    ],
  },
  {
    id: "getting-started",
    section: "Getting Started",
    topics: [
      {
        title: "How do I stake DORK?",
        content:
          "Download Dork Core, deposit DORK into your wallet, keep it online and unlocked, and staking rewards begin automatically. No special hardware or pools required—just hold and earn.",
      },
      {
        title: "Where can I buy DORK?",
        content:
          "Dorkcoin trades on supported exchanges and through community wallets. Check the EXCHANGES section for live links to purchase DORK.",
      },
      {
        title: "What wallet software should I use?",
        content:
          "Dork Core is the official wallet optimized for staking. No other wallet supports staking.",
      },
    ],
  },
  {
    id: "staking-guide",
    section: "Staking & Rewards",
    topics: [
      {
        title: "What is Proof of Stake (PoS)?",
        content:
          "PoS replaces energy-intensive mining with a system where coin holders validate transactions. Instead of expensive hardware races, you stake your DORK in your wallet to participate and earn rewards. It's more efficient, democratic, and environmentally friendly than Proof of Work.",
      },
      {
        title: "How much can I earn staking DORK?",
        content:
          "Staking rewards are 100 DORK per block. Blocks are created approximately every 60 seconds, generating ~1,440 blocks daily. Your actual earnings depend on your stake weight relative to total network weight.",
      },
      {
        title: "What's the minimum amount of DORK needed to stake?",
        content:
          "There is no hard minimum, but coins must reach 100 block confirmations before becoming eligible for staking. You need sufficient stake weight to be selected reasonably frequently. Larger amounts increase selection frequency proportionally.",
      },
      {
        title: "How often do I receive staking rewards?",
        content:
          "Dorkcoin targets ~60-second block times, creating approximately 1,440 blocks per day. Your rewards are minted when your staked coins are selected to validate the next block based on your stake weight and age. Most active stakers receive rewards within 24 hours, with more frequent payouts as stake weight increases.",
      },
      {
        title: "What is stake age and why does it matter?",
        content:
          "Stake age is how long your coins have been continuously held, unlocked, and online in your wallet. Older stakes receive higher weight in block selection, dramatically increasing your probability of being chosen to mint a block and earn rewards. Spending coins resets stake age for those outputs.",
      },
      {
        title: "Do I need to keep my wallet online 24/7?",
        content:
          "Yes, your wallet must be online and unlocked to actively stake and earn rewards. However, your DORK remains secure in your control. Consider running Dork Core on a low-power device or VPS to maintain continuous participation.",
      },
    ],
  },
  {
    id: "technical",
    section: "Technical Details",
    topics: [
      {
        title: "Why is Dorkcoin Proof of Stake better than Proof of Work?",
        content:
          "PoS uses 99% less energy than PoW, requires no expensive mining equipment, eliminates mining pools and centralization, and lets anyone with DORK participate equally. You earn rewards for supporting the network instead of racing to solve complex puzzles.",
      },
      {
        title: "How does Dorkcoin prevent double-spending without miners?",
        content:
          "Dorkcoin uses cryptographic validation and consensus among stakers to verify transactions. The blockchain ensures all transactions are immutable and public.",
      },
      {
        title: "Are there transaction fees for staking?",
        content:
          "Staking itself is free—there are no fees to participate. When your coins are selected to mint a block, a minimal transaction fee is included in that block. Stakers who successfully mint blocks earn transaction fees from all included transactions as part of their block reward, creating additional income beyond the base 100 DORK block subsidy.",
      },
      {
        title: "Is my DORK locked up when I stake?",
        content:
          "Your DORK is not permanently locked during staking. You can send coins out of your staking wallet at any time, but doing so resets the stake age for those outputs, requiring another 100 block confirmations before they can stake again. Your coins remain fully under your control.",
      },
    ],
  },
  {
    id: "security",
    section: "Security & Safety",
    topics: [
      {
        title: "Is Dorkcoin secure?",
        content:
          "Yes. Dorkcoin uses proven cryptography and benefits from a well-established PoS protocol. Proof of Stake has secured billions in value across multiple networks since 2014. Your coins are only at risk if someone gains access to your private keys.",
      },
      {
        title: "Can Dorkcoin be hacked?",
        content:
          "Dorkcoin's blockchain is cryptographically secured and distributed across thousands of independent nodes. Changing past transactions would require controlling the majority of staked coins simultaneously—economically irrational for attackers. The consensus model provides strong security.",
      },
      {
        title: "Can I lose my DORK while staking?",
        content:
          "Your DORK cannot be lost while staking. Proof of Stake doesn't require you to risk your coins—you maintain full control. The only way to lose DORK is through deliberate transfer or theft of your private keys.",
      },
      {
        title: "How do I backup my Dorkcoin wallet?",
        content:
          "Backup your wallet.dat file in a secure location.Never share this with anyone. Store backups offline or in encrypted cloud storage.",
      },
      {
        title: "What happens if my wallet goes offline?",
        content:
          "If your wallet is offline, you won't mint new blocks or earn rewards during that time. Your DORK is never at risk—it simply won't be actively staking. When you come back online, staking resumes automatically.",
      },
    ],
  },
  {
    id: "specifications",
    section: "Network Specifications",
    topics: [
      {
        title: "What is the block reward?",
        content:
          "Dorkcoin PoS blocks generate 100 DORK per block as the base network subsidy. This subsidy is split between the staker and optionally a development fund based on community parameters. Transaction fees from all included transactions are also rewarded to the block creator.",
      },
      {
        title: "What is the block time?",
        content:
          "Dorkcoin targets approximately 60-second block intervals through difficulty adjustment. This results in ~1,440 blocks created daily and ~525,600 blocks annually, creating a predictable stream of staking opportunities across the network.",
      },
      {
        title: "How many confirmations until coins can stake?",
        content:
          "Coins require 100 block confirmations before becoming eligible for staking. This security measure ensures transaction finality. After 100 blocks, your coins begin accumulating stake age and can be selected to mint blocks.",
      },
      {
        title: "What is the coinbase maturity?",
        content:
          "Freshly minted DORK from staking rewards must reach 100 block confirmations before they can be spent or restaked. This ensures network security by preventing stake manipulation in the short term.",
      },
    ],
  },
  {
    id: "community",
    section: "Community & Development",
    topics: [
      {
        title: "What is the DORK community roadmap?",
        content:
          "Dorkcoin is developed by its community. Major initiatives include expanding exchange listings, improving wallet interfaces, and growing the staking ecosystem. Check the official GitHub repository and community channels for current development efforts.",
      },
    ],
  },

];

export default function Dorkipedia() {
  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen">
      {/* Header */}
      <div className="bg-slate-900 text-white py-6 sticky top-0 z-40 shadow-lg">
        <div className="max-w-[85rem] mx-auto px-6 flex items-center justify-between">
          <div>
            <Link href="/" className="hover:opacity-75 transition">
              <h1 className="font-stopbuck text-4xl text-dork">DORKIPEDIA</h1>
              <p className="text-sm text-slate-300">The complete Dorkcoin reference</p>
            </Link>
          </div>
          <Link
            href="/#faq"
            className="font-stopbuck px-4 py-2 rounded-lg bg-dork text-[#5c4a42] hover:bg-yellow-400 transition"
          >
            Back Home
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 max-w-[85rem] mx-auto p-6">
        {/* Sidebar Navigation */}
        <div className="lg:col-span-1">
          <div className="sticky top-24 bg-slate-900 rounded-xl p-6 shadow-lg border-2 border-dork">
            <h3 className="font-stopbuck text-xl text-dork mb-4 pb-2 border-b-2 border-dork">
              Contents
            </h3>
            <nav className="space-y-2">
              {dorkipediaContent.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="block font-mono text-sm text-[#5c4a42] hover:text-dork hover:font-bold transition py-1"
                >
                  {section.section}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3 space-y-8">
          {dorkipediaContent.map((section, sectionIdx) => (
            <div
              key={section.id}
              id={section.id}
              className="bg-slate-900 rounded-xl p-8 shadow-lg border-l-4 border-dork"
            >
              <div className="mb-8 pb-6 border-b-2 border-dork">
                <h2 className="font-stopbuck text-4xl text-dork text-shadow mb-2">
                  {sectionIdx + 1}. {section.section}
                </h2>
              </div>

              <div className="space-y-8">
                {section.topics.map((topic, topicIdx) => (
                  <div
                    key={topicIdx}
                    className="pb-6 border-b border-slate-700 last:border-b-0"
                  >
                    <div className="flex items-start gap-3 mb-3">
                      <div className="font-stopbuck text-xl text-dork font-bold min-w-fit">
                        {sectionIdx + 1}.{topicIdx + 1}
                      </div>
                      <h3 className="font-stopbuck text-2xl text-slate-100">
                        {topic.title}
                      </h3>
                    </div>
                    <p className="text-base leading-7 text-slate-300 ml-10">
                      {topic.content}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Footer */}
          <div className="bg-slate-700 text-white rounded-xl p-8 text-center">
            <p className="font-mono text-sm mb-4">
              © 2026 Dorkcoin Community. Built by Real Dorks for Real Dorks.
            </p>
            <Link href="/" className="text-dork hover:underline font-bold">
              Back Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}